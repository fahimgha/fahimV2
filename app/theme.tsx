// app/theme.ts
import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { modalAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const styles = {
  global: (props: any) => ({
    body: {
      bg: "#202023",
      color: "#FFFFFF",
    },
  }),
};

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
  // define the part you're going to style
  overlay: {
    bg: "blackAlpha.200",
    backdropFilter: "blur(10px)",
  },
  dialog: {
    borderRadius: "md",
    bg: "whiteAlpha.200",
    backdropFilter: "blur(10px)",
  },
});
const modalTheme = defineMultiStyleConfig({
  baseStyle,
});

const theme = extendTheme({
  config,
  styles,
  components: { Modal: modalTheme },
});

export default theme;
