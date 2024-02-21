import React from "react";
import './CardContacto.css'

export default function CardContacto() {
  return (
    <div class="info-box">
      <h2>Informacion de contacto</h2>
      <ul>
        <li>
          <span class="icon">
            <i class="fa fa-home" aria-hidden="true"></i>
          </span>
          <span class="info">
            México, Quintana Roo
            <br />
            Cancún Villas Otoch Paraiso 77539
          </span>
        </li>
        <li>
          <span class="icon">
            <i class="fa fa-phone" aria-hidden="true"></i>
          </span>
          <span class="info">
            <a href="tel:(998)474-1819">(998)474-1819</a>
          </span>
        </li>
        <li>
          <span class="icon">
            <i class="fa fa-envelope" aria-hidden="true"></i>
          </span>
          <span class="info">
            <a href="mailto:mx.quintero.e5@gmail.com">
              mx.quintero.e5@gmail.com
            </a>
          </span>
        </li>
      </ul>
    </div>
  );
}
