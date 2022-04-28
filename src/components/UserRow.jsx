import { useContext } from 'react';
import { UsersContext } from '../lib/contexts/UsersContext';
import UserDisplay from './UserDisplay';
import UserRol from './UserRole';
import style from './UserRow.module.css';
import UserStatus from './UserStatus';

const UserRow = ({ username, name, active, role }) => {
  return (
    <div className={style.user}>
      <div className={style.name}>
        <UserDisplay name={name} username={username} />
      </div>
      <div className={style.status}>
        <UserStatus active={active} />
      </div>
      <div className={style.role}>
        <UserRol role={role} />
      </div>
      <div className={style.action}></div>
    </div>
  );
};

export default UserRow;
