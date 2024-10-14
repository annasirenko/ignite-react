import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// REDUX SETUP
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import { Provider } from "react-redux";
import { thunk } from "redux-thunk";
import { HashRouter } from "react-router-dom";

const store = configureStore({
  reducer: rootReducer, // Passed correctly
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk), // Applying thunk middleware
  // devTools: window.__REDUX_DEVTOOLS_EXTENSION__(), // Enabling Redux DevTools
  devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // Enabling Redux DevTools
  // devTools: window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
