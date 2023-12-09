import axios from "axios";
//import { useStore } from "../store";

const useAiGeneratedDumpling = () => {
  //const { dough, filling, ingredients } = useStore();

  const generateGptResponse = async () => {
    const data = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "Create a object with 3 properties: dough, filling, ingredients and set them to string values of random dumpling properties.",
        },
        {
          role: "user",
          content: "Hello!",
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

      console.log(response.data);
    } catch (error) {
      console.error("Błąd podczas generowania odpowiedzi GPT:", error);
      return null;
    }
  };

  return generateGptResponse;
};

export default useAiGeneratedDumpling;
