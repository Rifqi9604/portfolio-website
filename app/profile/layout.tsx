export default function ProfileLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col gap-2 md:mx-36">
			<div className="inline-block max-w-screen">
				{children}
			</div>
		</section>
	);
}
