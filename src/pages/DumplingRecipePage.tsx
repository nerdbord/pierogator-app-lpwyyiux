import { useNavigate } from "react-router-dom";
import { Container } from "../App";
import { CtaButton } from "../components/CtaButton";
import DumplingSection from "../components/DumplingSection";
import RecipeSection from "../components/RecipeSection";
import { useStore } from "../store";
import useShareDumpling from "../utils/hooks/useShareDumpling";

export type DumplingRecipePageProps = {
  configPath: string;
  proceedPath: string;
};

export default function DumplingRecipePage(props: DumplingRecipePageProps) {
  const { generatedDumplingImage } = useStore();
  const navigate = useNavigate();
  const shareDumpling = useShareDumpling();
  const handleDumplingShare = async () => {
    // tutaj wsadzasz potem funkcję z kolejnego taska
    await shareDumpling();
    // navigate(props.proceedPath);
  };
  const handleDumplingChangeRequest = () => {
    navigate(props.configPath);
  };
  return (
    <Container>
      {/* header */}
      <DumplingSection buttonText="zmień" buttonAction={handleDumplingChangeRequest}></DumplingSection>
      <RecipeSection></RecipeSection>
      {generatedDumplingImage && <CtaButton onClick={handleDumplingShare}>Udostępnij Pieroga</CtaButton>}
    </Container>
  );
}
