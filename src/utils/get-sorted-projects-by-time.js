export default function getSortedProjectsByTime(projects) {
  const sorted = projects.sort(
    (a, b) => new Date(b.createdDate) - new Date(a.createdDate),
  );
  return sorted;
}
