import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import SignIn from './Components/Authentication/SignIn';
import SignUp from './Components/Authentication/SignUp';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path='/signin' component={SignIn}/>
            <Route path='/signup' component={SignUp}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}


export default App;