import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Dashboard from './component/Dashboard';

import Layout from './component/Layout';
import Login from './users/Login';
import Register from './users/Register'
import Userlist from './users/userlist';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route element={<Layout />}>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/userlist' element={<Userlist />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
