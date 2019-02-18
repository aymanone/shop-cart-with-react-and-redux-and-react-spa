import React, { Component } from 'react';
import Item from "./Item";

import { Switch, Route } from 'react-router-dom';
class ShowRoom extends Component{
     constructor(props){
        super(props);
        
       // this.nums=[5,4,3,7];
     
    }
    
  render() {
      const items=Object.keys(this.props.items).map((i,index)=> <Item itemInfo={this.props.items[i]}   addAction={this.props.addAction} removeAction={this.props.removeAction} key={index}/>);
          
    return (
      <div className="App">
        
        <h1>hello react</h1>
        {items}
    </div>
    );
  }
}
export default ShowRoom;