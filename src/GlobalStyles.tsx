import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
:root {
  --primary-fg: hsl(228.67924528301887, 72.60273972602744%, 85.68627450980392%);
  --primary-fg-light: hsl(228.67924528301887, 72.60273972602744%, 95.68627450980392%);
  --primary-fg-lighter: hsl(228.67924528301887, 72.60273972602744%, 100%);
  --primary-fg-dark: hsl(228.67924528301887, 72.60273972602744%, 75.68627450980392%);

  --secondary-fg: hsl(220.8, 88.65248226950358%, 72.35294117647058%);  
  --secondary-fg-light: hsl(220.8, 88.65248226950358%, 82.35294117647058%);
  --secondary-fg-dark: hsl(220.8, 88.65248226950358%, 62.35294117647058%);  

  --tertiary-fg: hsl(22.451612903225808, 100%, 69.6078431372549%);  
  --tertiary-fg-light: hsl(22.451612903225808, 100%, 79.6078431372549%); 
  --tertiary-fg-dark: hsl(22.451612903225808, 100%, 59.6078431372549%);  

  --primary-bg: hsl(235, 18.75%, 12.549019607843137%);  
  --primary-bg-light: hsl(235, 18.75%, 22.549019607843137%);
  --primary-bg-dark: hsl(235, 18.75%, 2.549019607843137%); 

  --secondary-bg: ;
  --secondary-bg-light: ;
  --secondary-bg-dark: ;

  --tertiary-bg: ;  
  --tertiary-bg-light: ;
  --tertiary-bg-dark: ; 

  --h1: 3.052rem;  
  --h2: 2.441rem;
  --h3: 1.953rem;
  --h4: 1.563rem;
  --h5: 1.25rem;
  --p: 1rem;  
  --h6: 0.8rem;  
  --h7: 0.64rem;  
  --h8: 0.512rem;  
}

html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

// ADDITIONAL STYLES

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  line-height: 1.5;
  color: var(--primary-fg);
  background: var(--primary-bg);
	height: 100vh;
	max-width: 1440px;
}

h1 {font-size: var(--h1);}
h2 {font-size: var(--h2);}
h3 {font-size: var(--h3);}
h4 {font-size: var(--h4);}
h5 {font-size: var(--h5);}
h6 {font-size: var(--h6);}
h7 {font-size: var(--h7);}
h8 {font-size: var(--h8);}
p {font-size: var(--p);}

.h1 {font-size: var(--h1);}
.h2 {font-size: var(--h2);}
.h3 {font-size: var(--h3);}
.h4 {font-size: var(--h4);}
.h5 {font-size: var(--h5);}
.h6 {font-size: var(--h6);}
.h7 {font-size: var(--h7);}
.h8 {font-size: var(--h8);}
.p {font-size: var(--p);}
`
