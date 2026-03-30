interface ISectionProps {
	title: string;
	includeTitle?: boolean;
	children: React.ReactNode;
	className?: string;
}

export function Section({
	title,
	includeTitle: includeHeader = true,
	children,
	className,
}: ISectionProps) {
	const id = title.toLowerCase().replace(" ", "-");
	return (
		<section id={id} className={`${className} p-4 flex flex-col gap-8 w-[80%]`}>
			{includeHeader && <p className="text-4xl">{title}</p>}
			{children}
		</section>
	);
}
