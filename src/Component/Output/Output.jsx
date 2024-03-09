// DisplayData.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import './Output.css';

const Output = () => {
  const location = useLocation();
  const formData = location.state?.formData || {}; // Use optional chaining to prevent errors

  return (
    <div className='container'>
      <h2>User Data:</h2>
      <p>
        <strong>Username:</strong> {formData.username}
      </p>
      <p>
        <strong>Email:</strong> {formData.email}
      </p>
      <p>
        <strong>Password:</strong> {formData.password}
      </p>
      <p>
        <strong>Gender:</strong> {formData.gender}
      </p>
      <p>
        <strong>Country:</strong> {formData.country}
      </p>
    </div>
  );
};

export default Output;
