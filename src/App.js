import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/html/Header';
import logo from './logo.svg';
import Login from './Components/html/LogIn'
import Register from './Components/html/Register';
import Home from './Components/html/Home';
import Challenges from './Components/html/Challenges';
import Users from './Components/html/Users';
import Scoreboard from './Components/html/Scoreboard';

function App() {
  return (
    <div>
      <Header></Header>
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/challenges' element={<Challenges></Challenges>}></Route>
        <Route path='/users' element={<Users></Users>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/scoreboard' element={<Scoreboard></Scoreboard>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
