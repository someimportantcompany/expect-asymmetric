import AsymmetricMatcher from '../matcher';

export const stringStartsWith = (prefix: string) => {
  return new AsymmetricMatcher(`stringStartsWith("${prefix}")`, (value) => {
    return typeof value === 'string' && value.startsWith(prefix);
  });
};

export const stringEndsWith = (suffix: string) => {
  return new AsymmetricMatcher(`stringEndsWith("${suffix}")`, (value) => {
    return typeof value === 'string' && value.endsWith(suffix);
  });
};

export const stringMatches = (pattern: RegExp) => {
  return new AsymmetricMatcher(`stringMatches(${pattern})`, (value) => {
    return typeof value === 'string' && pattern.test(value);
  });
};

export const stringIsULID = () => {
  return new AsymmetricMatcher('stringIsULID()', (value) => {
    const pattern = /^[0-7][0-9A-HJKMNP-TV-Z]{25}$/i;
    return typeof value === 'string' && pattern.test(value);
  });
};

export const stringIsUUID = () => {
  return new AsymmetricMatcher('stringIsUUID()', (value) => {
    const pattern = /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i;
    return typeof value === 'string' && pattern.test(value);
  });
};
