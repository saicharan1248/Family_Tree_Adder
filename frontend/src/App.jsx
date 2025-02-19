import {useEffect, useState} from 'react'
import './App.css'
import {dataAll} from "./data/family_data.js";
import FamilyMember from "./components/FamilyMember.jsx";
// import data from "./data/family_data.js";
const App =()=>{

    const [Members, setMembers] = useState(dataAll);
    // console.log(Members);
    const [newMembers, setNewMembers] = useState({
        name:'',
        age: '',
        gender: 'Male',
        image: '',
    });

    const addMember = () => {
        if (newMembers.name.trim() !== "" && newMembers.age.trim() !== ""
        && newMembers.gender.trim() !== "" && newMembers.image.trim() !== ""){
        const updatedMembers = [...Members];

        updatedMembers.push({
            name: newMembers.name,
            age: newMembers.age,
            gender: newMembers.gender,
            image: newMembers.image,
        });

        setMembers(updatedMembers);
        setNewMembers({
            name: "",
            age : "",
            gender: "",
            image: "",
        })}

    }
// get data and map them
// make a relation to the given male and female data
// pass the data to the member comp as props



    return (
        <main className="whole_set">
            <div className="container">
                <nav className="nav">
                    <div className="logo">

                    </div>

                </nav>


                <header className="header">

                    <h1 className="header_title">Family Tree <span className="text-gradient">Add your Loved Ones For Infinity</span></h1>

                </header>



                <section className="content-mem">
                    <h2>Add Your Loved Ones Here</h2>
                    <div
                        className="content-details flex flex-col gap-2">

                        <input
                            className="border p-2 rounded"
                        type="text"
                        placeholder= "Enter name here"
                        value={newMembers.name}
                        onChange={(e) => setNewMembers(
                            {...newMembers, name: e.target.value}
                        )}/>
                        <input
                            className="border p-2 rounded"
                            type="number"
                            placeholder= "Enter age here"
                            value={newMembers.age}
                            onChange={(e) => setNewMembers(
                                {...newMembers, age: e.target.value}
                            )}/>
                        <select
                            className="border p-2 rounded"
                            placeholder= "Enter gender here"
                            value={newMembers.gender}
                            onChange={(e) => setNewMembers(
                                {...newMembers, gender: e.target.value}
                            )}>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>

                        <input
                            className="border p-2 rounded"
                            type="text"
                            placeholder= "Enter image here"
                            value={newMembers.image}
                            onChange={(e) => setNewMembers(
                                {...newMembers, image: e.target.value}
                            )}/>
                        <button onClick={()=> addMember() } className="bg-blue-500 text-white px-4 py-2 rounded">
                            Add Member
                        </button>

                    </div>
                </section>

                <section className="content-all">
                    <div className="all-members">
                        <h3 className="text-gradient">See Your Family members Here</h3>
                        <FamilyMember members={Members} />

                    </div>
                </section>

            </div>
        </main>

    )
}
export default App
