//function for date types validation
function getDateLimit(years, month = 1, day = 1) {
    const realMonth = month -1
    const actualYear = new Date().getFullYear()

    return new Date(actualYear - years, realMonth, day).toISOString().split("T")[0];
}

export default {
    add: [
        { id: 1, name: "name", label: "Client Name: ", type: "text", placeholder: "e.g. John Doe", pattern: "^[\\p{L}.\\-\\s]+$", maxLength: 30, title: "The client name can't have digits or special characters", required: true },
        { id: 2, name: "dateOfBirth", label: "Date of Birth: ", type: "date", min: getDateLimit(120, 1, 1), max: getDateLimit(5, 12, 31), required: true  },
        { id: 3, name: "nif", label: "NIF: ", type: "text", placeholder: "e.g. 123456789",  pattern: "\\d{9}", title: "The client NIF must have exactly 9 digits", required: true  },
        { id: 4, name: "contact", label: "Contact: ", type: "text", placeholder: "e.g. 912345678", pattern: "\\d{9}", title: "The client contact must have exactly 9 digits", required: true  },
        { id: 5, name: "address", label: "Address: ", type: "textArea", placeholder: "e.g. Street Example 123, Apt 4B, 12345 Fiction City", maxLength: 255, required: true }
    ]
}