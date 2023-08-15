import React from "react";
import "./side.css"
import foto from "../../../public/img/fotojpeg.jpeg"

export default function side() {
  return (
    <div className="contacto bg">
      <div className="">
        <div className="imagen">
          <img src={foto} width="250px" height="250px" alt="imagen-de-cv-perfil" />
        </div>
      </div>
      <div className="seccion">
        <h1 className="tloSec">PERFIL</h1>
        <div>
            <h1 className="tloPerfil">Dirección</h1>
            <p>México.</p>
        </div>
        <div>
            <h1 className="tloPerfil">Email</h1>
            <p>karimsitopro@gmail.com</p>
        </div>
        <div>
            <h1 className="tloPerfil">Teléfono</h1>
            <p>+52 1989 1311</p>
        </div>
        <div>
            <h1 className="tloPerfil">Fecha de nacimiento:</h1>
            <p>13/12/1989</p>
        </div>
        <div>
            <h1 className="tloPerfil">Permiso</h1>
            <p>C</p>
        </div>
      </div>
      <div className="seccion">
        <h1 className="tloSec">HABILIDADES</h1>
        <div>
            <p>-Trabajo en equipo</p>
        </div>
      </div>
      <div className="seccion">
        <h1 className="tloSec">IDIOMAS</h1>
        <ul>
            <li>Español</li>
            <li>Inglés</li>
        </ul>
      </div>
      <div className="seccion">
        <h1 className="tloSec">INTERESES</h1>
        <div>
            <p>aprender</p>
        </div>
      </div>
    </div>
  );
}
