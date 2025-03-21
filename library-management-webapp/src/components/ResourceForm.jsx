import { useState } from "react";

export default function ResourceForm({ placeholder }) {
  const [field, setField] = useState("");

  // function to info Input
  const handleInputChange = (e) => {
    setField(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder={placeholder}
        value={field}
        onChange={handleInputChange}
      />
      <button onClick={() => console.log(field)}>Submit</button>
    </>
  );
}
