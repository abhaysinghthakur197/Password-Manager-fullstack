
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import './App.css';
import Signup from './component/Signup/Signup';
// import Login from './component/Login/Login.jsx'

import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <AppBar position='relative'>
        <Toolbar>
          <Typography variant='h6'>Password-manager</Typography>
        </Toolbar>
      </AppBar>
      {/* <h1>Hello from react</h1> */}
      <Router>

        <Route exact path="/signup" component={Signup} />
        {/* <Route exact path="/login" component={Login} /> */}
      </Router>
    </div>
  );
}

export default App;
