import NoteCard from "./NoteCard";
import NotesContainer from "./NotesContainer";

interface NoteItem {
  content: string;
  privacy: boolean;
  title: string;
  user: string;
  _id: string;
}
interface notesProps {
  filteredNotes: NoteItem[];
}

const UserNotes = ({ filteredNotes }: notesProps) => {
  return (
    <NotesContainer title="My notes">
      {filteredNotes?.map((note: any) => (
        <NoteCard key={note._id} note={note} />
      ))}
    </NotesContainer>
  );
};

export default UserNotes;
