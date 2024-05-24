import { useTheme } from "@mui/material/styles";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  useMediaQuery,
} from "@mui/material";
import { toggleLoginModal } from "../features/loginModal/login-modal-slice";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import LargeLogo from "../assets/largeLogo.png";
import { useState } from "react";

const LoginModal = () => {
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const isActive = useAppSelector((state) => state.loginModal.isActive);

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  // fullScreen is used for modal when screen is below 1200px. So, for smaller screens
  const fullScreen = useMediaQuery(theme.breakpoints.down("lg"));

  const handleClose = () => {
    dispatch(toggleLoginModal());
  };

  const loginFormSubmit = (e: any) => {
    e.preventDefault()
    console.log('submitted')
  }
  return (
    <Dialog fullScreen={fullScreen} open={isActive} onClose={handleClose}>
      <DialogTitle>
        <Box
          component="img"
          alt="logo"
          sx={{
            display: "block",
            margin: "auto",
            width: { xs: "20rem", sm: "35rem", lg: "25rem" },
          }}
          src={LargeLogo}
        />
      </DialogTitle>
      <DialogContent>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginTop: "0.5rem",
          }}
          onSubmit={loginFormSubmit}
        >
          <TextField
            id="outlined-username-input"
            label="Username"
            type="username"
            autoComplete="current-username"
            size="small"
            color="success"
            sx={{ outline: "#000" }}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            size="small"
            color="success"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="contained" color="success" type="submit">
            Log in
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

export default LoginModal;
