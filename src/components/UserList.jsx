import { useState } from 'react';
import { useFilters } from '../lib/hooks/useFilters';
import { useUsers } from '../lib/hooks/useUsers';
import style from './UserList.module.css';
import UserListFilter from './UserListFilter';
import UsersListPagination from './UsersListPagination';
import UsersListRows from './UsersListRows';
import USER_FORM from '../constants/userForms';
import Button from './buttons/Button';
import UserCreateForm from './user-forms/UserCreateForm';

const UsersList = () => {
  const { currrentForm, setFilterForm, setCreateForm } = useForm();

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
      {currrentForm === USER_FORM.FILTERS ? (
        <UserListFilter
          search={filters.search}
          onlyActive={filters.onlyActive}
          sortBy={filters.sortBy}
          setSearch={setSearch}
          setOnlyActive={setOnlyActive}
          setSortBy={setSortBy}
          slot={<Button onClick={setCreateForm}>Añadir usuario</Button>}
        />
      ) : (
        <UserCreateForm onClose={setFilterForm} />
      )}
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

const useForm = () => {
  const [currrentForm, setCurrentForm] = useState(USER_FORM.FILTERS);

  const setFilterForm = () => setCurrentForm(USER_FORM.FILTERS);
  const setCreateForm = () => setCurrentForm(USER_FORM.CREATE);
  const setEditForm = () => setCurrentForm(USER_FORM.EDIT);
  const setDeleteForm = () => setCurrentForm(USER_FORM.DELETE);

  return {
    currrentForm,
    setFilterForm,
    setCreateForm,
    setEditForm,
    setDeleteForm,
  };
};

export default UsersList;
