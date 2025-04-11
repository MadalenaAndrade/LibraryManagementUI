import api from "../api/api";

export function usePostResource(resource) {
    function postData(data) {
        return api.post(`/${resource}`, data, {
            headers: {
                "Content-Type": "application/json" 
            }
        }).then((response) => {
            console.log("Response Status:", response.status);
            if (response.status === 201) {
                console.log("Resource added sucessfully.")
            } else {
                console.log("Unexpected response status:", response.status);
            }
        }) 
        //TODO: catch api bad requests errors and shows on UI
        .catch((errors) => console.error(errors));
    }

    return { postData }
}