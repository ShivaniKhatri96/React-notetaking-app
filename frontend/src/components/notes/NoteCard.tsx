import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Person from "../../assets/person.png";
import { Box } from "@mui/material";

interface NoteObj {
  content: string;
  privacy: boolean;
  title: string;
  user: string;
  _id: string;
}
interface NoteProps {
  note: NoteObj;
}
const NoteCard = ({ note }: NoteProps) => {
  return (
    <Card sx={{ height: 350 }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{
              bgcolor: "#ffffff",
              boxShadow:
                "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
            }}
            aria-label="user avatar"
            src={Person}
          />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Current user"
        subheader="public"
        sx={{
          bgcolor: "#f6f4f4",
          boxShadow:
            "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
        }}
      />
      <CardContent>
        <Typography variant="body2" sx={{ fontWeight: "700" }} noWrap>
          {note.title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "11",
            WebkitBoxOrient: "vertical",
          }}
        >
          {note.content}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NoteCard;
