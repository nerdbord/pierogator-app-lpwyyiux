import axios from "axios";
import { useStore } from "../../store";

export default function useFindRecipeById(id: string) {
  const { setPreviewedDumpling } = useStore();
  const findRecipeById = async () => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `${import.meta.env.VITE_REACT_APP_API_KEY}`,
    };
    return axios
      .get(`https://training.nerdbord.io/api/v1/pierogator/dumpling-recipes/${id}`, { headers })
      .then((response) => {
        setPreviewedDumpling(response.data.recipe);
        return response.data.recipe;
      })
      .catch((error) => {
        console.error("Error:", error.response ? error.response.data : error.message);
      });
  };
  return findRecipeById;
}
