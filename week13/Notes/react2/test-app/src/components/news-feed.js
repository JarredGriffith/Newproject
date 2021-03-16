import React from 'react';
import Post from './post'; 

let e = React.createElement; 

export default class Newsfeed extends React.Component {
    render(){
        let comments = [
            {
                content:'testing the comments', 
                username: 'Jarred', 
                date: '3/7/2021'
            }, 
            {
                content:'the comments', 
                username: 'Tessa', 
                date: '3/8/2021'
            }
        ]

        //new way
        return(
            <div className="container">
                <Post {...{comments:comments, content:"test is a post"}}/>
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