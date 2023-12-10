import styled, { keyframes } from "styled-components";
import LoaderImage from "../assets/Loader.png";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const RotatingLoaderImage = styled.img`
  animation: ${rotate} 2s linear infinite;
  width: 24px;
  height: 24px;
`;

const LoaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  gap: 14px;
  display: inline-flex;
`;

const LoaderContainer = styled.div`
  padding: 6px;
  background: #f9f9f9;
  border-radius: 52px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  gap: 10px;
  display: flex;
`;

const Loader = () => {
  return (
    <LoaderWrapper>
      <LoaderContainer>
        <RotatingLoaderImage src={LoaderImage} alt="Loading" />
      </LoaderContainer>
    </LoaderWrapper>
  );
};

export default Loader;
