import { IS_LOGGED } from "./actionsTypes";

const userIsLoggedReducer = (state = true, action) =>{
    switch (action.type) {
        case IS_LOGGED:
            return action.type;
    
        default:
            return state;
    }
}

export default userIsLoggedReducer;