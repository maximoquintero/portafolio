import React from "react";
import Navbar from "../components/Navbar";
import CardContacto from "../components/CardContacto";
import Footer from "../components/Footer";

export default function Contactame() {
  return (
    <div className="bg-sky-100 min-h-screen">
      <div className="">
        <Navbar />
      </div>
      <div className="">
        <CardContacto />
      </div>
      <div className="relative mt-[35%]">
      <Footer />
      </div>
    </div>
  );
}
