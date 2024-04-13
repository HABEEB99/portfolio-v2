"use client";

import { motion } from "framer-motion";

import { ProjectCard, SectionHeader } from "@/components";

import { useSectionInView } from "@/hooks/use-section-in-view";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

interface IProjectProps {
  projects: Array<{
    _id: string;
    title: string;
    description: string;
    type: string;
    projectUrl: string;
    codeUrl: string;
    slug: string;
    imageUrl: string;
  }>;
}

export const ProjectSection: React.FC<IProjectProps> = ({ projects }) => {
  const { ref } = useSectionInView("Projects");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      id="projects"
      className="section"
      ref={ref}
    >
      <SectionHeader
        title="Projects"
        description="What I've worked on so far"
      />

      <Tabs className="w-full md:w-[60vw] mx-auto">
        <TabsList className="w-full md:w-[50%] mx-auto flex items-center justify-center">
          <TabsTrigger value="web">Web Apps</TabsTrigger>
          <TabsTrigger value="mobile">Mobile Apps</TabsTrigger>
          <TabsTrigger value="server">Server Apps</TabsTrigger>
        </TabsList>
        <TabsContent value="web" className="">
          {projects
            .filter((item) => item.type === "web")
            .map((project) => (
              <ProjectCard {...project} />
            ))}
        </TabsContent>
        <TabsContent value="mobile">
          {projects
            .filter((item) => item.type === "mobile")
            .map((project) => (
              <ProjectCard {...project} />
            ))}
        </TabsContent>
        <TabsContent value="server">
          {projects
            .filter((item) => item.type === "server")
            .map((project) => (
              <ProjectCard {...project} />
            ))}
        </TabsContent>
      </Tabs>
    </motion.div>
  );
};
