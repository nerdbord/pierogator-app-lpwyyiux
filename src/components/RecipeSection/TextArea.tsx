import styled from "styled-components";

export const CustomTextarea = styled.textarea`
  color: var(--dark-green, #002902);

  font-family: "Poppins";
  font-weight: 400;
  font-size: var(--h3-fs);
  line-height: 20px;
  letter-spacing: 0;

  border-radius: 4px;
  margin: 0px;

  background: var(--gray-background, #f9f9f9);
  width: 100%;
  resize: none;
  overflow: hidden;
  box-sizing: border-box;
  &:focus {
    outline: none;
  }
`;

export interface TextAreaProps {
  value: string;
  setValue: (value: string) => void;
  disabled: boolean;
  placeholder: string;
  id: string;
  padding: string;
  border: string;
}

export default function TextArea(props: TextAreaProps) {
  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = event.target;
    // 20 = lineheight
    if (textarea.scrollHeight < 20) textarea.style.height = "fit-content"; // Reset values for recalculations
    textarea.style.padding = "0";
    // NOTE: not sure if this would be good, i mean it's chanigng its height by 2 px when the 2 lines appear vs placeholder which takes up 2 lines... Also on the very beginning height is not well suited
    textarea.style.height = `${textarea.scrollHeight}px`;
    textarea.style.padding = `${props.padding}`;
    props.setValue(event.target.value);
  };

  return (
    <CustomTextarea
      id={props.id}
      placeholder={props.placeholder}
      disabled={props.disabled}
      value={props.value}
      onChange={handleInputChange}
      style={{ padding: `${props.padding}`, border: `${props.border}` }}
    />
  );
}
