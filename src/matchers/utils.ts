export function extractDatePortion(date: Date) {
  const str = date.toISOString();
  return str.slice(0, 'YYYY-MM-DD'.length);
}

export function tryCatch<T>(tryFn: () => T, errFn: (err: any) => T): T {
  try {
    return tryFn();
  } catch (err) {
    errFn(err);
  }
}

export function strVal(value: unknown): string {
  if (value === null) {
    return 'null';
  } else if (Array.isArray(value)) {
    return 'array';
  } else if (value instanceof Date) {
    if (!isNaN(value.getTime())) {
      return `new Date("${value.toISOString()}")`;
    } else {
      return 'new Date(#INVALID#)';
    }
  } else if (value instanceof Map) {
    return `new Map()`;
  } else if (value instanceof Set) {
    return `new Set()`;
  } else {
    switch (typeof value) {
      case 'string':
        return `"${value}"`;
      case 'number':
      case 'bigint':
        return value.toString();
      case 'boolean':
        return value === true ? 'true' : 'false';
      case 'object':
        return '{Object}';
      case 'function':
        return '{Function}';
      case 'symbol':
        return '{Symbol}';
      case 'undefined':
        return 'undefined';
    }
  }
}
