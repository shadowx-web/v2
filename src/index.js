import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
//import {createStore} from 'redux';
import Counter from "./components/counter.js";
import { Provider } from "react-redux";

import { createStore } from "redux";

const rootReducer = function(state = {}, action = {}) {
  console.log(action.type);
  console.log("payload->", action.payload);

  action.type = "ADD";
  if (action.type === "ADD") {
    //console.log(action.type);
    //console.log(action.type);

    return {
      ...state,
      add_data: { id: "11", type: "add", text: "add event triggred" }
    };
  } else {
    return { ...state, userData: { id: "11", type: "go", text: "do it" } };
  }

  return state; // now it store data in store
};

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
// ReactDOM.render(<Provider store={store}><Counter /></Provider>, document.getElementById('root'));
registerServiceWorker();
// 1. provider added
// 2. store created with reducer as input
