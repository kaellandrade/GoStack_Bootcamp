import React, { Component, Fragment } from "react";

class TechList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTech: "",
      techs: ["Node.js", "React Js", "React Native"],
    };
  }

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
              <li key={index}>
                {tecnologia}
                <button
                  onClick={(_) => this.removeTech(index)}
                  type="button"
                  className="remove"
                />
              </li>
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
