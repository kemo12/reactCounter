import React from 'react';
import Nav from './components/Nav';
import "./App.css";
import {BsArrowRepeat} from 'react-icons/bs';
import Counter from './components/counter';



class App extends React.Component {
  state={
    total:0,
    counter:0
  }
  
  incremetTotal=()=>{
    this.setState((prevState)=>{
      const newtotal=prevState.total +1/2;
      return{total:newtotal}
    });
  }
  decremetTotal=()=>{
    
    this.setState((prevState)=>{
      if(prevState.total>0){
      const newtotal=prevState.total -1/2;
      return{total:newtotal}
    }
  });
  }

  handlereset=()=>{
    this.setState(()=>{
      const newtotal=0;
      let newcounter=0;
      return{total:newtotal,counter:newcounter}
    });}
  render(){
  return (
    <div className="App">
     <Nav total={this.state.total} />
     <div className="container">
      <button className='reset' onClick={this.handlereset}><BsArrowRepeat className='reset-icon'/></button>
      <Counter counter={this.state.counter} incremetTotal={this.incremetTotal} decremetTotal={this.decremetTotal} />
      <Counter counter={this.state.counter} incremetTotal={this.incremetTotal} decremetTotal={this.decremetTotal}/>
      <Counter counter={this.state.counter} incremetTotal={this.incremetTotal} decremetTotal={this.decremetTotal} />
      <Counter counter={this.state.counter} incremetTotal={this.incremetTotal} decremetTotal={this.decremetTotal} />
      {console.log(this.state.counter)}
       </div>
    </div>
    
  );
}

  


}

export default App;
