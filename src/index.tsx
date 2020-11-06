import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "normalize.css";
import reportWebVitals from "./reportWebVitals";
import { theme } from "./themes";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import store from "./app/store";
import { HashRouter } from "react-router-dom";

const render = () => {
  const App = require("./app/App").default;

  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <HashRouter>
            <App />
          </HashRouter>
        </ThemeProvider>
      </Provider>
    </React.StrictMode>,
    document.getElementById("root"),
  );
};

render();

if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("./app/App", render);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
