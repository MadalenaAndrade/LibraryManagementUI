export default {
    add: [
        { id: 1, name: "name", label: "Category name: ", type: "text", placeholder: "e.g. Fantasy", pattern: "^[\\p{L}\\s]+$", maxLength: 30, title: "The category name can't have digits or special characters", required: true }
    ],
    get: [
        { id: 1, name: "id", label: "Category ID (Optional): ", type: "number", placeholder: 1, min: 1, required: false },
        { id: 2, info: "Note: All fields are optional. Leave them blank to get everything.", type: "info"}
    ],
    update: [
        { id: 1, info: "Resource to update:", type: "updateInfo"},
        { id: 2, name: "id", label: "Category ID: ", type: "number", placeholder: 1, min: 1, required: true },
        { id: 3, info: "Fields to update:", type: "updateInfo"},
        { id: 4, name: "name", label: "Category name: ", type: "text", placeholder: "e.g. Fantasy", pattern: "^[\\p{L}\\s]+$", maxLength: 30, title: "The category name can't have digits or special characters", required: true }
    ],
    delete: [
        { id: 1, name: "id", label: "Category ID: ", type: "number", placeholder: 1, min: 1, required: true }
    ]
}