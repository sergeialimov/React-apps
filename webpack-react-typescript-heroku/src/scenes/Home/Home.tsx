import React, { Component } from 'react';
import { NewUserForm, NewExerciseForm } from './components';


class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="container">
          <h1>Exercise tracker</h1>
            <NewUserForm />
            <NewExerciseForm />
            <p>
              <strong>GET users's exercise log: </strong>
              <code>GET /api/exercise/log?{'userId'}[&amp;from][&amp;to][&amp;limit]`</code>
            </p>
            <p><strong>{ }</strong> = required, <strong>[ ]</strong> = optional</p>
            <p><strong>from, to</strong> = dates (yyyy-mm-dd); <strong>limit</strong> = number</p>
        </div>
      </div>
    )
  };
}

export default Home;
