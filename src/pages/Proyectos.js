import React from "react";
import Navbar from "../components/Navbar";
import CardsProyectos from "../components/CardsProyectos";
import Footer from "../components/Footer";

export default function Proyectos() {
  return (
    <div className="bg-sky-100 min-h-screen">
      <Navbar />
      <h1 className='text-5xl text-center font-bold mt-10'>Mis proyectos</h1>
      <div className="flex justify-center align-center mt-[5%] mb-[10%]">
        <CardsProyectos />
      </div>
      <Footer />
    </div>
  );
}
