import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    list-style: none;
    text-decoration: none;
    font-family: 'inter', sans-serif;
    :root{
            --color-1:#FB545C;
            --color-2: #99662D;
            --color-3: #B7E1A1;
            --color-4: #FDF5A4;
            --color-black: #0D0C0C;
            --color-white: #EFEFEF;

            --font-size: 1.5rem;
        
        }
  }

  button{
    cursor: pointer;
  }

  dialog{
    display: unset;
    position: unset;
  }
  
`;
