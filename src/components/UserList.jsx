import { useFilters } from '../lib/hooks/useFilters';
import { useUsers } from '../lib/hooks/useUsers';
import Button from './buttons/Button';
import InputTextAsync from './Forms/InputTextAsync';
import style from './UserList.module.css';
import UserListFilter from './UserListFilter';
import UsersListPagination from './UsersListPagination';
import UsersListRows from './UsersListRows';

const UsersList = () => {
  const {
    filters,
    setSearch,
    setOnlyActive,
    setSortBy,
    setPage,
    setItemsPerPage,
  } = useFilters();

  const { users, totalPages, loading, error } = useUsers(filters);

  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>Listado de usuarios</h1>
      <InputTextAsync label='prueba' loading />
      <UserListFilter
        search={filters.search}
        onlyActive={filters.onlyActive}
        sortBy={filters.sortBy}
        setSearch={setSearch}
        setOnlyActive={setOnlyActive}
        setSortBy={setSortBy}
      />
      <UsersListRows users={users} error={error} loading={loading} />
      <UsersListPagination
        page={filters.page}
        itemsPerPage={filters.itemsPerPage}
        setPage={setPage}
        setItemsPerPage={setItemsPerPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default UsersList;
