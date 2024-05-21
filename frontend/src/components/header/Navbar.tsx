import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import LoginIcon from "@mui/icons-material/Login";
import logo from "../../assets/logo.png";
import "./Navbar.css";
import Divider from "@mui/material/Divider";

// const navItems = ["Home", "About", "Contact"];
const navItems = [
  { name: "My notes", route: "/my-notes", icon: "user" },
  { name: "Log out", route: "/welcome", icon: "right-from-bracket" },
];

const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="sticky" className="custom-app-bar">
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <img alt="Notetaking app logo" className="logo" src={logo} />
            <Button color="inherit" sx={{ display: "flex", gap: "0.3rem" }}>
              <LoginIcon /> Login
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Navbar;
