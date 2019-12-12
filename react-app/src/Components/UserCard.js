import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUser } from "../state/actionTypes";

const User = props => {
  console.log(props.user);
  useEffect(() => {
    props.getUser();
  }, []);
  return (
    <div >
      <img src={props.user.avatar_url} alt="pic" />
      <div>
        <div>
          <h1 >{props.user.name}</h1>
          <em >{props.user.bio}</em>
        </div>
        <div >
          <p>Followers:{props.user.followers}</p>
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