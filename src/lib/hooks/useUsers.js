import { useState, useEffect } from 'react';
import {
  filterActiveUsers,
  filterUsersByName,
  paginateUsers,
  sortUsers,
} from '../user/filtersUsers';

const fetchUsers = async (setData, setError, signal) => {
  try {
    const res = await fetch('http://localhost:4000/users', { signal });
    if (res.ok) {
      const data = await res.json();
      setData(data);
    } else {
      setError();
    }
  } catch (err) {
    setError();
  }
};

const getUsersToDisplay = (
  users,
  { search, onlyActive, sortBy, page, itemsPerPage }
) => {
  let usersFiltered = filterActiveUsers(users, onlyActive);
  usersFiltered = filterUsersByName(usersFiltered, search);
  usersFiltered = sortUsers(usersFiltered, sortBy);

  const { paginatedUsers, totalPages } = paginateUsers(
    usersFiltered,
    page,
    itemsPerPage
  );

  return { paginatedUsers, totalPages };
};

export const useUsers = (filters) => {
  const [users, setUsers] = useState({
    data: [],
    error: false,
    loading: true,
  });

  const setData = (newData) => {
    setUsers({ data: newData, error: false, loading: false });
  };

  const setError = () => {
    setError({ data: [], error: true, loading: false });
  };

  useEffect(() => {
    const controller = new AbortController();

    fetchUsers(setData, setError, controller.signal);

    return () => {
      controller.abort();
    };
  }, []);

  const { paginatedUsers, totalPages } = getUsersToDisplay(users.data, filters);

  return { users: paginatedUsers, totalPages, error: users.error, loading: users.loading };
};
