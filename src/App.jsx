import UserList from './components/UserList';

const USERS = [
  {
    id: 1,
    name: 'Edgar Omar',
    active: true,
    role: 'teacher',
  },
  {
    id: 2,
    name: 'Erika Lisset',
    active: true,
    role: 'teacher',
  },
  {
    id: 3,
    name: 'Mayanin de R',
    active: false,
    role: 'student',
  },
  {
    id: 4,
    name: 'Enrique gonzalez',
    active: false,
    role: 'student',
  },
];

const App = () => <UserList initialUsers={USERS} />;

export default App;
