export default {
    add: [
        { id: 1, name: "serialNumber", label: "Serial Number: ", type: "text", placeholder: "e.g. 1234567890123", pattern: "\\d{13}", title: "The serial number must have exactly 13 digits",  required: true },
        { id: 2, name: "bookCondition", label: "Book Condition: ", type: "radio",  options: ["As new", "Good", "Used", "Bad"], required: true  },
        { id: 3, name: "notes", label: "Notes: ", type: "textArea", placeholder: "e.g. Slight creases on the front cover.", maxlength: "255", required: false  }
    ]
}