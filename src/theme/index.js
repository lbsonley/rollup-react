import generateFontCurve from "./font";
import generateColors from "./colors";

const spacing = {
  none: 0,
  xxsmall: "4px",
  xsmall: "8px",
  small: "12px",
  medium: "20px",
  gutter: "24px",
  large: "32px",
  xlarge: "48px",
  xxlarge: "96px"
};

const fontSizes = generateFontCurve({ multiplier: 1.125 });
const colors = generateColors();

const shadows = {
  0: "none",
  1: "0px 5px 10px rgba(0, 0, 0, 0.12)",
  2: "0px 8px 30px rgba(0, 0, 0, 0.24)"
};

const typography = {
  fontFamily:
    "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif"
};

const shape = {
  borderRadius: spacing.xxsmall
};

export default {
  spacing,
  fontSizes,
  colors,
  shadows,
  typography,
  shape
};
