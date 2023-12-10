import axios from "axios";

export default function useFindRecipeById(id: string) {
  const findRecipeById = async () => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `${import.meta.env.VITE_REACT_APP_API_KEY}`,
    };
    return axios
      .get(`https://training.nerdbord.io/api/v1/pierogator/dumpling-recipes/${id}`, { headers })
      .then((response) => {
        console.log(response);
        return response.data;
      })
      .catch((error) => {
        console.error("Error:", error.response ? error.response.data : error.message);
      });
  };
  return findRecipeById;
}
