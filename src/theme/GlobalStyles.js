import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

html {
  overflow-y: scroll;
}

html,
body {
  box-sizing: border-box;
*,
*:before,
*:after {
  box-sizing: inherit;
}

.mainPicture {
  height: 300px;
  width: 100%;
}

body {
  margin: 0;
  font-family: "EB Garamond", -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "NYTCheltenham-Book", serif;
  margin: 0;
}

.logo {
  font-family: "Chomsky", serif;
  font-size: 3rem;
}

h1 {
  font-size: 3rem;
}

h6 {
  color: red;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  font-size: 0.8rem;
}

a:link {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

a:active {
  text-decoration: none;
}

.Grid-item {
  /* background-color: lightblue; */
  padding: 2px 8px;
  height: 100%;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.Header {
  border-top: 1px solid #ebebeb;
  border-bottom: 4px double #000;
}

.Header-top {
  margin-top: 8px;
}

.Header-weather {
  grid-area: wea;
}
.Header-logo {
  grid-area: log;
}
.Header-quote {
  grid-area: quo;
  display: flex;
  justify-content: space-between;
}

.QuoteContainer {
  width: 70%;
  height: 10vh;
  border: 1px solid #ebebeb;
  margin: 4px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.Header-column-1 {
  grid-area: he1;
}

.Header-column-2 {
  grid-area: he2;
}

.Header-column-3 {
  grid-area: he3;
}

.Main {
  align-items: flex-start;
  margin: 20px 0;
  padding: 0 10px;
}

.Main-column-1 {
  grid-area: co1;
}
.Main-column-2 {
  grid-area: co2;
}
.Main-column-3 {
  grid-area: co3;
  border-left: 1px solid #ebebeb;
  border-right: 1px solid #ebebeb;
}
.Main-column-4 {
  grid-area: co4;
  text-align: center;
}
.Main-column-4 p {
  margin: 0.5rem;
  text-align: center;
}
.Main-column-4 img {
  width: 60%
}
.Main-comic {
  grid-area: com;
}
.Main-bottom {
  grid-area: bot;
}

.Footer {
  grid-area: foo;
}

.Container {
  width: 90%;
  margin: 0 auto;
  height: 100vh;
  display: grid;
  row-gap: 3%;
  grid-template-columns: 10fr 10fr 10fr 10fr 10fr 10fr 10fr 10fr 10fr 10fr 10fr 10fr;
  grid-template-rows: 3fr 1fr 12fr 4fr 1fr;
  grid-template-areas:
    "wea wea wea log log log log log log quo quo quo"
    "he1 he1 he1 he1 he2 he2 he2 he2 he3 he3 he3 he3"
    "co1 co1 co2 co2 co3 co3 co3 co3 co3 co3 co4 co4"
    "com com com com co3 co3 co3 co3 co3 co3 co4 co4"
    "foo foo foo foo foo foo foo foo foo foo foo foo";
}

.DarkTheme {
  background-color: darkslategrey;
  color: white;
}

.link {
  text-decoration: none;
  color: rgba(0, 0, 0, 0.87);
}

.link :hover {
  text-decoration: underline;
}

.link :visited {
  color: black;
}

  `;
