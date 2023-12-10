import { useNavigate } from "react-router-dom";
import { Container } from "../App";
import { CtaButton } from "../components/CtaButton";
import DumplingSection from "../components/DumplingSection";
import RecipeSection from "../components/RecipeSection";

export type DumplingRecipePageProps = {
  configPath: string;
  proceedPath: string;
};

export default function DumplingRecipePage(props: DumplingRecipePageProps) {
  const navigate = useNavigate();
  const handleDumplingShare = async () => {
    // tutaj wsadzasz potem funkcję z kolejnego taska
    // await shareRecipe();
    navigate(props.proceedPath);
  };
  const handleDumplingChangeRequest = () => {
    navigate(props.configPath);
  };
  return (
    <Container>
      {/* header */}
      <DumplingSection buttonText="zmień" buttonAction={handleDumplingChangeRequest}></DumplingSection>
      <RecipeSection></RecipeSection>
      <CtaButton onClick={handleDumplingShare}>Udostępnij Pieroga</CtaButton>
    </Container>
  );
}
