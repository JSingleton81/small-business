import React from "react";
import NavBar from "./Containers/NavBar.js";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import Router from "./Router.js";
import LoggedInBar from "./Containers/LoggedInBar.js";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <LoggedInBar/>
        <Router />
      </BrowserRouter>
    </Provider>
  );
};

export default App;

