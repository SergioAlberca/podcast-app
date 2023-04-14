export const getLocaleString = (date: string) => {
  return new Date(date).toLocaleDateString();
};
