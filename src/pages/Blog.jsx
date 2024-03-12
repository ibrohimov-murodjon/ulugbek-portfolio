import { Typography } from "@material-tailwind/react";
import posts from "../posts";
import SimpleCard from "../components/SimpleCard";
import getSortedElementsByTime from "../utils/get-sorted-elements-by-time";

export default function Blog() {
  const livePosts = posts;
  return (
    <div className="base-container py-32">
      <Typography className="mb-5 text-3xl font-bold" as={"h1"}>
        Muallifligimdagi maqolalar
      </Typography>
      <ul className="grid grid-cols-1 gap-6">
        {getSortedElementsByTime(livePosts).map(
          ({ title, description, link }) => {
            return (
              <li key={title}>
                <SimpleCard
                  title={title}
                  description={description}
                  link={link}
                />
              </li>
            );
          },
        )}
      </ul>
    </div>
  );
}
