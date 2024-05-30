import { useAppSelector } from "../app/hooks";
import NoteCreation from "../components/NoteCreation";

const Home = () => {
  const notes = useAppSelector((state) => state.notesList.notes);
  console.log("notes", notes);
  return (
    <main className="page-container">
      <NoteCreation />
      home page
    </main>
  );
};

export default Home;
