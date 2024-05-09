import { createGlobalStyle } from 'styled-components';
import background from '../assets/images/background.svg';

export default createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: 0;
}

body{
background: #191920 url(${background}) no-repeat center top;
-webkit-font-smoothing: antialiased;
font-family: 'Roboto';
}

body, input, button{
  font: 14px Montserrat, sans-serif;
}

#root {
  max-width: 1200px;
  margin: 0;
  padding: 0 20px 50px;
}

button{
  cursor: pointer;
}

`;
