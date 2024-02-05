import { Box, Typography } from "@mui/material";
import "./App.css";
import { useState } from "react";
import AddList from "./components/AddList";
import { ItemList } from "./components/ItemList";

function App() {
  const [newListName, setNewListName] = useState([]);
  const [newTypeName, setNewTypeName] = useState([]);

  const addList = (list) => {
    const newList = {
      id: Date.now(),
      list,
    };

    setNewListName([...newListName, newList]);
  };

  const addType = (type) => {
    const newType = {
      id: Date.now(),
      type,
    };

    setNewTypeName([...newTypeName, newType]);
  };

  return (
    <Box>
      <Typography>Shopping List</Typography>
      <AddList listName={addList} typeName={addType} />
      <ItemList items={newListName} />
    </Box>
  );
}

export default App;
