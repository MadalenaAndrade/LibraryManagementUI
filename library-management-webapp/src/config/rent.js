//ToDo: Add formError if both serialNumber & bookCopy are not filled (one is okey)

export default {
    add: [
        { id: 1, name: "clientId", label: "Client Id: ", type: "number", placeholder: 1, min: 1, required: true  },
        { id: 2, name: "bookSerialNumber", label: "Book Serial Number(*): ", type: "text", placeholder: "e.g. 1234567890123", pattern: "\\d{13}", title: "The serial number must have exactly 13 digits",  required: false  },
        { id: 3, name: "bookCopyId", label: "Book Copy ID(*): ", type: "text", placeholder: "e.g. 123456789",  pattern: "\\d{9}", title: "The client NIF must have exactly 9 digits", required: false  },
        { id: 4, name: "startDate", label: "Rented Date: ", type: "date", placeholder: new Date().toISOString().split('T')[0], min: "2020-01-01", max: new Date().toISOString().split('T')[0], required: false  },
        { id: 5, info: "* You must provide either a Book Serial Number or the Book Copy ID", type: "info"}
    ],
    get: [
        { id: 1, name: "id", label: "Rent ID (Optional): ", type: "number", placeholder: 1, min: 1, required: false },
        { id: 2, info: "Note: All fields are optional. Leave them blank to get everything.", type: "info"}
    ]
}