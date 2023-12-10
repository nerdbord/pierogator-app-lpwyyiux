import styled from "styled-components";
import { useStore } from "../store";

import {
  GenerateButton,
  GenerateComponent,
  IngredientsComponent,
  Label,
  Title,
  TitleWrapper,
  Container,
} from "./MainHeader";
import DumplingIcon from "./icons/DumplingIcon";
import { device } from "../GlobalStyles";

const CustomInputDumplingName = styled.input`
  color: var(--dark-green, #002902);

  font-family: "Poppins";
  font-weight: 500;
  font-size: var(--h3-fs);
  line-height: 20px;
  letter-spacing: 0%;
  border-radius: 4px;
  border: 1px solid var(--gray-background, #f9f9f9);
  padding: 16px;
  background: var(--gray-background, #f9f9f9);
  width: 100%;

  &:focus {
    border: 1px solid var(--gray-light, #e8e8e8);
    outline: none;
  }

  @media ${device.mobile} {
    &:focus {
      font-size: 1rem;
    }
  }
`;

const ImageDumpling = styled.img`
  width: 100%;
`;

export type DumplingSectionProps = {
  buttonAction: () => void;
  buttonText?: string;
  descriptionTitle?: string;
};

export default function DumplingSection(props: DumplingSectionProps) {
  const { generatedDumplingImage, setDumplingName, dumplingName } = useStore();

  const handleDumplingNameUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 40) setDumplingName(e.target.value);
  };

  const handleDescriptionSave = (e: React.MouseEvent<HTMLButtonElement>) => {
    // save in memory
  };

  return (
    <Container>
      <IngredientsComponent>
        <TitleWrapper>
          <DumplingIcon />
          <Title>Pieróg</Title>
        </TitleWrapper>
        <GenerateButton onClick={props.buttonAction}>
          {props.buttonText || "Generuj"}
        </GenerateButton>
      </IngredientsComponent>
      <GenerateComponent>
        {generatedDumplingImage && (
          <ImageDumpling
            src={generatedDumplingImage}
            alt="Wygenerowany Pieróg"
          />
        )}
        {props.descriptionTitle && <Label>{props.descriptionTitle}</Label>}
        <CustomInputDumplingName
          value={dumplingName}
          onChange={handleDumplingNameUpdate}
          id="customInput"
          type="text"
          placeholder="Nazwa pieroga"
        />
      </GenerateComponent>
    </Container>
  );
}
