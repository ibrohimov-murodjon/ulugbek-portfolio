import projects from "../projects";

export default function getAnchors(slug) {
  const liveProjects = projects;
  const current = liveProjects.filter((project) => project.slug !== slug);
  const randomIndex_1 = Math.round(Math.random() * (current.length - 1));
  const randomIndex_2 = Math.round(Math.random() * (current.length - 1));
  return [current[randomIndex_1], current[randomIndex_2]];
}
