import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { ComponentType } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PlanDetail from "./pages/PlanDetail";
import Article from "./pages/Article";
import OnsVoorstel from "./pages/OnsVoorstel";
import Nadi from "./pages/Nadi";
import MoonshotNadi from "./pages/moonshots/MoonshotNadi";
import MoonshotRoboticsLab from "./pages/moonshots/MoonshotRoboticsLab";
import MoonshotAiLab from "./pages/moonshots/MoonshotAILab";
import MoonshotDataFoundries from "./pages/moonshots/MoonshotDataFoundries";
import ScrollToTop from "./components/ScrollToTop";
import RouteMetadataHelmet from "./components/RouteMetadataHelmet";
import {
	routeDescriptors,
	type RouteDescriptor,
	type RouteComponentKey,
} from "./router/routes";

const queryClient = new QueryClient();

type RouteDefinition = RouteDescriptor & {
	Component: ComponentType;
};

const componentMap: Record<RouteComponentKey, ComponentType> = {
	Index,
	Article,
	Nadi,
	MoonshotNadi,
	MoonshotRoboticsLab,
	MoonshotAiLab,
	MoonshotDataFoundries,
	OnsVoorstel,
	PlanDetail,
	NotFound,
};

export const appRouteDefinitions: RouteDefinition[] = routeDescriptors.map(
	(descriptor) => ({
		...descriptor,
		Component: componentMap[descriptor.component] ?? NotFound,
	})
);

export { staticRoutePaths } from "./router/routes";

const App = () => (
	<QueryClientProvider client={queryClient}>
		<TooltipProvider>
			<Toaster />
			<Sonner />
			<BrowserRouter>
				<ScrollToTop />
				<RouteMetadataHelmet />
				<Routes>
					{appRouteDefinitions.map(({ path, Component }) => (
						<Route key={path} path={path} element={<Component />} />
					))}
				</Routes>
			</BrowserRouter>
		</TooltipProvider>
	</QueryClientProvider>
);

export default App;
