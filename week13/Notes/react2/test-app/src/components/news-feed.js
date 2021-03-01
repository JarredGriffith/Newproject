import React from 'react';
import Post from './post'; 

let e = React.createElement; 

export default class Newsfeed extends React.Component {
    render(){
        //new way
        return(
            <div className="container">
                <Post/>
                <Post/>
                <Post/>
            </div>
        )
/* old way
        return e('div', {
            class: "container"},
            e(Post,{},null),
            e(Post,{},null),
            e(Post,{},null),
            e(Post,{},null)
        ); */
    }
}