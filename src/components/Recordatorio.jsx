import React, { Component } from "react";

class Recordatorio extends Component {
  render() {
    return (
      <div className="recordatorio">
        <h3>Seleccion anterior: {this.props.letrica.toUpperCase()} </h3>
        <h4>Historial de opciones elegidas</h4>
        <ul>
          {this.props.historialLetra.map((e, i) => {
            return <li key={i + 7}>{e.toUpperCase()}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Recordatorio;
