// import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Sampledata from './fire/Sampledata';
import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyABaIvVQkl1HQdL-efhULI8ILW4-A78Qg0",
  authDomain: "obrnote-react.firebaseapp.com",
  databaseURL: "https://obrnote-react-default-rtdb.firebaseio.com",
  projectId: "obrnote-react",
  storageBucket: "obrnote-react.appspot.com",
  messagingSenderId: "1027965329061",
  appId: "1:1027965329061:web:944a2b139e7ca0b726374c",
  measurementId: "G-JXCQKV3NPJ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

class App extends Component {

  render() {
    return (
      <div>
        <h1>Fire</h1>
        <h2>Sample data.</h2>
        <Sampledata />
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
