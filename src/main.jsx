import reactDom from 'react-dom';
import './index.css';

const app = <img src="/logo.svg"></img>;
const container = document.getElementById('root');

reactDom.render(app, container);
