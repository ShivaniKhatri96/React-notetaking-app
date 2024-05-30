import { useAppSelector } from "../app/hooks";
const AllNotes = () => {
  const notes = useAppSelector((state) => state.notesList.notes);
  console.log("notes", notes);
  return <div>AllNotes</div>;
};

export default AllNotes;
