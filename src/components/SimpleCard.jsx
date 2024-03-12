import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

export default function SimpleCard({ link, title, description }) {
  return (
    <Card className="mt-6 w-full">
      <CardBody>
        <Typography
          className="mb-2 !line-clamp-1"
          variant="h5"
          color="blue-gray"
        >
          {title}
        </Typography>
        <Typography className="!line-clamp-3">{description}</Typography>
      </CardBody>
      <CardFooter className="flex pt-0">
        <a
          className="btn w-full whitespace-nowrap sm:ml-auto sm:w-min"
          href={link}
          target="_blank"
        >
          Ba' tafsil
        </a>
      </CardFooter>
    </Card>
  );
}
