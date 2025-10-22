import renderPage from "@/renderPage";
import type { RouteComponentKey } from "@/router/routes";
import IndexPage from "@/pages/Index";
import ArticlePage from "@/pages/Article";
import NadiPage from "@/pages/Nadi";
import OnsVoorstelPage from "@/pages/OnsVoorstel";
import PlanDetailPage from "@/pages/PlanDetail";
import MoonshotNadiPage from "@/pages/moonshots/MoonshotNadi";
import MoonshotRoboticsLabPage from "@/pages/moonshots/MoonshotRoboticsLab";
import MoonshotAiLabPage from "@/pages/moonshots/MoonshotAILab";
import MoonshotDataFoundriesPage from "@/pages/moonshots/MoonshotDataFoundries";
import NotFoundPage from "@/pages/NotFound";

type ComponentFactory = (props: Record<string, unknown>) => JSX.Element;

const componentFactories: Record<RouteComponentKey, ComponentFactory> = {
	Index: () => <IndexPage />,
	Article: () => <ArticlePage />,
	Nadi: () => <NadiPage />,
	MoonshotNadi: () => <MoonshotNadiPage />,
	MoonshotRoboticsLab: () => <MoonshotRoboticsLabPage />,
	MoonshotAILab: () => <MoonshotAiLabPage />,
	MoonshotDataFoundries: () => <MoonshotDataFoundriesPage />,
	OnsVoorstel: () => <OnsVoorstelPage />,
	PlanDetail: (props) => {
		const planId = Number(props.planId);
		return <PlanDetailPage planId={Number.isFinite(planId) ? planId : 1} />;
	},
	NotFound: () => <NotFoundPage />,
};

const rootElement = document.getElementById("root");

if (!rootElement) {
	throw new Error("Root element with id 'root' not found.");
}

const resolveProps = () => {
	const raw = rootElement.dataset.props;
	if (!raw) {
		return {};
}

	try {
		const decoded = typeof atob === "function" ? atob(raw) : raw;
		const parsed = JSON.parse(decoded);
		return typeof parsed === "object" && parsed ? parsed : {};
	} catch {
		return {};
	}
};

const props = resolveProps();
const componentKey = (rootElement.dataset.component ?? "NotFound") as RouteComponentKey;
const factory = componentFactories[componentKey] ?? componentFactories.NotFound;

renderPage(factory(props));
