export default function InputField({ field }) {
  return (
    <input
      type={field.type}
      name={field.name}
      placeholder={field.placeholder}
      pattern={field.pattern ? field.pattern : null}
      min={field.min ? field.min : null}
      max={field.max ? field.max : null}
      maxLength={field.maxLength ? field.maxLength : null}
      step={field.step ? field.step : null}
      title={field.title ? field.title : null}
      required={field.required ? field.required : false}
    />
  );
}
