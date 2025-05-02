import api from "../api/api";

export function useDeleteResource(resource) {
    // filter data to identify easily the resource to delete
    function filterData(retrivedData) {
        if (Object.keys(retrivedData).length === 0) {
            throw new Error(`${resource} not found`);
           }
        
        if (resource === "Author" || resource === "Category" || resource === "Publisher") {
            return retrivedData.name
        } 
        
        if (resource === "Book" || resource === "BookCopy") {
            const firstItem = retrivedData[0]; // result is an array of objects
            return firstItem.title || firstItem.Title;
        }

        if (resource === "Client") {
            const firstItem = retrivedData[0]; 
            return `${firstItem.name} with NIF ${firstItem.nif}`;
        }
    }

  /* function deleteData(data) {
    //dinamic route for the case of Rent Reception
    const endpoint =
      resource === "RentReception" ? "/Rent/Reception" : `${resource}`;

    return (
      api
        .delete(`${endpoint}`, data, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          console.log("Response Status:", response.status);
          if (response.status === 204) {
            console.log("Resource updated sucessfully.");
            return "Resource updated successfully!";
          } else {
            console.log("Unexpected response status:", response.status);
            return `Unexpected status: ${response.status}`;
          }
        })
        .catch((error) => {
          let errorMessage = "Something went wrong."

          if (error.response) {
            // When server responds with an error
            const data = error.response.data;
            console.log("Server responded with an error: ", data);
            
            // This handles validation errors returned from ASP.NET ModelState for user display.
            if (typeof data === "object" && data !== null) {
              const errorsObject = data.errors || data; //// Use 'errors' if available, fallback to data itself

              const allMessages = Object.values(errorsObject)
                .flat()
                .filter((msg, index, self) => self.indexOf(msg) === index) // Remove duplicates, keep first occurrence only
                .join("\n");
              
                errorMessage = `Error:\n${allMessages}`;
            } else {
              errorMessage = data.message || String(data)
            }
          
          } else if (error.request) {
            // When request was done but there wasn't any response
            console.log("No response received:", error.request);
            errorMessage = "No response from the server. Please check your connection.";

          } else {
            // Configuration or network error
            console.log("Error setting up the request:", error.message);
            errorMessage = "An unexpected error occurred. Please try again later."
          }

          console.log("Request config:", error.config);
          
          //throw error to display it to the user
          throw new Error(errorMessage);
        })
    );
  } */

  return { filterData, deleteData };
}
