import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Team from "./components/Team"
import TeamForm from "./components/TeamForm"


function App() {

  const [teamMembers, setTeamMembers] = useState([
{
  id: 1, 
  name: "Alaina",
  role: "Senior-Engineer"
},

{
  id: 2,
  name: "Marvin",
  role: "Junior-Engineer"
},
{
  id: 3,
  name: "Jackson",
  role: "Intern"
}

  ])

  return (
    <div className="App">

<h1>Team Members</h1>
<Team teamMembers = {teamMembers}/>



      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
