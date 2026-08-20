import { DollarSign, ShoppingCart, TrendingUp, Zap } from 'lucide-react';
import ProjectDetailLayout, { type ProjectDetailProps } from './ProjectDetailLayout';

type Props = Pick<ProjectDetailProps, 'onBack' | 'onNext' | 'nextProject'>;

export default function ProjectAdidas(props: Props) {
  return <ProjectDetailLayout {...props}
    index="02"
    category="Sales analytics"
    badge="Retail performance · Tableau"
    title="Adidas US Sales Analysis"
    subtitle="A multi-view Tableau analysis that turns $61M+ in retail revenue into a clearer picture of product, retailer, region, and channel performance."
    accent="orange"
    stats={[
      { label: 'Total sales', value: '$61.1M', icon: DollarSign },
      { label: 'Total profit', value: '$21.4M', icon: TrendingUp },
      { label: 'Units sold', value: '194K', icon: ShoppingCart },
      { label: 'Average margin', value: '35%', icon: Zap },
    ]}
    gallery={[{ label: 'Executive dashboard', src: '/project-images/adidas-dashboard.webp', alt: 'Adidas US sales Tableau dashboard' }]}
    overview="This Tableau solution transforms Adidas US retail data into an executive-ready analytical framework. It combines retailer benchmarking, regional performance, product mix, and calculated fields to make commercial patterns easier to compare."
    challenge="A broad retail dataset can show what sold without explaining which partner, region, or product combination is creating the strongest commercial result."
    approach="I organized the analysis around retailer, region, product category, and time. Tableau LOD expressions and calculated fields support comparable views instead of isolated totals, making the dashboard useful for performance review."
    outcome="The resulting dashboard clarifies channel contribution, margin patterns, and regional gaps so commercial teams can move from a sales total to a more specific performance question."
    objective="Identify high-performing retailers and uncover regional profitability gaps through clear comparative views and dynamic filtering."
    visualDetails={[
      { title: 'Retailer benchmarking', desc: 'Comparative views of Foot Locker, West Gear, and other partners against shared KPIs.' },
      { title: 'Regional heatmaps', desc: 'Geographic distribution of sales density and profit margins across the US.' },
      { title: 'Product mix', desc: 'Performance breakdown across footwear, apparel, and product-level categories.' },
      { title: 'LOD calculations', desc: 'Fixed level-of-detail expressions for more reliable store and retailer comparisons.' },
    ]}
    insights={[
      'West Gear and Foot Locker dominate total revenue contribution across the retailer set.',
      'Strong margin concentration appears in key metropolitan regions.',
      'Profitability varies materially across retail partners, making benchmarking useful for action.',
      'Monthly seasonality shapes how revenue is distributed across the reporting period.',
    ]}
    tech={['Tableau Desktop', 'Tableau Prep', 'LOD expressions', 'Calculated fields', 'Data storytelling']}
    repositoryUrl="https://github.com/YousefYousry/Adidas-US-Sales-Dashboard"
    repositoryLabel="Tableau workbook & analysis"
  />;
}
