import projects from "../projects";
import CardDefault from "./CardDefault";

export default function Projects() {
  const liveProjects = projects;
  return (
    <div className="base-container pb-20">
      <ul className="grid grid-cols-1 gap-10">
        {liveProjects.map(
          ({ title, description, github, img, website, slug }) => {
            return (
              <li key={title}>
                <CardDefault
                  slug={slug}
                  img={img}
                  title={title}
                  description={description}
                  github={github}
                  website={website}
                />
              </li>
            );
          },
        )}
      </ul>
    </div>
  );
}
