import PostIt from "../assets/notes.png";
import { Box } from "@mui/material";
import WelcomeContent from "../components/WelcomeContent";
import LoginModal from "../components/LoginModal";

const Welcome = () => {
  return (
    <>
      <LoginModal />
      <Box
        component="main"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          justifyContent: "center",
          alignItems: "center",
          flexGrow: "1",
          gap: "1.5rem",
        }}
      >
        <Box
          component="img"
          alt="post-it picture"
          sx={{ width: { xs: "15rem", lg: "20rem" } }}
          src={PostIt}
        />
        <WelcomeContent />
      </Box>
    </>
  );
};

export default Welcome;
