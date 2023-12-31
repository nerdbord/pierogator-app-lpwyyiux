import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, MobileSimulator } from "../App";
import Logo from "../assets/Header.svg";
import { CtaButton } from "../components/CtaButton";
import DumplingSection from "../components/DumplingSection";
import { Header } from "../components/MainHeader";
import RecipeSection from "../components/RecipeSection";
import { useStore } from "../store";
import useShareDumpling from "../utils/hooks/useShareDumpling";

export type DumplingRecipePageProps = {
  configPath: string;
  proceedPath: string;
};

export default function DumplingRecipePage(props: DumplingRecipePageProps) {
  const {
    generatedDumplingImage,
    recipe,
    filling,
    dough,
    ingredients,
    dumplingName,
    setIsLoadingRecipe,
    setIngredients,
    setFilling,
    setDough,
    setGeneratedDumplingImage,
    setDumplingName,
    setDumplingNotes,
    setRecipe,
    setDoughLockView,
    setFillingLockView,
    setIngredientsLockView,
  } = useStore();
  const navigate = useNavigate();
  const shareDumpling = useShareDumpling();
  const handleDumplingShare = async () => {
    // tutaj wsadzasz potem funkcję z kolejnego taska
    await shareDumpling();
    // clear dumpling data
    setIngredients("");
    setFilling("");
    setDough("");
    setGeneratedDumplingImage("");
    setDumplingName("");
    setDumplingNotes("");
    setRecipe(null);
    setIsLoadingRecipe(false);
    setDoughLockView(false);
    setFillingLockView(false);
    setIngredientsLockView(false);
    navigate(props.proceedPath);
  };
  const handleDumplingChangeRequest = () => {
    setIsLoadingRecipe(false);
    navigate(props.configPath);
  };

  useEffect(() => {
    if (filling === "" || dough === "" || ingredients === "" || generatedDumplingImage === "") {
      navigate("/");
    }
  }, []);
  return (
    <MobileSimulator>
      <Header src={Logo} alt="logo"></Header>
      <Container>
        <DumplingSection
          buttonText="zmień"
          buttonAction={handleDumplingChangeRequest}
          changeRecipe={true}
        ></DumplingSection>
        <RecipeSection></RecipeSection>
        {generatedDumplingImage && recipe && dumplingName && (
          <CtaButton onClick={handleDumplingShare}>Udostępnij Pieroga</CtaButton>
        )}
      </Container>
    </MobileSimulator>
  );
}
