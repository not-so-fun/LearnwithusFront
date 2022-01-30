import * as React from "react";
import BeatLoader from "react-spinners/BeatLoader";
import Box from "@mui/material/Box";
interface sizeInter {
  size: number;
  color: string;
}

export const BeatLoaderProgress = ({ size, color }: sizeInter) => {
  return <BeatLoader color={color} size={size} />;
};
