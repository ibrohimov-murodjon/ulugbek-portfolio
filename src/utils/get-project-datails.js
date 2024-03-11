import projects from "../projects";

export default function getProjectDetails(slug) {
  const liveProjects = projects;
  const project = liveProjects.filter((project) => project.slug === slug);
  return project[0];
}
