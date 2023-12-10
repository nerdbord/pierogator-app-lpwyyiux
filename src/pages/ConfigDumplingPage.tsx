import { useNavigate } from "react-router-dom";
import { Container } from "../App";
import Logo from "../assets/Header.svg";
import { CtaButton } from "../components/CtaButton";
import DumplingSection from "../components/DumplingSection";
import MainHeader, { Header } from "../components/MainHeader";
import { useStore } from "../store";
import useDumplingGenerator from "../utils/hooks/useDumplingsGenerator";
export default function ConfigDumplingPage() {
  const { generatedDumplingImage, isLoadingRecipe } = useStore();
  const navigate = useNavigate();
  const handleDumplingCreation = async () => {
    navigate("/recipe");
  };
  const generateDumpling = useDumplingGenerator();
  return (
    <>
      <Header src={Logo} alt="logo" />
      <Container>
        <MainHeader />
        {isLoadingRecipe && <p>ładuj</p>}
        <DumplingSection
          buttonText="generuj"
          buttonAction={generateDumpling}
          descriptionTitle="nazwa"
        />
        {generatedDumplingImage && (
          <CtaButton onClick={handleDumplingCreation}>
            Zapisz i przejdź do tworzenia przepisu
          </CtaButton>
        )}
      </Container>
    </>
  );
}
