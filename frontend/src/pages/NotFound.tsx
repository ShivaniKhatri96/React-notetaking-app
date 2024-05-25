import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import NotFoundImg from "../assets/notFoundImg.png";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexGrow: "1",
        gap: "1rem",
      }}
    >
      <Box
        component="img"
        alt="404 image"
        sx={{ width: "12rem" }}
        src={NotFoundImg}
      />
      <Typography sx={{ textAlign: "center" }}>
        Oops! The page you are looking for cannot be found.
      </Typography>
      <Button
        variant="contained"
        onClick={() => navigate("/")}
        color="success"
        size="small"
      >
        Go back to home
      </Button>
    </Box>
  );
};

export default NotFound;
