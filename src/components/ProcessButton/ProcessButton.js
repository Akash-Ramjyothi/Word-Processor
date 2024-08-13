import "./ProcessButton.css";

export default function ProcessButton({ onClick }) {
  return (
    <button className="button button--animated" onClick={onClick}>
      <span class="button__text">Submit</span>
      <span class="button__icon">→</span>
    </button>
  );
}
