import React from "react";
import styled from "styled-components";

const Input = () => {
  return (
    <StyledWrapper>
      <input
        type="text"
        name="text"
        className="input"
        placeholder="Search Here....."
      />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .input {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    font-weight: 500;
    font-size: 15px;
    color: #000;
    background-color: #fff;
    box-shadow: 0 0 0.4vw rgba(0, 0, 0, 0.5), 0 0 0 0.15vw transparent;
    border-radius: 30px;
    margin: 3px 0;
    border: 2px solid #000;
    outline: none;
    width: 200px;
    transition: 0.4s;
  }
  ::placeholder {
    color: #393E46;
  }
  .input:hover {
    box-shadow: 0 0 0 0.15vw rgba(135, 207, 235, 0.186);
  }

  .input:focus {
    box-shadow: 0 0 0 0.15vw skyblue;
  }
`;

export default Input;
