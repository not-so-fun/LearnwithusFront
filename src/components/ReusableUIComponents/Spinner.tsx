import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
interface sizeInter {
  size: number;
}

export const Progress = ({ size }: sizeInter) => {
  return (
    <CircularProgress
      style={{ color: "green", marginLeft: "12px" }}
      size={size}
    />
  );
};
