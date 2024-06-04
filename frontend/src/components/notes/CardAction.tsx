import { IconButton, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { apiInstance } from "../../axios/instance";
import { useAppDispatch } from "../../app/hooks";
import { removeNotes, updateNotePrivacy } from "../../features/notes-slice";

interface actionProps {
  privacy: boolean;
  noteId: string;
  setEditMode: React.Dispatch<React.SetStateAction<string>>;
}
const CardAction = ({ privacy, noteId, setEditMode }: actionProps) => {
  const dispatch = useAppDispatch();
  const [anchorElMenu, setAnchorElMenu] = useState<null | HTMLElement>(null);
  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElMenu(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorElMenu(null);
  };

  const deleteNote = async (noteId: string) => {
    try {
      const response = await apiInstance.delete(`/notes/${noteId}`);
      if (response.status === 200) {
        dispatch(removeNotes(noteId));
        handleCloseMenu();
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleEditMode= (noteId: string) => {
    setEditMode(noteId);
    handleCloseMenu();
  }

  const updatePrivacy = async (noteId: string) => {
    try {
      const response = await apiInstance.put(`/notes/${noteId}`, {
        privacy: !privacy,
      });
      if (response.status === 200) {
        dispatch(updateNotePrivacy(noteId));
        handleCloseMenu();
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <IconButton aria-label="settings" onClick={handleOpenMenu}>
        <MoreVertIcon sx={{ color: "#fff" }} />
      </IconButton>
      <Menu
        sx={{ mt: "40px" }}
        id="menu-note-card"
        anchorEl={anchorElMenu}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElMenu)}
        onClose={handleCloseMenu}
      >
        <MenuItem onClick={() => deleteNote(noteId)}>Delete note</MenuItem>
        <MenuItem onClick={() => handleEditMode(noteId)}>Edit note</MenuItem>
        <MenuItem onClick={() => updatePrivacy(noteId)}>
          {privacy ? "Turn public" : "Turn private"}
        </MenuItem>
      </Menu>
    </>
  );
};

export default CardAction;
