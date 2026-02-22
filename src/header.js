import React from "react";

function Header() {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "60px",
        backgroundColor: "#1e3a8a",
        color: "white",
        display: "flex",
        alignItems: "center",
        padding: "0 20px",
        zIndex: 1000,
        boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
      }}
    >

      {/* Titre */}
      <h1 style={{ fontSize: "20px", margin: 0 }}>Idarati</h1>
    </header>
  );
}

export default Header;