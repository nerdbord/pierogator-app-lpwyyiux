import axios from "axios";
import { useStore } from "../store";

const useAiGeneratedDumpling = () => {
  const {
    setDough,
    setFilling,
    setIngredients,
    setIsLoading,
    doughLockView,
    fillingLockView,
    ingredientsLockView,
  } = useStore();

  const generateGptResponse = async () => {
    setIsLoading(true); // Rozpoczęcie ładowania

    const data = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant.",
        },
        {
          role: "user",
          content:
            "Potrzebuję pomysłów na rodzaje ciasta i nadzienia do pierogów. Proszę podaj różne opcje ciasta oraz propozycje nadzienia np ciasto jasne / ciemne itp, nadzieni to np wegańskie, mięsne, serowe a składniki np kapusta, truskawki, cebula, ser itp. Nie podawaj przepisu jak to przygotować tylko podaj takie kompozycje, np ciasto: jasne , nadzienie: wegańskie, składniki: cebula,ser,pieprz.",
        },
      ],
    };

    try {
      const response = await axios.post(
        "https://training.nerdbord.io/api/v1/openai/chat/completions",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${import.meta.env.VITE_REACT_APP_API_KEY}`,
          },
        }
      );

      const chatResponse = response.data.choices[0].message.content;

      const firstSetRegex =
        /1\.\sCiasto:\s(.*?)\s+Nadzienie:\s(.*?)\s+Składniki:\s(.*?)(?=\n|$)/;

      const match = firstSetRegex.exec(chatResponse);

      if (match && !doughLockView) setDough(match[1].trim());
      if (match && !fillingLockView) setFilling(match[2].trim());
      if (match && !ingredientsLockView) setIngredients(match[3].trim());
    } catch (error) {
      console.error("Błąd podczas generowania odpowiedzi GPT:", error);
    } finally {
      setIsLoading(false); // Zakończenie ładowania
    }
  };

  return generateGptResponse;
};

export default useAiGeneratedDumpling;
