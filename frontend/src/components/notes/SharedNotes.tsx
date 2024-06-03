import { useAppSelector } from "../../app/hooks";
import NoteCard from "./NoteCard";
import NotesContainer from "./NotesContainer";

const SharedNotes = () => {
  const notes = useAppSelector((state) => state.notesList.notes);
  const authUser = useAppSelector((state) => state.auth.user);
  const filteredNotes = notes?.filter(item => item.privacy === false || item.user === authUser?.userId)
  return (
    <NotesContainer title="Shared notes">
      {filteredNotes?.map((note: any) => (
        <NoteCard
          key={note._id}
          note={note}
        />
      ))}
    </NotesContainer>
  );
};

export default SharedNotes;
