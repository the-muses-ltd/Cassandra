// import UserList from 'path/to/user/list';
// import AddUserForm from 'path/....';
import App from "../../App";
import test from "../../test";

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={test} />
    {/* <Route path="addUser" component={AddUserForm} /> */}
  </Route>
);

export default routes;
