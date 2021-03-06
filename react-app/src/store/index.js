import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import sessionReducer from "./session"

import userReducer from "./reducers/user";

const rootReducer = combineReducers({
    user: userReducer,
  });

const envSelection = () => {
    if (process.env.NODE_ENV === "production") {
        const productionEnhancer = applyMiddleware(thunk);
        return productionEnhancer;
    } else {
        const logger = require("redux-logger").default;
        const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
        const devEnhancer = composeEnhancers(applyMiddleware(thunk, logger));
        return devEnhancer;
    }
};

const enhancer = envSelection();

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
