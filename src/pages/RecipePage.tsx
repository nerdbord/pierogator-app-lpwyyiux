import { useNavigate } from "react-router-dom";
import { Container } from "../App";
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
    <>
      <Header src={Logo} alt="logo"></Header>
      <Container>
        <DumplingSection
          buttonText="zmień"
          buttonAction={handleDumplingChangeRequest}
        ></DumplingSection>
        <RecipeSection></RecipeSection>
        {generatedDumplingImage && (
          <CtaButton onClick={handleDumplingShare}>
            Udostępnij Pieroga
          </CtaButton>
        )}
      </Container>
    </>
  );
}
