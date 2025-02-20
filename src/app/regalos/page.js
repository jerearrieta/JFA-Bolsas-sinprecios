import React from "react";
import CustomTable from "../components/CustomTable/customTable";
import Header from "../components/Header/header";

const headers = ["Medidas"];

const rows = [
  { medidas: "10x15"},
  { medidas: "15x20"},
];

const regalos = () => {
  const phoneNumber = "543516808341"; // Reemplaza con tu número de WhatsApp en formato internacional (sin el +)
  const message = "¡Hola! Me comunico para preguntarte sobre: "; // Mensaje predeterminado

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  return (
    <div>
      <Header />
      <h1 className="font-bold text-5xl text-center mt-10">Bolsitas para regalos</h1>
      <CustomTable headers={headers} rows={rows} uniqueKey="name" />
      <p className="font-bold text-3xl text-center mt-10">
        Unicas 2 medidas disponible!
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
          Consultar por WhatsApp
        </a>
      </div>
    </div>
  );
};

export default regalos;
