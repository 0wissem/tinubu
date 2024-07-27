import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import React from "react";

const StyledLabel = styled(Typography)({
  fontFamily: "'Roboto', sans-serif",
  fontSize: "24px",
  fontWeight: 400,
  lineHeight: "32.02px",
  textAlign: "left",
  color: "#000",
  height: "32px",
  display: "flex",
  alignItems: "center",
  textTransform: "capitalize",
});

interface ILabel {
  label: string;
  color?: string;
  size?: string;
  style?: React.CSSProperties | undefined;
}

const Title: React.FC<ILabel> = ({ label, color, size, style }) => {
  return (
    <StyledLabel
      style={{
        color: color,
        fontSize: size,
        ...style,
      }}
    >
      {label}
    </StyledLabel>
  );
};

export default Title;
