import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Person from "../../assets/person.png";
import { useAppSelector } from "../../app/hooks";
import { purple } from "@mui/material/colors";
import LockIcon from "@mui/icons-material/Lock";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

interface NoteObj {
  content: string;
  privacy: boolean;
  title: string;
  user: string;
  noteCreator: string;
  _id: string;
}
interface NoteProps {
  note: NoteObj;
}
const NoteCard = ({ note }: NoteProps) => {
  // only loggedInUser should be able to edit, delete or make a note private
  const authUser = useAppSelector((state) => state.auth.user);
  const isAuthUser = authUser?.userId === note.user;
  return (
    <Card sx={{ height: 350, color: "#333333" }}>
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
          isAuthUser && (
            <IconButton aria-label="settings">
              <MoreVertIcon sx={{ color: "#fff" }} />
            </IconButton>
          )
        }
        title={
          <Typography variant="body2" sx={{ fontWeight: "bold" }}>
            {note.noteCreator}
          </Typography>
        }
        // subheader style needs to be updated
        subheader={
          <Typography
            variant="caption"
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {note.privacy ? (
              <LockIcon fontSize="inherit" />
            ) : (
              <PeopleAltIcon fontSize="inherit" />
            )}
            . {note.privacy ? "Private" : "Public"} Note
          </Typography>
        }
        sx={{
          bgcolor: isAuthUser ? purple[200] : "#f3f0f0",
          color: isAuthUser && "#ffffff",
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
