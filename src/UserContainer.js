import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from './redux';

const UserContainer = ({ userData, fetchUser }) => {
  useEffect(() => {
    fetchUser();
  }, []);
  return userData.loading ? (
    <h2>Loading</h2>
  ) : userData.error ? (
    <h1>{userData.error}</h1>
  ) : (
    <div>
      <h3>User List</h3>
      <div>
        {userData &&
          userData.users &&
          userData.users.map((user) => <p>{user.name}</p>)}
          <div></div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: () => dispatch(fetchUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
