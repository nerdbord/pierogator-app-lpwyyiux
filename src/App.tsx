import { Route, HashRouter as Router, Routes } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle, { device } from "./GlobalStyles";
import ConfigDumplingPage from "./pages/ConfigDumplingPage";
import GalleryPage from "./pages/GalleryPage";
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

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/config" element={<ConfigDumplingPage />} />
        <Route path="/recipe" element={<DumplingRecipePage configPath="/config" proceedPath="/" />} />
        <Route path="/" element={<GalleryPage dumplingPath="/config" />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
