import React from "react";
import '../side/side.css'
import './section.css'

export default function section() {
  return (
    <div className="d-flex flex-column sctn p-3">
        <div>
            <h1 className="nombre">Valenzuela Gonzalez Karim</h1>
            <h2>Ingeniero de Software</h2>
            <p>Quiero mejorar mis conocimientos y habilidades como programador.</p>
        </div>
        <div className="d-flex flex-column  w-75" id="experiencia">
            <h1 className="tloSec d-flex flex-row flex-wrap">EXPERIENCIA PROFESIONAL</h1>
            <div className="d-flex flex-row">
                <div className="years fs-3 w-25">
                    2019 <br />
                    2021
                </div>
                <div className="empresa w-75">
                    <h2>Misionero de tiempo completo- La Iglesia de Jesucristo de los Santos de los Últimos Días</h2>
                    <p>Servía como misionero de tiempo completo con compañeros de otros países para ser misionero en un lugar fuera de mi país.</p>
                </div>
            </div>
            <div className="d-flex flex-row">
                <div className="years fs-3 w-25">
                    2021 <br />
                    2022
                </div>
                <div className="empresa w-75">
                    <h2>Auxiliar Contable - Astorga Yañez y Rodriguez</h2>
                    <p>Contribuía en la empresa a realizar sus contabilidades, utilizando herramientas como contpaq, miAdminXML, SUA, DIOT, Excel. Realizaba actividades como provisionar egresos e ingresos, capturar ingresos y egresos, actualizar trabajadores, subir DIOTS.</p>
                </div>
            </div>
        </div>
        <div className="d-flex flex-column w-75" id="educacion">
            <h1 className="tloSec d-flex flex-row flex-wrap">EDUCACIÓN</h1>
            <div className="d-flex flex-row">
                <div className="years fs-3 w-25">
                    2016 <br />
                    2019
                </div>
                <div className="empresa w-75">
                    <h2>BACHILLERATO - Universidad Tecmilenio Campus Culiacán</h2>
                    <p>Bachillerato</p>
                </div>
            </div>
            <div className="d-flex flex-row wrap">
                <div className="years fs-3 w-25 flex flex-wrap">
                    Mayo - <br /> Noviembre 2023
                </div>
                <div className="empresa w-75">
                    <h2>CERTIFICADO - FUNVAL</h2>
                    <p>Desarrollador Web Full Stack</p>
                </div>
            </div>
            <div className="d-flex flex-row">
                <div className="years fs-3 w-25">
                    
                </div>
                <div className="empresa w-75">
                    
                </div>
            </div>

        </div>
    </div>
  );
}
