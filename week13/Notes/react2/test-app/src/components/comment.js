import React from 'react';
import ReplyButton from './reply-button';
import LikeButton from './like-button';

//this is for it is easier to type out.
let e = React.createElement

export default class Comment extends React.Component {
    render() {
            return(
                //JSX way of writing the HTML
                <div className="card w-75">
                    <div className="card-header bg-success text-white">
                    {this.props.username}
                    </div>
                   <div className="card-body">
                       {this.props.content}
                   </div>
                    <div className="card-footer">
                        <LikeButton/> <span></span>
                        <ReplyButton/>
                    </div>
                </div>
            )

/* Normal react way of writig the HTML out
        return e('div', {
                class: 'card w-75'},
            e('div', {
                    class: 'card-header bg-success text-white'
                },
                'Username and time'),
            e('div', {
                class: 'card-body'
            }, 'comment content'),
            e('div', {class: 'card-footer'},
                e(LikeButton, {}, null),
                e('span', {}, ' '),
                e(ReplyButton, {}, null)
            )
        ); */
    }
}
