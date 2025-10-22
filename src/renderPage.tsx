import { createRoot } from "react-dom/client";
import type { ReactElement } from "react";
import PageShell from "./PageShell";
import "./index.css";

const renderPage = (element: ReactElement) => {
	const container = document.getElementById("root");

	if (!container) {
		throw new Error("Root element with id 'root' not found.");
	}

	createRoot(container).render(<PageShell>{element}</PageShell>);
};

export default renderPage;

