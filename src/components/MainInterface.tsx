import { useState } from 'react';
import { MessageCircle, Zap, RotateCcw, MessageSquare, User } from 'lucide-react';

interface MainInterfaceProps {
  onNavigate: (section: string) => void;
}

const MainInterface = ({ onNavigate }: MainInterfaceProps) => {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  const buttons = [
    {
      id: 'chat',
      title: 'Chat & Vibe with Flow',
      icon: MessageCircle,
      description: 'Multilingual AI conversations',
      color: 'from-primary to-primary-glow'
    },
    {
      id: 'mood',
      title: 'Mood Matcher',
      icon: Zap,
      description: 'Sync your vibe with Flow',
      color: 'from-accent to-blue-400'
    },
    {
      id: 'spin',
      title: 'Spin to Win',
      icon: RotateCcw,
      description: 'Weekly rewards & features',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'feedback',
      title: 'Feedback Tracker',
      icon: MessageSquare,
      description: 'Share your Flow experience',
      color: 'from-green-400 to-emerald-500'
    },
    {
      id: 'creator',
      title: 'Know the Creator',
      icon: User,
      description: 'Meet Ayushman & the vision',
      color: 'from-orange-400 to-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="floating-particles absolute inset-0" />
      
      {/* Header */}
      <div className="relative z-10 text-center pt-8 pb-6">
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-primary/30 animate-aurora-pulse shadow-[0_0_40px_hsl(var(--primary)/0.3)]">
            <img 
              src="/lovable-uploads/5fb0c354-6ee7-4146-820d-3a95c09a1b44.png" 
              alt="PureFlow Logo" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
        
        <h1 className="text-5xl font-bold text-gradient mb-4 animate-slide-up">
          WELCOME TO
        </h1>
        <h2 className="text-6xl font-bold text-gradient mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          FLOW ZONE
        </h2>
        
        <p className="text-xl text-foreground/80 mb-2 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          Engineered to Hydrate.
        </p>
        <p className="text-xl text-foreground/80 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          Styled to Flex.
        </p>
      </div>

      {/* Main Menu */}
      <div className="relative z-10 px-6 pb-8">
        <div className="max-w-md mx-auto space-y-4">
          {buttons.map((button, index) => {
            const Icon = button.icon;
            const isHovered = hoveredButton === button.id;
            
            return (
              <button
                key={button.id}
                onClick={() => onNavigate(button.id)}
                onMouseEnter={() => setHoveredButton(button.id)}
                onMouseLeave={() => setHoveredButton(null)}
                className={`
                  w-full glass-card rounded-2xl p-6 text-left 
                  transition-all duration-300 hover:scale-105 
                  ripple-effect group animate-slide-up
                  ${isHovered ? 'neon-border' : ''}
                `}
                style={{ 
                  animationDelay: `${0.8 + index * 0.1}s`,
                  background: isHovered ? `linear-gradient(135deg, ${button.color.replace('from-', 'hsl(var(--primary) / 0.1)').replace('to-', 'hsl(var(--accent) / 0.1)')})` : undefined
                }}
              >
                <div className="flex items-center space-x-4">
                  <div className={`
                    w-12 h-12 rounded-full flex items-center justify-center
                    bg-gradient-to-r ${button.color} 
                    transition-all duration-300 group-hover:scale-110
                    ${isHovered ? 'animate-glow-pulse' : ''}
                  `}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-gradient transition-all duration-300">
                      {button.title}
                    </h3>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-all duration-300">
                      {button.description}
                    </p>
                  </div>
                  
                  <div className={`
                    w-3 h-3 rounded-full bg-primary 
                    transition-all duration-300
                    ${isHovered ? 'animate-aurora-pulse scale-150' : 'opacity-50'}
                  `} />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Bottom Branding */}
      <div className="relative z-10 text-center pb-6">
        <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 rounded-full">
          <div className="w-6 h-6 rounded-full overflow-hidden ring-1 ring-primary/20">
            <img 
              src="/lovable-uploads/5fb0c354-6ee7-4146-820d-3a95c09a1b44.png" 
              alt="PureFlow" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <span className="text-sm text-foreground/70">Powered by PureFlow AI</span>
        </div>
      </div>
    </div>
  );
};

export default MainInterface;