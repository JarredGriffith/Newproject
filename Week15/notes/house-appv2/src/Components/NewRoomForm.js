import React, { useState } from 'react'; 

export const NewRoomForm = (props) => {
    const [name, setName] = useState(''); 
    const [area, setArea] = useState(undefined); 

    //val for the are number 
    const handleAreaInput = (e) => {
        const int = parseInt(e.target.value, 10); 
        setArea(int >= 0 ? int : ''); 
    }

    const onSubmit = (e) => {
        e.preventDefault(); 
        if(name && area ) {
            props.addNewRoom({name,area}); 
            setName(''); 
            setArea(''); 
        } else {
            console.log("cant submit")
        }
    }

    return (
        <div>
            <h4>Add new room</h4>
            <form onSubmit={onSubmit}>
                <input type="text"
                placeholder="name"
                onChange={(e)=> setName(e.target.value)}
                value={name}/>
                <input 
                type="text"
                placeholder="area"
                onChange={handleAreaInput}
                value={area}/>
                <button type="submit">add room</button>
            </form>
        </div>
    )
}