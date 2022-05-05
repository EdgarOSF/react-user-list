import { useState } from 'react';
import style from './UserList.module.css';
import UserListFilter from './UserListFilter';
import UsersListRows from './UsersListRows';

const UsersList = ({ initialUsers }) => {
  const { search, onlyActive, sortBy, ...setFilters } = useFilters();
  const { users } = useUser(initialUsers);

  let filteredUsers = filterUsersByName(search, users);
  filteredUsers = filterActiveUsers(onlyActive, filteredUsers);
  filteredUsers = sortUsers(filteredUsers, sortBy);

  return (
    <div className={style.list}>
      <h1 className={style.title}>Lista de usuarios</h1>
      <UserListFilter
        search={search}
        onlyActive={onlyActive}
        sortBy={sortBy}
        {...setFilters}
      />
      <UsersListRows users={filteredUsers} />
    </div>
  );
};

const useFilters = () => {
  const [filters, setFilters] = useState({
    search: '',
    onlyActive: false,
    sortBy: 0,
  });

  const setSearch = (search) => setFilters({ ...filters, search });
  const setOnlyActive = (onlyActive) => {
    if (onlyActive && filters.sortBy === 3) {
      setFilters({ ...filters, sortBy: 0, onlyActive });
    } else {
      setFilters({ ...filters, onlyActive });
    }
  };

  const setSortBy = (sortBy) => setFilters({ ...filters, sortBy });

  return { ...filters, setSearch, setOnlyActive, setSortBy };
};

const useUser = (initialUsers) => {
  const [users, setUsers] = useState(initialUsers);

  return { users };
};

const sortUsers = (users, sortBy) => {
  const sortUsers = [...users];
  switch (sortBy) {
    case 1:
      return sortUsers.sort((a, b) => {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
      });
    case 2:
      return sortUsers.sort((a, b) => {
        if (a.role === b.role) return 0;
        if (a.role === 'teacher') return -1;
        if (a.role === 'student' && b.role === 'other') return -1;
        return 1;
      });
    case 3:
      return sortUsers.sort((a, b) => {
        if (a.active === b.active) return 0;
        if (a.active && !b.active) return -1;
        return 1;
      });
    default:
      return sortUsers;
  }
};

const filterUsersByName = (search, users) => {
  if (!search) return [...users];

  const lowerCasedSearch = search.toLowerCase();

  return users.filter((user) =>
    user.name.toLowerCase().includes(lowerCasedSearch)
  );
};

const filterActiveUsers = (active, users) => {
  if (!active) return [...users];

  return users.filter((user) => user.active);
};

export default UsersList;
