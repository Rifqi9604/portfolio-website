import { title } from "@/components/primitives";
import React from "react";
import ProjectCards from "@/components/ProjectCards";
export default function PricingPage() {
  return (
    <div>
      <div>
        <h1 className={title()} style={{ marginBottom: 24 }}>Projects</h1>
      </div>
      <div className="flex flex-col gap-4 shadow-md rounded-xl mt-8 md:mt-12 md:flex-row">
        <ProjectCards />
        <ProjectCards />
        <ProjectCards />
        <ProjectCards />
      </div>
    </div>
  );
}
