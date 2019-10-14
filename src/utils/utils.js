export const camelToUnderscore = (key) =>
  key.replace(/([A-Z])/g, '_$1').toLowerCase();

export const ucFirstLetter = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);
