import axios from "axios";

export default function useGetUserDumplings() {
  const getUserDumplings = async () => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `${import.meta.env.VITE_REACT_APP_API_KEY}`,
    };
    return axios
      .get("https://training.nerdbord.io/api/v1/pierogator/dumpling-recipes/me", { headers })
      .then((response) => {
        console.log(response);
        return response.data;
      })
      .catch((error) => {
        console.error("Error:", error.response ? error.response.data : error.message);
      });
  };
  return getUserDumplings;
}
