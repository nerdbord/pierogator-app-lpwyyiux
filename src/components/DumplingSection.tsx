import styled from "styled-components";
import { useStore } from "../store";

import { device } from "../GlobalStyles";
import { GenerateButton, GenerateComponent, IngredientsComponent, Label, Title, TitleWrapper } from "./MainHeader";
import DumplingIcon from "./icons/DumplingIcon";

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
  height: calc((100dvw - 32px) / 16 * 9);

  object-fit: cover;
  object-position: 50% 50%;
`;

const DumplingSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

const GeneratedDumplingContent = styled(GenerateComponent)`
  gap: 16px;
`;

const DumplingNameSection = styled.div`
  display: flex;
  flex-direction: column;
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

  return (
    <DumplingSectionWrapper>
      <IngredientsComponent>
        <TitleWrapper>
          <DumplingIcon />
          <Title>Pieróg</Title>
        </TitleWrapper>
        <GenerateButton onClick={props.buttonAction}>{props.buttonText || "Generuj"}</GenerateButton>
      </IngredientsComponent>
      {generatedDumplingImage && (
        <GeneratedDumplingContent>
          <ImageDumpling src={generatedDumplingImage} alt="Wygenerowany Pieróg" />
          <DumplingNameSection>
            {props.descriptionTitle && <Label>{props.descriptionTitle}</Label>}
            <CustomInputDumplingName
              required
              value={dumplingName}
              onChange={handleDumplingNameUpdate}
              id="customInput"
              type="text"
              placeholder="Nazwa pieroga"
            />
          </DumplingNameSection>
        </GeneratedDumplingContent>
      )}
    </DumplingSectionWrapper>
  );
}
