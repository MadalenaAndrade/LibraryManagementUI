export default function TextAreaField({ field }) {
  return (
    <textarea
      name={field.name}
      placeholder={field.placeholder}
      required={field.required ? field.required : false}
    />
  );
}
