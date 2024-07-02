import { Typography } from "@material-tailwind/react";

export default function Warning() {
  return (
    <div className="base-container flex flex-col items-start pb-5 pt-28">
      <Typography className="mb-3 text-3xl font-bold" as={"h2"}>
        Loyihalar
      </Typography>
      <Typography className="text-justify" as={"p"}>
        Ushbu loyihalarning barchasi real ishlaydigan loyihalar bo'lgani uchun
        hamda brendlar bilan tuzgan shartnomamga ko'ra kod uchun havola
        berilmadi.
      </Typography>
    </div>
  );
}
