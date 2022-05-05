import { USER_ROLES } from '../constants/useRoles';
import style from './UserRole.module.css';

const UserRol = ({ role }) => {
  const ROLES_STYLES = {
    [USER_ROLES.TEACHER]: ['Profesor', style.teacher],
    [USER_ROLES.STUDENT]: ['Alumno', style.student],
    [USER_ROLES.OTHER]: ['Otro', style.other],
  };

  const [roleName, classRoleName] = ROLES_STYLES[role] || ROLES_STYLES.other;

  return <span className={`${style.role} ${classRoleName}`}>{roleName}</span>;
};

export default UserRol;
