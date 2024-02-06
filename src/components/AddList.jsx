import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { TYPES } from "../config/data";

const AddList = ({ listName, typeName }) => {
  const [newListName, setNewListName] = useState();
  const [newTypeName, setNewTypeName] = useState();

  const handleListName = (e) => {
    setNewListName(e.target.value);
  };

  const handleTypeName = (e) => {
    setNewTypeName(e.target.value);
  };

  const handleAddList = () => {
    if (newListName.trim() === "" || newTypeName.trim() === "") return;
    listName(newListName);
    typeName(newTypeName);
    setNewListName(newListName);
    setNewTypeName(newTypeName);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Paper elevation={1}>
        <FormControl fullWidth>
          <TextField
            id="filled-basic"
            label="List Name"
            variant="filled"
            value={newListName}
            onChange={handleListName}
          />
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={newTypeName}
            label="Type"
            onChange={handleTypeName}
          >
            {TYPES.map((item) => (
              <MenuItem value={item.type}>{item.type}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Paper>
      <Box>
        <Button onClick={handleAddList} variant="contained" fullWidth>
          Add An Item
        </Button>
      </Box>
    </Box>
  );
};

export default AddList;
