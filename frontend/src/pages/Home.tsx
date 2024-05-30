import AllNotes from "../components/AllNotes";
import NoteCreation from "../components/NoteCreation";

const Home = () => {
  return (
    <main className="page-container">
      <NoteCreation />
      home page
      {/* add `loading` and `NoDataMessage` */}
      <AllNotes />
    </main>
  );
};

export default Home;
