import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import CardsProyectos from "../components/CardsProyectos";
// import CardContacto from '../components/CardContacto'
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-sky-100 min-h-screen">
      <Navbar />
      <div className="flex">
        <div className="mx-auto px-10">
          <h1 className="text-4xl mt-8">
            ¡Hola! soy <span className="font-bold">Máximo</span>, un futuro
            ingeniero de software especializado en el desarrollo de backend.
          </h1>
        </div>
        <div className="mx-auto px-10">
          <p className="text-3xl mt-8">
            "Desarrollo sitios web profesionales y atractivos que cumplen con
            las necesidades específicas de mis clientes, utilizando las últimas
            tecnologías y técnicas de diseño para ofrecer una experiencia única
            y funcional a los usuarios."
          </p>
        </div>
      </div>
      <div className="flex justify-center align-center mt-14">
        <Link to="/contactame">
          <button
            className="bg-blue-900 text-3xl text-white rounded p-2"
            type="button"
          >
            Conóceme
          </button>
        </Link>
      </div>
      <h1 className='text-5xl text-center font-bold mt-[7%]'>Mis proyectos</h1>
      <div className="flex justify-center align-center mt-[3%] mb-[10%]">
        <CardsProyectos />
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
}
