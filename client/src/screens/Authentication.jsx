import React from "react";
import Login from "../components/authentication/Login";
import Register from "../components/authentication/Register";

function Authentication() {
  return (
    <div className="flex flex-col items-center">
      <h1>Authentication</h1>
      <Login />
      <Register />
    </div>
  );
}

export default Authentication;
