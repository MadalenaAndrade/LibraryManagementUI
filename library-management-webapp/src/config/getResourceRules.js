const resourceRules = {
    Author: {
        byId: "/Author",
        list: "/Author/list",
        getById: true,
    },
    Book: {
        list: "/Book/list",
        filter: "/Book/filter",
        getById: false,
    },
    BookCopy: {
        list: "/BookCopy/list",
        filter: "/BookCopy/filter",
        getById: false,
        pagination: true,
    },
    Category: {
        byId: "/Category",
        list: "/Category/list",
        getById: true,
    },
    Client: {
        list: "/Client/list",
        filter: "/Client/filter",
        getById: false,
    },
    Publisher: {
        byId: "/Publisher",
        list: "/Publisher/list",
        getById: true,
    },
    Rent: {
        byId: "/Rent",
        list: "/Rent/list",
        getById: true,
        pagination: true,
    },
    RentReception: {
        byId: (id) => `/Rent/${id}/Reception`,
        list: "/Rent/ReceptionsList",
        getById: true,
        pagination: true,
    }
};

export default resourceRules;
