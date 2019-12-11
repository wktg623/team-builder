import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import './App.css';
import Team from "./components/Team"
import TeamForm from "./components/TeamForm"


function App() {

  const [teamMembers, setTeamMembers] = useState([
{
  id: 1, 
  name: "Alaina",
  email: "Alaina@gmail.com",
  role: "Senior-Engineer"
},



  ]);

  const addNewTeamMember = teamMember => {
    const newTeamMember = {
      id: Date.now(),
      name: teamMember.name,
      email: teamMember.email,
      role: teamMember.role
    };
    setTeamMembers([...teamMembers, newTeamMember])
  };

  return (
    <div className="App">

<h1>Team Members</h1>
<Team teamMembers = {teamMembers}/>
<TeamForm addNewTeamMember = {addNewTeamMember} />
   
    </div>
  );
}

export default App;


ReactDOM.render(<App />, document.getElementById('root'));


