import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { QUANTITY, TYPES } from "../config/data";

const AddList = ({ listName, typeName }) => {
  const [newListName, setNewListName] = useState("");
  const [newTypeName, setNewTypeName] = useState("");

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
    setNewListName("");
    setNewTypeName("");
  };

  return (
    <Box>
      <Stack direction={"row"} spacing={2}>
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
      </Stack>
      <Stack direction={"row"} spacing={2}>
        <Button onClick={handleAddList} variant="contained" fullWidth>Add An Item</Button>
      </Stack>
    </Box>
  );
};

export default AddList;
