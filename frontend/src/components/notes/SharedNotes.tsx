import { useAppSelector } from "../../app/hooks";
import NoteCard from "./NoteCard";
import NotesContainer from "./NotesContainer";

const SharedNotes = () => {
  const notes = useAppSelector((state) => state.notesList.notes);
  return (
    <NotesContainer title="Shared notes">
      {notes?.map((note: any) => (
        <NoteCard key={note._id} note={note} />
      ))}
    </NotesContainer>
  );
};

export default SharedNotes;
