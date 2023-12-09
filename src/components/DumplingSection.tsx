import styled from "styled-components";
import { useStore } from "../store";
import useDumplingGenerator from "../utils/hooks/useDumplingsGenerator";
import useRecipesGenerator from "../utils/hooks/useRecipesGenerator";
import {
  ButtonGoNext,
  GenerateButton,
  GenerateComponent,
  IngredientsComponent,
  Title,
  TitleWrapper,
} from "./MainHeader";
import DumplingIcon from "./icons/DumplingIcon";

const DumplingSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 343px;
`;

const DumplingSectionInterface = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledImage = styled.img`
  /* height chyba nie konieczny, zobaczy się jak będziemy pracować z większym layoutem */
  /* height: 233px; */
  border-radius: 4px;
  object-fit: cover;
`;

const CustomInputDumplingName = styled.input`
  color: var(--dark-green, #002902);

  font-family: "Poppins";
  font-weight: 500;
  font-size: var(--h3-fs);
  line-height: var(--h3-lh);
  height: 20px;
  letter-spacing: 0%;

  padding: 16px;
  border-radius: 4px;
  border: 1px solid var(--gray-background, #f9f9f9);

  background: var(--gray-background, #f9f9f9);
  width: 100%;

  &:focus {
    border: 1px solid var(--gray-light, #e8e8e8);
    outline: none;
  }
`;

// export type DumplingSectionProps = {
//   defaultDescription: string;
//   showDescriptionTitle: boolean;
// };

export default function DumplingSection() {
  const { generatedDumplingImage, setDumplingName, ingredientsRecipe } = useStore();

  const handleDumplingNameUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 40) setDumplingName(e.target.value);
  };

  const handleDescriptionSave = (e: React.MouseEvent<HTMLButtonElement>) => {
    // save
  };
  const generateRecipe = useRecipesGenerator();
  const generateDumplingImage = useDumplingGenerator();
  console.log(ingredientsRecipe);
  return (
    <>
      <IngredientsComponent>
        <TitleWrapper>
          <DumplingIcon />
          <Title>Pieróg</Title>
        </TitleWrapper>
        <GenerateButton onClick={generateDumplingImage}>Generuj</GenerateButton>
      </IngredientsComponent>
      <GenerateComponent>
        {generatedDumplingImage && <img src={generatedDumplingImage} alt="Wygenerowany Pieróg" />}
        <CustomInputDumplingName
          onChange={handleDumplingNameUpdate}
          id="customInput"
          type="text"
          placeholder="Nazwa pieroga"
        />
        {/* przerzuć potem do odrębnego komponentu, taki button nie może być tutaj częścią, ale dzięki temu łatwej na razie będzie integrować api*/}
        <ButtonGoNext onClick={handleDescriptionSave}>Zapisz i przejdź do tworzenia projektu</ButtonGoNext>
        <ButtonGoNext onClick={generateRecipe}>Ale bez pierogów</ButtonGoNext>
      </GenerateComponent>
    </>
  );
}
