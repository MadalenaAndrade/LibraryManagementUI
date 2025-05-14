import api from "../api/api";

export function usePostResource(resource) {
  function postData(data) {
    //dinamic route for the case of Rent Reception
    const endpoint =
      resource === "RentReception" ? "/Rent/Reception" : `${resource}`;

    return api
      .post(endpoint, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("Response Status:", response.status);
        if (response.status === 201) {
          console.log("Resource added sucessfully.");
          return "Resource added successfully!";
        } else {
          console.log("Unexpected response status:", response.status);
          return `Unexpected status: ${response.status}`;
        }
      })
      .catch((error) => {
        let errorMessage = "Something went wrong.";

        if (error.response) {
          // When server responds with an error
          const data = error.response.data;
          const status = error.response.status;
          console.log(`Server responded with status ${status}: `, data);

          if (status === 403) {
            errorMessage = "Access denied: You don't have permission to perform this action."
          }
          else if (typeof data === "object" && data !== null) {
            // This handles validation errors returned from ASP.NET ModelState for user display.
            const errorsObject = data.errors || data; //// Use 'errors' if available, fallback to data itself

            const allMessages = Object.values(errorsObject)
              .flat()
              .filter((msg, index, self) => self.indexOf(msg) === index) // Remove duplicates, keep first occurrence only
              .join("\n");

            errorMessage = `Error:\n${allMessages}`;
          } else {
            errorMessage = data.message || String(data);
          }
        } else if (error.request) {
          // When request was done but there wasn't any response
          console.log("No response received:", error.request);
          errorMessage =
            "No response from the server. Please check your connection.";
        } else {
          // Configuration or network error
          console.log("Error setting up the request:", error.message);
          errorMessage =
            "An unexpected error occurred. Please try again later.";
        }

        console.log("Request config:", error.config);

        //throw error to display it to the user
        throw new Error(errorMessage);
      });
  }

  return { postData };
}
