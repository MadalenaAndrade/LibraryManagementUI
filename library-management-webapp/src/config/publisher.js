export default {
    add: [
        { id: 1, name: "name", label: "Publisher name: ", type: "text", placeholder: "Enter publisher name", pattern: "^[\\p{L}.\\-\\s]+$", maxLength: 30, title: "The publisher name can't have digits or special characters", required: true }
    ]
}