import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon, InstagramIcon, LinkedInIcon } from "@/components/icons";
import TypingEffect from "@/components/TypingEffect";

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-xl text-center justify-center">
				<div className={`text-xl flex justify-center font-semibold {title({ color: "violet" })}`}>
					<TypingEffect />
					<h1>👋, I'm Rifqi</h1>
				</div>
				<h1 className={title({ color: "violet" })}>A 2nd year Student and a Frontend Web Developer.</h1>
				<br />
				<h1 className={title()}>
					Welcome to my <span className={title({color: "yellow"})}>Portfolio.</span>
				</h1>
				<h2 className={subtitle({ class: "mt-4" })}>
					Teamwork, Creativity, and Hardwork.
				</h2>
			</div>

			<div className="flex gap-3">
			<Link isExternal href={siteConfig.links.instagram} aria-label="instagram">
            <InstagramIcon className="text-default-500" />
          </Link>
		  <Link isExternal href={siteConfig.links.linkedin} aria-label="linkedin">
            <LinkedInIcon className="text-default-500" />
          </Link>
          <Link isExternal href={siteConfig.links.github} aria-label="github">
            <GithubIcon className="text-default-500" />
          </Link>
			</div>
		</section>
	);
}
