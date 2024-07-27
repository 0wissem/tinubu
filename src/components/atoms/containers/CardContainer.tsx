import { Box } from "@mui/material";
import React, { ReactNode } from "react";

const sx = {
  boxShadow:
    "0px 1px 3px 0px #0000001f, 0px 1px 1px 0px #00000024, 0px 2px 1px -1px #00000033",
  padding: "16px",
  backgroundColor: "white",
  borderRadius: "4px",
};

function CardContainer({ children }: { children: ReactNode }) {
  return <Box sx={sx}>{children}</Box>;
}

export default CardContainer;
