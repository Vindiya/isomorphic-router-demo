import React from 'react';
import TopNav from './TopNav';

export default ({ route }) => (
  <div>
    <TopNav route={route} />
    <div className="ui main text container">
      <h1 style={{textAlign: "center"}}>About Page</h1>
      <p style={{fontSize: "30px", padding: "25px", textAlign: "center"}}>This page is for demo of isomorphic apps.<br/> An isomorphic app runs in both server and client. <br/>
        React library's renderToString method is used to render html from server side. <br/>
        A Windows object is chosen to save data from server and use it to render on client.</p>
    </div>
  </div>
);
