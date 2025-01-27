import { extendTheme, grid, ThemeConfig, useColorModeValue } from "@chakra-ui/react";
import "@fontsource/inter";
import "@fontsource/inter/900.css";
import "@fontsource/inter/800.css";
import "@fontsource/source-code-pro";

const colors = {
  // blue color scheme based off of #3A496F
  blue: {
    50: "#EEF1F6",
    100: "#D0D6E6",
    200: "#B2BCD7",
    300: "#94A2C7",
    400: "#7688B7",
    500: "#586EA7",
    600: "#465886",
    700: "#354264",
    800: "#232C43",
    900: "#121621",
  },
  dark: {
    extralight: "#9FC1E1",
    mediumlightblue: "#7786AE",
    lightblue: "#77A3CD", // button/logo color
    indigo: "#56699B", // chatGPT bg color
    blue: "#3A496F", // bg color
    darkblue: "#2A3656", // code bg color
    dullblue: "#B1C5EC", // input box placeholder
    vibrantblue: "#83BFF6",
  },
  light: {
    backgroundGrey: "#C9C9C9", //  bg
    lightGrey: "#B6BABE", // type box
    mediumGrey: "#919AA3", // logo, gpt box
    darkGrey: "#3E414A", // boldest
    forestGreen: "#587A72", // start button
    extraLight: "#E6E6E6", // google signin and signup
  },
};

const fonts = {
  heading: `"Title", serif`,
  body: `"Inter", sans-serif`,
  subtitle: `"Source Code Pro", sans-serif;`,
};

const components = {
  Button: {
    variants: {
      solid: () => ({
        fontSize: ".6rem",
        textTransform: "uppercase",
        borderRadius: "2rem",
        fontFamily: fonts.body,
        letterSpacing: "1px",
        paddingRight: "3rem",
        paddingLeft: "3rem",

        // _hover: {
        //   bg: useColorModeValue(colors.light.lightGrey, colors.dark.extralight),
        // },
      }),
      outline: () => ({
        fontSize: ".6rem",
        textTransform: "uppercase",
        fontWeight: "200",
        letterSpacing: "1px",
        fontFamily: fonts.subtitle,
        borderRadius: "2rem",
        borderColor: "#C0BEBD",
        color: "#C0BEBD",
        // _hover: {
        //   bg: useColorModeValue(colors.light.lightGrey, colors.dark.extralight),
        // },
      }),
      buttonLink: () => ({
        fontSize: ".8rem",
        textTransform: "uppercase",
        borderRadius: "20px",
        fontFamily: fonts.subtitle,
        backgroundColor: "white",
      }),
      toggleButton: () => ({
        fontSize: ".8rem",
        fontFamily: fonts.subtitle,
        height: "1.5rem",
      }),
    },
  },

  Link: {
    variants: {
      navLink: () => ({
        fontFamily: fonts.body,
        fontSize: ".6rem",
        letterSpacing: ".05rem",
        paddingX: "1rem",
        color: "#A4A4A4",
        _hover: {
          color: "#303030",
          textDecoration: "none"
        },
      }),
      pageLink: () => ({
        fontFamily: fonts.subtitle,
        fontSize: ".6rem",
        letterSpacing: ".05rem",
        fontWeight: "600",
        paddingX: ".05rem",
        color: "#B1C5EC",
        _hover: {
          color: "#303030",
          textDecoration: "none"
        },
      }),
    },
  },
  Text: {
    variants: {
      subtitle: () => ({
        fontFamily: fonts.subtitle,
        fontSize: ".7rem",
        textAlign: "justify",
      }),
      subtitleCondense: () => ({
        fontFamily: fonts.subtitle,
        fontSize: ".6rem",
        textAlign: "justify",
        lineHeight: "110%",
      }),
      subtitleBold: () => ({
        fontFamily: fonts.subtitle,
        fontSize: "1rem",
        fontWeight: "600",
        letterSpacing: "1rem",
        display: "flex",
      }),
      // HEADER
      bigHeader: () => ({
        fontFamily: fonts.heading,
        fontWeight: "bold",
        fontSize: "6rem",
        display: "flex",
      }),
      subHeader: () => ({
        fontFamily: fonts.heading,
        fontWeight: "bold",
        fontSize: "4rem",
        display: "flex",
      }),
      smallerHeader: () => ({
        fontFamily: fonts.heading,
        fontWeight: "bold",
        fontSize: "3rem",
        display: "flex",
      }),
      tinyHeader: () => ({
        fontFamily: fonts.body,
        fontWeight: "bold",
        fontSize: "1.1rem",
      }),
      tinyHeaderTitle: () => ({
        fontFamily: fonts.heading,
        fontWeight: "bold",
        fontSize: "1.8rem",
      }),
    },
  },
};

const customTheme = {
  //config,
  colors,
  //styles,
  fonts,
  components,
};

export default extendTheme(customTheme);
