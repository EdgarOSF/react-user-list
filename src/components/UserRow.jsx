import UserRol from './UserRole';
import style from './UserRow.module.css';
import UserStatus from './UserStatus';

const UserRow = ({ name, active, role, ...restProps }) => {
  return (
    <div className={style.user} {...restProps}>
      <div className={style.name}>
        <span>{name}</span>
      </div>
      <div className={style.status}>
        <UserStatus active={active} />
      </div>
      <div className={style.role}>
        <UserRol role={role} />
      </div>
    </div>
  );
};

export default UserRow;
