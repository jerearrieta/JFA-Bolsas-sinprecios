"use client";

import Cards from "./components/Cards/cards";
import Header from "./components/Header/header";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const onclickMarineras = () => {
    router.push("/marineras");
  };

  const onclickMochilas = () => {
    router.push("/mochilas");
  };

  const onclickManijas = () => {
    router.push("/manijas");
  };

  const onclickFundas = () => {
    router.push("/fundas");
  };

  const onclickFundasBotellas = () => {
    router.push("/fundas-botellas");
  };

  const onClickRegalos = () => {
    router.push("/regalos");
  };

  return (
    <div>
      <Header />
      <div>
        <div>
          <Cards
            image="/marineras.jpeg"
            description="Bolsitas tipo Marineras"
            onClick={onclickMarineras}
          ></Cards>
        </div>
        <div>
          <Cards
            image="/mochilas.jpeg"
            description="Mochilas"
            onClick={onclickMochilas}
          ></Cards>
        </div>
        <div>
          <Cards
            image="/manijas.jpeg"
            description="Totebag"
            onClick={onclickManijas}
          ></Cards>
        </div>
        <div>
          <Cards
            image="/fundas.jpeg"
            description="Fundas para lentes"
            onClick={onclickFundas}
          ></Cards>
        </div>
        <div>
          <Cards
            image="/fundas-botellas.jpeg"
            description="Fundas para botellas"
            onClick={onclickFundasBotellas}
          ></Cards>
        </div>
        <div>
          <Cards
            image="/regalos.jpeg"
            description="Bolsitas para regalos"
            onClick={onClickRegalos}
          ></Cards>
        </div>
      </div>
    </div>
  );
}
