import React from 'react';
import ReplyButton from './reply-button';
import LikeButton from './like-button';
import Comment from './comment'; 

let e = React.createElement; 

export default class Post  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments, 
            content: props.content,
            count: 0
        }
    }


    //this is the JSX way of writing the HTML. both need the render.
    render() {
       // let tempComments = this.state.comments; 

        //updating the state
        //using the time out is for it doent infin loop.
        /*
       setTimeout(() => { this.setState({content: 'State Updated',comments:[]}, 
       ()=> setTimeout(() => {
        this.setState({comments: tempComments})
    }, 2000))}, 20000); */

    //updating state
    //setTimeout(() => this.setState((state,props)=> ({count: state.count +1}),()=>console.log(this.state.count)), 100000);


        // let comment = {
        //     content:'test text', 
        //     username: 'Tessa', 
        //     postdate: '12-12-21'
        // }
        let comments; 
        if(this.state.comments){
            //better way of doing the loop and it add the key for react.
            comments = this.state.comments.map((comment,index) => <Comment key={index} {...comment}/> )
            // for(let comment of this.state.comments){
            //     comments.push(<Comment {...comment}/>)
            // }
        }
        return(
            <div className="card w-75">
                <div className="card-header bg-danger text-white">
                    Username and Time. 
                </div>
                <div className="card-body">
                    {this.state.content}
                </div>
                <div className="card-footer">
                    <LikeButton/>
                    <ReplyButton/>
                    {/* <Comment {...comment}/>
                    <Comment content ="test is some text2"/>
                    <Comment content ="test is some text3"/> */}
                    {comments}
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
