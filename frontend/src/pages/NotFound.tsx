import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      404 <Button onClick={() => navigate("/")}>Go back</Button>
    </div>
  );
};

export default NotFound;
