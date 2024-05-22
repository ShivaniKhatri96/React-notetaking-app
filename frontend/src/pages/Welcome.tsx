import "./Welcome.css";
import PostIt from "../assets/notes.png";
import Logo from "../assets/logo.png";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
const Welcome = () => {
  return (
    <main className="welcome-box">
      <img alt="post-it picture" className="notes-image" src={PostIt} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems: { xs: "center", lg: "start" },
        }}
      >
        <img alt="logo" className="logo-icon" src={Logo} />
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
        >
          Log in
        </Button>
      </Box>
    </main>
  );
};

export default Welcome;
