import { createGlobalStyle } from "styled-components";

 const GlobalStyle = createGlobalStyle`

*{
    margin; 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Work Sans', sans-serif;
}

html {
    font-size: 62.5%;

}
h1{

    color: ${({ theme }) => theme.colors.heading};
        font-size: 6rem;
        font-weight: 900;

}

h2{
    color: ${({ theme }) => theme.colors.heading};
    font-size =4.4 rem;
    font-weight: 300;
    white-space: normal;
    text-align: center;

}
h3{
    font-size: 1.8 rem
    font-weight:400;
}
p{
    color: ${({ theme }) => theme.colors.heading};
    opacity: 0.7;
    font-size: 1.6rem
    line-height1.5;
    margin-top: 1rem;
    font-weight: 400;

}
a{
    text-decoration: none;
}
li{
    list-style:none;
}
`;
export default GlobalStyle;