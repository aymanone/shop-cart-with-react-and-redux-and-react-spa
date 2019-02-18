import React, { Component } from 'react';
class Item extends Component{
    constructor(props){
        super(props);
       // this.props.nameOfItem=itemName;
        //this.props.price=price;
       
        //this.state={quantity:this.props.quantity};
//this.inc=this.inc.bind(this);
    }
    
    render (){
        return (
            <div>
            <p>item:item {this.props.itemInfo.id}</p>
            <p>price: {this.props.itemInfo.price}</p>
            <p >quantity: {this.props.itemInfo.quantity}</p>
            
            <button onClick={()=>this.props.addAction(this.props.itemInfo.id)} disabled={this.props.itemInfo.quantity<=0}>add to shop cart</button>
            <button onClick={()=>this.props.removeAction(this.props.itemInfo.id)} disabled={this.props.itemInfo.cartAmount<=0}>remove from cart</button>
            </div>
            
        )
    }
}
export default Item;
