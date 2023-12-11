import { Route, HashRouter as Router, Routes } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle, { device } from "./GlobalStyles";
import ConfigDumplingPage from "./pages/ConfigDumplingPage";
import GalleryPage from "./pages/GalleryPage";
import PreviewDumplingPage from "./pages/PreviewDumplingPage";
import DumplingRecipePage from "./pages/RecipePage";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  overflow-x: hidden;
  padding: 18px 16px 58px 16px;
  box-sizing: border-box;
  gap: 32px;
  @media ${device.mobile} {
    border: none;
    width: 100%;
  }
`;

export const MobileSimulator = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  min-height: 100dvh;
  height: 100%;
  width: 375px;
  background-color: var(--background-color, white);
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<ConfigDumplingPage />} />
        <Route path="/recipe" element={<DumplingRecipePage configPath="/" proceedPath="/gallery" />} />
        <Route path="/gallery" element={<GalleryPage dumplingPath="/" />}></Route>
        <Route path="/dumpling_preview/:id" element={<PreviewDumplingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
