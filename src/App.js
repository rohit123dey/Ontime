import React from 'react';
import './App.css';
import Forgot from './component/Forgot';
import Signup from './component/signup';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import SignInOutContainer from './containers';


function App() {
  return (
    <Router>
     <div className="App">
      <Switch>
        <Route path='/' exact  component={SignInOutContainer} />
        <Route path='/forgot'   component={Forgot} />
        <Route path='/signup'   component={Signup} />
      </Switch>
     </div>
    </Router>
  );
}

export default App;
