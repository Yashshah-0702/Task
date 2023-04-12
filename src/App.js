// import Menu from './Menu';
// import Menu2 from './pages/dashboard_details/Menu_2';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import User from './pages/Userreg';
import Login from './pages/login';
import Dashboard from './pages/dashboard';

function App() {
  return (
    <div className="container">
      {/* <Dashboard/> */}
      <BrowserRouter>
      {/* <Menu/> */}
      
      {/* <Menu2/> */}
    {/* <User/> */}
        <Routes>
          <Route exact path='/dashboard' element={<Dashboard/>}></Route>
          <Route exact path='/' element={<User/>}></Route>
          <Route exact path='/login' element={<Login/>}></Route>
          {/* <Route exact path='/profile' element={<Profile/>}></Route>
          <Route exact path='/otheruser' element={<OtherUser/>}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
