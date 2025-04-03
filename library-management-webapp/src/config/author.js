export default {
    add: [
        { id: 1, name: "name", label: "Author name: ", type: "text", placeholder: "e.g. John Doe", pattern: "^[\\p{L}.\\-\\s]+$", maxLength: 30, title: "The author name can't have digits or special characters", required: true }
    ]
}