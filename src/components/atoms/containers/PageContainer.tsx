import { Box } from "@mui/material";
import React, { ReactNode } from "react";

const style = {
  padding: "90px 40px 0 40px",
};

function PageContainer({ children }: { children: ReactNode }) {
  return <div style={style}>{children}</div>;
}

export default PageContainer;
