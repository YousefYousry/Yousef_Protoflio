import { Activity, Clock, DollarSign, Users } from 'lucide-react';
import ProjectDetailLayout, { type ProjectDetailProps } from './ProjectDetailLayout';

type Props = Pick<ProjectDetailProps, 'onBack' | 'onNext' | 'nextProject'>;

export default function ProjectHealthcare(props: Props) {
  return <ProjectDetailLayout {...props}
    index="02"
    category="Healthcare analytics"
    badge="Healthcare analytics · Power BI"
    title="Healthcare Operations & Revenue"
    subtitle="A clinical revenue intelligence system that connects admissions, conditions, insurers, and billing outcomes in one decision-ready view."
    accent="cyan"
    stats={[
      { label: 'Total revenue analyzed', value: '$1Bn', icon: DollarSign },
      { label: 'Admissions connected', value: '40.24K', icon: Users },
      { label: 'Average stay', value: '17.84d', icon: Clock },
      { label: 'Average patient age', value: '48y', icon: Activity },
    ]}
    gallery={[
      { label: 'Overview', src: '/project-images/healthcare-1.webp', alt: 'Healthcare revenue overview dashboard' },
      { label: 'Clinical', src: '/project-images/healthcare-2.webp', alt: 'Healthcare clinical performance dashboard' },
      { label: 'Financial', src: '/project-images/healthcare-3.webp', alt: 'Healthcare financial performance dashboard' },
    ]}
    overview="This Power BI reporting system turns 40K admissions and clinical records into a connected view of operational and financial health. It brings conditions, providers, insurers, billing, and length-of-stay measures into one analytical foundation."
    challenge="Hospital performance data often lives across clinical and financial dimensions, making it difficult to see where operational pressure is affecting revenue cycle performance."
    approach="I structured the model around admissions, conditions, providers, insurers, and billing outcomes, then created DAX measures and focused dashboard views for executive, clinical, and financial questions."
    outcome="The final report makes revenue drivers and capacity-planning signals easier to spot, including the $1Bn revenue scale, cancer as a leading driver, and insurer-level billing concentration."
    objective="Give hospital management a practical way to connect clinical efficiency with revenue-cycle performance and identify the signals that deserve follow-up."
    visualDetails={[
      { title: 'Financial tracking', desc: 'Annual revenue, billing outcomes, and insurer distributions in a focused financial view.' },
      { title: 'Clinical KPIs', desc: 'Admissions, average stay, conditions, and patient profile measures for operational review.' },
      { title: 'Revenue drivers', desc: 'Condition and provider comparisons that reveal where the largest financial contribution comes from.' },
      { title: 'Capacity signals', desc: 'Length-of-stay patterns that support planning conversations around beds and workflow.' },
    ]}
    insights={[
      'Total revenue surpassed the $1Bn mark with strong performance across the reporting period.',
      'Cancer was identified as the primary revenue driver, contributing approximately $448M.',
      'Cigna emerged as the top insurance provider with approximately $244M in total billings.',
      'Patient gender distribution remains balanced at roughly 50.2% male and 49.8% female.',
      'Average length of stay is close to 18 days, creating a useful planning signal for capacity.',
    ]}
    tech={['Power BI', 'DAX', 'Power Query', 'Data modeling', 'Healthcare BI']}
  />;
}
