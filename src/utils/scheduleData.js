import dayjs from "dayjs";

export const getDaysBetween = (start, end) => {
  const range = [];
  let current = start;
  while (!current.isAfter(end)) {
    range.push(dayjs(current).format("HH:mm"));
    current = current.add(30, "minutes");
  }
  return range;
};
