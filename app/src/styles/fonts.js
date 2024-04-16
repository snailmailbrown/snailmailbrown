import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      /* Copied from https://fonts.googleapis.com/css2?family=Gloock&family=Inter:wght@400;600;700&display=swap */
      /* latin-ext */
      @font-face {
        font-family: 'Title';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/gloock/v6/Iurb6YFw84WUY4NJiBakJLRBjA.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }
      `}
  />
);

export default Fonts;
