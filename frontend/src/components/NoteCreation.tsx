import { Box, Button, Paper, TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { apiInstance } from "../axios/instance";

const NoteCreation = () => {
  const [isCreatingNote, setIsCreatingNote] = useState<boolean>(false);
  const paperRef: any = useRef(null);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const handleClickOutside = (e: any) => {
    if (
      isCreatingNote &&
      paperRef.current &&
      !paperRef.current.contains(e.target)
    ) {
      emptyNote();
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

  const handleNoteCreation = async () => {
    const privacy: boolean = false;
    try {
      const response = await apiInstance.post("/notes", {
        title,
        content,
        privacy,
      });
      // status code 201: the request has succeeded and new resource has been created
      if (response.status === 201) {
        const data = response.data;
        emptyNote();
        console.log("data", data);
        // addNotes(data)
      }
    } catch (err) {
      console.log(err);
      console.log("not working");
    }
  };

  const emptyNote = () => {
    setTitle("");
    setContent("");
    setIsCreatingNote(false);
  };

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
          id="outlined-title"
          placeholder="Title"
          fullWidth
          size="small"
          sx={{ "& fieldset": { border: "none" } }}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      )}

      <TextField
        id="outlined-content"
        placeholder="Take a note..."
        multiline
        fullWidth
        rows={isCreatingNote ? 4 : 1}
        size="small"
        sx={{ "& fieldset": { border: "none" } }}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        onClick={() => setIsCreatingNote(true)}
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
          <Button
            variant="outlined"
            color="inherit"
            size="small"
            onClick={emptyNote}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="success"
            size="small"
            type="submit"
            onClick={handleNoteCreation}
          >
            Create
          </Button>
        </Box>
      )}
    </Paper>
  );
};

export default NoteCreation;
