interface IExperienceCardProps {
  duties: Array<string>;
  date: string;
  role: string;
  techStacks: Array<string>;
  _type: string;
  company: string;
  location: string;
  _key: string;
}

export const ExperienceCard: React.FC<IExperienceCardProps> = () => {
  return <div>ExperienceCard</div>;
};
