import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import logo from "../../assets/logo.png";
import "./Navbar.css";

// const navItems = ["Home", "About", "Contact"];
const navItems = [
  { name: "My notes", route: "/my-notes", icon: "user" },
  { name: "Log out", route: "/welcome", icon: "right-from-bracket" },
];

const Navbar = () => {
  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "#ffffff",
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          color: "#333333",
        }}
      >
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
    </>
  );
};

export default Navbar;