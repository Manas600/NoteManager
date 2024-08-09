import { NoteList } from "containers/NoteList";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import s from "./style.module.css";
import { SearchBar } from "components/SearchBar/SearchBar";
import { useState } from "react";

export function NoteBrowse(props) {
  const noteList = useSelector((store) => store.noteSlice.noteList);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredNoteList = noteList.filter((note) => {
    const containsTitle =
      note.title
        .trim()
        .toUpperCase()
        .includes(searchTerm.trim().toUpperCase()) ||
      note.content
        .trim()
        .toUpperCase()
        .includes(searchTerm.trim().toUpperCase());
    return containsTitle;
  });

  return (
    <>
      <div className="row justify-content-center mb-5">
        <div className="col-sm-12 col-md-4">
          <SearchBar
            onTextChange={setSearchTerm}
            placeholder="Search from your notes ... "
          />
        </div>
      </div>

      {noteList?.length === 0 && (
        <div className="d-flex justify-content-center">
          You do not have any note, &nbsp;
          <Link to="/note/new" className={s.custom_link}>
            {" "}
            click here{" "}
          </Link>{" "}
          &nbsp; to create one
        </div>
      )}

      <NoteList noteList={filteredNoteList} />
    </>
  );
}
