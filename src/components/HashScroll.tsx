import { useEffect } from "react";

const scrollToHash = (hash: string) => {
	if (!hash) {
		window.scrollTo({ top: 0, behavior: "auto" });
		return;
	}

	const id = hash.startsWith("#") ? hash.slice(1) : hash;
	if (!id) {
		window.scrollTo({ top: 0, behavior: "auto" });
		return;
	}

	const attemptScroll = () => {
		const element = document.getElementById(id);

		if (element) {
			element.scrollIntoView({ behavior: "smooth", block: "start" });
			return true;
		}

		return false;
	};

	if (!attemptScroll()) {
		requestAnimationFrame(() => attemptScroll());
	}
};

const HashScroll = () => {
	useEffect(() => {
		const handle = () => scrollToHash(window.location.hash);

		handle();
		window.addEventListener("hashchange", handle);
		window.addEventListener("popstate", handle);

		return () => {
			window.removeEventListener("hashchange", handle);
			window.removeEventListener("popstate", handle);
		};
	}, []);

	return null;
};

export default HashScroll;

