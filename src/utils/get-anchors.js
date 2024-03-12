import projects from "../projects";

export default function getAnchors(slug) {
  const liveProjects = projects;
  const current = liveProjects.filter((project) => project.slug !== slug);
  let randomIndex_1 = Math.round(Math.random() * (current.length - 1));
  let randomIndex_2 = Math.round(Math.random() * (current.length - 1));
  while (randomIndex_1 === randomIndex_2) {
    randomIndex_1 = Math.round(Math.random() * (current.length - 1));
    randomIndex_2 = Math.round(Math.random() * (current.length - 1));
  }
  return [current[randomIndex_1], current[randomIndex_2]];
}
