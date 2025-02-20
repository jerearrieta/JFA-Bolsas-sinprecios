import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="bg-black h-20 text-white flex justify-between font-bold text-2xl items-center px-10">
      <div>
        <h1>
          <Link href="/">JFA Bolsas</Link>
        </h1>
      </div>
      <div>
        <nav className="flex gap-5">
          <Link href="/">Inicio</Link>
          <Link href="/contacto">Contacto</Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
