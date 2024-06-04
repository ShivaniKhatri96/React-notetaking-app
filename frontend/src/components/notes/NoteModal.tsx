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
  title: string;
  content: string;
  editMode: string;
  setEditMode: React.Dispatch<React.SetStateAction<string>>;
}

const NoteModal = ({
  noteId,
  title,
  content,
  editMode,
  setEditMode,
}: noteModalProps) => {
  const theme = useTheme();
  //   const dispatch = useAppDispatch();

  // fullScreen is used for modal when screen is below 1200px. So, for smaller screens
  const fullScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const [updateTitle, setUpdateTitle] = useState<string>("");
  const isActive = noteId === editMode;
  const handleClose = () => {
    setEditMode("");
    setUpdateTitle("");
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
            id="outlined-updateTitle-input"
            label="updateTitle"
            type="updateTitle"
            autoComplete="current-updateTitle"
            size="small"
            color="success"
            sx={{ outline: "#000" }}
            value={title}
            onChange={(e) => setUpdateTitle(e.target.value)}
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
