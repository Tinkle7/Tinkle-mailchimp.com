import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

function Button({ type }) {
  const styles = {
    backgroundColor: "none",
  };

  switch (type) {
    case "Sign Up":
      styles.backgroundColor = "#ffe01b";
      break;
    case "See all plan details":
      styles.backgroundColor = "#ffe01b";
      break;
    default:
      styles.backgroundColor = "none";
  }
  return (
    <Link to="/signup">
      <button style={styles} className="btn_animation">
        {type}
      </button>
    </Link>
  );
}

export default Button;
