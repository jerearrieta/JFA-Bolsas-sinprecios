import React from "react";
import CustomTable from "../components/CustomTable/customTable";
import Header from "../components/Header/header";

const headers = ["Medidas"];

const rows = [
  { medidas: "10x10"},
  { medidas: "10x15"},
  { medidas: "15x15"},
  { medidas: "15x20"},
  { medidas: "20x20"},
  { medidas: "20x25"},
  { medidas: "25x25"},
  { medidas: "25x30"},
  { medidas: "30x30"},
  { medidas: "40x40"},
];

const marineras = () => {
    const phoneNumber = "543516808341"; // Reemplaza con tu número de WhatsApp en formato internacional (sin el +)
  const message = "¡Hola! Me comunico para preguntarte sobre: "; // Mensaje predeterminado

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  return (
    <div>
      <Header />
      <h1 className="font-bold text-5xl text-center mt-10">
        BOLSITA TIPO MARINERA
      </h1>
      <CustomTable headers={headers} rows={rows} uniqueKey="name" />
      <p className="font-bold text-3xl text-center mt-10">Podes consultar por precios y medidas personalizadas haciendo click en el boton de abajo!</p>
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

export default marineras;
