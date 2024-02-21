import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="px-5 bg-gray-200 h-full">
      <div className="flex flex-col md:flex-row gap-[30%] border-b pb-10 border-gray-400">
        <div className="pt-10 pb-5">
          <h6 className="text-2xl text-gray-700">Páginas</h6>
          <Link to="/">
            <p className="pt-3">Inicio</p>
          </Link>
          {/* <Link to="/sobre-mi">
            <p>Sobre mi</p>
          </Link> */}
          <Link to="/proyectos">
            <p>Projectos</p>
          </Link>
          {/* <Link to="/experiencias">
            <p>Experiencia</p>
          </Link> */}
        </div>
        <div className="pt-10 pb-5">
          <h6 className="text-2xl text-gray-700">Servicios</h6>
        </div>
        <div className="flex items-center justify-center bg-black rounded-[10%] px-5 py-1">
          <Link to="/contactame">
            <h1 className="text-3xl text-white">Contáctate conmigo</h1>
          </Link>
        </div>
      </div>
      <div>
        <p className="pl-10 py-5">© 2024 - Todos los derechos reservados</p>
      </div>
    </div>
  );
}
