import {
  AboutSection,
  ContactSection,
  Header,
  HeroSection,
  MobileNav,
  ProjectSection,
  QualificationSection,
  SkillsSection,
  Socials,
} from "@/components";

import {
  aboutQuery,
  heroQuery,
  projectQuery,
  qualificationQuery,
  skillQuery,
} from "@/lib/queries";

import client from "@/lib/sanity-client";

const HomePage = async () => {
  const [hero, about, projects, skills, qualification] = await Promise.all([
    client.fetch(heroQuery, {}, { next: { revalidate: 1800 } }),
    client.fetch(aboutQuery, {}, { next: { revalidate: 1800 } }),
    client.fetch(projectQuery, {}, { next: { revalidate: 1800 } }),
    client.fetch(skillQuery, {}, { next: { revalidate: 1800 } }),
    client.fetch(qualificationQuery, {}, { next: { revalidate: 1800 } }),
  ]);

  console.log(qualification);
  console.log(projects);
  return (
    <main
      className="w-full h-screen scroll-smooth snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 !scrollbar-thin 
    !scrollbar-track-transparent !scrollbar-thumb-modal hover:!scrollbar-thumb-btn"
    >
      <Header />

      <Socials />
      <MobileNav />

      <section id="hero" className="snap-start">
        <HeroSection hero={hero[0]} />
      </section>

      <section id="about" className="snap-center">
        <AboutSection about={about[0]} />
      </section>

      <section id="projects" className="snap-center">
        <ProjectSection projects={projects} />
      </section>

      <section id="skills" className="snap-start">
        <SkillsSection skills={skills} />
      </section>

      <section id="qualification" className="snap-start">
        <QualificationSection qualification={qualification} />
      </section>

      <section id="contacts" className="snap-start">
        <ContactSection />
      </section>
    </main>
  );
};

export default HomePage;
