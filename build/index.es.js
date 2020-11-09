import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';

const scales = {
  /* Good for Marketing Sites / Landing Pages */
  augentedFourthScale: 1.414,
  /* Good for Blog / Info Site */
  perfectFourthRatio: 1.333,
  /* Good for Web Apps */
  majorSecondRatio: 1.125
};

const defaultKeys = ["small", "p", "h6", "h5", "h4", "h3", "h2", "h1"];

const generateFontCurve = (
  baseFontSize = 16,
  multiplier = scales.majorSecondRatio,
  keys = defaultKeys
) => {
  let accumulatedFontSize = baseFontSize;

  return keys.reduce((accumulator, key, i) => {
    switch (i) {
      case 0:
        accumulator[key] = `${baseFontSize / multiplier}px`;
        return accumulator;
      case 1:
        accumulator[key] = `${baseFontSize}px`;
        return accumulator;
      default:
        accumulatedFontSize *= multiplier;
        accumulator[key] = `${accumulatedFontSize}px`;
        return accumulator;
    }
  }, {});
};

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

const fontSizes = generateFontCurve();

const white = "#fff";
const black = "#111";

const palette = {
  common: {
    black,
    white
  },
  primary: {
    main: "#0070F3",
    hover: "#146DD6",
    contrastText: white
  },
  secondary: {
    main: "#146DD6",
    contrastText: white
  },
  error: {
    main: "#A51C30",
    light: "#A7333F",
    contrastText: white
  },
  grey: {
    100: "#EAEAEA",
    200: "#C9C5C5",
    300: "#888",
    400: "#666"
  }
};

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

var theme = {
  spacing,
  fontSizes,
  palette,
  shadows,
  typography,
  shape
};

const propertiesByVariant = (variant, theme) => {
  return {
    backgroundColor: theme.palette[variant].main,
    color: theme.palette[variant].contrastText,
    borderColor: theme.palette[variant].main,
    "&:hover": {
      backgroundColor: theme.palette[variant].hover,
      borderColor: theme.palette[variant].main
    }
  };
};

const StyledButton = ({ variant, disabled, theme }) => {
  // generateFontCurve();
  return {
    fontWeight: 500,
    cursor: "pointer",
    opacity: disabled && 0.7,
    transition: "all 0.3s linear",
    borderRadius: theme.shape.borderRadius,
    fontFamily: theme.typography.fontFamily,
    padding: "12px 16px",
    fontSize: theme.fontSizes.h6,
    ...(variant && propertiesByVariant(variant, theme))
  };
};

const IGNORED_PROPS = new Set(["color"]);

const buttonConfig = {
  shouldForwardProp: (property) =>
    isPropValid(property) && !IGNORED_PROPS.has(property)
};

const Button = styled("button", buttonConfig)(StyledButton);

var index = {
  theme,
  Button
};

export default index;
//# sourceMappingURL=index.es.js.map
