export default {
    add: [
        { id: 1, name: "serialNumber", label: "Serial Number: ", type: "text", pattern: "\\d{13}", title: "The serial number must have exactly 13 digits",  required: true },
        { id: 2, name: "title", label: "Title: ", type: "text",  required: true  },
        { id: 3, name: "year", label: "Book Year: ", type: "number", min: 1800, max: new Date().getFullYear(), required: true  },
        { id: 4, name: "finePerDay", label: "Fine per day (€): ", type: "number", min: 0.01, step: 0.01, required: true },
        { id: 5, name: "publisherName", label: "Publisher name: ", type: "text", pattern: "^[\\p{L}.\\-\\s]+$", maxLength: 30, title: "The publisher name can't have digits or special characters", required: true },
        { id: 6, name: "authors", label: "Author names: ", type: "array", required: true },
        { id: 7, name: "categories", label: "Category names: ", type: "array",  required: true },
        { id: 8, name: "totalAmount", label: "Total Amount: ", type: "number",  min: 1, max: 100, required: true }
    ]
}