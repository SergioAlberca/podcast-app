import { Podcast } from "../../core/podcast/domain/models/podcast_model";

export const setLocalStorageElementWithExpiry = (
  key: string,
  value: Podcast[]
) => {
  const today = new Date();
  const limitDate = today.setDate(today.getDate() + 1);

  const item = {
    value: value,
    expiry: limitDate,
  };

  localStorage.setItem(key, JSON.stringify(item));
};

export const getLocalStorageElementWithExpiry = (key: string): Podcast[] => {
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
