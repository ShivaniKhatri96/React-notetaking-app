import "./Welcome.css";
import PostIt from "../assets/notes.png";
import { Box } from "@mui/material";
import WelcomeContent from "../components/WelcomeContent";

const Welcome = () => {
  return (
    <Box component="main" className="welcome-box">
      <Box
        component="img"
        alt="post-it picture"
        sx={{ width: { xs: "15rem", lg: "20rem" } }}
        src={PostIt}
      />
      <WelcomeContent />
    </Box>
  );
};

export default Welcome;
