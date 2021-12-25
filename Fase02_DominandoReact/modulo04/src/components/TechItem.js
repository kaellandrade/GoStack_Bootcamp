import React from "react";
import PropTypes from "prop-types";

const TechItem = ({ tecnologia, onDelete }) => {
  return (
    <li>
      {tecnologia}
      <button onClick={onDelete} type="button" className="remove" />
    </li>
  );
};
TechItem.defaultProps = {
  tecnologia: "Tecnologia Desconhecida!",
};
TechItem.propTypes = {
  tecnologia: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
};
export default TechItem;
