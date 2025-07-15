import { useState, useEffect } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-500 ${
      isVisible ? 'opacity-100' : 'opacity-0'
    }`} style={{ background: 'var(--gradient-dark)' }}>
      <div className="floating-particles absolute inset-0" />
      
      <div className="relative flex flex-col items-center space-y-8">
        {/* Logo Animation */}
        <div className="relative">
          <div className="w-32 h-32 rounded-full animate-logo-pulse">
            <img 
              src="/lovable-uploads/5fb0c354-6ee7-4146-820d-3a95c09a1b44.png" 
              alt="PureFlow Logo" 
              className="w-full h-full object-contain animate-float"
            />
          </div>
          
          {/* Ripple Effects */}
          <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-ripple" />
          <div className="absolute inset-0 rounded-full border-2 border-accent/20 animate-ripple" style={{ animationDelay: '0.5s' }} />
          <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-ripple" style={{ animationDelay: '1s' }} />
        </div>

        {/* Welcome Text */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gradient animate-slide-up">
            PureFlow
          </h1>
          <p className="text-xl text-foreground/80 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            Engineered to Hydrate.
          </p>
          <p className="text-xl text-foreground/80 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            Styled to Flex.
          </p>
        </div>

        {/* Loading Animation */}
        <div className="w-64 h-1 bg-muted rounded-full overflow-hidden animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="h-full bg-gradient-to-r from-primary to-accent rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;