import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes/Routes';
import { useContext } from 'react';
import { AuthContext } from './Context/AuthProvider/AuthProvider';

function App() {
  const { theme } = useContext(AuthContext)
  return (
    <div id={theme}>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
