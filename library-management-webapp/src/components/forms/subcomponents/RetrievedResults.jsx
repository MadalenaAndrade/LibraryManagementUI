export default function RetrievedResults({
  resource,
  retrievedData,
  paginationData,
  onPrevious,
  onNext,
}) {
  if (retrievedData.length === 0) {
    return <p className="error-message">{resource} not found</p>;
  }

  return (
    <div className="retrieved-data">
      <h2 className="results-title">Results obtained:</h2>
      {paginationData && paginationData.currentPage && (
        <div className="pagination-controls">
          <p>
            Page {paginationData.currentPage} of{" "}
            {Math.ceil(paginationData.totalItems / 10)}
          </p>
          <button onClick={onPrevious}>Prev</button>
          <button onClick={onNext}>Next</button>
        </div>
      )}
      {retrievedData.map((item, index) => (
        <ul key={index}>
          {Object.entries(item).map(([label, value]) => (
            <li key={label}>
              <strong>{label}:</strong> {value}
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}
