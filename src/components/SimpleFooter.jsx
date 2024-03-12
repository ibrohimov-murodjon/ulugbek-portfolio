import { Typography } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

export function SimpleFooter() {
  return (
    <footer className="border-t border-blue-gray-50">
      <div className="base-container flex flex-row flex-wrap items-center justify-center gap-x-12 gap-y-6 py-6 text-center md:justify-between">
        <Typography color="blue-gray" className="font-normal">
          &copy; {new Date().getFullYear()} mirzobox.uz
        </Typography>
      </div>
    </footer>
  );
}
