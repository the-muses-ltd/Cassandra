// import UserList from 'path/to/user/list';
// import AddUserForm from 'path/....';
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../Home Page/Home";
import Courses from "../Courses/Courses";
import Recources from "../Resources/Resources";
import About from "../About Page/About";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/courses" component={Courses} />
      <Route path="/resources" component={Recources} />
      <Route path="/about" component={About} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
