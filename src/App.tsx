import { useEffect, useState } from 'react';
import { AskPortfolioWidget } from './components/AskPortfolioWidget';
import { AwardsSection } from './components/AwardsSection';
import { ContactSection } from './components/ContactSection';
import { HeroSection } from './components/HeroSection';
import { ProjectDetailPage } from './components/ProjectDetailPage';
import { SiteHeader } from './components/SiteHeader';
import { SkillsSection } from './components/SkillsSection';
import { StrengthsSection } from './components/StrengthsSection';
import { WorksSection } from './components/WorksSection';
import { featuredProjects } from './content/portfolio';

function App() {
  const [activeProjectId, setActiveProjectId] = useState(getProjectIdFromHash);
  const activeProject = featuredProjects.find((project) => project.id === activeProjectId);

  useEffect(() => {
    function handleHashChange() {
      setActiveProjectId(getProjectIdFromHash());
    }

    window.addEventListener('hashchange', handleHashChange);

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    if (activeProject) {
      window.scrollTo({ top: 0 });
    }
  }, [activeProject]);

  return (
    <>
      <a className="skip-link" href="#main-content">
        本文へ移動
      </a>
      <SiteHeader />

      <main id="main-content">
        {activeProject ? (
          <ProjectDetailPage project={activeProject} />
        ) : (
          <>
            <HeroSection />
            <WorksSection />
            <AwardsSection />
            <StrengthsSection />
            <SkillsSection />
            <ContactSection />
          </>
        )}
      </main>
      <AskPortfolioWidget />
    </>
  );
}

function getProjectIdFromHash() {
  const detailPrefix = '#/works/';

  if (!window.location.hash.startsWith(detailPrefix)) {
    return null;
  }

  return decodeURIComponent(window.location.hash.slice(detailPrefix.length));
}

export default App;
