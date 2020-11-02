import React from 'react';
import TopNav from './TopNav';

export default ({ route }) => (
  <div>
    <TopNav route={route} />
    <div className="ui main text container">
      <h1>Contact Us</h1>
      <p>You can reach me @vindiyas@uci.edu</p>
    </div>
  </div>
);
