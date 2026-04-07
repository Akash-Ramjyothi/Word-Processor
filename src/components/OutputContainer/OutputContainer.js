import "./OutputContainer.css";

export default function OutputContainer({ 
  processedWord, 
  isLoading = false, 
  placeholder = "No output yet" 
}) {
  return (
    <div
      className={`outputContainer ${isLoading ? "outputContainer--loading" : ""}`}
      role="status"
      aria-live="polite"
    >
      {isLoading ? (
        <span className="outputContainer__loader"></span>
      ) : processedWord ? (
        <span className="outputContainer__text">{processedWord}</span>
      ) : (
        <span className="outputContainer__placeholder">{placeholder}</span>
      )}
    </div>
  );
}
