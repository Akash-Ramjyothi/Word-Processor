import "./ProcessButton.css";

export default function ProcessButton({
  onClick,
  label = "Submit",
  icon = "→",
  type = "button",
  disabled = false,
  loading = false,
  size = "md", // sm | md | lg
  variant = "animated", // animated | text
}) {
  const sizeClass =
    size === "sm"
      ? "button--sm"
      : size === "lg"
      ? "button--lg"
      : "";

  const variantClass =
    variant === "text" ? "button--text" : "button--animated";

  return (
    <button
      type={type}
      className={`button ${variantClass} ${sizeClass}`}
      onClick={onClick}
      disabled={disabled || loading}
      aria-busy={loading}
    >
      <span className="button__text">
        {loading ? "Processing..." : label}
      </span>

      {!loading && (
        <span className="button__icon" aria-hidden="true">
          {icon}
        </span>
      )}

      {loading && (
        <span className="button__loader" aria-hidden="true">
          ⏳
        </span>
      )}
    </button>
  );
}
