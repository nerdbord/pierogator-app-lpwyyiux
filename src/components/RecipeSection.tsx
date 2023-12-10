import styled from "styled-components";
import { useStore } from "../store";
import useRecipesGenerator from "../utils/hooks/useRecipesGenerator";
import { Container, GenerateButton, GenerateComponent, IngredientsComponent, Title, TitleWrapper } from "./MainHeader";
import RecipeAcordeon from "./RecipeSection/RecipeAcordeon";
import TextArea from "./RecipeSection/TextArea";
import DumplingIcon from "./icons/DumplingIcon";

export default function RecipeSection() {
  const { recipe, dumplingNotes, setDumplingNotes } = useStore();
  const generateRecipe = useRecipesGenerator();
  return (
    <Container>
      <GenerateComponent>
        <IngredientsComponent>
          <TitleWrapper>
            <DumplingIcon />
            <Title>Przepis</Title>
          </TitleWrapper>
          <GenerateButton onClick={generateRecipe}>Generuj</GenerateButton>
        </IngredientsComponent>
        <TextArea
          value={dumplingNotes}
          setValue={setDumplingNotes}
          placeholder="Przykład: chrupiące pierogi bez pieczenia, bez użycia miksera, przyjazne weganom"
          id="recipeInput"
          disabled={false}
          padding={"16px"}
          border={`1px solid var(--gray-light, #e8e8e8)`}
          rowsOnStart={2}
        ></TextArea>
      </GenerateComponent>
      {recipe !== null && (
        <AcordeonsContainer>
          <RecipeAcordeon description="Składniki" data={recipe.ingredients}></RecipeAcordeon>
          <RecipeAcordeon
            description="Przygotowanie"
            data={{
              dough_preparation: recipe.instructions.dough_preparation,
              filling_preparation: recipe.instructions.filling_preparation,
              forming_and_cooking_dumplings: recipe.instructions.forming_and_cooking_dumplings,
            }}
          ></RecipeAcordeon>
          <RecipeAcordeon description="Podawanie" data={recipe.instructions.serving}></RecipeAcordeon>
        </AcordeonsContainer>
      )}
    </Container>
  );
}

const AcordeonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
