import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";

interface containerProps {
  title: string;
  children: ReactNode;
}
const NotesContainer = ({ title, children }: containerProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <Typography
        variant="caption"
        sx={{
          fontWeight: "700",
          textTransform: "uppercase",
          color: "#777777",
        }}
      >
        {title}
      </Typography>
      <div className="all-cards">{children}</div>
    </Box>
  );
};

export default NotesContainer;
