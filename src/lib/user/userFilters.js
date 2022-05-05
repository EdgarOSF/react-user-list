import { SORT_OPTIONS } from "../../constants/sortOptions";
import { USER_ROLES } from "../../constants/useRoles";

export const sortUsers = (users, sortBy) => {
    const sortUsers = [...users];
    switch (sortBy) {
      case SORT_OPTIONS.NAME:
        return sortUsers.sort((a, b) => {
          if (a.name > b.name) return 1;
          if (a.name < b.name) return -1;
          return 0;
        });
      case SORT_OPTIONS.ROLE:
        return sortUsers.sort((a, b) => {
          if (a.role === b.role) return 0;
          if (a.role === USER_ROLES.TEACHER) return -1;
          if (a.role === USER_ROLES.STUDENT && b.role === USER_ROLES.OTHER)
            return -1;
          return 1;
        });
      case SORT_OPTIONS.ACTIVE:
        return sortUsers.sort((a, b) => {
          if (a.active === b.active) return 0;
          if (a.active && !b.active) return -1;
          return 1;
        });
      default:
        return sortUsers;
    }
  };
  
  export const filterUsersByName = (search, users) => {
    if (!search) return [...users];
  
    const lowerCasedSearch = search.toLowerCase();
  
    return users.filter((user) =>
      user.name.toLowerCase().includes(lowerCasedSearch)
    );
  };
  
  export const filterActiveUsers = (active, users) => {
    if (!active) return [...users];
  
    return users.filter((user) => user.active);
  };