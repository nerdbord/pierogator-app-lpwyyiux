import { useNavigate } from "react-router-dom";
import { Container } from "../App";
import { CtaButton } from "../components/CtaButton";
import DumplingSection from "../components/DumplingSection";
import MainHeader, { Header } from "../components/MainHeader";
import useDumplingGenerator from "../utils/hooks/useDumplingsGenerator";
import Logo from "../assets/Header.svg";

export default function ConfigDumplingPage() {
  const navigate = useNavigate();
  const handleDumplingCreation = async () => {
    // tutaj wsadzasz funkcję od save'owania składników i zdjęcia
    // saveDataInMemory()
    navigate("/recipes");
  };
  const generateDumpling = useDumplingGenerator();
  return (
    <>
      <Header src={Logo} alt="logo" />
      <Container>
        <MainHeader />
        <DumplingSection
          buttonText="generuj"
          buttonAction={generateDumpling}
          descriptionTitle="nazwa"
        />
        <CtaButton onClick={handleDumplingCreation}>
          Zapisz i przejdź do tworzenia przepisu
        </CtaButton>
      </Container>
    </>
  );
}
