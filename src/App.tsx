import { Route, HashRouter as Router, Routes } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle, { device } from "./GlobalStyles";
import ConfigDumplingPage from "./pages/ConfigDumplingPage";
import DumplingRecipePage from "./pages/DumplingRecipePage";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;

  overflow-x: hidden;

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
        <Route path="/" element={<ConfigDumplingPage />} />
        <Route path="/recipes" element={<DumplingRecipePage configPath="/" proceedPath="/gallery" />} />
      </Routes>
    </Router>
  );
}

export default App;
