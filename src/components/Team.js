import React from "react";

const Team = props => {

    return(

        <div>
            {props.teamMembers.map(teamMember=>(
                    <div key = {teamMember.id}>
                        <h2>{teamMember.name}</h2>
                        <p>{teamMember.role}</p>
                        </div>
                ))}
        </div>
    )
}

export default Team; 