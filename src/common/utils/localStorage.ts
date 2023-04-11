import { Podcast } from "../../core/podcast/domain/models/podcast_model";

export const setLocalStorageElementWithExpiry = <T>(key: string, value: T) => {
  const today = new Date();
  const limitDate = today.setDate(today.getDate() + 1);

  const item = {
    value: value,
    expiry: limitDate,
  };

  localStorage.setItem(key, JSON.stringify(item));
};

export const getLocalStorageElementWithExpiry = <T>(key: string): T[] => {
  const itemStr = localStorage.getItem(key);

  if (!itemStr) {
    return [];
  }
  const item = JSON.parse(itemStr);
  const now = new Date();
  if (now.getTime() > item.expiry) {
    localStorage.removeItem(key);
    return [];
  }
  return item.value;
};
