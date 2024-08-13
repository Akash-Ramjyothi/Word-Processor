import "./InputWordField.css";

export default function InputWordField({ value, onChange }) {
  return (
    <label className="custom-field three">
      <input type="text" value={value} onChange={onChange} placeholder="" />
      <span class="placeholder">Enter word to be processed</span>
      <span class="border"></span>
    </label>
  );
}
