import { title } from "@/components/primitives";
import React from "react";
import ProjectCards from "@/components/ProjectCards";
import rifqiWebsite from "../../public/images/rifqiWebsite.jpg"

export default function PricingPage() {
  return (
    <div>
      <div>
        <h1 className={title()} style={{ marginBottom: 24 }}>Projects</h1>
      </div>
      <div className="w-full flex flex-col gap-4 shadow-md rounded-xl mt-8 md:mt-12 md:flex-row">
        <ProjectCards />
        <ProjectCards />
        <ProjectCards />
      </div>
    </div>
  );
}
