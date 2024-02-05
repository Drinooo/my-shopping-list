import React, { useState } from "react";
import { AddItem } from "./AddItem";
import { Box, IconButton, Stack } from "@mui/material";
import { DeleteIcon } from "./common/Icons";

export const ItemList = ({ items }) => {
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

  const deleteItem = (itemName, itemQuantity) => {
    // Find the item with the given itemName and itemQuantity
    const itemId = newItemName.find(
      (item) => item.name === itemName && item.quan === itemQuantity
    )?.id;

    if (id) {
      // Filter out the item with the given itemId
      setNewItemName(newItemName.filter((item) => item.id !== itemId));
      setNewQuantity(newQuantity.filter((item) => item.id !== itemId));
    }
  };

  return (
    <Box>
      {items.map((item) => (
        <Stack key={item.id} direction={"row"} spacing={2}>
          <AddItem
            itemName={item.name}
            quantity={item.quan}
            onDelete={(itemName, itemQuantity) => deleteItem(itemName, itemQuantity)}
          />
        </Stack>
      ))}
    </Box>
  );
};
