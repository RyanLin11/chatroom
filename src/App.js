import { Outlet } from 'react-router-dom';
import { AuthProvider } from './auth/AuthProvider';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Navbar className='bar' />
        <Outlet />
      </div>
    </AuthProvider>
  );
}

export default App;
