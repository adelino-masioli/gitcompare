import { createGlobalStyle } from 'styled-components';
import 'font-awesome/css/font-awesome.css';

const GlobalStyle = createGlobalStyle`
  *{
    margin:0px;
    padding:0px;
    box-sizing:border-box;
    outline:0;
  }
  body{
    background: #7159C1;
    text-rendering:optimizeLegibility!important;
    -webkit-font-smoothing: antialiased!important;
    font-family:sans-serif;
  }
`;

export default GlobalStyle;
