import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
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
  const [updateContent, setUpdateContent] = useState<string>("");
  const isActive = noteId === editMode;
  const handleClose = () => {
    setEditMode("");
    setUpdateTitle("");
  };
  const handleEdit = () => {
    console.log("edit");
  };

  useEffect(() => {
    setUpdateTitle(title);
    setUpdateContent(content);
  }, []);

  const StyledTextField = styled(TextField)({
    "& fieldset": { border: "none" },
    backgroundColor: "rgba(0, 0, 0, 0.06)",
  });

  return (
    <Dialog fullScreen={fullScreen} open={isActive} onClose={handleClose}>
      <DialogContent>
        <StyledTextField
          id="outlined-title"
          placeholder="Title"
          fullWidth
          size="small"
          value={updateTitle}
          onChange={(e) => setUpdateTitle(e.target.value)}
        />
        <StyledTextField
          id="outlined-content"
          placeholder="Take a note..."
          multiline
          fullWidth
          minRows={15}
          size="small"
          sx={{
            marginTop: "1rem",
          }}
          value={updateContent}
          onChange={(e) => setUpdateContent(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button variant="contained" color="success" type="submit">
          Edit
        </Button>
        <Button color="inherit" onClick={handleClose}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NoteModal;
