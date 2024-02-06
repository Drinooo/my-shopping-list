import React, { useState } from "react";
import { AddItem } from "./AddItem";
import { Box, IconButton, Paper, Stack, Typography } from "@mui/material";
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
    <Paper elevation={2}>
      <Paper elevation={3}>
        <Typography>Item Name</Typography>
        <Typography>Quantity</Typography>
      </Paper>
      {items.map((item) => (
        <Paper elevation={1} key={item.id}>
          <AddItem itemName={addItem} quantity={addQuantity} />
          <IconButton onClick={() => deleteItem(item.id)}>
            <DeleteIcon />
          </IconButton>
        </Paper>
      ))}
    </Paper>
  );
};
