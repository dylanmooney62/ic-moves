export const camelToUnderscore = (key) =>
  key.replace(/([A-Z])/g, '_$1').toLowerCase();
