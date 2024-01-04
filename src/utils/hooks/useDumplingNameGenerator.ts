import axios from "axios";
import { useStore } from "../../store";

export default function useDumplingNameGenerator() {
  const { dough, filling, ingredients, setDumplingName } = useStore();
  const dumplingNameGenerator = async () => {
    const requestData = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `Stwórz artystyczną nazwę dla pierogów inspirując się podanymi przez użytkownika opisami ciasta, farszu i składników, zwróć tylko stworzoną nazwę, bez placeholderów i elippsis`,
        },
        {
          role: "user",
          content: `ciasto: ${dough}, farsz: ${filling}, składniki: ${ingredients}`,
        },
      ],
    };

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_REACT_APP_OPENAI_KEY}`,
    };

    return axios
      .post("https://api.openai.com/v1/chat/completions", requestData, { headers })
      .then((response) => {
        setDumplingName(
          response.data.choices[0].message.content.length < 40
            ? response.data.choices[0].message.content
            : response.data.choices[0].message.content.slice(0, 40)
        );
        return response.data;
      })
      .catch((error) => {
        console.error("Error:", error.response ? error.response.data : error.message);
      });
  };
  return dumplingNameGenerator;
}
