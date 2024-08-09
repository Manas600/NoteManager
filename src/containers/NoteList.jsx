import { useDispatch } from "react-redux";
import s from "./style.module.css";
import { Textcard } from "components/TextCard/TextCard";
import { useNavigate } from "react-router-dom";
import { NoteAPI } from "api/note-api";
import { deleteNote } from "store/notes/notes-slice";

export function NoteList({ noteList }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function deleteNote_(note) {
    if (window.confirm("Delete Note?")) {
      NoteAPI.deleteById(note.id);
      dispatch(deleteNote(note));
      alert("Note has been deleted");
    }
  }
  return (
    <div className={`row justify-content-center`}>
      {noteList.map((note) => {
        return (
          <div key={note.id} className={s.card_container}>
            <Textcard
              title={note.title}
              subtitle={note.created_at}
              content={note.content}
              onClick={() => navigate("/note/" + note.id)}
              onClickTrash={() => deleteNote_(note)}
            />
          </div>
        );
      })}
    </div>
  );
}
