import { useMemo } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import { resolveMetadataForPath } from "@/router/routes";

const RouteMetadataHelmet = () => {
	const location = useLocation();

	const metadata = useMemo(
		() => resolveMetadataForPath(location.pathname),
		[location.pathname]
	);

	const {
		title,
		description,
		image,
		imageAlt,
		openGraphTitle,
		openGraphDescription,
		twitterTitle,
		twitterDescription,
		url,
	} = metadata;

	const ogTitle = openGraphTitle ?? title;
	const ogDescription = openGraphDescription ?? description;
	const twitterMetaTitle = twitterTitle ?? title;
	const twitterMetaDescription = twitterDescription ?? description;
	const twitterCard = image ? "summary_large_image" : "summary";

	return (
		<Helmet>
			<title>{title}</title>
			<meta name="description" content={description} />
			{url && <link rel="canonical" href={url} />}

			<meta property="og:type" content="website" />
			<meta property="og:title" content={ogTitle} />
			<meta property="og:description" content={ogDescription} />
			{image && <meta property="og:image" content={image} />}
			{imageAlt && <meta property="og:image:alt" content={imageAlt} />}
			{url && <meta property="og:url" content={url} />}

			<meta name="twitter:card" content={twitterCard} />
			<meta name="twitter:title" content={twitterMetaTitle} />
			<meta
				name="twitter:description"
				content={twitterMetaDescription}
			/>
			{image && <meta name="twitter:image" content={image} />}
		</Helmet>
	);
};

export default RouteMetadataHelmet;
