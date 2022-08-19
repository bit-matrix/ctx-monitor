export const calcPercentage = (total: number, finished: number) => {
  const result = (finished / total) * 100;
  if (result) {
    return result;
  }
  return 0;
};
