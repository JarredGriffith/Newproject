import React from 'react';





export default class LikeButton extends React.Component {
    render() {
        //this is the JSX way of making an element. 
        return <button className="btn btn-primary">Like</button>
        // below is a normal react way to making element
       // return React.createElement("button", {class: 'btn btn-primary'},'Like')
    }
}

