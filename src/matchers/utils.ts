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
