import React from "react";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";

const StyledLabel = styled(Typography)({
  fontFamily: "'Montserrat', sans-serif",
  fontSize: "12px",
  fontWeight: 400,
  lineHeight: "14.63px",
  textAlign: "left",
  color: "#757575",
  height: "20px",
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

const Label: React.FC<ILabel> = ({ label, color, size, style }) => {
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

export default Label;
