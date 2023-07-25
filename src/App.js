import Navbar from './modules/Navbar/Navbar';

import UserRoutes from './UserRoutes';

import './shared/styles/styles.scss';

function App() {
  return (
    <>
      <Navbar />
      <UserRoutes />
    </>
  );
}

export default App;
