import React, { useState } from "react";
import Login from "../components/authentication/Login";
import Register from "../components/authentication/Register";

function Authentication() {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <div className="flex flex-col items-center">
      <h1 className="mb-4">Authentication</h1>

      {showLogin ? (
        <>
          <Login onSwitch={() => setShowLogin(false)} />
        </>
      ) : (
        <Register onSwitch={() => setShowLogin(true)} />
      )}
    </div>
  );
}

export default Authentication;
