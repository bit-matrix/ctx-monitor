export const calcPercentage = (total: number, finished: number) => {
  return Math.floor((finished / total) * 100);
};
