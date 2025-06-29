import { Link } from "react-router";
import "./ShinyText.css";

const ShinyText = ({ text, disabled = false, speed = 5, className = "" }) => {
  const animationDuration = `${speed}s`;

  return (
    <Link to='/shop'
      className={`shiny-text ${disabled ? "disabled" : ""} ${className} `}
      style={{ animationDuration }}
    >
      {text}
    </Link>
  );
};

export default ShinyText;
