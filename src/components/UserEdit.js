import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../actions';
import { useParams, useNavigate } from 'react-router-dom';

const UserEdit = ({ user, updateUser }) => {
  // Declare state variables unconditionally
  const { userId } = useParams();
  const [name, setName] = useState(user ? user.name : '');
  const [email, setEmail] = useState(user ? user.email : '');
  const [occupation, setOccupation] = useState(user ? user.occupation : '');
  const [bio, setBio] = useState(user ? user.bio : '');


  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUser = { id: user.id, name, email, occupation, bio };
    updateUser(updatedUser);
  };

  if (!user) {
    return <div className="text-center mt-4">User not found</div>;
  }

  return (
    <div className="max-w-lg mx-auto mt-10 p-8 bg-white shadow-md rounded-lg">
    <h2 className="text-2xl font-bold mb-6 text-center">Edit User</h2>
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Occupation:</label>
        <input
          type="text"
          value={occupation}
          onChange={(e) => setOccupation(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Bio:</label>
        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        ></textarea>
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Update
        </button>
      </div>
    </form>
  </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const user = state.users.find(user => user.id === ownProps.userId);
  return { user };
};

export default connect(mapStateToProps, { updateUser })(UserEdit);