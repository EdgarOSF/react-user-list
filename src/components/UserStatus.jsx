import style from './UserStatus.module.css';
import CheckCircleIcon from './Icons/CheckCircleIcon';
import CrossCircleIcon from './Icons/CrossCircleIcon';

const UserStatus = ({ active }) => {
  const useClassName = active ? style.active : style.inactive;
  const Icon = active ? CheckCircleIcon : CrossCircleIcon;

  return (
    <div className={useClassName}>
      <Icon className={style.icon} />
      <span>{active ? 'Activo' : 'Inactivo'}</span>
    </div>
  );
};

export default UserStatus;
