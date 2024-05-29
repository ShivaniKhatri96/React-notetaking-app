import { Button, Paper, TextField } from "@mui/material";
import { useState } from "react";

const NoteCreation = () => {
  const [isCreatingNote, setIsCreatingNote] = useState<boolean>(false);

  return (
    <Paper>
      {isCreatingNote && (
        <TextField
          id="outlined-basic"
          placeholder="Title"
          fullWidth
          size="small"
          sx={{ "& fieldset": { border: "none" } }}
        />
      )}

      <TextField
        id="outlined-basic"
        placeholder="Take a note..."
        multiline
        fullWidth
        rows={isCreatingNote ? 4 : 1}
        size="small"
        onClick={() => setIsCreatingNote(true)}
        sx={{ "& fieldset": { border: "none" } }}
      />
      {isCreatingNote && (
        <>
          <Button variant="outlined" color="inherit" size="small">
            Cancel
          </Button>
          <Button variant="contained" color="success" size="small">
            Create
          </Button>
        </>
      )}
    </Paper>
  );
};

export default NoteCreation;
