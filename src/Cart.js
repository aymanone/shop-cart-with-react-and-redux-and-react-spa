import React, { Component } from 'react';
import CartItem from "./CartItem";
class Cart extends Component{
    constructor(props){
        super(props);
        
    }
    render() {
      const items=Object.keys(this.props.items).map((i,index)=> <CartItem itemInfo={this.props.items[i]} val={index}  addToCart={this.props.addToCart} removeFromCart={this.props.removeFromCart} key={index}/>);
          
    return (
      <div className="App">
        
        <h1>Cart</h1>
        {items}
    </div>
    );
  
}

}
export default Cart;