import { createStore } from "redux";
import rootRed from "./rootReducer";


// create a store here

const store = createStore(rootRed);


export default store;
