import { Box, Button, Typography } from "@mui/material";
import Logo from "../assets/logo.png";
import { useAppDispatch } from "../app/hooks";
import { toggleLoginModal } from "../features/loginModal/login-modal-slice";
const WelcomeContent = () => {
  const dispatch = useAppDispatch();

  const clickHandler = () => {
    dispatch(toggleLoginModal());
  };
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        alignItems: { xs: "center", lg: "start" },
      }}
    >
      <Box
        component="img"
        alt="logo"
        sx={{ width: { xs: "15rem", lg: "20rem" } }}
        src={Logo}
      />
      <Typography
        variant="body1"
        sx={{
          fontWeight: 500,
          textAlign: { xs: "center", lg: "left" },
        }}
      >
        Ready to embark on a note-taking journey? <br /> Log in now to get
        started!
      </Typography>
      <Button
        variant="outlined"
        color="inherit"
        sx={{
          width: "8rem",
          border: "solid 2px #000",
          borderRadius: "8px",
        }}
        onClick={clickHandler}
      >
        Log in
      </Button>
    </Box>
  );
};

export default WelcomeContent;
