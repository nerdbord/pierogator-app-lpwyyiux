import { Route, HashRouter as Router, Routes } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyles";
import ConfigDumplingPage from "./pages/ConfigDumplingPage";
import DumplingRecipePage from "./pages/DumplingRecipePage";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 375px;
  height: auto;
  padding: 0.5rem;
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
