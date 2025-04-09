export default function TextAreaField({ field }) {
  return (
    <textarea
      name={field.name}
      placeholder={field.placeholder}
      maxLength={field.maxLength}
      required={field.required ? field.required : false}
    />
  );
}
