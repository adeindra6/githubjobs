import {SET_USER, GET_USER} from "./constan.js";

export const setUser = (data) => {
    return {type: SET_USER, data};
};

export const getUser = (data) => {
    return {type: GET_USER};
};