import logo from './logo.svg';
//import React, { Component } from 'react'; 
import React from 'react'; 
import './App.css';
import House from './house'

const house_EndPoint = "https://ancient-taiga-31359.herokuapp.com/api/houses"

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.addNewRoom = this.addNewRoom(this);
    this.deleteRoom = this.deleteRoom(this);
  }
  render(){
    const houses = this.state
    //? this if state its not null
    ? this.state.houses.map((house,index) =>
    <House
      key={index}
      data={house}
      addNewRoom = {this.addNewRoom}
      deleteRoom = {this.deleteRoom} />)
      : null; 
      return (
        <div>
          {houses}
        </div>
      )
  }
  componentDidMount() {
    fetch(house_EndPoint)
    //once you get the data convert it into a json
      .then(res => res.json())
      //then once converted then set the state to the current houses. 
      .then(data => {
        this.setState({
          houses: data
        });
      });
      console.log("this.state")
  } 

  deleteRoom(e,house,room) {
    //get the index of the item wated to delete.
    const index = house.rooms.indexOf(room);
    //once found it then rmeoves it from the object. 
    house.rooms.splice(index,1); 
    updatehouse(house) 
      .then(()=>{
        this.setState(state=>{
          //goes though all the houses.
          for(let h of state.houses) {
            //when the house ID is found and then set h to it. 
            if(h._id === house._id){
              let h = house;
              break; 
            }
          }
          //then we update the house. 
          return state;
        });
      });
      e.proventdefault()
  }


  addNewRoom(e,house,room) {
    house.rooms.push(room); 
    updatehouse(house)
      .then(()=>{
        this.setState(state=>{
          //goes though all the houses.
          for(let h of state.houses) {
            //when the house ID is found and then set h to it. 
            if(h._id === house._id){
              let h = house;
              break; 
            }
          }
          //then we update the house. 
          return state;
        });
      });
      e.proventdefault()
  }
}

function updatehouse(house) {
  return fetch(`${house_EndPoint}/${house._id}`, {
    method:'PUT',
    headers: {
      'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(house) 
  }); 
}