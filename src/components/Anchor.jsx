import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

export default function Anchor({ project_1, project_2 }) {
  return (
    <div className="flex w-full">
      <NavLink
        className="inline-block w-2/4 p-5 text-blue-500 transition-colors hover:bg-blue-50"
        to={`/${project_1.slug}`}
      >
        <span className="flex flex-row-reverse items-center justify-center gap-5">
          <span>{project_1.title}</span>
          <ArrowLeftIcon className="h-6 w-6 text-black" />
        </span>
      </NavLink>
      <NavLink
        className="inline-block w-2/4 p-5 text-blue-500 transition-colors hover:bg-blue-50"
        to={`/${project_2.slug}`}
      >
        <span className="flex items-center justify-center gap-5">
          <span>{project_2.title}</span>
          <ArrowRightIcon className="h-6 w-6 text-black" />
        </span>
      </NavLink>
    </div>
  );
}
