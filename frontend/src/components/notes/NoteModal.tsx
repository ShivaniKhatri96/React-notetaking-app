import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
// import { useAppDispatch } from "../../app/hooks";

interface noteModalProps {
  noteId: string;
  editMode: string;
  setEditMode: React.Dispatch<React.SetStateAction<string>>;
}

const NoteModal = ({ noteId, editMode, setEditMode }: noteModalProps) => {
  const theme = useTheme();
  //   const dispatch = useAppDispatch();

  // fullScreen is used for modal when screen is below 1200px. So, for smaller screens
  const fullScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const [title, setTitle] = useState<string>("");
  const isActive = noteId === editMode;
  const handleClose = () => {
    setEditMode("");
    setTitle("");
  };
  const handleEdit = () => {
    console.log("edit");
  };
  return (
    <Dialog fullScreen={fullScreen} open={isActive} onClose={handleClose}>
      <DialogContent>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginTop: "0.5rem",
          }}
          onSubmit={handleEdit}
        >
          <TextField
            id="outlined-title-input"
            label="title"
            type="title"
            autoComplete="current-title"
            size="small"
            color="success"
            sx={{ outline: "#000" }}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Button variant="contained" color="success" type="submit">
            Edit
          </Button>
        </Box>
      </DialogContent>
      {fullScreen && (
        <DialogActions>
          <Button color="inherit" onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      )}
    </Dialog>
  );
};

export default NoteModal;
