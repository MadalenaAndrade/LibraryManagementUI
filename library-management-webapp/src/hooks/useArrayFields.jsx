import React from "react";

export function useArrayFields(defaultArrayFields) {
  // state to change arrayFields such as authors and categories in books
  const [arrayFields, setArrayFields] = React.useState(defaultArrayFields);

  function handleArrayFieldChange(fieldName, index, e) {
    const newArrayFields = { ...arrayFields };
    newArrayFields[fieldName][index] = [e.target.value];
    setArrayFields(newArrayFields);
  }

  function addArrayField(fieldName) {
    setArrayFields((prevArray) => ({
      ...prevArray,
      [fieldName]: [...arrayFields[fieldName], ""],
    }));
  }

  function removeArrayField(fieldName, index) {
    const newArrayFields = { ...arrayFields };
    newArrayFields[fieldName].splice(index, 1);
    setArrayFields(newArrayFields);
  }

  // clears info on array fields, while leaving the previous number of visible fields
  /// converts the values in the object to "". As it's empty, placeholder appears!
  function clearArrayFields() {
    const clearedArrayFields = {};

    for (const key in arrayFields) {
      clearedArrayFields[key] = arrayFields[key].map(() => "");
    }
    setArrayFields(clearedArrayFields);
  }

  return {
    arrayFields,
    handleArrayFieldChange,
    addArrayField,
    removeArrayField,
    clearArrayFields,
  };
}
