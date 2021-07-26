import { API_URL } from "../utils/config";


export const getAllProducts = async () => {
    let data = await fetch(`${API_URL}`, {
      method: "GET",
      headers: {
        Accept: "application/json"
      },
    }).then((response) => response.json());
  
    return data;
  };