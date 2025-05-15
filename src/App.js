import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function App() {
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(<FaEyeSlash />);

  const handleClick = () => {
    if (type === "password") {
      setType("text");
      setIcon(<FaEye />);
    } else {
      setType("password");
      setIcon(<FaEyeSlash />);
    }
  };

  return (
    <div className="wrapper">
      <div className="input-fields">
        <input type={type} placeholder="Enter password" />
        <span onClick={handleClick}>{icon}</span>
      </div>
    </div>
  );
}

export default App;