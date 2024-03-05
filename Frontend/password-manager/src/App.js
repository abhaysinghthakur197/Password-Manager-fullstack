
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Signup from './component/Signup/Signup';
import Login from './component/Login/Login.jsx'



function App() {
  return (
    <div className="App">
      <Router>
        <AppBar position='relative'>
          <Toolbar>
            <Typography variant='h6'>Password-manager</Typography>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/login' element={<Login />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
