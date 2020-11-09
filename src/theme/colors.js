const defaults = {
  white: "#FFF",
  black: "#111",
  onyx: "#393E41"
};

function lightenDarkenColor(col, amt) {
  let usePound = false;
  let hexInt;

  if (col[0] === "#") {
    hexInt = col.slice(1);
    usePound = true;
  }

  const number = Number.parseInt(hexInt, 16);
  /* eslint-disable no-bitwise */
  let r = (number >> 16) + amt;

  if (r > 255) r = 255;
  else if (r < 0) r = 0;

  /* eslint-disable unicorn/number-literal-case */
  let b = ((number >> 8) & 0x00ff) + amt;

  if (b > 255) b = 255;
  else if (b < 0) b = 0;

  let g = (number & 0x0000ff) + amt;
  /* eslint-enable unicorn/number-literal-case */

  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
  /* eslint-enable no-bitwise */
}

const generateColors = (options = defaults) => {
  const config = { ...defaults, options };
  const { black, white } = config;
  return {
    common: {
      black,
      white
    },
    primary: {
      main: "#3A6D7E",
      hover: lightenDarkenColor("#3A6D7E", -30),
      active: "#3A6D7E",
      contrastText: white
    },
    secondary: {
      main: "#66A39B",
      hover: lightenDarkenColor("#66A39B", -30),
      active: "#66A39B",
      contrastText: white
    },
    accent: {
      main: "#CFD7C7",
      hover: lightenDarkenColor("#CFD7C7", -30),
      active: "#CFD7C7",
      contrastText: black
    }
  };
};

export default generateColors;
