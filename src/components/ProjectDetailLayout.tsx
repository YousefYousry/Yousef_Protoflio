import { ArrowLeft, ArrowRight, BarChart3, CheckCircle2, LayoutDashboard, Target } from 'lucide-react';
import { useState, type ComponentType } from 'react';
import { Button } from './ui/button';

export type ProjectDetailStat = {
  label: string;
  value: string;
  icon: ComponentType<{ className?: string }>;
};

export type ProjectDetailGalleryItem = {
  label: string;
  src: string;
  alt: string;
};

export type ProjectDetailProps = {
  onBack: () => void;
  onNext?: () => void;
  nextProject?: { number: string; title: string; category: string };
  index: string;
  category: string;
  badge: string;
  title: string;
  subtitle: string;
  stats: ProjectDetailStat[];
  gallery: ProjectDetailGalleryItem[];
  overview: string;
  challenge: string;
  approach: string;
  outcome: string;
  objective: string;
  visualDetails: { title: string; desc: string }[];
  insights: string[];
  tech: string[];
  accent?: 'cyan' | 'violet' | 'orange' | 'emerald';
};

export default function ProjectDetailLayout({
  onBack,
  onNext,
  nextProject,
  index,
  category,
  badge,
  title,
  subtitle,
  stats,
  gallery,
  overview,
  challenge,
  approach,
  outcome,
  objective,
  visualDetails,
  insights,
  tech,
  accent = 'cyan',
}: ProjectDetailProps) {
  const [activeImage, setActiveImage] = useState(0);
  const currentImage = gallery[activeImage] ?? gallery[0];

  return (
    <article className={`detail-page detail-theme-${accent}`}>
      <div className="detail-topbar">
        <Button variant="ghost" onClick={onBack} className="detail-back-button">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to selected work
        </Button>
        <span className="detail-index">Case study / {index}</span>
      </div>

      <section className="detail-hero">
        <div className="detail-hero-copy">
          <div className="detail-label-row"><span className="detail-number">{index}</span><span>{category}</span></div>
          <p className="detail-badge">{badge}</p>
          <h1>{title}</h1>
          <p className="detail-subtitle">{subtitle}</p>
          <div className="detail-meta-row"><span>Role <strong>Data analyst / BI developer</strong></span><span>Focus <strong>Decision-ready reporting</strong></span></div>
        </div>
        <div className="detail-hero-visual">
          <div className="detail-image-frame"><img key={currentImage.src} src={currentImage.src} alt={currentImage.alt} loading="eager" decoding="async" /></div>
          {gallery.length > 1 && <div className="detail-gallery-tabs" role="tablist" aria-label={`${title} dashboard views`}>{gallery.map((item, i) => <button key={item.label} role="tab" aria-selected={activeImage === i} className={activeImage === i ? 'detail-gallery-tab active' : 'detail-gallery-tab'} onClick={() => setActiveImage(i)}>{String(i + 1).padStart(2, '0')} {item.label}</button>)}</div>}
          <p className="detail-image-caption">{currentImage.label} · Dashboard preview</p>
        </div>
      </section>

      <section className="detail-stats" aria-label={`${title} project metrics`}>
        {stats.map(({ label, value, icon: Icon }) => <div className="detail-stat" key={label}><Icon className="detail-stat-icon" /><strong>{value}</strong><span>{label}</span></div>)}
      </section>

      <section className="detail-story-grid">
        <div className="detail-main-column">
          <div className="detail-panel detail-overview-panel"><div className="detail-panel-heading"><LayoutDashboard /><span>Project overview</span></div><p>{overview}</p><div className="detail-tech-list">{tech.map((item) => <span key={item}>{item}</span>)}</div></div>
          <div className="detail-narrative-grid"><div className="detail-narrative-card"><span className="detail-card-number">01 / Challenge</span><p>{challenge}</p></div><div className="detail-narrative-card"><span className="detail-card-number">02 / Approach</span><p>{approach}</p></div><div className="detail-narrative-card detail-narrative-card-accent"><span className="detail-card-number">03 / Outcome</span><p>{outcome}</p></div></div>
          <div className="detail-section-heading"><span>How the dashboard works</span><p>The analytical views were shaped around the questions that matter most to the audience.</p></div>
          <div className="detail-visual-grid">{visualDetails.map((item, i) => <div className="detail-visual-card" key={item.title}><span>{String(i + 1).padStart(2, '0')}</span><div className="detail-visual-icon"><BarChart3 /></div><strong>{item.title}</strong><p>{item.desc}</p></div>)}</div>
        </div>
        <aside className="detail-side-column">
          <div className="detail-panel detail-objective-panel"><div className="detail-panel-heading"><Target /><span>Strategic objective</span></div><p>{objective}</p></div>
          <div className="detail-panel detail-insights-panel"><div className="detail-panel-heading"><CheckCircle2 /><span>Key findings</span></div><div className="detail-insight-list">{insights.map((insight, i) => <div className="detail-insight" key={insight}><span>{String(i + 1).padStart(2, '0')}</span><p>{insight}</p></div>)}</div></div>
        </aside>
      </section>

      <section className="detail-next-project"><div><span className="detail-label-row">Continue exploring</span><strong>{nextProject ? `${nextProject.number} / ${nextProject.title}` : 'More analytics work'}</strong><small>{nextProject?.category ?? 'Selected work'}</small></div>{nextProject && onNext && <button onClick={onNext} aria-label={`Open next project: ${nextProject.title}`}><ArrowRight /></button>}</section>
    </article>
  );
}
