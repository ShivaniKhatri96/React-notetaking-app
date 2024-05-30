import { Typography } from "@mui/material";
import NoData from "../assets/girlChilling.png";

interface messageProps {
  message: string;
}
const NoDataMessage = ({ message }: messageProps) => {
  return (
    <div className="image-wrapper">
      <img
        alt="Image shown to represent no notes are present"
        width={200}
        src={NoData}
      />
      <Typography variant="body2" textAlign={"center"}>
        {message}. Create a new note to display here
      </Typography>
    </div>
  );
};

export default NoDataMessage;
