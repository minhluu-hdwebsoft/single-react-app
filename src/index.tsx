import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { AuthorProvider } from "./context";
import { Provider } from "react-redux";
import { store } from "app/redux/store";
// import { store } from "app/redux-toolkit/store";

ReactDOM.render(
  <Provider store={store}>
    <AuthorProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthorProvider>
  </Provider>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
