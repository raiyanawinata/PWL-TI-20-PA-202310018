import React from "react";

export default function Statement1(){
const objData = {
    id:1,
    name: "Raiyana Jan Winata",
    gender: "F",
    birthdate: "2003-01-28",
    address: "Sindang Resmi",
    favorite: ["Sleep", "Sleep", "Sleep"],
    activity: [{type: "Sleep", place: "MyBedroom", start_time: "07.00", end_time:"17.00"},
               {type: "Sleep", place: "MyBedroom", start_time: "22.00", end_time:"04.00"},
               {type: "Sleep", place: "MyBedroom", start_time: "06.00", end_time:"07.00"}]           
}

const age = calculateAge(objData.birthdate);
const level = levelAge(age);

return (
    <div>
        <p>Name: {objData.name}</p>
        <p>Gender: {(objData.gender === "F") ? "Male" : "Female"}</p>
        <p>Birthdate: {objData.birthdate} / {age} years old</p>
        <p>Lavel: {level}</p>
        <p>Address: {objData.address}</p>
        <p>Favorite: </p>
        <ol>
            {objData.favorite.map((v,index) => (
                <li key={index}>{v}</li>
            ))}
        </ol>
        <p>Activity</p>
        <MyActivity data={objData.activity} />
    </div>
)
}

const MyActivity = ({data}) => {
    return(
        <table border={1}>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Type</th>
                    <th>Places</th>
                    <th>Term</th>
                </tr>
            </thead>

            <tbody>
                {(Object.values(data).length > 0) ? (
                    data.map((v,index)=>(
                        <tr key={index}>
                            <td>{(index+1)}</td>
                            <td>{v.type}</td>
                            <td>{v.place}</td>
                            <td>{v.start_time} until {v.end_time}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="4">No activity found</td>
                    </tr>
                
                )}
            </tbody>
        </table>
    )
}

const calculateAge = (birthdate) => {
    var today = new Date();
    var birthDate = new Date(birthdate);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if( m <0 || (m === 0 && today.getDate() < birthDate.getDate())){
        age--;
    }
    return age;
}

const levelAge = (age) => {
    let level = "";

    switch (true) {
        case (age <10):
            level = "TODDLER";
            break;

        case (age > 10 && age<17):
            level = "TENAGER";
            break;
        
        case (age > 17 && age < 30):
            level = "YOUNGER";
            break;

        case (age > 30 && age < 50):
            level = "OLDER";
            break;

        case (age > 50 && age < 80):
            level = "ELDER";
            break;

        case (age > 80 && age < 100):
            level = "LEGEND";
            break;
        default:
            break;
    }
    return level;
}