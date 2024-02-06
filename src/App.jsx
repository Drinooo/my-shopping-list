import { Box, Stack, Typography } from "@mui/material";
import "./App.css";
import { useEffect, useState } from "react";
import AddList from "./components/AddList";
import { ItemList } from "./components/ItemList";
import { SaveList } from "./components/SaveList";

function App() {
  const [newListName, setNewListName] = useState([]);
  const [newTypeName, setNewTypeName] = useState([]);
  const [error, setError] = useState("");

  // Load data from local storage on component mount
  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem("shoppingList")) || [];
    setNewListName(storedList);
  }, []);

  // Save data to local storage whenever newListName changes
  useEffect(() => {
    localStorage.setItem("shoppingList", JSON.stringify(newListName));
  }, [newListName]);

  useEffect(() => {
    if (newListName.length === 0 || newTypeName.length === 0) {
      setError("Both List Name and Type must have valid input.");
    } else {
      setError("");
    }
  }, [newListName, newTypeName]);

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

  const handleSave = () => {
    if (newListName.length === 0 || newTypeName.length === 0) {
      setError("Both List Name and Type must have valid input.");
      return;
    }

    localStorage.setItem("shoppingList", JSON.stringify(newListName));
    setError("");
    alert("Shopping list saved!");
  };

  const deleteItem = (id) => {
    setNewListName(newListName.filter((item) => item.id !== id));
    setNewTypeName(newTypeName.filter((item) => item.id !== id));
  };

  return (
    <Stack direction={"column"} spacing={3}>
      <Typography variant="h1" component={"h1"} sx={{ textAlign: "center" }}>
        Shopping List
      </Typography>

      <AddList listName={addList} typeName={addType} />
      <ItemList items={newListName} deleteItem={deleteItem} />
      {error && <Typography color="error">{error}</Typography>}
      <SaveList saveList={handleSave} />
    </Stack>
  );
}

export default App;
