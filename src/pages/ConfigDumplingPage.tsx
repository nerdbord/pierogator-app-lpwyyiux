import { useNavigate } from "react-router-dom";
import { Container, MobileSimulator } from "../App";
import Logo from "../assets/Header.svg";
import { CtaButton } from "../components/CtaButton";
import DumplingSection from "../components/DumplingSection";
import MainHeader, { Header } from "../components/MainHeader";
import { useStore } from "../store";
import useDumplingNameGenerator from "../utils/hooks/useDumplingNameGenerator";
import useDumplingGenerator from "../utils/hooks/useDumplingsGenerator";
export default function ConfigDumplingPage() {
  const { generatedDumplingImage, isLoadingRecipe, setGeneratedDumplingImage, setDumplingName } = useStore();
  const navigate = useNavigate();
  const handleDumplingCreation = () => {
    navigate("/recipe");
  };
  const generateDumpling = useDumplingGenerator();
  const generateDumplingName = useDumplingNameGenerator();
  const generateDumplingData = async () => {
    setGeneratedDumplingImage("");
    setDumplingName("");
    generateDumplingName();
    generateDumpling();
  };
  return (
    <MobileSimulator>
      <Header src={Logo} alt="logo" />
      <Container>
        <MainHeader />
        {isLoadingRecipe && <p>ładuj</p>}
        <DumplingSection buttonText="generuj" buttonAction={generateDumplingData} descriptionTitle="nazwa" />
        {generatedDumplingImage && (
          <CtaButton onClick={handleDumplingCreation}>Zapisz i przejdź do tworzenia przepisu</CtaButton>
        )}
      </Container>
    </MobileSimulator>
  );
}
