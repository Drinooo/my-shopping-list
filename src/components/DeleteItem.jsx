import { IconButton } from "@mui/material";
import React from "react";
import { DeleteIcon } from "./common/Icons";

export const DeleteItem = ({ deleteItem }) => {
  return (
    <IconButton onClick={deleteItem}>
      <DeleteIcon />
    </IconButton>
  );
};
