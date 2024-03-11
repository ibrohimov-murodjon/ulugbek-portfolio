import { Typography } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

export function SimpleFooter() {
  const links = [
    {
      path: "/me",
      title: "mirzobox kim ?",
    },
    {
      path: "/blog",
      title: "Maqolalar",
    },
  ];

  return (
    <footer className="border-t border-blue-gray-50">
      <div className="base-container flex flex-row flex-wrap items-center justify-center gap-x-12 gap-y-6 py-6 text-center md:justify-between">
        <Typography color="blue-gray" className="font-normal">
          &copy; {new Date().getFullYear()} mirzobox.uz
        </Typography>
        <ul className="flex flex-wrap items-center gap-x-8 gap-y-2">
          {links.map(({ path, title }) => {
            return (
              <Typography
                key={path}
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
              >
                <NavLink
                  className="flex items-center transition-colors hover:text-blue-500"
                  to={path}
                >
                  {title}
                </NavLink>
              </Typography>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
