import './App.css';

import Router from './Router';
import Navbar from './Component/Navbar';
import Login from './Component/Login';

export default function App() {
  return (
    <div className="App position-relative">
      <Navbar/>
      <Login/>
      <Router/>
    </div>
  );
}