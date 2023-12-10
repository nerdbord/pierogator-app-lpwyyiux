import { useNavigate } from "react-router";
import styled from "styled-components";
import { Container } from "../App";
import Logo from "../assets/Header.svg";
import { GenerateButton, Header, Title, TitleWrapper } from "../components/MainHeader";
import DumplingIcon from "../components/icons/DumplingIcon";

export type GalleryPageProps = {
  dumplingPath: string;
};

export default function GalleryPage(props: GalleryPageProps) {
  const navigate = useNavigate();
  const handleNewDumpling = () => {
    navigate(`${props.dumplingPath}`);
  };
  return (
    <>
      <Header src={Logo} alt="logo"></Header>
      <Container>
        <SectionTitle>
          <TitleWrapper>
            <DumplingIcon />
            <Title>Moje Pierogi</Title>
          </TitleWrapper>
          <GenerateButton onClick={handleNewDumpling}>Nowy pieróg</GenerateButton>
        </SectionTitle>
      </Container>
    </>
  );
}

const SectionTitle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
