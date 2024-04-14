import Image from "next/image";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface ISkillCardProps {
  _id: string;
  name: string;
  color: string;
  logo: string;
}

export const SkillCard: React.FC<ISkillCardProps> = ({ name, logo }) => {
  return (
    <Card className="flex flex-col items-center justify-center">
      <CardHeader>
        <CardTitle className="text-sm">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <Image src={logo} alt={name} width={80} height={80} quality={95} />
      </CardContent>
    </Card>
  );
};
