interface ISectionHeader {
  title: string;
  description: string;
}

export const SectionHeader: React.FC<ISectionHeader> = ({
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-center justify-center pt-16">
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-xs text-muted-foreground">{description}</p>
    </div>
  );
};
