import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ReactNode } from 'react';

interface ArticleLayoutProps {
	title: ReactNode;
	eyebrow?: string;
	subtitle?: string;
	description?: string;
	meta?: ReactNode;
	headerAppend?: ReactNode;
	heroIcon?: ReactNode;
	children: ReactNode;
	afterArticle?: ReactNode;
}

const ArticleLayout = ({
	title,
	eyebrow = 'Artikel',
	subtitle,
	description,
	meta,
	headerAppend,
	heroIcon,
	children,
	afterArticle
}: ArticleLayoutProps) => {
	return (
		<div className="min-h-screen bg-gradient-to-b from-slate-100 via-white to-white">
			<div className="relative mx-auto max-w-4xl px-6 pb-16 pt-6 lg:px-8">
				<div className="pointer-events-none absolute inset-x-6 top-32 h-72 rounded-3xl bg-gradient-to-r from-rose-100 via-slate-50 to-sky-100 opacity-60 blur-3xl" />

				<Header>{headerAppend}</Header>

				<main className="relative mt-12 space-y-12">
					<article className="overflow-hidden rounded-3xl border border-slate-200/70 bg-white/85 shadow-lg shadow-slate-900/5 backdrop-blur-sm">
						<div className="border-b border-slate-200/80 bg-slate-50/70 px-8 py-6">
							<span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">{eyebrow}</span>
						</div>
						<div className="px-8 pb-12 pt-8 md:px-12 md:pt-12">
							{heroIcon && <div className="mb-6 flex justify-center">{heroIcon}</div>}
							<h1 className="font-space-grotesk text-3xl font-bold leading-tight text-slate-900 md:text-4xl">{title}</h1>
							{subtitle && <p className="mt-4 text-lg font-medium leading-relaxed text-slate-700 md:text-xl">{subtitle}</p>}
							{description && <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-600 md:text-xl">{description}</p>}
							{meta && <div className="mt-6 text-sm leading-relaxed text-slate-500">{meta}</div>}

							<div className="article-content mt-10 space-y-8 text-base leading-relaxed text-slate-700 md:text-lg">
								{children}
							</div>
						</div>
					</article>

					{afterArticle}
				</main>

				<Footer />
			</div>
		</div>
	);
};

export default ArticleLayout;
