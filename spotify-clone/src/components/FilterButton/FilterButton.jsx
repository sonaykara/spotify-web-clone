import React, { useState } from "react";

const ButtonExample = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  const buttonStyle = (buttonId) => ({
    borderRadius: "999px",
    fontSize: "0.875rem",
    fontWeight: "400",
    padding: "6px 12px",
    cursor: "pointer",
    backgroundColor: activeButton === buttonId ? "#fff" : "#333333",
    color: activeButton === buttonId ? "#000" : "#fff",
    border: "1px solid #ccc",
    transition: "all 0.3s ease",
  });

  return (
    <div style={{ display: "flex", gap: "8px" }}>
      <button style={buttonStyle(1)} onClick={() => handleClick(1)}>
        Popüler Yayınlar
      </button>
      <button style={buttonStyle(2)} onClick={() => handleClick(2)}>
        Albümler
      </button>
      <button style={buttonStyle(3)} onClick={() => handleClick(3)}>
        EP'ler
      </button>
    </div>
  );
};

export default ButtonExample;
