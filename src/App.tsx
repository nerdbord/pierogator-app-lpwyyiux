import { useEffect } from "react";
import GlobalStyle from "./GlobalStyles";
import { CtaButton } from "./components/CtaButton";
import DumplingSection from "./components/DumplingSection";
import MainHeader from "./components/MainHeader";
import RecipeSection from "./components/RecipeSection";
import { useStore } from "./store";

function App() {
  const { ctaAction, setCtaAction, setRecipe } = useStore();

  // rozróżnij to potem na podstawie url może, pozbędziesz się tez ctaAction być może. Wsm strona będzie miała inne dane więc.
  const handleDumplingCreation = async () => {
    // tutaj wsadzasz funkcję od save'owania składników i zdjęcia
    // saveDataInMemory()
    setCtaAction(handleDumplingSave);
    // await generateRecipe();
    // tutaj wsadzasz potem funkcję z kolejnego taska
    // await saveRecipeOnDb();
  };
  const handleDumplingSave = async () => {};
  useEffect(() => setCtaAction(handleDumplingCreation), []);
  return (
    <>
      <MainHeader />
      <DumplingSection />
      <RecipeSection></RecipeSection>
      <GlobalStyle />
      <CtaButton onClick={ctaAction}>Zapisz i przejdź do tworzenia przepisu</CtaButton>
    </>
  );
}

export default App;
