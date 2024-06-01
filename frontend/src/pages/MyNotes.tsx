import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import Loading from "../components/Loading";
import NoDataMessage from "../components/NoDataMessage";
import UserNotes from "../components/notes/UserNotes";
import { fetchNotes } from "../features/notes-slice";

const MyNotes = () => {
  const isLoading = useAppSelector((state) => state.notesList.isLoading);
  const notes = useAppSelector((state) => state.notesList.notes);
  const user = useAppSelector((state) => state.auth.user);
  const filteredNotes = notes?.filter((item) => item.user === user?.userId);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchNotes());
  }, [dispatch]);

  return (
    <main className="page-container">
      {isLoading ? (
        <Loading />
      ) : !filteredNotes.length ? (
        <NoDataMessage message={"You haven't created notes yet"} />
      ) : (
        <UserNotes filteredNotes={filteredNotes} />
      )}
    </main>
  );
};

export default MyNotes;
