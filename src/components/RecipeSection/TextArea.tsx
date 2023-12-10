import { useRef, useState } from "react";
import styled from "styled-components";
import { device } from "../../GlobalStyles";

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

  &:focus {
    outline: none;
  }

  @media ${device.mobile} {
    &:focus {
      font-size: 1rem;
    }
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
  rowsOnStart?: number;
}

export default function TextArea(props: TextAreaProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [rows, setRows] = useState(props.rowsOnStart || 1);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = event.target;
    textarea.style.height = "fit-content"; // Reset values for recalculations
    textarea.style.padding = "0";
    props.setValue(event.target.value);
    if (event.target.value === "") {
      setRows(props.rowsOnStart || 1);
      textarea.rows = props.rowsOnStart || 1;
    } else if (rows !== 1) {
      setRows(1);
      // for scrollheight browser computations
      textarea.rows = 1;
    }
    textarea.style.height = `${textarea.scrollHeight}px`;
    textarea.style.padding = `${props.padding}`;
  };

  return (
    <CustomTextarea
      ref={textareaRef}
      id={props.id}
      placeholder={props.placeholder}
      disabled={props.disabled}
      value={props.value}
      onChange={handleInputChange}
      style={{
        padding: `${props.padding}`,
        border: `${props.border}`,
        boxSizing: `${props.padding ? "content-box" : "border-box"}`,
      }}
      rows={rows}
    />
  );
}
