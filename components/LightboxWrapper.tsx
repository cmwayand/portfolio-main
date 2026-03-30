import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface ILightboxWrapperProps {
	isOpen: boolean;
	onOpen: () => void;
	slides: { src: string; alt: string }[];
	index: number;
}

export function LightboxWrapper({
	isOpen,
	onOpen,
	slides,
	index,
}: ILightboxWrapperProps) {
	if (!isOpen) return null;

	return (
		<Lightbox
			open={isOpen}
			close={onOpen}
			slides={slides}
			render={{
				slide: ({ slide }) => (
					<motion.img
						src={slide.src}
						alt={slide.alt}
						className="max-w-[80vw] max-h-[90vh]"
					/>
				),
			}}
			index={index}
		/>
	);
}
