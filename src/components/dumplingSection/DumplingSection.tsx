import { useState } from "react";
import styled from "styled-components";
import DumplingIcon from "../icons/DumplingIcon";

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

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: fit-content;
  align-items: center;
  gap: 8px;
`;

const Title = styled.h2`
  color: var(--dark-green);
`;

const GenerateButton = styled.button`
  display: inline-flex;
  padding: 10px 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  border: 1px solid var(--gray, #d6d6d6);
  background: var(--white, #fff);

  &:hover {
    border: 1px solid var(--Gray, #d6d6d6);
    background: var(--Gray-light, #e8e8e8);
  }
`;

const StyledImage = styled.img`
  /* height chyba nie konieczny, zobaczy się jak będziemy pracować z większym layoutem */
  height: 233px;
  border-radius: 4px;
  object-fit: cover;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 7px;
`;

const DescriptionTitle = styled.h3`
  color: var(--dark-green);
`;

const Description = styled.input`
  color: var(--dark-green, #002902);

  font-family: "Poppins";
  font-weight: 500;
  font-size: var(--h3-fs);
  line-height: var(--h3-lh);
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

export type DumplingSectionProps = {
  defaultDescription: string;
  showDescriptionTitle: boolean;
};

export default function DumplingSection(props: DumplingSectionProps) {
  const [descriptionValue, setDescriptionValue] = useState(props.defaultDescription);

  const handleDescriptionUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 40) setDescriptionValue(e.target.value);
  };

  const handleDescriptionSave = (e: React.FocusEvent<HTMLInputElement>) => {
    // save
  };

  return (
    <DumplingSectionWrapper>
      <DumplingSectionInterface>
        <TitleWrapper>
          <DumplingIcon />
          <Title>Pieróg</Title>
        </TitleWrapper>
        <GenerateButton>Generuj</GenerateButton>
      </DumplingSectionInterface>
      {/* <div className="dumpling-section-photo">wygenerowane img, jak to tutaj dać?</div> */}
      <StyledImage src="/src/components/dumplingSection/pierog.png"></StyledImage>
      <DescriptionWrapper>
        {props.showDescriptionTitle && <DescriptionTitle>Nazwa/Nic</DescriptionTitle>}
        <Description
          type="text"
          value={descriptionValue}
          onChange={handleDescriptionUpdate}
          onBlur={handleDescriptionSave}
        />
      </DescriptionWrapper>
    </DumplingSectionWrapper>
  );
}
