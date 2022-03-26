import Title from './components/Title';
import UserList from './components/UserList';

const USERS = [
  {
    name: 'Edgar Omar',
    active: true,
    role: 'teacher',
  },
  {
    name: 'Erika Lisset',
    active: true,
    role: 'teacher',
  },
  {
    name: 'Mayanin de R',
    active: false,
    role: 'student',
  },
];

const App = () => (
  <UserList users={USERS}>
    <Title>Lista de usuarios</Title>
  </UserList>
);

export default App;
