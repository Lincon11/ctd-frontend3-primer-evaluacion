import React, { Component } from "react";

class Opcion extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="opcion">
        <button
          className="botones"
          id={this.props.letra}
          onClick={this.props.handleClick}
        >
          {this.props.letra}
        </button>
        <h2>{this.props.respuestaOpciones}</h2>
      </div>
    );
  }
}

export default Opcion;
