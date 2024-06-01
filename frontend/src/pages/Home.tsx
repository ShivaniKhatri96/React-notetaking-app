import { useEffect } from "react";
import AllNotes from "../components/AllNotes";
import Loading from "../components/Loading";
import NoDataMessage from "../components/NoDataMessage";
import NoteCreation from "../components/NoteCreation";
import { fetchNotes } from "../features/notes-slice";
import { useAppDispatch, useAppSelector } from "../app/hooks";

const Home = () => {
  const isLoading = useAppSelector((state) => state.notesList.isLoading);
  const notes = useAppSelector((state) => state.notesList.notes);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchNotes());
  }, [dispatch]);

  return (
    <main className="page-container">
      <NoteCreation />
      {isLoading ? (
        <Loading />
      ) : !notes.length ? (
        <NoDataMessage message={"No notes are currently available"} />
      ) : (
        <AllNotes />
      )}
    </main>
  );
};

export default Home;
