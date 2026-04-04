import "./Title.css";

export default function Title({
  text,
  as: Tag = "h1",
  align = "center",
  variant = "default",
  animate = true,
  className = "",
}) {
  return (
    <Tag
      className={`title title--${variant} title--${align} ${
        animate ? "title--animate" : ""
      } ${className}`}
      role="heading"
      aria-level={Tag === "h1" ? 1 : undefined}
    >
      {text}
    </Tag>
  );
}
