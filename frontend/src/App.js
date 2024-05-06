import logo from './logo.svg';
import './App.css';
import { io } from "socket.io-client";import { useState, useEffect } from "react";

const socket = io('http://localhost', { autoConnect: false });

function App() {
  useEffect(() => {
    socket.connect();
    console.log('socket connected')

    socket.on("chat", (newMessage) => {
      console.log("New message added", newMessage);
      // setMessages((previousMessages) => [...previousMessages, newMessage]);
    });

  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
