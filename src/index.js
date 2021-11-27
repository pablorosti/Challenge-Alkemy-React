import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootswatch/dist/flatly/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./routes/Login";
import { CharacterInfo } from "./components/CharacterInfo";
import { TeamProvider } from "./context/TeamContext";
import { PrivateRoute } from "./components/PrivateRoute";

const Index = () => {
  return (
    <TeamProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <PrivateRoute redirectTo="/login">
                <App />
              </PrivateRoute>
            }
          />
          <Route
            path="/character/:id"
            element={
              <PrivateRoute redirectTo="/login">
                <CharacterInfo />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </TeamProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
