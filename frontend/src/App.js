import './App.css';
import { useEffect, useState } from 'react';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Pages/MainPages/Home';
import About from './Pages/MainPages/About'
import HeaderDashboard from './Pages/MainPages/HeaderDashboard';
import Contact from './Pages/MainPages/Contact'
import Login from './Components/Login';
import AdminLogin from './Pages/MainPages/AdminLogin';
import Broadcast from './Pages/MainPages/Broadcast';

function App() {
  const [events, setEvents] = useState([]);
  const [isLoggedin,setIsLogedIn]=useState(false);
  useEffect(()=>{
    const loginStatus = sessionStorage.getItem('login');
    if(loginStatus===true){
      setIsLogedIn(true);
    }
  },[isLoggedin])
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/adminlogin' element={<Login/>}/>
        <Route path='/admin' element={<AdminLogin setEvents={setEvents}/>}/>
        <Route path='/broadcast' element={<Broadcast/>}/>
        <Route path='/dashboard/*' element={<HeaderDashboard events={events}/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
