import { useNavigate } from "react-router-dom";
import { Container } from "../App";
import { CtaButton } from "../components/CtaButton";
import DumplingSection from "../components/DumplingSection";
import MainHeader from "../components/MainHeader";
import useDumplingGenerator from "../utils/hooks/useDumplingsGenerator";

export default function ConfigDumplingPage() {
  const navigate = useNavigate();
  const handleDumplingCreation = async () => {
    // tutaj wsadzasz funkcję od save'owania składników i zdjęcia
    // saveDataInMemory()
    navigate("/recipes");
  };
  const generateDumpling = useDumplingGenerator();
  return (
    <Container>
      <MainHeader />
      <DumplingSection buttonText="generuj" buttonAction={generateDumpling} descriptionTitle="nazwa" />
      <CtaButton onClick={handleDumplingCreation}>Zapisz i przejdź do tworzenia przepisu</CtaButton>
    </Container>
  );
}
