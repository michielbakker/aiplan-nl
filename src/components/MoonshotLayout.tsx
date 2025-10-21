import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ReactNode } from 'react';

interface MoonshotLayoutProps {
	title: string;
	description?: string;
	heroEyebrow?: string;
	children: ReactNode;
}

const MoonshotLayout = ({ title, description = '', heroEyebrow = 'Moonshot', children }: MoonshotLayoutProps) => {
	return (
		<div className="min-h-screen bg-gradient-to-b from-slate-100 via-white to-white">
			<div className="relative mx-auto max-w-4xl px-4 pb-16 pt-6 lg:px-8">
				<div className="pointer-events-none absolute inset-x-6 top-32 h-72 rounded-3xl bg-gradient-to-r from-fuchsia-100 via-slate-50 to-sky-100 opacity-60 blur-3xl" />

				<Header />

				<main className="relative mt-4 space-y-16">
					<article className="overflow-hidden rounded-3xl border border-slate-200/70 bg-white/80 shadow-lg shadow-slate-900/5 backdrop-blur-sm">
						<div className="border-b border-slate-200/80 bg-slate-50/70 px-8 py-6">
							<span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">{heroEyebrow}</span>
						</div>
						<div className="px-6 pb-12 pt-8 md:px-12 md:pt-10">
								<h1 className="font-space-grotesk text-3xl font-bold leading-tight text-slate-900 md:text-4xl">{title}</h1>
								<div className="mt-4 flex items-start gap-3 rounded-lg border-2 border-red-300 bg-red-50 px-5 py-4 text-red-900 shadow-sm">
									<p className="text-sm font-semibold tracking-wide">
										Dit document is nog in ontwikkeling. <span className="underline">Gaarne niet publiekelijk verspreiden.</span>
									</p>
								</div>
							{description && (
								<p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 md:text-xl">
									{description}
								</p>
							)}
							<a
								className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-700 px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 md:w-auto md:self-start"
								href="https://docs.google.com/forms/d/e/1FAIpQLScVx7CG6oXcdVyP1IslTwTvrRuQWvbHa9v8WQgwpzuVKklT0Q/viewform?usp=header"
								target="_blank"
								rel="noopener noreferrer"
							>
								Steun dit voorstel
								<span aria-hidden="true">→</span>
							</a>
							<div className="moonshot-content mt-8 text-base leading-relaxed text-slate-700 md:text-lg">{children}</div>
							<a
								className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-700 px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 md:w-auto md:self-start"
								href="https://docs.google.com/forms/d/e/1FAIpQLScVx7CG6oXcdVyP1IslTwTvrRuQWvbHa9v8WQgwpzuVKklT0Q/viewform?usp=header"
								target="_blank"
								rel="noopener noreferrer"
							>
								Steun dit voorstel
								<span aria-hidden="true">→</span>
							</a>
						</div>
					</article>
				</main>

				<Footer />
			</div>
		</div>
	);
};

export default MoonshotLayout;
