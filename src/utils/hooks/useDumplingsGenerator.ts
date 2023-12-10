import axios from "axios";
import { useStore } from "../../store";

const useDumplingGenerator = () => {
  const { dough, filling, ingredients, setGeneratedDumplingImage } = useStore();

  const generateDumplingImage = async () => {
    if (!dough || !filling) {
      alert("Proszę wybrać ciasto i farsz!");
      return;
    }

    const prompt = `Pieróg z ciasta ${dough} i farszu ${filling} i składników ${ingredients}`;
    try {
      const response = await axios.post(
        "https://training.nerdbord.io/api/v1/openai/images/generations",
        {
          model: "dall-e-3",
          prompt: prompt,
          n: 1,
          size: "1024x1024",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${import.meta.env.VITE_REACT_APP_OPENAI_KEY}`,
          },
        }
      );
      setGeneratedDumplingImage(response.data.data[0].url);
    } catch (error) {
      console.error("Błąd podczas generowania obrazu pieroga:", error);
    }
  };

  return generateDumplingImage;
};

export default useDumplingGenerator;
