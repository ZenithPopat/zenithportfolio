import NavBarMain from "./components/navbar/NavBarMain";
import HeroMain from "./components/heroSection/heroMain";
import SubHeroSection from "./components/heroSection/SubHeroSection";
import AboutMeMain from "./components/aboutMeSection/AboutMeMain";
import HelperSection from "./components/HelperSection";
import SkillsMain from "./components/skillsSection/SkillsMain";
import SubSkills from "./components/skillsSection/SubSkills";
import ExperienceMain from "./components/experienceSection/ExperienceMain";
import ProjectsMain from "./components/projectSection/ProjectsMain";
import ContactMeMain from "./components/contactMe/ContactMeMain";
import FooterMain from "./components/footer/FooterMain";
import BackToTopButton from "./components/backToTopButton/backToTopButton";
import WhatsNextMain from "./components/whatsNextSection/WhatsNextMain";

function App() {
  return (
    <main className="font-body">
      <NavBarMain />
      <HeroMain />
      <SubHeroSection />
      <AboutMeMain />
      <SkillsMain />
      <SubSkills />
      <ExperienceMain />
      <div id="projects">
        <ProjectsMain />
      </div>
      <WhatsNextMain />
      <div id="contactMe">
        <ContactMeMain />
      </div>
      <BackToTopButton />
      <FooterMain />
    </main>
  );
}

export default App;
