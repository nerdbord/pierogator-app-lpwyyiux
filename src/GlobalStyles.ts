// GlobalStyle.js
import { createGlobalStyle } from "styled-components";

const size = {
  mobile: "768px",
};

const device = {
  mobile: `(max-width: ${size.mobile})`,
};

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;500&display=swap');

  body {
    font-family: 'Poppins', sans-serif;
  }

`;

export { device };

export default GlobalStyle;
