import PropTypes from "prop-types";
import "./TextLabel.css";

export default function TextLabel({
  children,
  htmlFor,
  variant = "default",
  size = "md",
  required = false,
  className = "",
  ...props
}) {
  const classes = [
    "processed-word",
    `label-${variant}`,
    `label-${size}`,
    required ? "label-required" : "",
    className
  ]
    .join(" ")
    .trim();

  return (
    <label htmlFor={htmlFor} className={classes} {...props}>
      {children}
      {required && <span className="label-asterisk">*</span>}
    </label>
  );
}

TextLabel.propTypes = {
  children: PropTypes.node.isRequired,
  htmlFor: PropTypes.string,
  variant: PropTypes.oneOf(["default", "primary", "secondary", "error", "success"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  required: PropTypes.bool,
  className: PropTypes.string
};
