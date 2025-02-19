import React from "react";
import {dataAll} from "../data/family_data.js";
const FamilyMember = ({members}) => {
    console.log(members);
const image = `/src/assets/icon.png`
    return (
        <div className="family_card">
            <div className='mt-4'>
                <h2 className="text-xl font-bold mt-4">Family Members</h2>
                <ul className="mt=2">
                    {members.map((member, id)=> (
                        <li key={id} className="mt=2">
                            <img className="flex items-center"
                                src={image}
                            alt={`image of ${member.name}`}
                            style={{
                         width: "100px", height: "100px"
                        }}/>
                           <span>{member.name} {member.age}</span>

                        </li>

                    ))}
                </ul>


            </div>
        </div>
    )
}

export default FamilyMember;