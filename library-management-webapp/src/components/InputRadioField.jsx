export default function RadioField({ field }) {
  return (
    <div>
      {field.options &&
        field.options.map((option, index) => (
          <div key={index}>
            <input
              type={field.type}
              name={field.name}
              value={option}
              required={field.required ? field.required : false}
            />
            <label>{option}</label>
          </div>
        ))}
    </div>
  );
}
