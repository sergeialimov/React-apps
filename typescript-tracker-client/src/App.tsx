import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

const hostName = (process.env.NODE_ENV === 'development')
  ? 'http://localhost:8090/'
  : 'https://tracker-fcc.herokuapp.com/';


class App extends Component {
  state = { username: '' };

  fillUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const username = e.target.value;
    this.setState(() => ({
      username,
    }));
    console.log(e.target.value);
  }

  addUser = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    const res = await axios({
      method: 'post',
      url: `${hostName}api/exercise/new-user`,
      data: {
        username: this.state.username,
      }
    });
    console.log('------------', res.data);
  };


  render() {
    return (
      <div className="App">
        <div className="container">
          <h1>Exercise tracker</h1>
            <form action="/api/exercise/new-user" method="post">
              <h3>Create a New User</h3>
              <p><code>POST /api/exercise/new-user</code></p>
              <input id="uname" type="text" name="username" placeholder="username" onChange={this.fillUserName} />
              <input type="submit" value="Submit" onClick={this.addUser} />
            </form>
            <form action="/api/exercise/add" method="post">
              <h3>Add exercises</h3>
              <p><code>POST /api/exercise/add</code></p>
              <input id="uid" type="text" name="userId" placeholder="userId*" />
              <input id="desc" type="text" name="description" placeholder="description*" />
              <input id="dur" type="text" name="duration" placeholder="duration* (mins.)" />
              <input id="dat" type="text" name="date" placeholder="date (yyyy-mm-dd)" />
              <input type="submit" value="Submit" />
            </form>
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

export default App;
