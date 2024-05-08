export default function PricingLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col justify-center items-center pb-4 md:mx-36">
			<div className="inline-block max-w-lg text-center justify-center mb-4">
				{children}
			</div>
		</section>
	);
}
