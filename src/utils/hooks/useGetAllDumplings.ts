import axios from "axios";

export default function useGetAllDumplings() {
  const getAllDumplings = async () => {
    const headers = {
      "Content-Type": "application/json",
    };
    return axios
      .get("https://training.nerdbord.io/api/v1/pierogator/dumpling-recipes", { headers })
      .then((response) => {
        return response.data.recipes;
      })
      .catch((error) => {
        console.error("Error:", error.response ? error.response.data : error.message);
      });
  };
  return getAllDumplings;
}
