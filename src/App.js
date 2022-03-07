
import './App.css';
import Navbar from './Components/NavBar/Index';
import { Routes, Route } from "react-router-dom";
import Home from './Components/home';
import Coisas_legais from './Components/coisas-legais';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="/Coisas_legais"  element={ <Coisas_legais/> } />
    </Routes>
    </div>
  );
}

export default App;
