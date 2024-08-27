import { createGlobalStyle } from 'styled-components';

export const theme = {
  primary: '#009EDD',
  success: '#039B00',
  backgorund: '#2F2E41',
  white: '#fff',
  gray: '#999999',
};

export const GlobalStyle = createGlobalStyle`
html,
body {
    color: black;
    padding: 0;
    margin: 0;
    background-color:#2F2E41
}

button {
    outline: none;
}

a {
    color: inherit;
    text-decoration: none;
}

* {
    font-family:  Arial, sans-serif ;
    box-sizing: border-box;
}
`;
