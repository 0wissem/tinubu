import React from "react";
import { Box } from "@mui/material";
import Label from "components/atoms/Text/Label";

interface LabelValuePairProps {
  label: string;
  value: string;
  labelColor?: string;
  valueColor?: string;
}

const LabelValuePair: React.FC<LabelValuePairProps> = ({ label, value }) => {
  return (
    <Box sx={{ mt: "20px" }}>
      <Label label={label} />
      <Label label={value} color={"#000"} />
    </Box>
  );
};

export default LabelValuePair;
