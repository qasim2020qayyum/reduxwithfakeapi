import { ADD_TO_CART, REMOVE_FROM_CART } from "./constant";

const cart = [];
const cartReducerComp =(state = cart, action) => {
    const product = action.payload;
    switch (action.type) {
        case ADD_TO_CART:
            // Check if Product is Already Exist
            const exist = state.find((x)=> x.id === product.id);
            if(exist){
                // Increase the Quantity
                return state.map((x)=>
                x.id === product.id ? {...x, qty: x.qty + 1} : x
                );
            }else{
                const product = action.payload;
                return[
                    ...state, { ...product, qty: 1, }
                ]
            }
            localStorage.setItem("mytask", JSON.stringify(state));
            
            
            
            case REMOVE_FROM_CART:
                const exist1 = state.find((x)=> x.id === product.id);
                if(exist1.qty === 1){
                    return state.filter((x)=> x.id !== exist1.id);
                }else{
                    return state.map((x)=>
                    x.id === product.id ? {...x, qty: x.qty-1} : x
                    );
                }
                localStorage.setItem("mytask", JSON.stringify(state));
                
    
        default:
            return state;
            
    }

}

export default cartReducerComp;