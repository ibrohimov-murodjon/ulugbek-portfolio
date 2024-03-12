export default function getSortedElementsByTime(elements) {
  const sorted = elements.sort(
    (a, b) => new Date(b.createdDate) - new Date(a.createdDate),
  );
  return sorted;
}
