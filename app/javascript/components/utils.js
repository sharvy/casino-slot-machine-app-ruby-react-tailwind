export const takeChance = (weight) => Math.random() <= weight / 100.0;
export const cssStyles = ["top", "bottom", "left", "right"];
export const randomStyle =
  cssStyles[Math.floor(Math.random() * cssStyles.length)];
