import React from "react";
import "../stylesheets/Testimonio.css"

function Testimonio(props) {
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={require(`../img/testimonio-${props.image}.png`)}
        alt="foto de Emma" />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio"><strong>{props.name}</strong> en {props.country}</p>
        <p className="cargo-testimonio">{props.cargo} en <strong>{props.job}</strong></p>
        <p className="texto-testimonio">"{props.testimonio}"</p>
      </div>
    </div>
  );
}

export default Testimonio;