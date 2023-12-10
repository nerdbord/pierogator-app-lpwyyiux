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
    textarea.style.height = "fit-content"; // Reset values for recalculations
    textarea.style.padding = "0";
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
      rows={1}
    />
  );
}
