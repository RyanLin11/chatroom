import { Outlet } from 'react-router-dom';
import { AuthProvider } from './auth/AuthProvider';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Outlet />
      </div>
    </AuthProvider>
  );
}

export default App;
