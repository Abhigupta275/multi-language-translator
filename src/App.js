
import './App.css';
import { BrowserRouter , Route,Routes } from 'react-router-dom';
import Contactus from './pages/contact';
import Aboutus from './pages/about';
import Home from './pages/home';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/aboutus' element={<Aboutus/>}/>
            <Route path='/contactus' element={<Contactus/>}/>
          </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
