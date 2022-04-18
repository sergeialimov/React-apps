import React from "react";
import { connect } from 'react-redux';

const mapStateToProps = (state: any) => ({ users: state.users });


const Users = (props: any) => {
  const { users } = props;
  console.log('------ users', users);

  const usersData = users.map((user: any) => {
    const userData = {
      "_id": user.id,
      "username": user.username,
    }

    return (
      <div>{userData}</div>
    )
  });
  
  return usersData;
}

export default connect(
  mapStateToProps,
)(Users);

