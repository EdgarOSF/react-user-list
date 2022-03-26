import style from './UserList.module.css';
import UserRow from './UserRow';

const UsersList = ({ users, children }) => {
  const userRendered = users.map((user) => (
    <UserRow key={user.name} {...user} />
  ));
  return (
    <div className={style.list}>
      {children}
      {userRendered}
    </div>
  );
};

export default UsersList;
