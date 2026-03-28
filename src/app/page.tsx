import { AboutSection } from "@/components/portfolio/about-section";
import { ClientWebsitesSection } from "@/components/portfolio/client-websites-section";
import { ContactSection } from "@/components/portfolio/contact-section";
import { ExperienceSection } from "@/components/portfolio/experience-section";
import { FooterSection } from "@/components/portfolio/footer-section";
import { Hero } from "@/components/portfolio/hero";
import { MobileAppsSection } from "@/components/portfolio/mobile-apps-section";
import { Navbar } from "@/components/portfolio/navbar";
import { SectionDivider } from "@/components/portfolio/section-divider";
import { SkillsSection } from "@/components/portfolio/skills-section";
import { ToolsSection } from "@/components/portfolio/tools-section";
import { WebApplicationsSection } from "@/components/portfolio/web-applications-section";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SectionDivider />
        <AboutSection />
        <SectionDivider />
        <SkillsSection />
        <SectionDivider />
        <ExperienceSection />
        <SectionDivider />
        <MobileAppsSection />
        <SectionDivider />
        <WebApplicationsSection />
        <SectionDivider />
        <ClientWebsitesSection />
        <SectionDivider />
        <ToolsSection />
        <SectionDivider />
        <ContactSection />
      </main>
      <FooterSection />
    </>
  );
}
