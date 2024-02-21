import React from "react";
import { Link } from "react-router-dom";
import miFoto from '../img/miFoto.jpeg';
import linkedin from "../img/linkedin.png";
import facebook from "../img/facebook.png";
import gmail from "../img/gmail.png";

export default function Navbar() {
  return (
    <div className="flex gap-[10%] py-7 px-10">
      <header className="">
        <Link>
          <img
            className="w-12 h-12 object-cover rounded-[100%]"
            src={miFoto}
            // src="https://scontent.fcun2-1.fna.fbcdn.net/v/t39.1997-6/376882415_323330726939019_1454482831291433557_n.webp?stp=dst-png_s168x128&_nc_cat=109&ccb=1-7&_nc_sid=ba09c1&_nc_ohc=4lVJaFrxub4AX_Ja3Rs&_nc_ht=scontent.fcun2-1.fna&oh=00_AfBf9PHfLMks1VRS_ZsmAzNERTeTmmGROcuEDyrOV79cmg&oe=65D5AC2E"
            alt="Avatar-face"
          />
        </Link>
      </header>
      <div className="flex gap-28">
        <Link to='/'><b>Inicio</b></Link>
        {/* <Link to='/sobre-mi'><b>Sobre mi</b></Link> */}
        <Link to='/proyectos'><b>Projectos</b></Link>
        <Link to='/contactame'><b>Mi contacto</b></Link>
      </div>
      <div className="flex gap-10">
        <Link to='https://linkedin.com/in/maximo-quintero-4063352b4'><img className="w-12 h-12" src={linkedin} alt="Linkedin" /></Link>
        <Link to='https://www.facebook.com/max.quintero.71465'><img className="w-12 h-12" src={facebook} alt="Facebook" /></Link>
        <Link to="mailto:mx.quintero.e5@gmail.com"><img className="w-12 h-12" src={gmail} alt="Gmail" /></Link>
      </div>
    </div>
  );
}
