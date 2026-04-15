import React from "react";

export const Error404 = () => {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center text-center"
      style={{
        minHeight: "80vh",
        background: "linear-gradient(135deg, #e6f4ea, #c8e6c9)",
        padding: "20px",
      }}
    >
      {/* Imagen */}
      <img
        src="/img/Apoloshop.png"
        alt="Apoloshop"
        style={{
          width: "250px",
          maxWidth: "80%",
          marginBottom: "20px",
          borderRadius: "50%",
          boxShadow: "0 4px 15px rgba(46, 125, 50, 0.3)",
          objectFit: "cover",
        }}
      />

      {/* Código 404 */}
      <h1
        style={{
          fontSize: "4rem",
          fontWeight: "bold",
          color: "#2e7d32",
        }}
      >
        404
      </h1>

      {/* Mensaje */}
      <h4 className="mb-3" style={{ color: "#388e3c" }}>
        Ups... esta página no existe 🐶🐱
      </h4>

      <p className="text-muted mb-4" style={{ maxWidth: "400px" }}>
        Parece que te perdiste en el camino. Volvé al inicio y seguí explorando
        nuestros productos para tus mascotas.
      </p>

      {/* Botón */}
      <a href="/" className="btn btn-success px-4 py-2">
        Volver al inicio
      </a>
    </div>
  );
};
