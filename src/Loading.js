import React from 'react';
import './Loading.css';

const Loading = () => {
  return (

  <div className="circle-loader-wrapper">
    <div className="circle-loader">
      <img src="/assets/logo.png" alt="Logo" className="loader-logo-center" />
    </div>
    <p>Varum Wait Pannunga...</p>
  </div>
);

};

export default Loading;
