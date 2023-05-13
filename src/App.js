import logo from './logo.svg';
import './App.css';
import {Routes,Route,NavLink, Navigate} from 'react-router-dom';
import Home from './components/Home';
import Contact  from './components/Contact';
import About from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeSwitcher from './components/ThemeSwitcher';

function App() {
  return (
    <div className="App">
      <h2 className='route-2'>React Redirect to Page with Navigate API Example</h2>
      <nav>
        <NavLink to="/">Home</NavLink><br></br>
        <NavLink to="/contact">Contact</NavLink><br></br>
        <NavLink to="/about">About</NavLink><br></br>
        <NavLink to="/theme">Theme</NavLink><br></br>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/theme" element={<ThemeSwitcher/>}></Route>
        <Route path="*" element={<Navigate to="/" replace />}></Route>
      </Routes>
    </div>
  );
}

export default App;
