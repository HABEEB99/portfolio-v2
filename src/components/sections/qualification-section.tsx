"use client";

import { motion } from "framer-motion";

import { ExperienceCard, SectionHeader } from "@/components";

import { useSectionInView } from "@/hooks/use-section-in-view";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EducationCard } from "@/components/cards/education-card";
import { Item } from "@radix-ui/react-dropdown-menu";

interface IQualificationProps {
  qualification: {
    _id: string;

    experience: Array<{
      duties: Array<string>;
      date: string;
      role: string;
      techStacks: Array<string>;
      _type: string;
      company: string;
      location: string;
      _key: string;
    }>;

    education: Array<{
      institution: string;
      topics: Array<string>;
      _type: string;
      course: string;
      _key: String;
      date: String;
    }>;
  };
}

export const QualificationSection: React.FC<IQualificationProps> = ({
  qualification: { education, experience, _id },
}) => {
  const { ref } = useSectionInView("Qualification");

  console.log("edu", education);
  console.log("exp", experience);

  return (
    <motion.div id="qualification" className="section" ref={ref}>
      <SectionHeader title="Qualification" description="Qualification" />

      <Tabs defaultValue="experience" className=" w-full md:w-[80vw] my-8">
        <TabsList>
          <TabsTrigger value="experience">Work Experience</TabsTrigger>
          <TabsTrigger value="education">Educational Background</TabsTrigger>
        </TabsList>
        <TabsContent value="experience">
          <ul>
            {experience?.map((item, idx) => (
              <li key={idx}>
                <ExperienceCard {...item} />
              </li>
            ))}
          </ul>
        </TabsContent>
        <TabsContent value="education">
          <ul>
            {education?.map((Item, idx) => (
              <li key={idx}>
                <EducationCard {...Item} />
              </li>
            ))}
          </ul>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
};
