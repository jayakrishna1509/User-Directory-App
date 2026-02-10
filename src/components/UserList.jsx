import React from 'react';
import UserCard from './UserCard';
import '../styles/userlist.css';

const UserList = ({ users, loading }) => {
  if (loading && users.length === 0) {
    return (
      <div className="user-list-loading">
        <p>⏳ Loading Users...</p>
      </div>
    );
  }

  if (users.length === 0) {
    return (
      <div className="user-list-empty">
        <p>No Users Found. Try a Different Search!</p>
      </div>
    );
  }

  return (
    <div className="user-list">
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
