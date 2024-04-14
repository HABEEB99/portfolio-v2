"use client";

import { SectionHeader, SkillCard } from "@/components";

import { motion } from "framer-motion";

import { useSectionInView } from "@/hooks/use-section-in-view";

interface ISkillsProp {
  skills: Array<{
    _id: string;
    name: string;
    color: string;
    logo: string;
  }>;
}

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 110 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.07 * index },
  }),
};

export const SkillsSection: React.FC<ISkillsProp> = ({ skills }) => {
  const { ref } = useSectionInView("Skills");

  return (
    <div id="skills" className="section" ref={ref}>
      <SectionHeader title="Skills" description="My areas of expertise" />

      <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 my-8">
        {skills.map((skill, index) => (
          <motion.li
            key={skill._id}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            custom={index}
          >
            <SkillCard {...skill} />
          </motion.li>
        ))}
      </ul>
    </div>
  );
};
