import React, { Component } from "react";
import Historia from "./Historia";
import Opciones from "./Opciones";
import Recordatorio from "./Recordatorio";
import data from "./data.json";

let historialLetra = [];

class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      indice: 0,
      preguntaI: {
        id: "",
        historia: "",
        opciones: {
          a: "",
          b: "",
        },
      },
      eleccionAnterior: "",
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.setState({
      indice: 2,
      preguntaI: data[0],
    });
  }

  handleClick(e) {
    let letra = e.target.id;
    letra = letra.toLowerCase();
    historialLetra.push(letra.toUpperCase());

    if (this.state.indice < 6) {
      this.setState({
        eleccionAnterior: letra,
        indice: this.state.indice + 1,
        preguntaI:
          data[
            data.findIndex((elemento) => {
              return elemento.id === this.state.indice + letra;
            })
          ],
      });
    } else {
      alert("Fin.");
    }
  }
  render() {
    return (
      <div className="layout">
        <Historia textoHistoria={this.state.preguntaI.historia} />
        <Opciones
          handleClick={this.handleClick}
          respuestaA={this.state.preguntaI.opciones.a}
          respuestaB={this.state.preguntaI.opciones.b}
        />
        <Recordatorio
          letrica={this.state.eleccionAnterior}
          historialLetra={historialLetra}
        />
      </div>
    );
  }
}

export default Layout;
