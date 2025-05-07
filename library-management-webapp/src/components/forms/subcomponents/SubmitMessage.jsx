export default function SubmitMessage({ successMessage, errorMessage }) {
  return (
    <>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </>
  );
}
