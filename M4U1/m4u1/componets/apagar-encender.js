"use client";

import { useState } from "react";

export function BotonLuz() {
  const [isOn, setIsOn] = useState(true);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <button onClick={handleToggle}
    style={{
          padding: "10px 15px",
          backgroundColor: "#4caf50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",}}>
      {isOn ? "Encendido" : "Apagado"}
    </button>
  );
}
