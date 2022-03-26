import style from './UserRole.module.css';

const UserRol = ({ role }) => {
  const ROLES_STYLES = {
    teacher: ['Profesor', style.teacher],
    student: ['Alumno', style.student],
    other: ['Otro', style.other],
  };

  const [roleName, classRoleName] = ROLES_STYLES[role] || ROLES_STYLES.other;

  return <span className={`${style.role} ${classRoleName}`}>{roleName}</span>;
};

export default UserRol;
