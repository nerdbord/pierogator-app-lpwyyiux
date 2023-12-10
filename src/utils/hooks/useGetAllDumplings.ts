export default function useGetAllDumplings() {
  const getAllDumplings = async () => {
    return fetch("https://training.nerdbord.io/api/v1/pierogator/dumpling-recipes").then((data) => data.json());
  };
  return getAllDumplings;
}
