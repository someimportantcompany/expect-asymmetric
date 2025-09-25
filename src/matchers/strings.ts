import assert from 'assert';

import AsymmetricMatcher from '../matcher';
import { tryCatch } from './utils';

export const stringEquals = (expected: string | string[]) => {
  if (Array.isArray(expected)) {
    assert(
      expected.every((v) => typeof v === 'string'),
      'Expected all expected values passed to stringEquals to be a string',
    );

    return new AsymmetricMatcher(`stringEquals(["${expected.join('", "')}"])`, (actual) => {
      return typeof actual === 'string' && expected.includes(actual);
    });
  } else {
    assert(typeof expected === 'string', 'Expected value passed to stringEquals to be a string');

    return new AsymmetricMatcher(`stringEquals("${expected}")`, (actual) => {
      return typeof actual === 'string' && actual === expected;
    });
  }
};

export const stringStartsWith = (prefix: string) => {
  return new AsymmetricMatcher(`stringStartsWith("${prefix}")`, (actual) => {
    return typeof actual === 'string' && actual.startsWith(prefix);
  });
};

export const stringEndsWith = (suffix: string) => {
  return new AsymmetricMatcher(`stringEndsWith("${suffix}")`, (actual) => {
    return typeof actual === 'string' && actual.endsWith(suffix);
  });
};

export const stringIncludes = (contains: string) => {
  return new AsymmetricMatcher(`stringIncludes("${contains}")`, (actual) => {
    return typeof actual === 'string' && actual.includes(contains);
  });
};

export const stringMatches = (pattern: RegExp) => {
  return new AsymmetricMatcher(`stringMatches(${pattern})`, (actual) => {
    return typeof actual === 'string' && pattern.test(actual);
  });
};

export const stringBase64Encoded = () => {
  const pattern = // From https://github.com/colinhacks/zod/blob/62bf4e439e287e55c843245b49f8d34b1ad024ee/packages/zod/src/v4/core/regexes.ts#L69
    /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/;

  return new AsymmetricMatcher(`stringBase64Encoded()`, (actual) => {
    return typeof actual === 'string' && pattern.test(actual);
  });
};

export const stringDateISO8601 = () => {
  const pattern = // From https://github.com/validatorjs/validator.js/blob/6f436be36945e460ee624bf72a935a06daded859/src/lib/isISO8601.js#L7
    /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-3])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;

  return new AsymmetricMatcher(`stringDateISO8601()`, (actual) => {
    return typeof actual === 'string' && pattern.test(actual);
  });
};

export const stringEmail = () => {
  const pattern = // From https://github.com/colinhacks/zod/blob/62bf4e439e287e55c843245b49f8d34b1ad024ee/packages/zod/src/v4/core/regexes.ts#L35
    /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;

  return new AsymmetricMatcher(`stringEmail()`, (actual) => {
    return typeof actual === 'string' && pattern.test(actual);
  });
};

export const stringJSON = () => {
  return new AsymmetricMatcher(`stringJSON()`, (actual) => {
    return (
      typeof actual === 'string' &&
      tryCatch(
        () => {
          JSON.parse(actual);
          return true;
        },
        () => false,
      )
    );
  });
};

export const stringJWT = () => {
  const pattern = // From https://github.com/validatorjs/validator.js/blob/6f436be36945e460ee624bf72a935a06daded859/src/lib/isBase64.js#L7
    /^[A-Za-z0-9_-]+$/;

  return new AsymmetricMatcher(`stringJWT()`, (actual) => {
    return (
      // Is a string
      typeof actual === 'string' &&
      // Made up of three parts, separated by commas
      actual.split('.').length === 3 &&
      // And each part should be base64-encoded
      actual.split('.').every((a, i) => {
        if (i === 0 || i === 1) {
          return pattern.test(a);
        } else {
          // Signature isn't base64-encoded
          return i === 2 && typeof a === 'string';
        }
      })
    );
  });
};

export const stringMD5 = () => {
  const pattern = // From https://github.com/colinhacks/zod/blob/62bf4e439e287e55c843245b49f8d34b1ad024ee/packages/zod/src/v4/core/regexes.ts#L155
    /^[0-9a-fA-F]{32}$/;

  return new AsymmetricMatcher(`stringMD5()`, (actual) => {
    return typeof actual === 'string' && pattern.test(actual);
  });
};

export const stringSHA1 = () => {
  const pattern = // From https://github.com/colinhacks/zod/blob/62bf4e439e287e55c843245b49f8d34b1ad024ee/packages/zod/src/v4/core/regexes.ts#L160
    /^[0-9a-fA-F]{40}$/;

  return new AsymmetricMatcher(`stringSHA1()`, (actual) => {
    return typeof actual === 'string' && pattern.test(actual);
  });
};

export const stringULID = () => {
  const pattern = // From https://github.com/colinhacks/zod/blob/62bf4e439e287e55c843245b49f8d34b1ad024ee/packages/zod/src/v4/core/regexes.ts#L3
    /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/;

  return new AsymmetricMatcher('stringULID()', (actual) => {
    return typeof actual === 'string' && pattern.test(actual);
  });
};

export const stringUUID = () => {
  const pattern = // From https://github.com/colinhacks/zod/blob/62bf4e439e287e55c843245b49f8d34b1ad024ee/packages/zod/src/v4/core/regexes.ts#L24
    /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;

  return new AsymmetricMatcher('stringUUID()', (actual) => {
    return typeof actual === 'string' && pattern.test(actual);
  });
};

export const stringValidator = (description: string, validator: (value: string) => boolean) => {
  return new AsymmetricMatcher(description, (actual) => {
    return typeof actual === 'string' && validator(actual);
  });
};
