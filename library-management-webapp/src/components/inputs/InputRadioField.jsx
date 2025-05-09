export default function RadioField({ field }) {
  return (
    <div className="radio-field">
      {field.options &&
        field.options.map((option) => (
          <div key={option} className="radiolabel">
            <input
              type={field.type}
              name={field.name}
              value={option}
              required={field.required ? field.required : false}
              defaultChecked={
                field.required ? option === field.options[0] : null
              }
            />
            <label>{option}</label>
          </div>
        ))}
    </div>
  );
}
