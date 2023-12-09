import styled from "styled-components";
import { useStore } from "../store";
import {
  GenerateButton,
  GenerateComponent,
  IngredientsComponent,
  Title,
  TitleWrapper,
} from "./MainHeader";
import DumplingIcon from "./icons/DumplingIcon";

const StyledImage = styled.img`
  /* height chyba nie konieczny, zobaczy się jak będziemy pracować z większym layoutem */
  /* height: 233px; */
  border-radius: 4px;
  object-fit: cover;
`;

export const CustomInputDumplingName = styled.input`
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

const DescriptionTitle = styled.h3`
  color: var(--dark-green);
`;

export type DumplingSectionProps = {
  buttonAction: ()=>void;
  buttonText?: string;
  descriptionTitle?: string;
};

export default function DumplingSection(props: DumplingSectionProps ) {
  const { generatedDumplingImage, setDumplingName, dumplingName } = useStore();

  const handleDumplingNameUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 40) setDumplingName(e.target.value);
  };

  const handleDescriptionSave = (e: React.MouseEvent<HTMLButtonElement>) => {
    // save in memory
  };

  return (
    <>
      <IngredientsComponent>
        <TitleWrapper>
          <DumplingIcon />
          <Title>Pieróg</Title>
        </TitleWrapper>
        <GenerateButton onClick={props.buttonAction}>{props.buttonText || "Generuj"}</GenerateButton>
      </IngredientsComponent>
      <GenerateComponent>
        {generatedDumplingImage && (
          <img src={generatedDumplingImage} alt="Wygenerowany Pieróg" />
        )}
        {props.descriptionTitle && <DescriptionTitle>{props.descriptionTitle}</DescriptionTitle>}
        <CustomInputDumplingName
          value={dumplingName}
          onChange={handleDumplingNameUpdate}
          id="customInput"
          type="text"
          placeholder="Nazwa pieroga"
        />
      </GenerateComponent>
    </>
  );
}
