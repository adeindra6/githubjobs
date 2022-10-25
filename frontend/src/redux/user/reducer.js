import {SET_USER, GET_USER} from "./constan.js";

const initialState = {
    jwt_token: "",
};

const UserReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER:
            return {...state, jwt_token: action.data};
        case GET_USER:
            const {jwt_token} = state;
            return {...state, jwt_token};
        default:
            return state;
    }
};

export default UserReducer;