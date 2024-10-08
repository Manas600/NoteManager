import s from "./style.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";

export function SearchBar({ onTextChange, placeholder }) {
  return (
    <>
      <SearchIcon size={25} className={s.icon} color="black" />
      <input
        type="text"
        className={s.input}
        onChange={(e) => onTextChange(e.target.value)}
        placeholder={placeholder}
      />
    </>
  );
}
