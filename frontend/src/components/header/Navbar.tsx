import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import logo from "../../assets/logo.png";
import "./Navbar.css";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { toggleLoginModal } from "../../features/login-modal-slice";
import UserMenu from "./UserMenu";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import { logout } from "../../features/auth-slice";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const token = useAppSelector((state) => state.auth.token);
  const loginModalHandler = () => {
    dispatch(toggleLoginModal());
  };

  const navItems = [
    {
      name: "My notes",
      route: "/my-notes",
      icon: <PersonIcon fontSize="small" />,
    },
    {
      name: "Log out",
      route: "/welcome",
      icon: <LogoutIcon fontSize="small" />,
    },
  ];

  const handleNav = (route: string) => {
    // for log out
    if (route === "/welcome") {
      localStorage.removeItem("noteToken");
      localStorage.removeItem("noteUser");
      dispatch(logout());
    }
    //for all routes
    navigate(route);
  };

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
          <Link to="/">
            <img alt="Notetaking app logo" className="logo" src={logo} />
          </Link>

          {token === null ? (
            <Button
              color="inherit"
              sx={{ display: "flex", gap: "0.3rem" }}
              onClick={loginModalHandler}
            >
              <LoginIcon /> Login
            </Button>
          ) : (
            <UserMenu navItems={navItems} handleNav={handleNav} />
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
