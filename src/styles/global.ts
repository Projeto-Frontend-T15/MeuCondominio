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
            --color-5: #9bc983;
            --color-6: #D9D9D9;
            --color-7: #EFEFEF;
            --color-8: rgba(0, 0, 0, 0.5);
            --color-black: #0D0C0C;
            --color-white: #EFEFEF;
            --white: #FFFFFF;
            --black: #000000;


            --font-size-1: 1rem; /* 16px */ 
            --font-size-2: 1.25rem; /* 20px */
            --font-size-3: 1.5rem; /* 24px */
            --font-size-4: 2rem; /* 32px */

            --font-weight-1: 400;
            --font-weight-2: 500;
            --font-weight-3: 600;
            --font-weight-4: 700;
            --font-weight-5: 800;
            
            --radius-1: 0.625rem; /* 10px */
            --radius-2: 0.25rem; /* 4px */
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
