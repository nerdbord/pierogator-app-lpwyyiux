import styled from "styled-components";
import { useStore } from "../../store";

const CustomInputRecipeVariant = styled.textarea`
  color: var(--dark-green, #002902);

  font-family: "Poppins";
  font-weight: 500;
  font-size: var(--h3-fs);
  line-height: var(--h3-lh);
  letter-spacing: 0;

  padding: 16px;
  border-radius: 4px;
  border: 1px solid var(--gray-light, #e8e8e8);

  background: var(--gray-background, #f9f9f9);
  width: 100%;
  resize: none;
  overflow: hidden;
  &:focus {
    outline: none;
  }
`;

export default function TextArea() {
  const { dumplingNotes, setDumplingNotes } = useStore();
  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    // setLines(event.target.value);
    const textarea = event.target;
    textarea.style.height = "fit-content"; // Reset values for recalculations
    textarea.style.padding = "0";
    // NOTE: not sure if this would be good, i mean it's chanigng its height by 2 px when the 2 lines appear vs placeholder which takes up 2 lines... Also on the very beginning height is not well suited
    textarea.style.height = `${textarea.scrollHeight}px`;
    textarea.style.padding = "16px";
    setDumplingNotes(event.target.value);
  };

  return (
    <CustomInputRecipeVariant
      id="recipeInput"
      placeholder="Przykład: chrupiące pierogi bez pieczenia, bez użycia miksera, przyjazne weganom"
      onChange={handleInputChange}
    />
  );
}
