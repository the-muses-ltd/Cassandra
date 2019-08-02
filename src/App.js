import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
 
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src="https://gdurl.com/LBGp" className="App-logo" alt="logo" /> */}
        <img src="https://gdurl.com/yLkZ" className="heroLogo" alt="logo" />
        <h1 className="landingTitle">
          Welcome Volunteer Developers to Cassandra!
        </h1>

        <p className="landingPara">
          Join developers from all over the world to make equal access to education a reality for everyone. <a className="landingParaLink" href="https://github.com/the-muses/Cassandra/wiki/Cassandra-Road-Map#mvp-list" target="_blank">Here</a> is a link to our current MVP list and if you need any help then just speak to our chatbot.
        </p>

        {/* <Projects/> */}
      </header>
    </div>
  );
}

export default App;
