export default {
    add: [
        { id: 1, name: "rentId", label: "Rent Id: ", type: "number", placeholder: 1, min: 1, required: true  },
        { id: 2, name: "returnDate", label: "Return Date: ", type: "date", placeholder: new Date().toISOString().split('T')[0], min: "2020-01-01", max: new Date().toISOString().split('T')[0], required: false  },
        { id: 3, name: "receivedCondition", label: "Received Condition: ", type: "radio",  options: ["As new", "Good", "Used", "Bad"], required: true  }
    ]
}