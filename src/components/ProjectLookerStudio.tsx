import { Database, Target, Users, Zap } from 'lucide-react';
import ProjectDetailLayout, { type ProjectDetailProps } from './ProjectDetailLayout';

type Props = Pick<ProjectDetailProps, 'onBack' | 'onNext' | 'nextProject'>;

export default function ProjectLookerStudio(props: Props) {
  return <ProjectDetailLayout {...props}
    index="04"
    category="Business intelligence"
    badge="Narrative analytics · Looker Studio"
    title="Game of Thrones Analysis"
    subtitle="A visual exploration across 73 episodes and eight seasons, designed to connect character arcs, audience response, and narrative weight."
    accent="violet"
    stats={[
      { label: 'Houses explored', value: '20', icon: Target },
      { label: 'Episodes analyzed', value: '73', icon: Database },
      { label: 'Average IMDb', value: '8.74', icon: Zap },
      { label: 'Total viewers', value: '470.6M', icon: Users },
    ]}
    gallery={[{ label: 'Narrative overview', src: '/project-images/game-of-thrones-dashboard.webp', alt: 'Game of Thrones narrative analytics dashboard' }]}
    overview="This Looker Studio analysis turns a rich entertainment dataset into an explorable narrative. The dashboard brings episode, season, character, house, screen-time, viewer, and rating dimensions together so users can compare the story from multiple angles."
    challenge="A complex narrative dataset can become difficult to interpret when character, episode, audience, and rating measures are viewed separately. The challenge was to make those relationships discoverable without overwhelming the viewer."
    approach="I organized the experience around narrative questions: who carries the story, where audience response changes, how fatalities are distributed, and whether viewership and ratings move together. Filters and comparison views keep the exploration focused."
    outcome="The result makes a large multi-season dataset legible as a story, exposing the contrast between peak Season 8 viewership and falling ratings while keeping character and house comparisons accessible."
    objective="Correlate character screen time, survival patterns, audience response, and ratings to reveal how narrative weight changes across the series."
    visualDetails={[
      { title: 'Sentiment analysis', desc: 'A comparison between script tone, episode context, and IMDb ratings.' },
      { title: 'Fatality tracking', desc: 'Deaths explored by house, season, and narrative context for a sharper view of impact.' },
      { title: 'Screen-time weight', desc: 'Lead-character presence compared with narrative importance across the story.' },
      { title: 'Viewership trends', desc: 'Audience growth from Season 1 through the finale, shown alongside ratings.' },
    ]}
    insights={[
      'Season 8 reached peak viewership while IMDb ratings dropped sharply.',
      'A roughly 50% fatality rate remains a defining pattern across the series.',
      'Tyrion Lannister holds the highest narrative screen-time weight in the analysis.',
      'The Night’s Watch recorded the highest total character deaths.',
    ]}
    tech={['Looker Studio', 'Data blending', 'Calculated fields', 'Interactive filters', 'Visual storytelling']}
  />;
}
