import style from './UserStatus.module.css';

const UserStatus = ({ active }) => {
  const useClassName = active ? style.active : style.inactive;
  return <span className={useClassName}>{active ? 'Activo' : 'Inactivo'}</span>;
};

export default UserStatus;
