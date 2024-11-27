import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';
import SideBar from './components/SiderBar/SideBar';

const App = () => {
  return (
    <div className="app-container">
      <div className='header-container'>
        <Header />
      </div>
      <div className='main-container'>
        <SideBar />
      </div>

    </div>

  );
}

export default App;



