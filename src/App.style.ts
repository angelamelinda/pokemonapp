import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

*, ::after, ::before {
  box-sizing: border-box;
}

*:focus { 
  outline: 0;
}

.container {
  margin-left: auto;
  margin-right: auto;
  padding-right: 15px;
  padding-left: 15px;
  width: 100%;
  max-width: 1200px;
}

.row {
  display: flex;
  margin-right: -15px;
  margin-left: -15px;
  flex-wrap: wrap;
}

.column {
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}

h1, h2, h3, h4, h5, h6, p {
  margin-top: 0;
  margin-bottom: 0;
}
`;
