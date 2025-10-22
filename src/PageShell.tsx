import { PropsWithChildren, useRef } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import HashScroll from "@/components/HashScroll";

const PageShell = ({ children }: PropsWithChildren) => {
	const queryClientRef = useRef<QueryClient>();

	if (!queryClientRef.current) {
		queryClientRef.current = new QueryClient();
	}

	return (
		<QueryClientProvider client={queryClientRef.current}>
			<TooltipProvider>
				<Toaster />
				<Sonner />
				<HashScroll />
				{children}
			</TooltipProvider>
		</QueryClientProvider>
	);
};

export default PageShell;
