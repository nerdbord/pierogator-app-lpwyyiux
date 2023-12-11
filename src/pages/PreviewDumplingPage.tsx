import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import styled from "styled-components";
import { Container } from "../App";
import Logo from "../assets/Header.svg";
import {
  CustomInputDumplingName,
  DumplingNameSection,
  DumplingSectionWrapper,
  GeneratedDumplingContent,
  ImageDumpling,
} from "../components/DumplingSection";
import {
  GenerateButton,
  GenerateComponent,
  Header,
  IngredientsComponent,
  LogoBtnWrapper,
  Title,
  TitleWrapper,
} from "../components/MainHeader";
import { AcordeonsContainer } from "../components/RecipeSection";
import RecipeAcordeon from "../components/RecipeSection/RecipeAcordeon";
import DumplingIcon from "../components/icons/DumplingIcon";
import { useStore } from "../store";
import useFindRecipeById from "../utils/hooks/useFindRecipeById";

const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
`;
const PreviewIngredientComponent = styled(IngredientsComponent)`
  justify-content: right;
`;

export default function PreviewDumplingPage() {
  const navigate = useNavigate();
  const { previewedDumpling } = useStore();
  const { id } = useParams();
  const getDumpling = useFindRecipeById(id || "");
  useEffect(() => {
    if (id) {
      getDumpling();
    }
  }, []);

  const goBackToGallery = () => {
    navigate("/gallery");
  };
  return (
    <>
      <Header src={Logo} alt="logo" />
      <Container>
        <DumplingSectionWrapper>
          <IngredientsComponent>
            <LogoBtnWrapper>
              <GenerateButton onClick={goBackToGallery}>Wróć</GenerateButton>
            </LogoBtnWrapper>
            <TitleWrapper>
              <DumplingIcon />
              <Title>Pieróg</Title>
            </TitleWrapper>
          </IngredientsComponent>
          {previewedDumpling && (
            <GeneratedDumplingContent>
              <ImageDumpling src={previewedDumpling.imageSrc} alt="Wygenerowany Pieróg" />
              <DumplingNameSection>
                <CustomInputDumplingName disabled value={previewedDumpling.name} type="text" />
              </DumplingNameSection>
            </GeneratedDumplingContent>
          )}
        </DumplingSectionWrapper>
        {/* Recipe section */}
        <RecipeContainer>
          <GenerateComponent>
            <PreviewIngredientComponent>
              <TitleWrapper>
                <DumplingIcon />
                <Title>Przepis</Title>
              </TitleWrapper>
            </PreviewIngredientComponent>
          </GenerateComponent>
          {previewedDumpling !== null && (
            <AcordeonsContainer>
              <RecipeAcordeon
                description="Składniki"
                data={previewedDumpling.ingredients}
                opened={true}
              ></RecipeAcordeon>
              <RecipeAcordeon
                description="Przygotowanie"
                data={{
                  dough_preparation: previewedDumpling.instructions.dough_preparation,
                  filling_preparation: previewedDumpling.instructions.filling_preparation,
                  forming_and_cooking_dumplings: previewedDumpling.instructions.forming_and_cooking_dumplings,
                }}
                opened={true}
              ></RecipeAcordeon>
              <RecipeAcordeon
                description="Podawanie"
                data={previewedDumpling.instructions.serving}
                opened={true}
              ></RecipeAcordeon>
            </AcordeonsContainer>
          )}
        </RecipeContainer>
      </Container>
    </>
  );
}
