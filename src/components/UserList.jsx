import { useState } from 'react';
import { useFilters } from '../lib/hooks/useFilters';
import {
  filterActiveUsers,
  filterUsersByName,
  sortUsers,
} from '../lib/user/userFilters';
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

const useUser = (initialUsers) => {
  const [users, setUsers] = useState(initialUsers);

  return { users };
};

export default UsersList;
