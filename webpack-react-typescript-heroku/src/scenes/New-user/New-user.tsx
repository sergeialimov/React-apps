import React from "react";
import { connect } from 'react-redux';

const mapStateToProps = (state: any) => ({ user: state.user });


const NewUser = (props: any) => {
  const { user } = props;
  const userData = `{"username":"${user.name}","_id":"${user.id}"}`;
  console.log('------', props.user);

  return (
    <div>{userData}</div>
  )
}

export default connect(
  mapStateToProps,
)(NewUser);
