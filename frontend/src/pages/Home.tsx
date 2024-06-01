import { useEffect } from "react";
import AllNotes from "../components/AllNotes";
import Loading from "../components/Loading";
import NoDataMessage from "../components/NoDataMessage";
import NoteCreation from "../components/NoteCreation";
import { fetchNotes } from "../features/notes-slice";
import { useAppDispatch } from "../app/hooks";

const Home = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchNotes());
  }, [dispatch]);

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
