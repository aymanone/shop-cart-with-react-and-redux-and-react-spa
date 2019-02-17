import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import ShowRoom from "./ShowRoom";
import Cart from "./Cart";
class App extends Component {
    constructor(props){
        super(props);
           this.state={
            items:{...this.props.items},
            itemsInCart:{},wholePrice:0
        };
        this.addToCart=this.addToCart.bind(this);
        this.removeFromCart=this.removeFromCart.bind(this);
    }
     removeFromCart(i){
         
        
        this.state.items[i].quantity=this.state.items[i].quantity+1;
        this.state.items[i].cartAmount=this.state.items[i].cartAmount-1;
         
        
        
        if ( this.state.itemsInCart.hasOwnProperty(this.state.items[i].id)&&this.state.items[i].cartAmount==0){
            this.state.wholePrice-=this.state.items[i].price;
            delete this.state.itemsInCart[i];
        }
        else{
            this.state.itemsInCart[this.state.items[i].id]=this.state.items[i];
            this.state.wholePrice-=this.state.items[i].price;
        }
        
         this.setState((state)=>{return this.state;});
         
    }
    addToCart(i){
        
        this.state.items[i].quantity=this.state.items[i].quantity-1;
        this.state.items[i].cartAmount=this.state.items[i].cartAmount+1;
        this.state.itemsInCart[this.state.items[i].id]=this.state.items[i];
        this.state.wholePrice+=this.state.items[i].price;
        
        this.setState((state)=>{return this.state;});
       
        
    }
   render(){
       return(
           
          
           <Router>
           <div>
           <Link to="/">Home &nbsp;</Link>
           
           <Link to="/cart">Cart &nbsp;</Link>
           <Link to="/showroom">ShowRoom</Link>
           <Route render={()=><h1>Home</h1>}></Route>
           
           <Route path="/cart" render={(props)=>  <Cart {...props}addToCart={this.addToCart} removeFromCart={this.removeFromCart} items={this.state.itemsInCart} />} />
          <Route path="/showroom" render={(props)=> <ShowRoom {...props} addToCart={this.addToCart} removeFromCart={this.removeFromCart} items={this.state.items} /> } />
         
         
           </div>
           </Router>
           
           
           
       );
   }
}

export default App;
