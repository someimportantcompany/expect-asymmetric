# expect-asymmetric

## 1.0.0

### Major Changes

- 5fd36ce: **Initial Release**

  - `stringEquals(expected: string | string[]): AsymmetricMatcher`
  - `stringStartsWith(prefix: string): AsymmetricMatcher`
  - `stringEndsWith(suffix: string): AsymmetricMatcher`
  - `stringIncludes(contains: string): AsymmetricMatcher`
  - `stringMatches(pattern: RegExp): AsymmetricMatcher`
  - `stringBase64Encoded(): AsymmetricMatcher`
  - `stringDateISO8601(): AsymmetricMatcher`
  - `stringEmail(): AsymmetricMatcher`
  - `stringJSON(): AsymmetricMatcher`
  - `stringJWT(): AsymmetricMatcher`
  - `stringMD5(): AsymmetricMatcher`
  - `stringSHA1(): AsymmetricMatcher`
  - `stringULID(): AsymmetricMatcher`
  - `stringUUID(): AsymmetricMatcher`
  - `numberEquals(expected: number | number[]): AsymmetricMatcher`
  - `numberGreaterThan(expected: number): AsymmetricMatcher`
  - `numberLessThan(expected: number): AsymmetricMatcher`
  - `numberBetween(min: number, max: number): AsymmetricMatcher`
  - `numberFloat(): AsymmetricMatcher`
  - `booleanEquals(expected: boolean): AsymmetricMatcher`
  - `dateEquals(expected: Date | Date[]): AsymmetricMatcher`
  - `dateToday(): AsymmetricMatcher`
  - `dateYesterday(): AsymmetricMatcher`
  - `dateGreaterThan(expected: Date): AsymmetricMatcher`
  - `dateLessThan(expected: Date): AsymmetricMatcher`
  - `dateWithin(target: Date, tolerance: number): AsymmetricMatcher`
  - `arrayContains(expected: unknown): AsymmetricMatcher`
  - `arrayEmpty(): AsymmetricMatcher`
  - `objectEmpty(): AsymmetricMatcher`
  - `objectHasProperty(key: string): AsymmetricMatcher`
  - `objectWithProperty(key: string, value: unknown): AsymmetricMatcher`
  - `and(matchers: AsymmetricMatcher[]): AsymmetricMatcher`
  - `or(matchers: AsymmetricMatcher[]): AsymmetricMatcher`
  - `not(matchers: AsymmetricMatcher[]): AsymmetricMatcher`
  - `stringValidator(description: string, compare: (value: string) => boolean): AsymmetricMatcher`
  - `numberValidator(description: string, compare: (value: number) => boolean): AsymmetricMatcher`
  - `booleanValidator(description: string, compare: (value: boolean) => boolean): AsymmetricMatcher`
  - `customMatcher(description: string, compare: (value: unknown) => boolean): AsymmetricMatcher`

## 0.2.0

### Minor Changes

- 69aafd2: Initial release: String & Date matchers

  - String matcher: `stringStartsWith` checks if the current value matches the start of this string.
  - String matcher: `stringEndsWith` checks if the current value matches the end of this string.
  - String matcher: `stringMatches` checks if the current value matches the pattern.
  - String matcher: `stringIsULID` checks if the current value is a ULID.
  - String matcher: `stringIsUUID` checks if the current value is a UUID.
  - Date matcher: `dateToday` checks if the current value matches today's date.
  - Date matcher: `dateWithin` checks if the current value is within a tolerance of today.
