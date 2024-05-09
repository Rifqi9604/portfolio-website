export default function PricingLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="flex flex-col pb-4 justify-center items-center">
			<div className="inline-block max-w-full text-center mb-4">
				{children}
			</div>
		</section>
	);
}
