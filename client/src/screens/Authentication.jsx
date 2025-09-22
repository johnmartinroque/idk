import React from "react";
import Login from "../components/authentication/Login";

function Authentication() {
  return (
    <div className="flex flex-col items-center">
      <h1>Authentication</h1>
      <Login className="w-full" />
    </div>
  );
}

export default Authentication;
