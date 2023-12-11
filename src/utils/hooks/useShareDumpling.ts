import axios from "axios";
import { useStore } from "../../store";

export default function useShareDumpling() {
  const { recipe } = useStore();
  const shareDumpling = async () => {
    const url = "https://training.nerdbord.io/api/v1/pierogator/dumpling-recipes";
    const headers = {
      "Content-Type": "application/json",
      Authorization: `${import.meta.env.VITE_REACT_APP_API_KEY}`,
    };
    return axios
      .post(url, recipe, { headers })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.error("Error:", error.response ? error.response.data : error.message);
      });
  };
  return shareDumpling;
}
