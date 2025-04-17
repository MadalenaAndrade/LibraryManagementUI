import api from "../api/api";
import resourceRules from "../config/getResourceRules";

export function useGetResource(resource) {
  function getData(formValues, page = 1) {
    // Some rules were defined per resource as Get requests difer with and within resource
    const rules = resourceRules[resource]; 
    let endpoint = "";
    let query = {};

    const inputedValues = Object.fromEntries(
      Object.entries(formValues).filter(
        ([, value]) => value !== "" && value != null
      ));
    
    const hasInput = Object.keys(inputedValues).length > 0; 

    // if user has submitted values, request must be by id(from route) or filter(from query)
    if (hasInput) {
      if (rules.getById) {
        endpoint = typeof rules.byId === "function" ? rules.byId(inputedValues.id) : `${rules.byId}/${inputedValues.id}`; //check if is function for the case of RentReception
      } else {
        endpoint = rules.filter
        query = inputedValues
      }
    // else user request all items (list), but it may exist pagination
    } else {
      endpoint = rules.list

      if (rules.pagination) {
        query.page = page;
        query.pageSize = 10
      }
    }

    // turn values in query params for requests by filter or with pagination
    if (Object.keys(query).length > 0) {
      const queryString = new URLSearchParams(query).toString();
      endpoint += `?${queryString}`
    }

    return (
      api
        .get(endpoint, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          console.log("Response Status:", response.status);
          return response.data;
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

  return { getData };
}
