import {
  Box,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { QUANTITY } from "../config/data";
import { DeleteIcon } from "./common/Icons";

export const AddItem = ({ itemName, quantity, onDelete }) => {
  const [newItemName, setNewItemName] = useState("");
  const [newQuantity, setNewQuantity] = useState("");

  const handleItemName = (e) => {
    setNewItemName(e.target.value);
  };

  const handleQuantity = (e) => {
    setNewQuantity(e.target.value);
  };

  const handleAddItem = () => {
    itemName(newItemName);
    quantity(newQuantity);
    // Optionally, you can reset the input fields after adding an item
    setNewItemName("");
    setNewQuantity("");
  };

  return (
    <Box>
      <Stack direction={"row"} spacing={2}>
        <FormControl fullWidth>
          <TextField
            id="filled-basic"
            label="Item Name"
            variant="filled"
            value={newItemName}
            onChange={handleItemName}
          />
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Quantity</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={newQuantity}
            label="Quantity"
            onChange={handleQuantity}
          >
            {QUANTITY.map((item) => (
              <MenuItem value={item.quantity}>{item.quantity}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <IconButton onClick={() => onDelete(newItemName, newQuantity)}>
          <DeleteIcon />
        </IconButton>
      </Stack>
    </Box>
  );
};
