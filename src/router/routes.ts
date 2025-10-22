import type { RouteProps } from "react-router-dom";

export type PageMetadata = {
	title: string;
	description: string;
	image?: string;
	imageAlt?: string;
	openGraphTitle?: string;
	openGraphDescription?: string;
	twitterTitle?: string;
	twitterDescription?: string;
	url?: string;
	path?: string;
};

const DEFAULT_IMAGE = "https://aiplan.nl/og-image.png";
const DEFAULT_IMAGE_ALT =
	"AI Plan NL - Een tienpuntenplan voor superintelligente AI";

export const DEFAULT_METADATA: PageMetadata = {
	title: "AI Plan NL",
	description:
		"Een onafhankelijk initiatief met concrete voorstellen om Nederland klaar te maken voor de impact van superintelligente AI.",
	image: DEFAULT_IMAGE,
	imageAlt: DEFAULT_IMAGE_ALT,
	url: "https://aiplan.nl",
	openGraphTitle: "AI Plan NL",
	openGraphDescription:
		"Een onafhankelijk initiatief met concrete voorstellen om Nederland klaar te maken voor de impact van superintelligente AI.",
	twitterTitle: "AI Plan NL",
	twitterDescription:
		"Een onafhankelijk initiatief met concrete voorstellen om Nederland klaar te maken voor de impact van superintelligente AI.",
	path: "/",
};

export type RouteComponentKey =
	| "Index"
	| "Article"
	| "Nadi"
	| "MoonshotNadi"
	| "MoonshotRoboticsLab"
	| "MoonshotAILab"
	| "MoonshotDataFoundries"
	| "OnsVoorstel"
	| "PlanDetail"
	| "NotFound";

export type RouteMetadataResolverContext = {
	pathname: string;
	params: Record<string, string>;
	descriptor: RouteDescriptor;
};

export type RouteDescriptor = {
	path: RouteProps["path"];
	component: RouteComponentKey;
	prerender?: boolean;
	prerenderPaths?: string[];
	metadata?:
		| Partial<PageMetadata>
		| ((context: RouteMetadataResolverContext) => Partial<PageMetadata>);
};

const escapeRegExp = (value: string) =>
	value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const normalizePath = (value: string) => {
	if (!value) {
		return "/";
	}

	if (value === "/") {
		return "/";
	}

	return value.endsWith("/") ? value.slice(0, -1) : value;
};

type RouteMatcher = {
	regex: RegExp;
	paramKeys: string[];
};

const matcherCache = new Map<string, RouteMatcher>();

const getRouteMatcher = (pattern: string): RouteMatcher => {
	const normalizedPattern = normalizePath(pattern);
	const cached = matcherCache.get(normalizedPattern);

	if (cached) {
		return cached;
	}

	if (normalizedPattern === "*") {
		const wildcardMatcher: RouteMatcher = {
			regex: /.*/,
			paramKeys: [],
		};
		matcherCache.set(normalizedPattern, wildcardMatcher);
		return wildcardMatcher;
	}

	if (normalizedPattern === "/") {
		const rootMatcher: RouteMatcher = {
			regex: /^\/$/,
			paramKeys: [],
		};
		matcherCache.set(normalizedPattern, rootMatcher);
		return rootMatcher;
	}

	const segments = normalizedPattern.split("/").filter(Boolean);
	const paramKeys: string[] = [];

	const patternBody = segments
		.map((segment) => {
			if (segment.startsWith(":")) {
				paramKeys.push(segment.slice(1));
				return "([^/]+)";
			}

			return escapeRegExp(segment);
		})
		.join("\\/");

	const regex = new RegExp(`^/${patternBody}/?$`);
	const matcher: RouteMatcher = { regex, paramKeys };

	matcherCache.set(normalizedPattern, matcher);
	return matcher;
};

const PLAN_DETAIL_TITLES: Record<string, string> = {
	"1": "AI soevereiniteit",
	"2": "Talent",
	"3": "Een Nederlandse AI hub",
	"4": "Strategische investeringen",
	"5": "Europese rekenkracht",
	"6": "Defensie als vliegwiel",
	"7": "Sectorspecifieke AI-plannen",
	"8": "Maak Nederland AI-vaardig",
	"9": "Onderzoek naar AI-impact",
	"10": "Online veiligheid",
};

const buildPlanDetailMetadata = ({
	pathname,
	params,
}: RouteMetadataResolverContext): Partial<PageMetadata> => {
	const planTitle = params.id ? PLAN_DETAIL_TITLES[params.id] : undefined;

	if (!planTitle) {
		return {
			path: pathname,
		};
	}

	const title = `AI Deltaplan - Detailpagina ${planTitle} | AI Plan NL`;
	const description = `Detailpagina over ${planTitle} uit ons tienpuntenplan om Nederland voor te bereiden op superintelligente AI en de kansen die het biedt.`;

	return {
		title,
		description,
		openGraphTitle: title,
		openGraphDescription: description,
		twitterTitle: title,
		twitterDescription: description,
		path: pathname,
	};
};

export const routeDescriptors: RouteDescriptor[] = [
	{
		path: "/",
		component: "Index",
		metadata: {
			path: "/",
			title: "AI Plan NL – Een plan voor AI dat werkt voor Nederland",
			description:
				"AI Plan Nederland is een onafhankelijk initiatief met concrete voorstellen om Nederland klaar te maken voor de impact van de AI-transitie.",
		},
	},
	{
		path: "/openbrief",
		component: "Article",
		metadata: {
			path: "/openbrief",
			title: "Open brief: AI vraagt om politieke keuzes – nu | AI Plan NL",
			description:
				"Onze open brief aan de Nederlandse politiek met een dringende oproep om AI nu topprioriteit te maken.",
		},
	},
	{
		path: "/nadi",
		component: "Nadi",
		metadata: {
			path: "/nadi",
			title: "NADI: Een Nederlandse DARPA voor doorbraken | AI Plan NL",
			description:
				"Waarom Nederland een Nationaal Agentschap voor Disruptieve Innovatie nodig heeft en hoe het kan slagen.",
		},
	},
	{
		path: "/moonshots/nadi",
		component: "MoonshotNadi",
		metadata: {
			path: "/moonshots/nadi",
			title: "Moonshot: Nationaal Agentschap voor Disruptieve Innovatie | AI Plan NL",
			description:
				"Een onafhankelijke organisatie naar DARPA-voorbeeld die onmogelijke doorbraken voor Nederland organiseert.",
		},
	},
	{
		path: "/moonshots/robotics-lab",
		component: "MoonshotRoboticsLab",
		metadata: {
			path: "/moonshots/robotics-lab",
			title: "Moonshot: Foundational Robotics Lab | AI Plan NL",
			description:
				"Een nationaal lab dat fysieke AI en robotica inzet om productiviteit en autonomie van Nederland te versterken.",
		},
	},
	{
		path: "/moonshots/ai-lab",
		component: "MoonshotAILab",
		metadata: {
			path: "/moonshots/ai-lab",
			title: "Moonshot: Nationaal AI Lab | AI Plan NL",
			description:
				"Een publiek-privaat AI-lab dat onderzoek, talent en industrie verbindt voor betrouwbare en toepasbare AI.",
		},
	},
	{
		path: "/moonshots/data-foundries",
		component: "MoonshotDataFoundries",
		metadata: {
			path: "/moonshots/data-foundries",
			title: "Moonshot: Nationale Data Foundries voor sectorinnovatie | AI Plan NL",
			description:
				"Een nationale data-infrastructuur die hoogwaardige datasets ontwikkelt en beschikbaar stelt om innovatiebarrières in sleutel­sectoren te doorbreken.",
		},
	},
	{
		path: "/ons-voorstel",
		component: "OnsVoorstel",
		metadata: {
			path: "/ons-voorstel",
			title: "Ons voorstel: het AI Deltaplan voor Nederland | AI Plan NL",
			description:
				"Tien concrete voorstellen om Nederland voor te bereiden op superintelligente AI en de kansen die het biedt.",
		},
	},
	{
		path: "/ons-voorstel/:id",
		component: "PlanDetail",
		prerender: false,
		prerenderPaths: [
			"/ons-voorstel/1",
			"/ons-voorstel/2",
			"/ons-voorstel/3",
			"/ons-voorstel/4",
			"/ons-voorstel/5",
			"/ons-voorstel/6",
			"/ons-voorstel/7",
			"/ons-voorstel/8",
			"/ons-voorstel/9",
			"/ons-voorstel/10",
		],
		metadata: buildPlanDetailMetadata,
	},
	{
		path: "/404",
		component: "NotFound",
		metadata: {
			path: "/404",
			title: "Pagina niet gevonden | AI Plan NL",
			description:
				"De pagina die je zoekt bestaat niet. Ga terug naar AI Plan NL voor alle initiatieven en analyses.",
		},
	},
	{
		path: "*",
		component: "NotFound",
		prerender: false,
		metadata: {
			path: "/404",
			title: "Pagina niet gevonden | AI Plan NL",
			description:
				"De pagina die je zoekt bestaat niet. Ga terug naar AI Plan NL voor alle initiatieven en analyses.",
		},
	},
];

type RouteMatchResult = {
	descriptor: RouteDescriptor;
	params: Record<string, string>;
};

const findRouteMatch = (pathname: string): RouteMatchResult | undefined => {
	for (const descriptor of routeDescriptors) {
		if (!descriptor.path) {
			continue;
		}

		const matcher = getRouteMatcher(descriptor.path);
		const match = matcher.regex.exec(pathname);

		if (!match) {
			continue;
		}

		const params: Record<string, string> = {};
		matcher.paramKeys.forEach((key, index) => {
			const value = match[index + 1];
			if (value) {
				params[key] = value;
			}
		});

		return { descriptor, params };
	}

	return undefined;
};

const buildUrlFromPath = (path?: string) => {
	if (!path) {
		return undefined;
	}

	if (path === "/") {
		return "https://aiplan.nl";
	}

	return `https://aiplan.nl${path.startsWith("/") ? path : `/${path}`}`;
};

export const resolveMetadataForPath = (
	pathname: string,
	overrides?: Partial<PageMetadata>
): PageMetadata => {
	const normalizedPath = normalizePath(pathname);
	const match = findRouteMatch(normalizedPath);

	const context: RouteMetadataResolverContext | undefined = match
		? {
				pathname: normalizedPath,
				params: match.params,
				descriptor: match.descriptor,
			}
		: undefined;

	const resolvedFromDescriptor = context
		? typeof context.descriptor.metadata === "function"
			? context.descriptor.metadata(context)
			: context.descriptor.metadata ?? {}
		: {};

	const mergedPath =
		overrides?.path ??
		resolvedFromDescriptor.path ??
		(match?.descriptor.path && !match.descriptor.path.includes(":")
			? match.descriptor.path
			: normalizedPath);

	const metadata: PageMetadata = {
		...DEFAULT_METADATA,
		...resolvedFromDescriptor,
		...overrides,
		path: mergedPath,
	};

	if (!metadata.url) {
		metadata.url = buildUrlFromPath(metadata.path);
	}

	return metadata;
};

export const staticRoutePaths = Array.from(
	new Set(
		routeDescriptors.flatMap(({ path, prerender = true, prerenderPaths }) => {
			const resolvedPaths: string[] = [];

			if (prerenderPaths?.length) {
				resolvedPaths.push(...prerenderPaths);
			}

			if (
				path &&
				prerender &&
				!String(path).includes(":") &&
				path !== "*"
			) {
				resolvedPaths.push(path as string);
			}

			return resolvedPaths;
		})
	)
);
