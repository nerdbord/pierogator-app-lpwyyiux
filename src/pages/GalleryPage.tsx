import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { Container, MobileSimulator } from "../App";
import Logo from "../assets/Header.svg";
import { GenerateButton, Header, Title, TitleWrapper } from "../components/MainHeader";
import Tile from "../components/Tile";
import DumplingIcon from "../components/icons/DumplingIcon";
import DumplingRecipe from "../utils/Classes/DumplingRecipe";
import useGetAllDumplings from "../utils/hooks/useGetAllDumplings";
import useGetUserDumplings from "../utils/hooks/useGetUserDumplings";

export type GalleryPageProps = {
  dumplingPath: string;
};

export type DumplingData = DumplingRecipe & {
  _id: number;
};

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;
export const Gallery = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;

export default function GalleryPage(props: GalleryPageProps) {
  const navigate = useNavigate();
  const [userDumplingsData, setUserDumplingsData] = useState<DumplingData[] | null>(null);
  const [allDumplingsData, setAllDumplingsData] = useState<DumplingData[] | null>(null);
  const prepareGallery = async () => {
    const getUserDumplings = useGetUserDumplings();
    const getAllDumplings = useGetAllDumplings();
    setUserDumplingsData(await getUserDumplings());
    setAllDumplingsData(await getAllDumplings());
  };
  useEffect(() => {
    prepareGallery();
  }, []);
  const userDumplingsTiles = useMemo(() => {
    if (userDumplingsData !== null) {
      return userDumplingsData.map((recipe) => {
        return <Tile data={recipe} editable={true}></Tile>;
      });
    } else {
      return [];
    }
  }, [userDumplingsData]);

  const allDumplingsTiles = useMemo(() => {
    if (allDumplingsData !== null) {
      return allDumplingsData.map((recipe) => {
        return <Tile data={recipe} editable={false}></Tile>;
      });
    } else {
      return [];
    }
  }, [allDumplingsData]);

  const handleNewDumpling = () => {
    navigate(`${props.dumplingPath}`);
  };
  return (
    <MobileSimulator>
      <Header src={Logo} alt="logo"></Header>
      <Container>
        <ContentContainer>
          <SectionTitle>
            <TitleWrapper>
              <DumplingIcon />
              <Title>Moje Pierogi</Title>
            </TitleWrapper>
            <GenerateButton onClick={handleNewDumpling}>Nowy pieróg</GenerateButton>
          </SectionTitle>
          <Gallery>{...userDumplingsTiles}</Gallery>
        </ContentContainer>
        <ContentContainer>
          <SectionTitle>
            <TitleWrapper>
              <DumplingIcon />
              <Title>Pierogarnia</Title>
            </TitleWrapper>
          </SectionTitle>
          <Gallery>{...allDumplingsTiles}</Gallery>
        </ContentContainer>
      </Container>
    </MobileSimulator>
  );
}

const SectionTitle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
