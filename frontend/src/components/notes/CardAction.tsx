import { IconButton, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface actionProps {
  privacy: boolean;
}
const CardAction = ({ privacy }: actionProps) => {
  const [anchorElMenu, setAnchorElMenu] = useState<null | HTMLElement>(null);
  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElMenu(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorElMenu(null);
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
        <MenuItem onClick={handleCloseMenu}>Delete note</MenuItem>
        <MenuItem onClick={handleCloseMenu}>Edit note</MenuItem>
        <MenuItem onClick={handleCloseMenu}>
          {privacy ? "Turn public" : "Turn private"}
        </MenuItem>
      </Menu>
    </>
  );
};

export default CardAction;
