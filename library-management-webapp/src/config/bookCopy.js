export default {
    add: [
        { id: 1, name: "serialNumber", label: "Serial Number: ", type: "text", placeholder: "e.g. 1234567890123", pattern: "\\d{13}", title: "The serial number must have exactly 13 digits",  required: true },
        { id: 2, name: "bookCondition", label: "Book Condition: ", type: "radio",  options: ["As new", "Good", "Used", "Bad"], required: true  },
        { id: 3, name: "notes", label: "Notes (Optional): ", type: "textArea", placeholder: "e.g. Slight creases on the front cover.", maxlength: "255", required: false  }
    ],
    get: [
        { id: 1, name: "Id", label: "Book Copy ID (Optional): ",  type: "number", placeholder: 1, min: 1, required: false },
        { id: 2, name: "SerialNumber", label: "Serial Number (Optional): ", type: "text", placeholder: "e.g. 1234567890123", pattern: "\\d{13}", title: "The serial number must have exactly 13 digits",  required: false  },
        { id: 3, name: "Title", label: "Title (Optional): ", type: "text",  placeholder: "Enter book title", required: false  },
        { id: 4, name: "Condition", label: "Condition (Optional): ", type: "radio",  options: ["As new", "Good", "Used", "Bad"], required: false },
        { id: 5, info: "Note: All fields are optional. Leave them blank to get everything.", type: "info"}
    ],
    update: [
        { id: 1, name: "Id", label: "Book Copy ID: ",  type: "number", placeholder: 1, min: 1, required: true }
    ],
    delete: [
        { id: 1, name: "Id", label: "Book Copy ID: ",  type: "number", placeholder: 1, min: 1, required: true }
    ]
}
