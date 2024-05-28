import {
  Box,
  Button,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useAppSelector } from "../../app/hooks";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { purple } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

interface NavItem {
  name: string;
  route: string;
  icon: any;
}

interface NavProps {
  navItems: NavItem[];
  handleNav: (route: string) => void;
}

const UserMenu = ({ navItems, handleNav }: NavProps) => {
  const user = useAppSelector((state) => state.auth.user);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ display: { xs: "none", lg: "block" } }}>
      <Tooltip title="Open user settings">
        <Button
          color="inherit"
          onClick={handleOpenUserMenu}
          sx={{ display: "flex", gap: "0.2rem" }}
        >
          <AccountCircleRoundedIcon
            sx={{ color: purple[200], fontSize: "26px" }}
          />
          <Typography fontWeight={500} textTransform={"capitalize"}>
            {user?.username}
          </Typography>
          {!!anchorElUser ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </Button>
      </Tooltip>
      <Menu
        sx={{ mt: "40px", display: { xs: "none", lg: "block" } }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {navItems.map((item) => (
          <MenuItem
            key={item.name}
            onClick={() => {
              handleNav(item.route);
              handleCloseUserMenu();
            }}
            sx={{ display: "flex", alignItems: "center", gap: "0.3rem" }}
          >
            {item.icon}
            <Typography>{item.name}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default UserMenu;
