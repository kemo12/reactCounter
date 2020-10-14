import React from 'react';
import './Nav.css';
import { FaShoppingCart } from 'react-icons/fa';
class Nav extends React.Component {

  render() {
    return(
    <div className="nav">
     < FaShoppingCart  className='shop-icon'/>
    <div className='count'>{this.props.total}</div>
     <p id='items-word'>Items</p>
   </div>
    );
  
  }
}

export default Nav;
