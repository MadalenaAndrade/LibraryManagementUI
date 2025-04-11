//TODO: right now is not being considered if user has only inputed one field for array type. Check later!

export function formatFormData(formData) {
  // Adds each formData object in data, but if key already exists it transforms data in array, if there's already an array it adds the new value (for cases as book authors and categories)
  const data = {};

  formData.forEach((value, key) => {
    if (data[key]) {
      if (Array.isArray(data[key])) {
        data[key].push(value);
      } else {
        data[key] = [data[key], value];
      }
    } else {
      data[key] = value;
    }
  });

  // formats where fields is array so it's compatible with API format and has subkey
  for (const key in data) {
    if (Array.isArray(data[key])) {
      data[key] = data[key].map((item) => ({ name: item }));
    }
  }
  console.log(data);

  return data;
}
