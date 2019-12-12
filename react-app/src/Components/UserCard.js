import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUser } from "../state/actionTypes";

const User = props => {
  useEffect(() => {
    props.getUser();
  }, []);
  return (
    <div className='Card'>
      <img className='cardImage' src={props.user.avatar_url} alt="pic" />
      <div className='cardInfo'>
        <div>
          <h1 className='login' >{props.user.login}</h1>
          <em className='bio'>{props.user.bio}</em>
        </div>
        <div >
          <p className='followers'>Followers:{props.user.followers}</p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};
export default connect(
  mapStateToProps,
  { getUser }
)(User);