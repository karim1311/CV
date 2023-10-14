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
            <p>Lomas del Pedregal, 80016,Culiacán, Sinaloa,México.</p>
        </div>
        <div>
            <h1 className="tloPerfil">Email</h1>
            <p>valenzuelakarim03@gmail.com</p>
        </div>
        <div>
            <h1 className="tloPerfil">Teléfono</h1>
            <p>+52 667 423 7848</p>
        </div>
        <div>
            <h1 className="tloPerfil">Fecha de nacimiento:</h1>
            <p>03/08/2001</p>
        </div>
        <div>
            <h1 className="tloPerfil">Permiso</h1>
            <p>C</p>
        </div>
      </div>
      <div className="seccion">
        <h1 className="tloSec">HABILIDADES</h1>
        <div>
            <p>-React</p>
            <p>-Next.js</p>
            <p>-Javascript</p>
            <p>-Bootsrap</p>
            <p>-Git</p>
            <p>-GitHub</p>
            <p>-Vercel</p>
            <p>-CSS</p>
            <p>-PHP</p>
            <p>-Tailwind</p>
            <p>-Laravel</p>
            <p>-MySQL</p>
            <p>-DBeaver</p>
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
            <p>-Dominar algoritmos y estructura de datos</p>
            <p>-Contribuir a creación y mantenimiento de aplicaciones extensas.</p>
        </div>
      </div>
    </div>
  );
}
