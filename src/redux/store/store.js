import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import  Combine from "../reducer";


    const store = createStore(
        Combine,
        applyMiddleware(thunk, logger)
    )

    export default store;