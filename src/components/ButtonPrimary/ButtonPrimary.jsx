import s from "./style.module.css";

export function ButtonPrimary({ children, onClick, isDisable }) {
  return (
    <button
      disabled={isDisable}
      onClick={onClick}
      type="button"
      className={`btn btn-primary ${s.button}`}
    >
      {children}
    </button>
  );
}
