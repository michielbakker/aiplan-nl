import {
	routeDescriptors,
	resolveMetadataForPath,
	findRouteMatch,
	type PageMetadata,
	type RouteComponentKey,
	staticRoutePaths,
} from "../router/routes";

export type PageEntry = {
	path: string;
	component: RouteComponentKey;
	metadata: PageMetadata;
	props?: Record<string, unknown>;
};

const dedupe = <T,>(values: T[]) => Array.from(new Set(values));

const resolveProps = (
	component: RouteComponentKey,
	params: Record<string, string>
): Record<string, unknown> | undefined => {
	if (component === "PlanDetail" && params.id) {
		const planId = Number.parseInt(params.id, 10);
		if (Number.isFinite(planId)) {
			return { planId };
		}
	}

	return undefined;
};

const collectAllPaths = () => {
	const explicitPaths = routeDescriptors.flatMap((descriptor) => {
		const paths: string[] = [];

		if (descriptor.prerenderPaths?.length) {
			paths.push(...descriptor.prerenderPaths);
		}

		if (descriptor.path && descriptor.prerender !== false && !String(descriptor.path).includes("*")) {
			paths.push(descriptor.path as string);
		}

		return paths;
	});

	const normalized = explicitPaths
		.concat(staticRoutePaths)
		.concat(["/404"])
		.map((path) => (path === "" ? "/" : path));

	return dedupe(normalized).sort((a, b) => (a === "/" ? -1 : b === "/" ? 1 : a.localeCompare(b)));
};

export const pageEntries: PageEntry[] = collectAllPaths().map((path) => {
	const match = findRouteMatch(path);
	const component = match?.descriptor.component ?? "NotFound";
	const metadata = resolveMetadataForPath(path, { path });
	const props = match ? resolveProps(component, match.params) : undefined;

	return {
		path,
		component,
		metadata,
		...(props ? { props } : {}),
	};
});
