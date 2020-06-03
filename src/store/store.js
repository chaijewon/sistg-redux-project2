import {createStore,applyMiddleware,compose} from "redux";
import thunk from "redux-thunk";// 비동기화
import rootReducer from '../reducers'
import {createLogger} from "redux-logger/src";

const logger=createLogger();
const initialState={}

const middleware=[thunk,logger];

const store=createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware)
    )
)
export default store;