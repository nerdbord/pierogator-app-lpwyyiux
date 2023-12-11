import styled from "styled-components";
import { device } from "../GlobalStyles";
import ButtonLock from "../assets/ButtonLock.svg";
import ButtonUnlock from "../assets/ButtonUnlock.svg";
import { useStore } from "../store";
import useAiGeneratedDumpling from "../utils/hooks/useAiGeneratedDumpling";
import Loader from "./Loader";
import TextArea from "./RecipeSection/TextArea";
import DumplingIcon from "./icons/DumplingIcon";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding: 0;
  margin: 0;
  overflow-x: hidden;

  @media ${device.mobile} {
    border: none;
    width: 100%;
  }
`;

export const Header = styled.img`
  width: 100%;
  height: auto;
  object-fit: fill;

  @media ${device.mobile} {
    border: none;
    width: 100%;
    object-fit: cover;
  }
`;

export const IngredientsComponent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
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
  color: inherit;

  &:focus {
    cursor: pointer;
  }

  &:hover {
    border: 1px solid var(--Gray, #d6d6d6);
    background: var(--gray-light, #e8e8e8);
  }
`;

const CustomInputContainer = styled.label`
  display: flex;
  align-items: flex-start;
  border: 1px solid var(--gray-light, #e8e8e8);
  border-radius: 4px;
  padding: 16px;
  background: var(--gray-background, #f9f9f9);
  margin-top: 7px;
  gap: 12px;
`;

const ButtonUnlockStyled = styled.img`
  padding: 0;
  border-radius: 0 4px 4px 0;

  &:focus {
    cursor: pointer;
  }
`;

export const Label = styled.label`
  align-self: flex-start;
  font-size: 14px;
  font-weight: 500;
  font-family: "Poppins";
  color: var(--dark-green, #002902);
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 24px;
`;

export const GenerateComponent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LogoBtnWrapper = styled.div`
  display: flex;
  gap: 10px;
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
    isLoadingDumplings,
    doughChanged,
    setDoughChanged,
    fillingChanged,
    setFillingChanged,
    ingredientsChanged,
    setIngredientsChanged,
    setIncompleteFieldsError,
  } = useStore();

  return (
    <>
      <Container>
        <IngredientsComponent>
          <TitleWrapper>
            <DumplingIcon />
            <Title>Składniki</Title>
          </TitleWrapper>
          <LogoBtnWrapper>
            {isLoadingDumplings && <Loader />}
            <GenerateButton
              onClick={() => {
                generateGptResponse();
                setIncompleteFieldsError("");
              }}
            >
              Generuj
            </GenerateButton>
          </LogoBtnWrapper>
        </IngredientsComponent>
        <InputContainer>
          <Label htmlFor="customInput">Ciasto</Label>
          <CustomInputContainer
            style={{
              border: `${
                doughLockView ? "1px solid var(--gray-background, #f9f9f9)" : "1px solid var(--gray-light, #e8e8e8)"
              }`,
            }}
          >
            <ButtonUnlockStyled
              onClick={() => !isLoadingDumplings && setDoughLockView(!doughLockView)}
              src={doughLockView ? ButtonLock : ButtonUnlock}
              alt="unlock"
            />
            <TextArea
              value={dough}
              disabled={doughLockView || isLoadingDumplings}
              setValue={setDough}
              configValChanged={doughChanged}
              setConfigValChanged={setDoughChanged}
              id="customInput1"
              placeholder="Wpisz, wygeneruj lub pozostaw puste."
              padding="0px"
              border="none"
            />
          </CustomInputContainer>
        </InputContainer>
        <InputContainer>
          <Label htmlFor="customInput">Nadzienie</Label>
          <CustomInputContainer
            style={{
              border: `${
                fillingLockView ? "1px solid var(--gray-background, #f9f9f9)" : "1px solid var(--gray-light, #e8e8e8)"
              }`,
            }}
          >
            <ButtonUnlockStyled
              onClick={() => !isLoadingDumplings && setFillingLockView(!fillingLockView)}
              src={fillingLockView ? ButtonLock : ButtonUnlock}
              alt="unlock"
            />
            <TextArea
              value={filling}
              disabled={fillingLockView || isLoadingDumplings}
              setValue={setFilling}
              configValChanged={fillingChanged}
              setConfigValChanged={setFillingChanged}
              id="customInput2"
              placeholder="Wpisz, wygeneruj lub pozostaw puste."
              padding="0px"
              border="none"
            />
          </CustomInputContainer>
        </InputContainer>
        <InputContainer>
          <Label htmlFor="customInput">Składniki</Label>
          <CustomInputContainer
            style={{
              border: `${
                ingredientsLockView
                  ? "1px solid var(--gray-background, #f9f9f9)"
                  : "1px solid var(--gray-light, #e8e8e8)"
              }`,
            }}
          >
            <ButtonUnlockStyled
              onClick={() => !isLoadingDumplings && setIngredientsLockView(!ingredientsLockView)}
              src={ingredientsLockView ? ButtonLock : ButtonUnlock}
              alt="unlock"
            />
            <TextArea
              value={ingredients}
              disabled={ingredientsLockView || isLoadingDumplings}
              setValue={setIngredients}
              configValChanged={ingredientsChanged}
              setConfigValChanged={setIngredientsChanged}
              id="customInput3"
              placeholder="Wpisz, wygeneruj lub pozostaw puste."
              padding="0px"
              border="none"
            />
          </CustomInputContainer>
        </InputContainer>
      </Container>
    </>
  );
};

export default MainHeader;
