"use client";

import { useState } from "react";

export function Contador() {
  const [contador, setContador] = useState(0);

  const handleClick = () => {
    setContador(contador + 1);
  };

  return (
    <div style={{ padding: "20px", border: "1px solid black" }}>
      <p style={{ fontSize: "18px" }}>
        Has hecho click {contador} veces.
      </p>

      <button
        onClick={handleClick}
        style={{
          padding: "10px 15px",
          backgroundColor: "#4caf50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Incrementar
      </button>
    </div>
  );
}
