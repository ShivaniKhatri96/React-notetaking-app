import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { purple } from "@mui/material/colors";
import { useAppSelector } from "../../app/hooks";

interface NavItem {
  name: string;
  route: string;
  icon: any;
}

interface NavProps {
  navItems: NavItem[];
  handleNav: (route: string) => void;
}

const HamburgerMenu = ({ navItems, handleNav }: NavProps) => {
  const user = useAppSelector((state) => state.auth.user);
  const drawerWidth = 240;
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle}>
      <Typography
        variant="h6"
        sx={{
          my: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.5rem",
        }}
      >
        <AccountCircleRoundedIcon
          sx={{ color: purple[200] }}
          fontSize="large"
        />
        {user?.username}
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.name}
            disablePadding
            onClick={() => {
              handleNav(item.route);
              handleDrawerToggle();
            }}
          >
            <ListItemButton>
              <ListItemIcon
                sx={{
                  color: "inherit",
                  paddingRight: "0.5rem",
                  minWidth: "auto",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ mr: 2, display: { lg: "none" } }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", lg: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default HamburgerMenu;
