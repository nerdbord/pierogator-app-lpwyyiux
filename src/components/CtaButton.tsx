import styled from "styled-components";

export const CtaButton = styled.button`
  border: none;
  border-radius: 4px;
  gap: 10px;
  padding: 1rem;
  background: var(--dark-green);
  color: white;
  width: 100%;
  height: auto;
  font-size: 14px;
  font-weight: 600;
  margin-top: 10px;

  &:hover {
    background-color: var(--green);
  }
`;