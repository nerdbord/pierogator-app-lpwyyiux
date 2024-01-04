import axios from "axios";
import { useStore } from "../../store";

const useDumplingGenerator = () => {
  const { dough, filling, ingredients, setGeneratedDumplingImage, setIsLoadingImage } = useStore();

  const generateDumplingImage = async () => {
    setIsLoadingImage(true);
    if (!dough || !filling) {
      alert("Proszę wybrać ciasto i farsz!");
      return;
    }

    const prompt = `Pieróg z ciasta ${dough} i farszu ${filling} i składników ${ingredients}`;
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/images/generations",
        {
          model: "dall-e-2",
          prompt: prompt,
          n: 1,
          size: "1024x1024",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_REACT_APP_OPENAI_KEY}`,
          },
        }
      );
      setGeneratedDumplingImage(response.data.data[0].url);
    } catch (error) {
      console.error("Błąd podczas generowania obrazu pieroga:", error);
    } finally {
      setIsLoadingImage(false);
    }
  };

  return generateDumplingImage;
};

export default useDumplingGenerator;
