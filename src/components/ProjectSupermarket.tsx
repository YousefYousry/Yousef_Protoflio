import { Box, Globe, TrendingUp, Zap } from 'lucide-react';
import ProjectDetailLayout, { type ProjectDetailProps } from './ProjectDetailLayout';

type Props = Pick<ProjectDetailProps, 'onBack' | 'onNext' | 'nextProject'>;

export default function ProjectSupermarket(props: Props) {
  return <ProjectDetailLayout {...props}
    index="03"
    category="Supply chain analytics"
    badge="Global sales intelligence · Power BI"
    title="Global Sales Analysis"
    subtitle="A Power BI reporting system that turns global retail and supply-chain data into visibility across markets, products, orders, and revenue seasonality."
    accent="emerald"
    stats={[
      { label: 'Total revenue', value: '$4.68M', icon: TrendingUp },
      { label: 'Total orders', value: '147', icon: Box },
      { label: 'Average deal size', value: '$31.8K', icon: Zap },
      { label: 'Global markets', value: '18', icon: Globe },
    ]}
    gallery={[{ label: 'Global overview', src: '/project-images/supermarket-dashboard.webp', alt: 'Global sales and supply-chain Power BI dashboard' }]}
    overview="This Power BI solution transforms fragmented sales data into a cohesive analytical ecosystem. A structured data model and star schema create end-to-end visibility into order lifecycles, product mix, territory performance, and revenue seasonality."
    challenge="Global sales reporting can become a collection of disconnected totals, making it hard to understand how territory, product, order status, and timing combine to affect performance."
    approach="I shaped the model around orders, products, territories, and time, then built views for regional sales, fulfillment, product mix, and monthly revenue. The goal was to make the path from an order-level detail to a management-level pattern easy to follow."
    outcome="The dashboard surfaces portfolio concentration, territory differences, fulfillment performance, and the timing of revenue peaks in one view that supports both operational and commercial questions."
    objective="Develop a scalable reporting framework to monitor order fulfillment and identify profitability gaps across markets and product lines."
    visualDetails={[
      { title: 'Regional sales map', desc: 'Revenue distribution by territory and country for a fast view of market concentration.' },
      { title: 'Fulfillment funnel', desc: 'Order status tracking from entry through delivery to expose operational drop-off.' },
      { title: 'Product mix analysis', desc: 'Sales performance by category and MSRP to understand portfolio contribution.' },
      { title: 'Monthly revenue trend', desc: 'Time-series analysis that reveals peaks, seasonality, and planning signals.' },
    ]}
    insights={[
      'Classic Cars dominate the portfolio, generating more than 40% of total revenue.',
      'EMEA shows the strongest sales density compared with APAC and North America.',
      'More than 90% of orders were successfully shipped, creating a strong fulfillment baseline.',
      'Medium-sized deals are a consistent driver of cash flow across the portfolio.',
    ]}
    tech={['Power BI', 'DAX', 'Power Query', 'Data modeling', 'Star schema']}
    repositoryUrl="https://github.com/YousefYousry/Sales-Dashboard"
    repositoryLabel="Dataset & Power BI file"
  />;
}
