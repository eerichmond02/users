import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./state/store";
import { Provider } from "react-redux";

const Root = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
ReactDOM.render(<Root />, document.getElementById("root"));
