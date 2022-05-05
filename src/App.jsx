import UserList from './components/UserList';

const USERS = [
  {
    username: 'edgar',
    name: 'Edgar Omar',
    active: true,
    role: 'teacher',
  },
  {
    username: 'erika',
    name: 'Erika Lisset',
    active: true,
    role: 'teacher',
  },
  {
    username: 'mayi',
    name: 'Mayanin de R',
    active: false,
    role: 'student',
  },
  {
    username: 'enrique',
    name: 'Enrique gonzalez',
    active: false,
    role: 'student',
  },
  {
    username: 'javier',
    name: 'Javier López',
    active: true,
    role: 'other',
  },
];

const App = () => <UserList initialUsers={USERS} />;

export default App;
