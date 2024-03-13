import { Typography } from "@material-tailwind/react";

export default function ImageLabel({ src, label }) {
  return (
    <div className="flex w-full flex-col items-center sm:w-2/4">
      <img
        className="mb-2 w-full rounded-md object-cover object-center"
        src={src}
        alt={label}
      />
      <Typography
        className="!line-clamp-1 text-sm text-blue-gray-600"
        as={"small"}
      >
        {label}
      </Typography>
    </div>
  );
}
