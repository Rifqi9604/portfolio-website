import React from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
function ProjectCards() {
  return (
    <div>
      <Card className="py-4 flex flex-col-reverse">
        <CardHeader className="pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">Daily Mix</p>
          <small className="text-default-500">12 Tracks</small>
          <h4 className="font-bold text-large">Frontend Radio</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src="../public/rifqiWebsite.jpg"
            width={270}
            height={270}
          />
        </CardBody>
      </Card>
    </div>
  );
}

export default ProjectCards;
