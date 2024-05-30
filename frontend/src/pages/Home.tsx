import AllNotes from "../components/AllNotes";
import Loading from "../components/Loading";
import NoDataMessage from "../components/NoDataMessage";
import NoteCreation from "../components/NoteCreation";

const Home = () => {
  return (
    <main className="page-container">
      <NoteCreation />
      {/* add `loading` and `NoDataMessage` */}
      {/* <Loading /> */}
      {/* <NoDataMessage message={"No notes are currently available"} /> */}
      <AllNotes />
    </main>
  );
};

export default Home;
