export default {
    add: [
        { id: 1, name: "serialNumber", label: "Serial Number: ", type: "text", placeholder: "1234567890123", pattern: "\\d{13}", title: "The serial number must have exactly 13 digits",  required: true },
        { id: 2, name: "title", label: "Title: ", type: "text",  placeholder: "The Book Title", required: true  },
        { id: 3, name: "year", label: "Book Year: ", type: "number", placeholder: new Date().getFullYear(), min: 1800, max: new Date().getFullYear(), required: true  },
        { id: 4, name: "finePerDay", label: "Fine per day (€): ", type: "number", placeholder: 0.01, min: 0.01, step: 0.01, required: true },
        { id: 5, name: "publisherName", label: "Publisher name: ", type: "text", placeholder: "Publisher Name", pattern: "^[\\p{L}.\\-\\s]+$", maxLength: 30, title: "The publisher name can't have digits or special characters", required: true },
        { id: 6, name: "authors", label: "Author names: ", type: "array", itemType: "text", placeholder: "John Doe", pattern: "^[\\p{L}.\\-\\s]+$", maxLength: 30, title: "The author name can't have digits or special characters", required: true },
        { id: 7, name: "categories", label: "Category names: ", type: "array",  itemType: "text", placeholder: "Fantasy", required: true },
        { id: 8, name: "totalAmount", label: "Total Amount: ", type: "number", placeholder: 1, min: 1, max: 100, required: true }
    ]
}