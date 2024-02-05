import { Button, Stack } from "@mui/material";
import React from "react";

export const SaveList = ({ saveList }) => {
  return (
    <Stack direction={"row"} spacing={2}>
      <Button variant="contained" onClick={saveList} fullWidth>
        Save
      </Button>
      <Button variant="outlined" fullWidth>Cancel</Button>
    </Stack>
  );
};
