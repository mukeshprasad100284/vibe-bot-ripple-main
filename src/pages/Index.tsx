import { useState } from 'react';
import SplashScreen from '@/components/SplashScreen';
import MainInterface from '@/components/MainInterface';
import ChatInterface from '@/components/ChatInterface';
import MoodMatcher from '@/components/MoodMatcher';
import SpinToWin from '@/components/SpinToWin';
import FeedbackTracker from '@/components/FeedbackTracker';
import CreatorProfile from '@/components/CreatorProfile';

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [currentSection, setCurrentSection] = useState<string | null>(null);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  const handleNavigate = (section: string) => {
    setCurrentSection(section);
  };

  const handleBack = () => {
    setCurrentSection(null);
  };

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  switch (currentSection) {
    case 'chat':
      return <ChatInterface onBack={handleBack} />;
    case 'mood':
      return <MoodMatcher onBack={handleBack} />;
    case 'spin':
      return <SpinToWin onBack={handleBack} />;
    case 'feedback':
      return <FeedbackTracker onBack={handleBack} />;
    case 'creator':
      return <CreatorProfile onBack={handleBack} />;
    default:
      return <MainInterface onNavigate={handleNavigate} />;
  }
};

export default Index;
