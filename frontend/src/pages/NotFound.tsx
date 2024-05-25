import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import NotFoundImg from "../assets/notFoundImg.png";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="image-wrapper">
      <img alt="404 image" width={180} src={NotFoundImg} />
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
    </div>
  );
};

export default NotFound;
