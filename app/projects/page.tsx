import { title } from "@/components/primitives";
import React from "react";
import ProjectCards from "@/components/ProjectCards";
import rifqiWebsite from "../../public/images/rifqiWebsite.jpg";
import kevin from "../../public/images/kevin.jpg";
import splitter from "../../public/images/splitter.jpg";

export default function PricingPage() {
  return (
    <div className="">
      <div>
        <h1 className={title()} style={{ marginBottom: 24 }}>
          Projects
        </h1>
      </div>
      <div className="w-full flex flex-col gap-4 rounded-xl mt-8 md:mt-12 md:flex-row">
        <ProjectCards image={rifqiWebsite} title="Rifqi Personal Website" description="NextJS | NextUI | TypeScript" githubURL="" webURL=""/>
        <ProjectCards image={kevin} title="Kevin Personal Website" description="ReactJS | DaisyUI | TailwindCSS | MySQL | ExpressJS" githubURL="https://github.com/Rifqi9604/website-kevin" webURL="https://website-kevin-client.vercel.app/"/>
        <ProjectCards image={splitter} title="Splitter"  description="ReactJS | TailwindCSS" githubURL="https://github.com/Rifqi9604/frontend-mentor-practice3" webURL="https://frontend-mentor-practice3.vercel.app/"/>
      </div>
    </div>
  );
}
