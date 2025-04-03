export default function RadioField({ field }) {
  return (
    <div className="radio-field">
      {field.options &&
        field.options.map((option, index) => (
          <div key={index} className="radiolabel">
            <input
              type={field.type}
              name={field.name}
              value={option}
              required={field.required ? field.required : false}
              defaultChecked={index === 0}
            />
            <label>{option}</label>
          </div>
        ))}
    </div>
  );
}
