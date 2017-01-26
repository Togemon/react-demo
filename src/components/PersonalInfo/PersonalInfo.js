import React from 'react';
import './PersonalInfo.css';

const PersonalInfo = ({name, address, email, phone}) => {
  return (
    <div className="info">
      <ul>
        <li>{name}</li>
        <li>{address}</li>
        <li>{email}</li>
        <li>{phone}</li>
      </ul>
    </div>
  );
}

export default PersonalInfo;
