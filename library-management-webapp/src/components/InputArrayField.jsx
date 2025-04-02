export default function ArrayField({
  field,
  arrayValues,
  onChange,
  onAdd,
  onRemove,
}) {
  return (
    <div>
      {arrayValues.map((value, index) => (
        <div key={index}>
          <input
            type={field.itemType}
            name={field.name}
            placeholder={field.placeholder}
            pattern={field.pattern ? field.pattern : null}
            maxLength={field.maxLength ? field.maxLength : null}
            title={field.title ? field.title : null}
            required={field.required ? field.required : false}
            value={value}
            onChange={(e) => onChange(field.name, index, e)}
          />
        </div>
      ))}
      <button
        type="button"
        className="field-button"
        onClick={() => onAdd(field.name)}
      >
        +
      </button>
      {arrayValues.length > 1 && (
        <button
          type="button"
          className="field-button"
          onClick={() => onRemove(field.name, arrayValues.length - 1)}
        >
          -
        </button>
      )}
    </div>
  );
}
