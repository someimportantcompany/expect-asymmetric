import AsymmetricMatcher from '../matcher';

export const dateToday = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const day = today.getDate();

  return new AsymmetricMatcher(`dateToday(new Date("${today.toISOString().split('T').shift()!}"))`, (value) => {
    const date = value instanceof Date ? value : new Date(String(value));
    if (isNaN(date.getTime())) {
      return false;
    }

    return date.getFullYear() === year && date.getMonth() === month && date.getDate() === day;
  });
};

export const dateWithin = (target: Date, tolerance: number) => {
  return new AsymmetricMatcher(`dateWithin(new Date("${target.toISOString()}"), ${tolerance})`, (value) => {
    const date = value instanceof Date ? value : new Date(String(value));
    if (isNaN(date.getTime())) {
      return false;
    }

    const diff = Math.abs(date.getTime() - target.getTime());
    return diff <= tolerance;
  });
};
