import api from "../api/api";

export function useUpdateResource(resource) {
  function putData(data) {
    //dinamic route for the case of Rent Reception
    const endpoint =
      resource === "RentReception" ? "/Rent/Reception" : `${resource}`;

    const path = Object.values(data)[0]
    const body = Object.fromEntries(Object.entries(data).slice(1));

    const inputedValues = Object.fromEntries(
        Object.entries(body).filter(
          ([, value]) => value !== "" && value != null && !Number.isNaN(value)
        ));
    const hasInput = Object.keys(inputedValues).length > 0; 
    
    if (!hasInput) {
      const errorMessage = "Error: At least one field must be filled.";
      throw new Error(errorMessage);
    }

    return (
      api
        .put(`${endpoint}/${path}`, inputedValues, {
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
  }

  return { putData };
}
