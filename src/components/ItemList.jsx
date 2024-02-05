import React, { useState } from "react";
import { AddItem } from "./AddItem";
import { Box, IconButton, Stack } from "@mui/material";
import { DeleteIcon } from "./common/Icons";

export const ItemList = ({ items, deleteItem }) => {
  const [newItemName, setNewItemName] = useState([]);
  const [newQuantity, setNewQuantity] = useState([]);

  const addItem = (name) => {
    const newItem = {
      id: Date.now(),
      name,
    };

    setNewItemName([...newItemName, newItem]);
  };

  const addQuantity = (quan) => {
    const newQuan = {
      id: Date.now(),
      quan,
    };

    setNewQuantity([...newQuantity, newQuan]);
  };

  return (
    <Box>
      {items.map((item) => (
        <Stack key={item.id} direction={"row"} spacing={2}>
          <AddItem itemName={addItem} quantity={addQuantity} />
          <IconButton onClick={() => deleteItem(item.id)}>
            <DeleteIcon />
          </IconButton>
        </Stack>
      ))}
    </Box>
  );
};
