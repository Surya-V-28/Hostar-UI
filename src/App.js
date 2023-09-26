import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';
import Details from './components/Details';
function App() {
  return (
    <div className="App">
     <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Login/> }/>  
        <Route path='/home' element={<Home/>}/>
        <Route path="/details/:id" element={<Details/>}>

          </Route>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
