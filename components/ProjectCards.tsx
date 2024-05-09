import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { StaticImageData } from "next/image";
import { GithubIcon } from "./icons";
import Link from "next/link";
import { TbWorld } from "react-icons/tb";
// Define the type for the props
interface ProjectCardsProps {
  image: string | StaticImageData;
  title: string;
  description: string;
  githubURL: string;
  webURL: string;
}

// Use the defined props type in the function signature
function ProjectCards({
  image,
  title,
  description,
  githubURL,
  webURL,
}: ProjectCardsProps): JSX.Element {
  return (
    <div>
      <Card className="py-4 flex flex-col-reverse">
        <CardHeader className="pt-2 px-4 flex-col items-start gap-2">
          <h1 className="font-bold text-large">{title}</h1>
          <p className="text-tiny font-semibold">{description}</p>
          {/* <small className="text-default-500">12 Tracks</small> */}
          <div className="flex gap-2">
          <Link href={githubURL}>
            <GithubIcon className="w-6 h-6" />
          </Link>
          <Link href={webURL}>
            <TbWorld size={24} />
          </Link>
          </div>

          
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          {/* Check if the image is a string URL or an imported image */}
          {typeof image === "string" ? (
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={image}
              width={270}
              height={270}
            />
          ) : (
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={image.src}
              width={350}
              height={400}
            />
          )}
        </CardBody>
      </Card>
    </div>
  );
}

export default ProjectCards;
