export const getLastElement = <T>(collection: Array<T>) => {
  const lastElement = collection.slice(-1).pop();
  return lastElement;
};

export const getFirstElement = <T>(collection: Array<T>) => {
  const firstElement = [...collection].shift();
  return firstElement;
};
