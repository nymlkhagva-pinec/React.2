"use client"

import { useState } from "react"

export default function() {

    const [value1, setValue1] = useState("")
    const [value2, setValue2] = useState("")
    const [value3, setValue3] = useState("")
    const [value4, setValue4] = useState("")

    const [profile, setProfile] = useState([])

    function handleAdd() {
        if (value1=== "" || value2=== "" || value3=== "" ||value4==="") {
            return;
        }
        const newObject = {
            name: value1,
            age: value2,
            gender: value3,
            country: value4,
            showDetails: false
        };

        const newProfile = [...profile, newObject]

        setProfile(newProfile)
        console.log(profile)
    }

    function handleDetails(index) {
        const update = [...profile];
        update[index].showDetails = !update[index].showDetails;
        setProfile(update)
    }

    return(
        <div style={{display: "flex", flexDirection:"column", width: "100vw", height: "100vh", gap: "20px", alignItems: "center"}}>
            <h1 style={{fontWeight: "bolder", fontSize: "25px"}}>Profile generator</h1>
            <input style={{backgroundColor: "gainsboro", width: "200px", borderRadius: "5px"}} placeholder=" Name" onChange={(event) => setValue1(event.target.value)}></input>
            <input style={{backgroundColor: "gainsboro", width: "200px", borderRadius: "5px"}} placeholder=" Age" onChange={(event) => setValue2(event.target.value)}></input>
            <input style={{backgroundColor: "gainsboro", width: "200px", borderRadius: "5px"}} placeholder=" Gender" onChange={(event) => setValue3(event.target.value)}></input>
            <input style={{backgroundColor: "gainsboro", width: "200px", borderRadius: "5px"}} placeholder=" Country" onChange={(event) => setValue4(event.target.value)}></input>
            <button onClick={handleAdd} style={{fontWeight: "bolder", border: "3px solid gray"}}>Add Profile</button>
            
            {profile.map((user,index) => {
                return(
              <div key={index} style={{width: "150px", border: "2px solid darkgray", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", fontSize: "17px", borderRadius: "10px"}}>
                <p>{user.name}</p>
                {user.showDetails &&
                 <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "10px"}}>
                    <p>{user.age} years old</p>
                    <p>{user.gender}</p>
                    <p>From {user.country}</p>
                 </div>
                }
                <button onClick={() => handleDetails(index)}>{ user.showDetails ? "Hide Details" : "Details"}</button>
              </div>
                )
            })}

        </div>
    )
}