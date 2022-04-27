import logo from './logo.svg';
import './main.scss';
import Header from './components/Header'

import { Outlet } from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Outlet/>
    </div>
  );
}

export default App;
