import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, NewUser, Users } from './scenes';


function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/api/exercise/new-user" component={NewUser} />
      <Route exact path="/api/exercise/users" component={Users} />
    </Router>
  );
}

export default App;
