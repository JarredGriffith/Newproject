import React from 'react';
import ReplyButton from './reply-button';
import LikeButton from './like-button';
import Comment from './comment'; 

let e = React.createElement; 

export default class Post  extends React.Component {
    //this is the JSX way of writing the HTML. both need the render.
    render() {
        return(
            <div className="card w-75">
                <div className="card-header bg-danger text-white">
                    Username and Time. 
                </div>
                <div className="card-body">
                    This is where the content goes.
                </div>
                <div className="card-footer">
                    <LikeButton/>
                    <ReplyButton/>
                    <Comment/>
                    <Comment/>
                    <Comment/>
                </div>
            </div>
        )


/* THis is the normail way to write the html
        return e('div', {
                class: 'card w-75'},
            e('div', {
                    class: 'card-header bg-success text-white'
                },
                'Username and time'),
            e('div', {
                class: 'card-body'
            }, 'Post content'),
            e('div', {class: 'card-footer'},
                e(LikeButton, {}, null),
                e('span', {}, ' '),
                e(ReplyButton, {}, null), 
                e('br',{},null), 
                e(Comment,{},null), 
                e(Comment,{},null)
            )
        ); */
    }
}
