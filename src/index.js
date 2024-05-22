import React from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import UserList from './components/UserList';
import UserEdit from './components/UserEdit';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/edit/:userId" element={<UserEdit />} />
      </Routes>
    </Router>
  </Provider>,
  document.getElementById('root')
);
