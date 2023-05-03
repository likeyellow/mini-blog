import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  font-weight: 600;
  border-width: 1px;
  border-radius: 8px;
  cursor: pointer;
`;

function Button(props) {
  const { title, onClick } = props;

  return <StyledButton onClick={onClick}>{title || "botton"}</StyledButton>;
}

export default Button;
