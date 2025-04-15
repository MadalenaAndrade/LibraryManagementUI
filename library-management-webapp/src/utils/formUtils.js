//TODO: right now is not being considered if user has only inputed one field for array type. Check later!

export function formatFormData(formData, fields) {
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

  // formats where fields is array so it's compatible with API format and has subkey "name"
  const arrayFields = fields
    .filter((field) => field.type === "array")
    .map((field) => field.name); // extract names from array fields

  arrayFields.forEach((field) => {
    if (data[field]) {
      if (!Array.isArray(data[field])) {
        data[field] = [data[field]];
      }
      data[field] = data[field].map((value) => ({ name: value }));
    }
  });

  // covert date type to correct format received by API
  const dateFields = fields
    .filter((field) => field.type === "date")
    .map((field) => field.name);

  dateFields.forEach((field) => {
    if (data[field]) {
      const [year, month, day] = data[field].split("-");
      if (year && month && day) {
        data[field] = `${day}-${month}-${year}`;
      }
    } else {
      data[field] = null
    }
  });

  // convert to the correct data type (numerics) or null when not required
  if (data.serialNumber) data.serialNumber = parseInt(data.serialNumber);
  if (data.year) data.year = parseInt(data.year);
  if (data.totalAmount) data.totalAmount = parseInt(data.totalAmount);
  if (data.finePerDay) data.finePerDay = parseFloat(data.finePerDay);
  if (data.nif) data.nif = parseInt(data.nif);
  if (data.contact) data.contact = parseInt(data.contact);
  if (data.clientId) data.clientId = parseInt(data.clientId);
  if (data.rentId) data.rentId = parseInt(data.rentId);

  if (data.bookSerialNumber !== "") {
    data.bookSerialNumber = parseInt(data.bookSerialNumber);
  } else {
    data.bookSerialNumber = null;
  }

  if (data.bookCopyId !== "") {
    data.bookCopyId = parseInt(data.bookCopyId);
  } else {
    data.bookCopyId = null;
  }


  return data;
}
