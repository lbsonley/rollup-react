import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import PropTypes from "prop-types";

const propertiesBySize = (size, theme) => {
  switch (size) {
    case "small":
      return `
        padding: 8px 12px;
        font-size: ${theme.fontSizes.regularText};
      `;
    case "large":
      return `
        padding: 16px 18px;
        font-size: ${theme.fontSizes.largeText};
      `;
    default:
      return `
        padding: 12px 16px;
        font-size: ${theme.fontSizes.mediumText};
      `;
  }
};

const propertiesByVariant = (variant, outline, theme) => {
  return `
    background-color: ${outline ? "transparent" : theme.colors[variant].main};
    color: ${
      outline ? theme.colors[variant].main : theme.colors[variant].contrastText
    };
    border-color: ${theme.colors[variant].main};
    border-style: solid;
    border-width: 3px;
    "&:hover": {
      color: ${
        outline
          ? theme.colors[variant].hover
          : theme.colors[variant].contrastText
      };
      background-color: ${
        outline ? "transparent" : theme.colors[variant].hover
      };
      border-color: ${theme.colors[variant].hover};
    },
    "&:active": {
      background-color: ${theme.colors[variant].active};
      border-color: ${theme.colors[variant].active};
    }
  `;
};

const StyledButton = styled.div((properties) => {
  console.log(properties);
  return css`
    font-weight: 500;
    cursor: pointer;
    opacity: ${properties.disabled && 0.7};
    transition: all 0.2s ease-in-out;
    border-radius: ${properties.theme.shape.borderRadius};
    font-family: ${properties.theme.typography.fontFamily};
    ${propertiesBySize(properties.size, properties.theme)}
    ${properties.variant &&
    propertiesByVariant(
      properties.variant,
      properties.outline,
      properties.theme
    )}
  `;
});

/**
 * A really awesome Button Component
 */
const Button = (properties, theme) => {
  return (
    <StyledButton {...properties} {...theme}>
      {properties.children}
    </StyledButton>
  );
};

Button.propTypes = {
  /**
   * Button color variant
   */
  variant: PropTypes.oneOf(["primary", "secondary"]),
  /**
   * Disabled button
   */
  disabled: PropTypes.bool,
  /**
   * Outline button
   */
  outline: PropTypes.bool,
  /**
   * Size of button
   */
  size: PropTypes.oneOf(["small", "medium", "large"])
};

Button.defaultProps = {
  variant: "primary",
  disabled: false,
  outline: false,
  size: "medium"
};

export default Button;
