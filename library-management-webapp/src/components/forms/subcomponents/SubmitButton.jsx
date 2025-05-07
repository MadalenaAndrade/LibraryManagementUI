export default function SubmitButton({ isLoading }) {
  return (
    <button className="submit-button">
      {isLoading ? (
        <>
          <span className="spinner" /> Working on it...
        </>
      ) : (
        "Submit"
      )}
    </button>
  );
}
