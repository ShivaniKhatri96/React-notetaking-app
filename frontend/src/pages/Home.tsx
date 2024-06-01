import { useEffect } from "react";
import Loading from "../components/Loading";
import NoDataMessage from "../components/NoDataMessage";
import NoteCreation from "../components/notes/NoteCreation";
import { fetchNotes } from "../features/notes-slice";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import SharedNotes from "../components/notes/SharedNotes";

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
        <SharedNotes />
      )}
    </main>
  );
};

export default Home;
