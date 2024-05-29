import { Box, Button, Paper, TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";

const NoteCreation = () => {
  const [isCreatingNote, setIsCreatingNote] = useState<boolean>(false);
  const paperRef: any = useRef(null);

  const handleClickOutside = (e: any) => {
    if (
      isCreatingNote &&
      paperRef.current &&
      !paperRef.current.contains(e.target)
    ) {
      setIsCreatingNote(false);
      //empty the textfield as well..
    }
  };
  useEffect(() => {
    if (isCreatingNote) {
      document.addEventListener("mousedown", handleClickOutside);
      // Clean up function before running new effect
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isCreatingNote]);

  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        alignSelf: "center",
        width: { xs: "100%", lg: "40rem" },
      }}
      elevation={3}
      ref={paperRef}
    >
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
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            gap: "0.5rem",
            padding: "8.5px 14px",
          }}
        >
          <Button variant="outlined" color="inherit" size="small">
            Cancel
          </Button>
          <Button variant="contained" color="success" size="small">
            Create
          </Button>
        </Box>
      )}
    </Paper>
  );
};

export default NoteCreation;
