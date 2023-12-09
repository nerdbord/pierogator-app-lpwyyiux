import { useEffect } from "react";
import GlobalStyle from "./GlobalStyles";
import { CtaButton } from "./components/CtaButton";
import DumplingSection from "./components/DumplingSection";
import MainHeader from "./components/MainHeader";
import RecipeSection from "./components/RecipeSection";
import { useStore } from "./store";
import styled from "styled-components";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 375px;
  height: auto;
  padding: 0.5rem;
`;

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
    <Router>
      <GlobalStyle />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Container>
                <MainHeader />
                <DumplingSection />
              </Container>
              <CtaButton onClick={ctaAction}>
                Zapisz i przejdź do tworzenia przepisu
              </CtaButton>
            </>
          }
        />
        <Route path="/recepies" element={<RecipeSection />} />
      </Routes>
    </Router>
  );
}

export default App;
