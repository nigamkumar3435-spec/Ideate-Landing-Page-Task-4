import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import { OpeningSequence } from './components/OpeningSequence';
import { CustomCursor, type CursorState } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LiveFestivalBar } from './components/LiveFestivalBar';
import { StatsSection } from './components/StatsSection';
import { WhatIsTechfest } from './components/WhatIsTechfest';
import { ExploreGrid } from './components/ExploreGrid';
import { CompetitionsSection } from './components/CompetitionsSection';
import { RobowarsSection } from './components/RobowarsSection';
import { WorkshopsSection } from './components/WorkshopsSection';
import { ExhibitionsSection } from './components/ExhibitionsSection';
import { LecturesSection } from './components/LecturesSection';
import { TechnoholixSection } from './components/TechnoholixSection';
import { OzoneSection } from './components/OzoneSection';
import { ZonalsMap } from './components/ZonalsMap';
import { GlobalReachMap } from './components/GlobalReachMap';
import { Timeline30 } from './components/Timeline30';
import { Giant30Section } from './components/Giant30Section';
import { AccommodationSection } from './components/AccommodationSection';
import { ScheduleSection } from './components/ScheduleSection';
import { CampusMapSection } from './components/CampusMapSection';
import { SocialWall } from './components/SocialWall';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { RegistrationModal } from './components/RegistrationModal';
import { AftermovieModal } from './components/AftermovieModal';

export const App: React.FC = () => {
  const [showIntro, setShowIntro] = useState<boolean>(true);
  const [cursorState] = useState<CursorState>('DEFAULT');
  const [cursorText] = useState<string>('');

  // Modals state
  const [isRegOpen, setIsRegOpen] = useState<boolean>(false);
  const [regEventName, setRegEventName] = useState<string>('');

  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
  const [videoTitle, setVideoTitle] = useState<string>('');

  const handleOpenRegistration = (eventName?: string) => {
    setRegEventName(eventName || 'General Festival Delegate Pass');
    setIsRegOpen(true);
  };

  const handlePlayVideo = (title: string) => {
    setVideoTitle(title);
    setIsVideoOpen(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#050505] min-h-screen text-white relative font-sans">
      {/* Opening Typographic Intro Sequence */}
      <AnimatePresence>
        {showIntro && (
          <OpeningSequence onComplete={() => setShowIntro(false)} />
        )}
      </AnimatePresence>

      {/* Custom Mouse Cursor */}
      <CustomCursor cursorState={cursorState} cursorText={cursorText} />

      {/* Main Website Structure */}
      {!showIntro && (
        <>
          <Navbar onRegisterClick={() => handleOpenRegistration()} />

          <main className="w-full">
            <Hero
              onRegisterClick={() => handleOpenRegistration()}
              onExploreClick={() => scrollToSection('#explore')}
            />

            <LiveFestivalBar />

            <StatsSection />

            <WhatIsTechfest />

            <ExploreGrid />

            <CompetitionsSection onRegisterClick={handleOpenRegistration} />

            <RobowarsSection
              onRegisterClick={handleOpenRegistration}
              onPlayVideo={handlePlayVideo}
            />

            <WorkshopsSection onRegisterClick={handleOpenRegistration} />

            <ExhibitionsSection />

            <LecturesSection />

            <TechnoholixSection onPlayVideo={handlePlayVideo} />

            <OzoneSection />

            <ZonalsMap />

            <GlobalReachMap />

            <Timeline30 />

            <Giant30Section />

            <AccommodationSection onRegisterClick={handleOpenRegistration} />

            <ScheduleSection />

            <CampusMapSection />

            <SocialWall />

            <CTASection
              onRegisterClick={() => handleOpenRegistration()}
              onExploreClick={() => scrollToSection('#explore')}
            />
          </main>

          <Footer />

          {/* Interactive Modals */}
          <RegistrationModal
            isOpen={isRegOpen}
            preselectedEvent={regEventName}
            onClose={() => setIsRegOpen(false)}
          />

          <AftermovieModal
            isOpen={isVideoOpen}
            videoTitle={videoTitle}
            onClose={() => setIsVideoOpen(false)}
          />
        </>
      )}
    </div>
  );
};

export default App;
