import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PlanDetail from "./pages/PlanDetail";
import Article from "./pages/Article";
import OnsVoorstel from "./pages/OnsVoorstel";
import Nadi from "./pages/Nadi";
import MoonshotNadi from "./pages/moonshots/MoonshotNadi";
import MoonshotRoboticsLab from "./pages/moonshots/MoonshotRoboticsLab";
import MoonshotAiLab from "./pages/moonshots/MoonshotAiLab";
import MoonshotBiofoundry from "./pages/moonshots/MoonshotBiofoundry";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
	<QueryClientProvider client={queryClient}>
		<TooltipProvider>
			<Toaster />
			<Sonner />
			<BrowserRouter>
				<ScrollToTop />
				<Routes>
					<Route path="/" element={<Index />} />
					<Route path="/openbrief" element={<Article />} />
					<Route path="/nadi" element={<Nadi />} />
					<Route path="/moonshots/nadi" element={<MoonshotNadi />} />
					<Route path="/moonshots/robotics-lab" element={<MoonshotRoboticsLab />} />
					<Route path="/moonshots/ai-lab" element={<MoonshotAiLab />} />
					<Route path="/moonshots/biofoundry" element={<MoonshotBiofoundry />} />
					<Route path="/ons-voorstel" element={<OnsVoorstel />} />
					<Route path="/ons-voorstel/:id" element={<PlanDetail />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</TooltipProvider>
	</QueryClientProvider>
);

export default App;
