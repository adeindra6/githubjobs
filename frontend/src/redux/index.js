import storage from "redux-persist/lib/storage";
import {persistStore, persistReducer} from 'redux-persist';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from "redux-thunk";

import UserReducer from "./user/reducer.js";

const persistConfig = {
    key: "github-jobs",
    storage: storage,
};

const rootReducer = combineReducers({
    user: UserReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(
    persistedReducer,
    applyMiddleware(thunkMiddleware),
);
export const persistor = persistStore(store);

export default {};