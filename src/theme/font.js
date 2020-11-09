const multipiers = {
  /* Good for Marketing Sites / Landing Pages */
  augentedFourth: 1.414,
  /* Good for Blog / Info Site */
  perfectFourth: 1.333,
  /* Good for Web Apps */
  majorSecond: 1.125
};

const fontSizes = [
  "smallText",
  "regularText",
  "mediumText",
  "largeText",
  "smallHeading",
  "mediumHeading",
  "largeHeading",
  "xlargeHeading"
];

const defaults = {
  baseFontSize: 16,
  multiplier: multipiers.majorSecond,
  keys: fontSizes
};

const generateFontCurve = (options = defaults) => {
  const config = { ...defaults, ...options };
  const { baseFontSize, multiplier, keys } = config;
  let accumulatedFontSize = baseFontSize;

  return keys.reduce((accumulator, key, i) => {
    switch (i) {
      case 0:
        accumulator[key] = `${Math.floor(baseFontSize / multiplier)}px`;
        return accumulator;
      case 1:
        accumulator[key] = `${baseFontSize}px`;
        return accumulator;
      default:
        accumulatedFontSize *= multiplier;
        accumulator[key] = `${Math.floor(accumulatedFontSize)}px`;
        return accumulator;
    }
  }, {});
};

export default generateFontCurve;
