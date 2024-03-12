import CarouselCustomNavigation from "../components/CarouselCustomNavigation";
import { NavLink, ScrollRestoration, useParams } from "react-router-dom";
import getProjectDetails from "../utils/get-project-datails";
import { Typography } from "@material-tailwind/react";
import getTime from "../utils/get-time";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Anchor from "../components/Anchor";
import getAnchors from "../utils/get-anchors";

export default function ProjectDetails() {
  const { slug } = useParams();
  const {
    gallery,
    title,
    description,
    createdDate,
    tehnologies,
    commits,
    commitsLink,
  } = getProjectDetails(slug);

  const [project_1, project_2] = getAnchors(slug);

  return (
    <div className="base-container py-32">
      <ScrollRestoration />
      <NavLink
        className="mb-10 inline-block transition-colors hover:text-blue-500"
        to="/"
      >
        <span className="flex items-center gap-2">
          <ArrowLeftIcon className="h-5 w-5" />
          <span>Orqaga</span>
        </span>
      </NavLink>
      <CarouselCustomNavigation gallery={gallery} />
      <div className="mb-10">
        <div className="mb-5 flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
          <Typography className="text-3xl font-bold" as={"h1"}>
            {title}
          </Typography>
          <time className="project-info__time" dateTime={createdDate}>
            ⌚ {getTime(createdDate)}
          </time>
        </div>
        <Typography>{description}</Typography>
      </div>

      <div className="mb-10">
        <Typography className="mb-5 text-2xl font-bold" as={"h2"}>
          Loyihani qurishda foydalanilgan texnologiyalar
        </Typography>
        <ul className="flex flex-col gap-2">
          {tehnologies.map((item) => {
            return (
              <li key={item}>
                <Typography>{item}</Typography>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mb-10">
        <Typography className="mb-5 text-2xl font-bold" as={"h2"}>
          Kommitlar
        </Typography>
        <Typography>
          <span className="font-bold">+{commits}</span> |{" "}
          <a
            className="text-blue-500 underline hover:no-underline"
            href={commitsLink}
            target="_blank"
          >
            Havola
          </a>
        </Typography>
      </div>

      <div>
        <Typography className="mb-5 text-2xl font-bold" as={"h2"}>
          Boshqa loyihalar
        </Typography>
        <Anchor project_1={project_1} project_2={project_2} />
      </div>
    </div>
  );
}
