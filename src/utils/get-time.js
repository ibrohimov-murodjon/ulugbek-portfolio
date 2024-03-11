export default function getTime(time) {
  const y = new Date(time).getFullYear();
  const m = new Date(time).getMonth();
  const d = new Date(time).getDate();
  const months = [
    "yanvar",
    "fevral",
    "mart",
    "aprel",
    "may",
    "iyun",
    "iyul",
    "avgust",
    "sentabr",
    "oktabr",
    "noyabr",
    "dekabr",
  ];
  return `${d}-${months[m]}, ${y}-yil`;
}
