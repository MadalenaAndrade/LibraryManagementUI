export default {
    add: [
        { id: 1, name: "serialNumber", label: "Serial Number: ", type: "text", placeholder: "e.g. 1234567890123", pattern: "\\d{13}", title: "The serial number must have exactly 13 digits",  required: true },
        { id: 2, name: "title", label: "Title: ", type: "text",  placeholder: "Enter book title", required: true  },
        { id: 3, name: "year", label: "Book Year: ", type: "number", placeholder: new Date().getFullYear(), min: 1800, max: new Date().getFullYear(), required: true  },
        { id: 4, name: "finePerDay", label: "Fine per day (€): ", type: "number", placeholder: 0.01, min: 0.01, step: 0.01, required: true },
        { id: 5, name: "publisherName", label: "Publisher name: ", type: "text", placeholder: "Enter publisher name", pattern: "^[\\p{L}.\\-\\s]+$", maxLength: 30, title: "The publisher name can't have digits or special characters", required: true },
        { id: 6, name: "authors", label: "Author names: ", type: "array", itemType: "text", placeholder: "e.g. John Doe", pattern: "^[\\p{L}.\\-\\s]+$", maxLength: 30, title: "The author name can't have digits or special characters", required: true },
        { id: 7, name: "categories", label: "Category names: ", type: "array",  itemType: "text", placeholder: "e.g. Fantasy", required: true },
        { id: 8, name: "totalAmount", label: "Total Amount: ", type: "number", placeholder: 1, min: 1, max: 100, required: true }
    ],
    get: [
        { id: 1, name: "SerialNumber", label: "Serial Number (Optional): ", type: "text", placeholder: "e.g. 1234567890123", pattern: "\\d{13}", title: "The serial number must have exactly 13 digits",  required: false },
        { id: 2, name: "Title", label: "Title (Optional): ", type: "text",  placeholder: "Enter book title", required: false  },
        { id: 3, name: "Year", label: "Book Year (Optional): ", type: "number", placeholder: new Date().getFullYear(), min: 1800, max: new Date().getFullYear(), required: false  },
        { id: 4, name: "Publisher", label: "Publisher (Optional): ", type: "text", placeholder: "Enter publisher name", pattern: "^[\\p{L}.\\-\\s]+$", maxLength: 30, title: "The publisher name can't have digits or special characters", required: false },
        { id: 5, name: "Author", label: "Author (Optional): ", type: "text", placeholder: "e.g. John Doe", pattern: "^[\\p{L}.\\-\\s]+$", maxLength: 30, title: "The author name can't have digits or special characters", required: false },
        { id: 6, name: "Category", label: "Category (Optional): ", type: "text", placeholder: "e.g. Fantasy", pattern: "^[\\p{L}\\s]+$", maxLength: 30, title: "The category name can't have digits or special characters", required: false },
        { id: 7, info: "Note: All fields are optional. Leave them blank to get everything.", type: "info"}
    ]
}