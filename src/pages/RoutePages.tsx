import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Home, MapPinned, SearchX, Sparkles } from 'lucide-react';

const sitemapSections = [
  {
    label: 'Home',
    href: '/',
    description: 'Return to the top of the portfolio and the main introduction.',
  },
  {
    label: 'About',
    href: '/#about',
    description: 'A concise summary of background, strengths, and focus areas.',
  },
  {
    label: 'Experience',
    href: '/#experience',
    description: 'Career history, client work, and delivery highlights.',
  },
  {
    label: 'Skills',
    href: '/#skills',
    description: 'Core tools, frameworks, and everyday development capabilities.',
  },
  {
    label: 'Projects',
    href: '/#projects',
    description: 'Selected work with demos, source links, and project details.',
  },
  {
    label: 'Education',
    href: '/#education',
    description: 'Training, learning path, and background context.',
  },
  {
    label: 'Contact',
    href: '/#contact',
    description: 'Ways to get in touch for freelance or collaboration work.',
  },
];

function RouteActionLink({
  label,
  icon: Icon,
  to,
  subtle = false,
}: {
  label: string;
  icon: typeof Home;
  to: string;
  subtle?: boolean;
}) {
  return (
    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
      <Link
        to={to}
        className={`inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-300 ${
          subtle
            ? 'border border-indigo-100 bg-white/80 text-neutral-dark hover:border-primary/20 hover:text-primary'
            : 'bg-primary text-white shadow-lg shadow-primary/20 hover:bg-primary-hover'
        }`}
      >
        <Icon size={16} />
        {label}
      </Link>
    </motion.div>
  );
}

function SectionCard({
  label,
  href,
  description,
}: {
  label: string;
  href: string;
  description: string;
}) {
  return (
    <motion.div whileHover={{ y: -4 }} whileTap={{ scale: 0.99 }}>
      <Link
        to={href}
        className="group block w-full rounded-2xl border border-indigo-100 bg-white/85 p-5 text-left shadow-sm shadow-primary/5 backdrop-blur-sm transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/10"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-primary">
              <Sparkles size={14} />
              {label}
            </div>
            <p className="mt-2 text-sm leading-6 text-neutral-muted">{description}</p>
          </div>
          <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/8 text-primary transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            <ArrowLeft size={16} className="rotate-180" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

function PageShell({
  title,
  eyebrow,
  description,
  children,
}: {
  title: string;
  eyebrow: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-surface-bg text-neutral-dark">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-16 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-white/90 to-transparent" />
      </div>

      <main className="relative z-10 flex min-h-screen w-full items-center px-6 py-16 md:px-10">
        <div className="grid w-full gap-10 lg:items-center">
          <motion.section
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="w-full"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-primary shadow-sm backdrop-blur-sm">
              {eyebrow}
            </div>
            <h1 className="mt-6 text-4xl font-display font-extrabold tracking-tight text-neutral-dark md:text-6xl">
              {title}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-neutral-muted md:text-lg">
              {description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">{children}</div>
          </motion.section>
        </div>
      </main>
    </div>
  );
}

export function SitemapPage() {
  return (
    <PageShell
      eyebrow="Sitemap"
      title="Everything in one place"
      description="This portfolio is built as a focused single-page experience. Use the links below to jump straight to the main sections or return home whenever you want."
    >
      <RouteActionLink label="Home page" icon={Home} to="/" />
     
      <div className="grid w-full gap-4 pt-2 md:grid-cols-2">
        {sitemapSections.map((section) => (
          <SectionCard key={section.label} label={section.label} href={section.href} description={section.description} />
        ))}
      </div>
    </PageShell>
  );
}

export function NotFoundPage() {
  return (
    <PageShell
      eyebrow="404"
      title="Page not found"
      description="The route you requested does not exist. You can return to the homepage, open the sitemap, or use the links below to continue exploring the portfolio."
    >
      <RouteActionLink label="Home page" icon={Home} to="/" />
      <RouteActionLink label="Sitemap" icon={MapPinned} to="/sitemap" subtle />

      <div className="grid w-full gap-4 pt-2 sm:grid-cols-2">
        <SectionCard label="Home" href="/" description="Start over from the main portfolio landing section." />
        <SectionCard
          label="Contact"
          href="/#contact"
          description="Jump straight to the contact section if you want to reach out."
        />
      </div>
    </PageShell>
  );
}
