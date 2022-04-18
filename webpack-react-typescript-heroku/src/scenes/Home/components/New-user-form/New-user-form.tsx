import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import axios from 'axios';

import { hostName } from '../../../../../config';
import { saveUser } from './actions';
import { store } from '../../../../store/store';


interface Props {
}

export const NewUserForm: React.FC<Props> = ({}) => {
  const [ username, setName ] = useState<string>('');

  const fillUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }
  
  const submitForm = async (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    e.preventDefault();
    const res = await axios({
      method: 'post',
      url: `${hostName}api/exercise/new-user`,
      data: {
        username,
      }
    });

    store.dispatch({
      type: 'save_user',
      payload: {
        name: res.data.username,
        id: res.data._id,
      }
    });
  }

  return (
    <form>
      <h3>Create a New User</h3>
      <p><code>POST /api/exercise/new-user</code></p>
      <input autoFocus id="uname" type="text" name="username" placeholder="username" onChange={fillUserName} />
      <nav>
        <Link to={{pathname: "/api/exercise/new-user"}}>
          <input type="submit" value="Submit" onClick={submitForm} />
        </Link>
      </nav>
    </form>
  )
};

export default connect(
  null,
  { saveUser }
)(NewUserForm);
