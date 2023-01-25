import './App.css';
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import Banner from './components/Banner';

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <Outlet />
    </>
  );
}

export default App;
