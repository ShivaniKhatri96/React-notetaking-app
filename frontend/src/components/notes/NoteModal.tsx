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
import SaveIcon from "@mui/icons-material/Save";

import { useEffect, useState } from "react";
import { apiInstance } from "../../axios/instance";
import { useAppDispatch } from "../../app/hooks";
import { updateNotes } from "../../features/notes-slice";
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
  const dispatch = useAppDispatch();

  // fullScreen is used for modal when screen is below 1200px. So, for smaller screens
  const fullScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const [updateTitle, setUpdateTitle] = useState<string>("");
  const [updateContent, setUpdateContent] = useState<string>("");
  const isActive = noteId === editMode;

  const resetFields = () => {
    setUpdateTitle(title);
    setUpdateContent(content);
  };
  const handleClose = () => {
    setEditMode("");
    resetFields();
  };

  const handleEdit = async (noteId: string) => {
    try {
      const response = await apiInstance.put(`/notes/${noteId}`, {
        title: updateTitle,
        content: updateContent,
      });
      if (response.status === 200) {
        dispatch(updateNotes({ noteId, updateTitle, updateContent }));
        setEditMode("");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    resetFields();
  }, []);

  return (
    <Dialog fullScreen={fullScreen} open={isActive} onClose={handleClose}>
      <DialogContent>
        <TextField
          id="outlined-title"
          placeholder="Title"
          fullWidth
          size="small"
          sx={{
            "& fieldset": { border: "none" },
            backgroundColor: "rgba(0, 0, 0, 0.06)",
          }}
          value={updateTitle}
          onChange={(e) => setUpdateTitle(e.target.value)}
        />
        <TextField
          id="outlined-content"
          placeholder="Take a note..."
          multiline
          fullWidth
          minRows={15}
          size="small"
          sx={{
            "& fieldset": { border: "none" },
            backgroundColor: "rgba(0, 0, 0, 0.06)",
            marginTop: "1rem",
          }}
          value={updateContent}
          onChange={(e) => setUpdateContent(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          size="small"
          color="success"
          type="submit"
          disabled={!updateContent.length}
          onClick={() => handleEdit(noteId)}
        >
          <SaveIcon sx={{ fontSize: "1rem", marginRight: "0.2rem" }} />
          Save
        </Button>
        <Button
          variant="outlined"
          size="small"
          color="inherit"
          onClick={handleClose}
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NoteModal;
