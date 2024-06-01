import { useAppSelector } from "../app/hooks";
import NoteCard from "./NoteCard";
  
const AllNotes = () => {
  const notes = useAppSelector((state) => state.notesList.notes);
  return (
    <>
      {notes.map((note: any) => (
          <NoteCard key={note._id} note={note} />
      ))}
    </>
  );
};

export default AllNotes;
