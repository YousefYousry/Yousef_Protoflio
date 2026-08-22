import { Activity, Database, Globe2, Users } from 'lucide-react';
import ProjectDetailLayout, { type ProjectDetailProps } from './ProjectDetailLayout';

type Props = Pick<ProjectDetailProps, 'onBack' | 'onNext' | 'nextProject'>;

export default function ProjectFootball(props: Props) {
  return <ProjectDetailLayout {...props}
    index="01"
    category="Football analytics"
    badge="Football analytics · Power BI"
    title="Football Performance Analysis"
    subtitle="A global football intelligence dashboard that connects player performance, market value, clubs, leagues, and coaching context in one interactive Power BI experience."
    accent="emerald"
    stats={[
      { label: 'Players analyzed', value: '16K+', icon: Users },
      { label: 'Clubs covered', value: '1,145', icon: Database },
      { label: 'Coaches mapped', value: '960', icon: Activity },
      { label: 'Leagues represented', value: '30+', icon: Globe2 },
    ]}
    gallery={[
      { label: 'Overview', src: '/project-images/football-overview.webp', alt: 'Football performance overview dashboard with player, team, coach, and market metrics' },
      { label: 'Player analysis', src: '/project-images/football-player-analysis.webp', alt: 'Football player analysis dashboard with rankings and league comparisons' },
      { label: 'Player profile', src: '/project-images/football-player-profile.webp', alt: 'Football player profile dashboard with pitch map, radar chart, and attribute ratings' },
      { label: 'Coach profile', src: '/project-images/football-team-details.webp', alt: 'Football coach profile and team details dashboard with squad, tactics, and manager insights' },
    ]}
    overview="This Power BI dashboard analyzes the EA SPORTS FC dataset across more than 16,000 players, 1,145 clubs, 960 coaches, and 30+ leagues. It combines cleaned player attributes, valuation, wages, club context, league structure, and coaching data into an interactive analytical model."
    challenge="Football data is broad and interconnected, so comparing player performance, market value, clubs, and leagues can become difficult when positions, ratings, and team relationships are not modeled consistently."
    approach="I cleaned and transformed the source data with Power Query, created DAX measures for rankings and segmentation, and structured a 10-table star schema with two bridge tables to resolve many-to-many team and league relationships."
    outcome="The final report makes elite-player comparisons, market concentration, league differences, and team context easier to explore. Custom HTML content adds a color-graded pitch map, while dedicated views keep player, profile, and team questions focused."
    objective="Create a decision-ready football intelligence layer for scouting, squad-cost conversations, player comparison, and market tracking across leagues and clubs."
    visualDetails={[
      { title: 'Player rankings', desc: 'Compare overall rating, potential, value, age group, preferred foot, and league representation with focused filters.' },
      { title: 'Player profile', desc: 'Combine a custom HTML pitch map, radar chart, player information, and 28 detailed attributes in one profile view.' },
      { title: 'Team intelligence', desc: 'Review squad composition, positions, tactical tendencies, manager information, and club context.' },
      { title: 'Market structure', desc: 'Surface value and wage differences across leagues while highlighting concentration among elite clubs.' },
    ]}
    insights={[
      'The football market is highly concentrated across a limited number of elite clubs and leagues.',
      'Imported international players account for a large share of market value in top leagues.',
      'A significant pricing gap exists between players in top leagues and those in lower divisions.',
      'High-potential young players create a clear scouting segment for future squad value.',
      'The model uses two bridge tables to keep team, league, player, and coach relationships reliable across views.',
    ]}
    tech={['Power BI', 'Power Query', 'DAX', 'HTML Content Visual', 'Star schema', 'Bridge tables']}
  />;
}
