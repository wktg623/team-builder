import React, { useState } from "react";

const TeamForm = props => {
    const [team, setTeam] = useState({name: "", email: "" ,role: ""});

const handleChanges = evt => {
    console.log("team", team)
    console.log("event", evt.target.value)
    setTeam({...team, [evt.target.name]: evt.target.value})

};



const submitForm = evt => {

    evt.preventDefault();
    props.addNewTeamMember(team);
    setTeam({name: "", email: "", role: ""});
};
return(
<form onSubmit = {submitForm}>
    <label htmlFor = "name">Name</label>
    <input id = "name" type = "text" name = "name"
    onChange = {handleChanges} value = {team.name}/>


    <label htmlFor = "email">Email</label>
    <input id = "email" type = "text" name = "email"
    onChange = {handleChanges} value = {team.email}/>

    <label htmlFor = "role">Role</label>
    <input id = "role" type = "text" name = "role"
    onChange = {handleChanges} value = {team.role}/>
<button type = "submit">Submit Team Member</button>

    
</form>

)


}


export default TeamForm;