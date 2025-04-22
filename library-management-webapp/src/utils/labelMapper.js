const labelMapper = {
    Author: {
        authorId: "Id",
        name: "Name",
    },
    Book: {
        serialNumber: "Serial Number",
        title: "Title",
        year: "Year",
        finePerDay: "Fine per Day (€)",
        publisherName: "Publisher",
        authorName: "Authors",
        categoryName: "Categories",
        totalAmount: "Total",
        availableAmount: "Available",
    },
    BookCopy: {
        id: "Id",
        serialNumber: "Serial Number",
        title: "Title",
        bookCondition: "Condition",
        notes: "Notes",
    },
    Category: {
        categoryId: "Id",
        name: "Name",
    },
    Client: {
        id: "Id",
        name: "Name",
        dateOfBirth: "Date of Birth",
        nif: "NIF",
        contact: "Contact",
        address: "Address",
    },
    Publisher: {
        publisherId: "Id",
        name: "Name",
    },
    Rent: {
        rentId: "Rent Id",
        clientId: "Client Id",
        clientName: "Client Name",
        bookCopyId: "Book Copy Id",
        serialNumber: "Serial Number",
        bookTitle: "Book Title",
        startDate: "Start Date",
        dueDate: "Due Date",
    },
    RentReception: {
        rentId: "Rent Id",
        returnDate: "Return Date",
        receivedCondition: "Received Condition",
        totalFine: "Total Fine (€)"
    },
};

export default labelMapper;