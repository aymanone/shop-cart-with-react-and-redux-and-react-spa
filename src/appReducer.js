 function appReducer(state,action){
    switch(action.type){
        case "ADD":
            
        state.items[action.id].quantity=state.items[action.id].quantity-1;
        state.items[action.id].cartAmount=state.items[action.id].cartAmount+1;
        state.itemsInCart[state.items[action.id].id]=state.items[action.id];
        state.wholePrice+=state.items[action.id].price;
        
        //this.setState((state)=>{return this.state;});
          
        return {...state};
        
        case "REMOVE":
        
             
        state.items[action.id].quantity=state.items[action.id].quantity+1;
        state.items[action.id].cartAmount=state.items[action.id].cartAmount-1;
         
        
        
        if ( state.itemsInCart.hasOwnProperty(state.items[action.id].id)&&state.items[action.id].cartAmount==0){
            state.wholePrice-=state.items[action.id].price;
            delete state.itemsInCart[action.id];
        }
        else{
            state.itemsInCart[state.items[action.id].id]=state.items[action.id];
            state.wholePrice-=state.items[action.id].price;
        }
        
         //this.setState((state)=>{return this.state;});
            return {...state};
            
        default:
            return state;
         
    }
};
export default appReducer;