import React from "react";
import Header from "../components/Header/header";

const contacto = () => {
  const phoneNumber = "543516808341"; // Reemplaza con tu número de WhatsApp en formato internacional (sin el +)
  const message = "¡Hola! Me comunico para preguntarte sobre: "; // Mensaje predeterminado

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div>
      <Header />
      <h1 className="font-bold text-5xl text-center mt-10">Contacto</h1>
      <p className="text-center font-bold text-2xl mt-5">
        Si tienes alguna pregunta, no dudes en ponerte en
        contacto conmigo por WhatsApp!
      </p>

      <div className="mt-10 flex justify-center">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: "10px 20px",
            backgroundColor: "#25D366", // Color verde de WhatsApp
            color: "#fff",
            fontSize: "16px",
            borderRadius: "5px",
            textDecoration: "none",
          }}
        >
          Enviar mensaje por WhatsApp
        </a>
      </div>
    </div>
  );
};

export default contacto;
