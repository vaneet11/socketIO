import logo from './logo.svg';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { Manager } from "socket.io-client";
import { io } from "socket.io-client";


function App() {

  const socket = io("localhost:8888", {});

  useEffect(() => {
    toast.info("mounted")
  }, [])

  socket.on('connection', function () {
    console.log("user Connected", arguments)
  })
  socket.on('notify', function (data) {
    showToastify(data)
  })
  socket.on('home', function (data) {
    showToastify(data)
  })
  socket.on('info', function (data) {
    showToastify(data)
  })
  socket.on('error', function (data) {
    showToastify(data)
  })
  socket.on('success', function (data) {
    showToastify(data)
  })


  function showToastify(data) {
    toast[data.type](data.message)
  }
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
      <ToastContainer />
    </div>
  );
}

export default App;
