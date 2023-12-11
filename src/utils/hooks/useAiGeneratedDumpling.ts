import axios from "axios";
import { useStore } from "../../store";

const useAiGeneratedDumpling = () => {
  const {
    dough,
    filling,
    ingredients,
    setDough,
    setFilling,
    setIngredients,
    setIsLodingForDumplings,
    doughLockView,
    fillingLockView,
    ingredientsLockView,
    setDoughChanged,
    setFillingChanged,
    setIngredientsChanged,
  } = useStore();

  const generateGptResponse = async () => {
    setIsLodingForDumplings(true);

    const data = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "Return only data according to this object schema {ciasto: string, nadzienie: string, skladniki: string}, in JSON format without any placeholders or ellipses.",
        },
        {
          role: "user",
          content: `Podaj mi losową propozycję ${
            !doughLockView && "ciasta (opisane przymiotnikami, np. elastyczne ciasto, francuskie), "
          } ${
            !fillingLockView &&
            `nadzienia do pierogów (np. 'z...', ${
              ingredientsLockView
                ? "inspiruj się typowymi farszami pierogów z składnikami wymienionymi przeze mnie"
                : "inspiruj się typowymi farszami pierogów"
            }), `
          } ${doughLockView && `ciasto jakiego chciałbym użyć to : ${dough}`} ${
            fillingLockView && `nadzienie jakie chciałbym użyć to ${filling}`
          } ${ingredientsLockView && `składniki które chciałbym użyć to: ${ingredients}`}${
            !ingredientsLockView &&
            "skladników jakie mógłbym wykorzystać do zrobienia tych pierogów (jeśli ci podałem jaki chcę farsz i ciasto uwzględnij to w propozycji), wylistuj mi propozycje."
          }. Zwróć tylko obiekt.`,
        },
      ],
    };

    try {
      const response = await axios.post("https://training.nerdbord.io/api/v1/openai/chat/completions", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${import.meta.env.VITE_REACT_APP_OPENAI_KEY}`,
        },
      });

      const chatResponse = JSON.parse(`${response.data.choices[0].message.content}`);
      console.log(chatResponse);

      if (!doughLockView) {
        setDough(chatResponse.ciasto);
        setDoughChanged(true);
      }
      if (!fillingLockView) {
        setFilling(chatResponse.nadzienie);
        setFillingChanged(true);
      }
      if (!ingredientsLockView) {
        setIngredients(chatResponse.skladniki);
        setIngredientsChanged(true);
      }
    } catch (error) {
      console.error("Błąd podczas generowania odpowiedzi GPT:", error);
    } finally {
      setIsLodingForDumplings(false);
    }
  };

  return generateGptResponse;
};

export default useAiGeneratedDumpling;
