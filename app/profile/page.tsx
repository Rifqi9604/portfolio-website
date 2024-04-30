import { title } from "@/components/primitives";
import pasfoto from "@/public/pasfoto.jpg";
import Image from "next/image";
export default function AboutPage() {
  return (
    <div className="max-w-screen flex flex-col gap-10">
      <div className="text-center">
        <h1 className={title()}>Profile</h1>
      </div>
      <div className="flex flex-col md:justify-between md:flex-row items-center gap-6 md:max-h-[300px]">
        <div className="md:max-w-[50%] flex justify-center">
          <Image
            src={pasfoto}
            alt="pasfoto"
            className="w-[250px] h-[300px] rounded-3xl"
          />
        </div>
        <div className="md:max-w-[50%]">
          <p className="text-justify text-lg font-semibold">
            I'm a 4th semester{" "}
            <span className="title" style={{ color: "violet" }}>
              <span className="text-lg">Information Systems </span>
            </span>
            student who's passionate about Frontend web development,
            specializing in creating engaging user interfaces. Skilled in HTML,
            CSS, JavaScript, and frameworks like Tailwind CSS and ReactJS. I
            stay updated with the latest Frontend trends and excel in
            understanding user requirements. Experienced in teamwork, I believe
            clear communication is vital for success. Eager to learn and
            contribute positively to Frontend projects.
          </p>
        </div>
      </div>
    </div>
  );
}
