import React, { Component, Fragment } from "react";
import TechItem from "./TechItem";

class TechList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTech: "",
      techs: [],
    };
  }
  /**
   * Executado assim que o componente aparece em tela.
   */
  componentDidMount() {
    this.setState({
      techs: JSON.parse(localStorage.getItem("techs")),
    });
  }
  /**
   * Executado sempre que houver alterações nas props ou estado.
   */
  componentDidUpdate(prevProps, prevState) {
    if (prevState.techs !== this.state.techs) {
      localStorage.setItem("techs", JSON.stringify(this.state.techs));
    }
  }
  /**
   * Executado quando o componete deixa de existir.
   */
  componentWillUnmount() {}

  removeTech = (key) => {
    this.setState({
      techs: this.state.techs.filter((_, index) => index !== key),
    });
  };

  handleSubmit = (e) => {
    e.preventDefault(); //Evita o compoetante padrão
    this.setState({
      techs: this.state.techs.concat(this.state.newTech),
      newTech: "",
    });
  };
  handleInputChange = (e) => {
    this.setState({ ...this.state, newTech: e.target.value });
  };

  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit}>
          <ul>
            {this.state.techs.map((tecnologia, index) => (
              <TechItem
                key={index}
                tecnologia={tecnologia}
                index={index}
                onDelete={(_) => this.removeTech(index)}
              />
            ))}
          </ul>
          <input
            type="text"
            onChange={this.handleInputChange}
            value={this.state.newTech}
          />
          <button type="submit">Add Tech</button>
        </form>
      </Fragment>
    );
  }
}
export default TechList;
