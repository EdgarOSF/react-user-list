import { useState } from 'react';
import { UsersContext } from '../lib/contexts/UsersContext';
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
      <h1>Lista de usuarios</h1>
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
  const setOnlyActive = (onlyActive) => setFilters({ ...filters, onlyActive });
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
    default:
      return sortUsers;
  }
};

const filterUsersByName = (search, users) => {
  if (!search) return [...users];

  const lowerCasedSearch = search.toLowerCase();

  return users.filter((user) =>
    user.name.toLowerCase().startsWith(lowerCasedSearch)
  );
};

const filterActiveUsers = (active, users) => {
  if (!active) return [...users];

  return users.filter((user) => user.active);
};

export default UsersList;
