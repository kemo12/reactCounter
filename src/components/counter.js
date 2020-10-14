import React from 'react';
import './counter.css';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { AiOutlineMinusCircle } from 'react-icons/ai';
import  "../App";


class Counter extends React.Component {

  state={
    counter:this.props.counter,
    disabled:true

  }
  increment=()=>{
    this.setState((prevState)=>{
      this.props.incremetTotal();
      const newcounter=prevState.counter +1;
      return{counter:newcounter,disabled:false}
    });
  }
  decrement=()=>{
    this.setState((prevState)=>{
      this.props.decremetTotal();
      if(prevState.counter>0){
        if(prevState.counter===1){
          return{counter:prevState.counter -1,disabled:true};
        }
        else{
      return{counter:prevState.counter -1};
    }
    }
    
    });
  }
  formatCount=()=> {
    const value = this.state.counter;
    console.log(value);
    return value === 0 ?  "Zero" : value;
  }
    
  
getBadgeClassses() {
  let classes = "";
  classes += (this.state.counter === 0) ? "counter-zero" : "counter-not-zero";
  return classes;
}
componentDidUpdate(){
  console.log('this is'+this.state.counter);
}

  render() {
    const {counter}=this.state;
  
    return(
    <div  className = "counter-container">
        <div  className = {this.getBadgeClassses() }>{this.formatCount()}</div>
        <button className='positive btnStyle' onClick={this.increment}><AiOutlinePlusCircle/></button>
        <button className='negative btnStyle' disabled={this.state.disabled} onClick={this.decrement}><AiOutlineMinusCircle/></button>
    </div>
    );
  }
}




export default Counter;
