export const calcPercentage = (total: number, finished: number) => {
  const result = (finished / total) * 100;

  if (result) {
    return Number(result.toFixed(2));
  }
  return 0;
};
