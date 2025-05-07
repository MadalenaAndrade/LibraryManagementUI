export default function ConfirmDeleteDialog({
  resource,
  confirmationInfo,
  onConfirm,
  onCancel,
}) {
  return (
    <>
      {showConfirmDelete && (
        <div className="confirm-delete">
          <p>
            Confirm deletion of the <strong>'{resource}'</strong> identified by{" "}
            <strong>'{confirmationInfo}'</strong>?
          </p>
          <button onClick={onConfirm}>Confirm</button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      )}
    </>
  );
}
