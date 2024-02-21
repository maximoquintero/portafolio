import React, { useEffect } from "react";
import "./CardsProyectos.css";
import medicamentos from "../img/medicamentos.png";
import taller from "../img/taller.png";
import nutriapp from "../img/nutriapp.png";

export default function CardsProyectos() {
  useEffect(() => {
    const handleSliderNavigation = () => {
      const items = document.querySelectorAll(".item");
      document.querySelector(".slide").appendChild(items[0]);
    };

    const $next = document.querySelector(".next");
    const $prev = document.querySelector(".prev");

    $next.addEventListener("click", handleSliderNavigation);
    $prev.addEventListener("click", handleSliderNavigation);

    return () => {
      $next.removeEventListener("click", handleSliderNavigation);
      $prev.removeEventListener("click", handleSliderNavigation);
    };
  }, []);

  return (
    <div className="container">
      <div className="slide">
        <div
          className="item"
          style={{ backgroundImage: `url(${medicamentos})`, }}
        >
          <div className="content">
            <div className="name">Medicacion</div>
              <div className="max-w-44 text-xl font-bold">Proyecto basado en un horario para llevar un control de los medicamentos ingeridos y proximos a ingerir</div>
              {/* <button className="bg-indigo-800 p-2 rounded text-white">See more</button> */}
          </div>
        </div>
        <div className="item" style={{ backgroundImage: `url(${taller})`, }}>
          <div className="content">
            <div className="name">Taller</div>
              <div className="max-w-44 text-xl font-bold">Proyecto para la gestion de trabajos vigentes o terminados en un taller mecanico</div>
              {/* <button className="bg-indigo-800 p-2 rounded text-white">See more</button> */}
          </div>
        </div>
        <div className="item" style={{ backgroundImage: `url(${nutriapp})`, }}>
          <div className="content">
            <div className="name">Nutriapp</div>
              <div className="max-w-44 text-xl font-bold">Proyecto para gestion y administracion de citas de los nutriologs</div>
              {/* <button className="bg-indigo-800 p-2 rounded text-white">See more</button> */}
          </div>
        </div>
        {/* <div className='item' style={{backgroundImage: 'url(https://i.ibb.co/Bq4Q0M8/img4.jpg)'}}>
          <div className="content">
            <div className="name">Australia</div>
            <div className="des">lorem ipsum</div>
            <button>See more</button>
          </div>
        </div>
        <div className='item' style={{backgroundImage: 'url(https://i.ibb.co/jTQfmTq/img5.jpg)'}}>
          <div className="content">
            <div className="name">Netherland</div>
            <div className="des">lorem ipsum</div>
            <button>See more</button>
          </div>
        </div>
        <div className='item' style={{backgroundImage: 'url(https://i.ibb.co/RNkk6L0/img6.jpg)'}}>
          <div className="content">
            <div className="name">Ireland</div>
            <div className="des">lorem ipsum</div>
            <button>See more</button>
          </div>
        </div> */}
      </div>
      <div className="button">
        <button className="prev">
          <i className="fas fa-arrow-left"></i>
        </button>
        <button className="next">
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
