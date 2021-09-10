import React, { Component } from "react";
import Opcion from "./Opcion";

class Opciones extends Component {
  render() {
    return (
      <div className="opciones">
        <Opcion
          key="1"
          letra="A"
          handleClick={this.props.handleClick}
          respuestaOpciones={this.props.respuestaA}
        />
        <Opcion
          key="2"
          letra="B"
          handleClick={this.props.handleClick}
          respuestaOpciones={this.props.respuestaB}
        />
      </div>
    );
  }
}

export default Opciones;
