// src/components/UserList.js
import React, { useEffect } from 'react';
//import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';
import { useNavigate } from 'react-router-dom';


const UserList = ({ users, fetchUsers }) => {
  const navigate = useNavigate();
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className="container mx-auto px-4">
    <h1 className="text-4xl font-bold mb-8 mt-4 text-center">Users List</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {users.map(user => (
        <div key={user.id} className="bg-white rounded-lg shadow-md p-4">
          <p className="text-lg font-semibold mb-2">Name: {user.name}</p>
          <p className="text-gray-600 mb-2">Email: {user.email}</p>
          <p className="text-gray-600 mb-2">Occupation: {user.occupation}</p>
          <p className="text-gray-600 mb-2">Bio: {user.bio}</p>
          <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleEdit(user.id)}
            >
              Edit
            </button>
        </div>
      ))}
    </div>
  </div>
  );
};

const mapStateToProps = state => ({
  users: state.users
});

export default connect(mapStateToProps, { fetchUsers })(UserList);
