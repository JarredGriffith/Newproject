import React from 'react'; 

export default class Counter extends React.Component {
    constructor(props){
        super(props); 
        this.handleClick = this.handleClick.bind(this); 
    }
    handleClick(){
        this.props.onClick(this.props.name); 

    }
    

render(){
    return(
        <button 
            className="btn btn-danger"
            onClick={this.handleClick}>
                {this.props.name} {this.props.count}
            </button>
    )
}}

/*
import React from 'react'; 

export default class Counter extends React.Component {
    constructor(props){
        super(props); 
        this.state = {
            name: props.name,
            count: 0
        }; 
        this.handleClick = this.handleClick.bind(this); 
    }
    handleClick(){
        this.setState(state => ({count: state.count +1})); 
    }
    

render(){
    return(
        <button 
            className="btn btn-danger"
            onClick={this.handleClick}>
                {Counter} {this.state.count}
            </button>
    )
}} */