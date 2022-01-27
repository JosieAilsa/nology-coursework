import React, {useState,useEffect } from "react";
import User from "../../User/User";

const UserGallery = () => {
const [currentUserData, setUserData] = useState([])
const [slideValue, setSliderValue] = useState(10)

//If we want to add a slider that change based on state 
useEffect (() => {
    //Use string interpolation to add a varaible to the endpoint request
    const URL = `https://randomuser.me/api/?results=` + slideValue
    fetch(URL) 
    .then(res => res.json())
    .then(data => 
        setUserData(data.results))
    .catch(console.log("Error"));
},[slideValue])

const userData = currentUserData.map(user => {
    return <User name ={user.name.first} imgURL = {user.picture.large}/>
})

const handleUpdateSlider = (e) => {
//Update the state of the value with the event handler 
const value = e.target.value 
setSliderValue(value)
}

  return (
<>
<h1>Users</h1>
<p>Currently displaying {slideValue}</p>
  <form>
  <label htmlFor="user-range">Update results: </label>
  <input type="range" name="user-range" min="1" max="50" step="10" value = {slideValue} onChange = {handleUpdateSlider} />
  <div>{userData}</div>
</form>
</>)

};

export default UserGallery;