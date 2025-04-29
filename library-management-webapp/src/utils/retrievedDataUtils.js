import labelMapper from "./labelMapper";

// function to format dates retreived
function formatDate(date) {
  if (!date) return "";
  const year = date.substring(0, 4)
  const month = date.substring(5, 7)
  const day = date.substring(8, 10)
  return `${day}/${month}/${year}`
}

export function formatRetrievedData(resource, rawData) {
  let data = [];
  let pagination = {};
  const labels = labelMapper[resource];

  let arrayData = Array.isArray(rawData)? rawData : [rawData]; //if it is a single object request it modifies to an array

  //in case of a resource with pagination , resource has nested array
  if (resource === "BookCopy" && Array.isArray(rawData.bookCopies)) {
    arrayData = rawData.bookCopies;
  } else if (resource === "Rent" && Array.isArray(rawData.rents)) {
    arrayData = rawData.rents;
  } else if (resource === "RentReception" && Array.isArray(rawData.rentReceptions)) {
    arrayData = rawData.rentReceptions;
  }

  switch (resource) {
    case "Author":
      data = arrayData.map((author) => ({
        [labels.authorId]: author.authorId,
        [labels.name]: author.name,
      }));
      break;
    case "Book":
      data = arrayData.map((book) => ({
        [labels.serialNumber]: book.serialNumber,
        [labels.title]: book.title,
        [labels.year]: book.year,
        [labels.finePerDay]: book.finePerDay,
        [labels.publisherName]: book.publisherName,
        [labels.authorName]: book.authorName?.join(", "),
        [labels.categoryName]: book.categoryName?.join(", "),
        [labels.totalAmount]: book.totalAmount,
        [labels.availableAmount]: book.availableAmount,
      }));
      break;
    case "BookCopy":
      data = arrayData.map((bookCopy) => ({
        [labels.id]: bookCopy.id,
        [labels.serialNumber]: bookCopy.serialNumber,
        [labels.title]: bookCopy.title,
        [labels.bookCondition]: bookCopy.bookCondition,
        [labels.notes]: bookCopy.notes,
      }));

      pagination = {
        totalItems: rawData.totalBookCopies,
        currentPage: rawData.currentPage,
      };
      break;
    case "Category":
      data = arrayData.map((category) => ({
        [labels.categoryId]: category.categoryId,
        [labels.name]: category.name,
      }));
      break;
    case "Client":
      data = arrayData.map((client) => ({
        [labels.id]: client.id,
        [labels.name]: client.name,
        [labels.dateOfBirth]: formatDate(client.dateOfBirth),
        [labels.nif]: client.nif,
        [labels.contact]: client.contact,
        [labels.address]: client.address,
      }));
      break;
    case "Publisher":
      data = arrayData.map((publisher) => ({
        [labels.publisherId]: publisher.publisherId,
        [labels.name]: publisher.name,
      }));
      break;
    case "Rent":
      data = arrayData.map((rent) => ({
        [labels.rentId]: rent.rentId,
        [labels.clientId]: rent.clientId,
        [labels.clientName]: rent.clientName,
        [labels.bookCopyId]: rent.bookCopyId,
        [labels.serialNumber]: rent.serialNumber,
        [labels.bookTitle]: rent.bookTitle,
        [labels.startDate]: formatDate(rent.startDate),
        [labels.dueDate]: formatDate(rent.dueDate),
      }));

      pagination = {
        totalItems: rawData.totalRents,
        currentPage: rawData.currentPage,
      };
      break;
    case "RentReception":
      data = arrayData.map((rentReception) => ({
        [labels.rentId]: rentReception.rentId,
        [labels.returnDate]: formatDate(rentReception.returnDate),
        [labels.receivedCondition]: rentReception.receivedCondition,
        [labels.totalFine]: rentReception.totalFine,
      }));

      pagination = {
        totalItems: rawData.totalRentReceptions,
        currentPage: rawData.currentPage,
      };
      break;
    default:
      data = Array.isArray(rawData) ? rawData : [rawData];
  }
  return { data, pagination };
}
