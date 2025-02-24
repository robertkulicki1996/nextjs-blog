export function getRandomDate(index: number) {
  const baseDate = new Date(2025, 0, 1);

  baseDate.setDate(baseDate.getDate() + index);

  const day = String(baseDate.getDate()).padStart(2, "0");
  const month = String(baseDate.getMonth() + 1).padStart(2, "0");
  const year = baseDate.getFullYear();

  return `${day}.${month}.${year}`;
}
