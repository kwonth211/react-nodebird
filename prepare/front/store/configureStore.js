import { createWrapper } from "next-redux-wrapper";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";
const configureStore = () => {
  const middlewares = [];
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares));

  const store = createStore(reducers, enhancer);
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === "develoment",
});

export default wrapper;
