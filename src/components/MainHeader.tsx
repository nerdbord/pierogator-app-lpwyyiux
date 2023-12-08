import styled from "styled-components";
import Logo from "../assets/Header.png";
import Ingredients from "../assets/ingredients.png";
import Dumplings from "../assets/Dumplings.png";
import ButtonUnlock from "../assets/ButtonUnlock.png";
import ButtonLock from "../assets/ButtonLock.png";
import { useEffect } from "react";
import { useStore } from "../store";

const Container = styled.div`
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

const IngredientsComponent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const IngredientsLogo = styled.img`
  display: flex;
`;

const Button = styled.button`
  background: white;
  border: 1px solid #d6d6d6;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const CustomInputContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  border: 1px solid var(--Gray-light, #e8e8e8);
  border-radius: 4px;
  padding: 0.5rem;
  background: var(--Gray-background, #f9f9f9);
  margin-top: 4px;
`;

const CustomInput = styled.input`
  flex-grow: 1;
  padding: 16px;
  width: 100%;
  border: none;
  border-radius: 4px 0 0 4px;
  background: transparent;
`;

const ButtonUnlockStyled = styled.img`
  padding: 0;
  border-radius: 0 4px 4px 0;
`;

const Label = styled.label`
  align-self: flex-start;
  font-size: 14px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-top: 20px;
`;

const MainHeader = () => {
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
  } = useStore();

  useEffect(
    () => console.log(dough, ingredients, filling),
    [dough, ingredients, filling]
  );
  return (
    <Container>
      <Header src={Logo} alt="logo" />
      <IngredientsComponent>
        <IngredientsLogo src={Ingredients} alt="ingredients" />
        <Button>Generuj</Button>
      </IngredientsComponent>
      <InputContainer>
        <Label htmlFor="customInput">Ciasto</Label>
        <CustomInputContainer>
          <ButtonUnlockStyled
            onClick={() => setDoughLockView(!doughLockView)}
            src={doughLockView ? ButtonLock : ButtonUnlock}
            alt="unlock"
          />
          <CustomInput
            disabled={doughLockView}
            onChange={(e) => setDough(e.target.value)}
            id="customInput"
            type="text"
            placeholder="Wpisz, wygeneruj lub pozostaw puste."
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
          <CustomInput
            disabled={fillingLockView}
            onChange={(e) => setFilling(e.target.value)}
            id="customInput"
            type="text"
            placeholder="Wpisz, wygeneruj lub pozostaw puste."
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
          <CustomInput
            disabled={ingredientsLockView}
            onChange={(e) => setIngredients(e.target.value)}
            id="customInput"
            type="text"
            placeholder="Wpisz, wygeneruj lub pozostaw puste."
          />
        </CustomInputContainer>
      </InputContainer>
      <IngredientsComponent>
        <IngredientsLogo src={Dumplings} alt="ingredients" />
        <Button>Generuj</Button>
      </IngredientsComponent>
    </Container>
  );
};

export default MainHeader;
