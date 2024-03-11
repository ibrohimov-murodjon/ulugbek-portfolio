import CarouselCustomNavigation from "../components/CarouselCustomNavigation";
import { NavLink, useParams } from "react-router-dom";
import getProjectDetails from "../utils/get-project-datails";
import { Typography } from "@material-tailwind/react";
import getTime from "../utils/get-time";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function ProjectDetails() {
  const { slug } = useParams();
  const { gallery, title, description, createdDate, tehnologies } =
    getProjectDetails(slug);
  return (
    <div className="base-container pt-32">
      <NavLink
        className="mb-5 inline-block transition-colors hover:text-blue-500"
        to="/"
      >
        <span className="flex items-center gap-2">
          <ArrowLeftIcon className="h-5 w-5" />
          <span>Orqaga</span>
        </span>
      </NavLink>
      <CarouselCustomNavigation gallery={gallery} />
      <div className="mb-10">
        <div className="mb-5 flex items-center justify-between">
          <Typography className="text-3xl font-bold" as={"h1"}>
            {title}
          </Typography>
          <time class="project-info__time" datetime={createdDate}>
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
    </div>
  );
}
