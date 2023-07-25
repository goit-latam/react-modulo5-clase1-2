import { BrowserRouter } from 'react-router-dom';

import Navbar from './modules/Navbar/Navbar';

import UserRoutes from './UserRoutes';

import './shared/styles/styles.scss';

function App() {
  return (
    <BrowserRouter basename="/react-modulo5-clase1-2">
      <Navbar />
      <UserRoutes />
    </BrowserRouter>
  );
}

export default App;
