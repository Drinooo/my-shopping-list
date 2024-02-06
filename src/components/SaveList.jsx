import { Box, Button, Paper, Stack } from "@mui/material";
import React from "react";

export const SaveList = ({ saveList }) => {
  return (
    <Paper elevation={1}>
      <Button variant="contained" onClick={saveList} fullWidth>
        Save
      </Button>
      <Button variant="outlined" fullWidth>Cancel</Button>
    </Paper>
  );
};
