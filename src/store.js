import { createStore } from "redux";
import appReducer from "./appReducer";
function configureStore(state={}){
    return createStore(appReducer,state);
}
export default configureStore;