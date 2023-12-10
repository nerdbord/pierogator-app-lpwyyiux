import styled from "styled-components";
import ButtonLock from "../assets/ButtonLock.svg";
import ButtonUnlock from "../assets/ButtonUnlock.svg";
import Logo from "../assets/Header.svg";
import { useStore } from "../store";
import useAiGeneratedDumpling from "../utils/useAiGeneratedDumpling";
import TextArea from "./RecipeSection/TextArea";
import DumplingIcon from "./icons/DumplingIcon";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 375px;
  height: auto;
  padding: 0.5rem;
`;

const Header = styled.img`
  width: 375px;
  height: auto;
`;

export const IngredientsComponent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 5px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: fit-content;
  align-items: center;
  gap: 8px;
`;

export const Title = styled.h2`
  color: var(--dark-green);
`;

export const GenerateButton = styled.button`
  display: inline-flex;
  padding: 10px 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  border: 1px solid var(--gray, #d6d6d6);
  background: var(--white, #fff);
  text-transform: capitalize;

  &:hover {
    border: 1px solid var(--Gray, #d6d6d6);
    background: var(--Gray-light, #e8e8e8);
  }
`;

const CustomInputContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  border: 1px solid var(--Gray-light, #e8e8e8);
  border-radius: 4px;
  padding: 16px;
  background: var(--Gray-background, #f9f9f9);
  margin-top: 7px;
  gap: 12px;
`;

// const CustomInput = styled.textarea`
//   color: var(--dark-green, #002902);

//   font-family: "Poppins";
//   font-weight: 500;
//   font-size: var(--h3-fs);
//   line-height: var(--h3-lh);
//   height: 20px;
//   letter-spacing: 0%;

//   padding: 16px 16px 16px 12px;
//   border-radius: 4px;
//   border: 1px solid var(--gray-background, #f9f9f9);

//   background: var(--gray-background, #f9f9f9);
//   width: 100%;

//   &:focus {
//     outline: none;
//   }
// `;

const ButtonUnlockStyled = styled.img`
  padding: 0;
  border-radius: 0 4px 4px 0;
`;

export const Label = styled.label`
  align-self: flex-start;
  font-size: 14px;
  text-transform: capitalize;
  font-weight: 500;
  font-family: "Poppins";
  color: var(--dark-green, #002902);
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-top: 20px;
`;

export const GenerateComponent = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainHeader = () => {
  const generateGptResponse = useAiGeneratedDumpling();

  //
  const {
    dough,
    setDough,
    doughLockView,
    setDoughLockView,
    setFilling,
    setFillingLockView,
    fillingLockView,
    ingredients,
    setIngredients,
    setIngredientsLockView,
    ingredientsLockView,
    filling,
    isLoading,
  } = useStore();
  return (
    <Container>
      <Header src={Logo} alt="logo" />
      <IngredientsComponent>
        <TitleWrapper>
          <DumplingIcon />
          <Title>Składniki</Title>
        </TitleWrapper>
        {isLoading && <p>Loading...</p>}

        <GenerateButton onClick={generateGptResponse}>Generuj</GenerateButton>
      </IngredientsComponent>
      <InputContainer>
        <Label htmlFor="customInput">Ciasto</Label>
        <CustomInputContainer>
          <ButtonUnlockStyled
            onClick={() => setDoughLockView(!doughLockView)}
            src={doughLockView ? ButtonLock : ButtonUnlock}
            alt="unlock"
          />
          <TextArea
            value={dough}
            disabled={doughLockView}
            setValue={setDough}
            id="customInput1"
            placeholder="Wpisz, wygeneruj lub pozostaw puste."
            padding="0px"
            border="none"
          />
        </CustomInputContainer>
      </InputContainer>
      <InputContainer>
        <Label htmlFor="customInput">Nadzienie</Label>
        <CustomInputContainer>
          <ButtonUnlockStyled
            onClick={() => setFillingLockView(!fillingLockView)}
            src={fillingLockView ? ButtonLock : ButtonUnlock}
            alt="unlock"
          />
          <TextArea
            value={filling}
            disabled={fillingLockView}
            setValue={setFilling}
            id="customInput2"
            placeholder="Wpisz, wygeneruj lub pozostaw puste."
            padding="0px"
            border="none"
          />
        </CustomInputContainer>
      </InputContainer>
      <InputContainer>
        <Label htmlFor="customInput">Składniki</Label>
        <CustomInputContainer>
          <ButtonUnlockStyled
            onClick={() => setIngredientsLockView(!ingredientsLockView)}
            src={ingredientsLockView ? ButtonLock : ButtonUnlock}
            alt="unlock"
          />
          <TextArea
            value={ingredients}
            disabled={ingredientsLockView}
            setValue={setIngredients}
            id="customInput3"
            placeholder="Wpisz, wygeneruj lub pozostaw puste."
            padding="0px"
            border="none"
          />
        </CustomInputContainer>
      </InputContainer>
    </Container>
  );
};

export default MainHeader;
