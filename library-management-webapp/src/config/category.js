export default {
    add: [
        { id: 1, name: "name", label: "Category name: ", type: "text", placeholder: "e.g. Fantasy", pattern: "^[\\p{L}\\s]+$", maxLength: 30, title: "The category name can't have digits or special characters", required: true }
    ],
    get: [
        { id: 1, name: "id", label: "Category ID (Optional): ", type: "number", placeholder: 1, min: 1, required: false },
        { id: 2, info: "Note: All fields are optional. Leave them blank to get everything.", type: "info"}
    ]
}