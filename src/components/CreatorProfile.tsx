import { useState } from 'react';
import { ArrowLeft, User, Mail, Instagram, Heart, Sparkles, Zap } from 'lucide-react';

interface CreatorProfileProps {
  onBack: () => void;
}

const CreatorProfile = ({ onBack }: CreatorProfileProps) => {
  const [activeSection, setActiveSection] = useState<'user' | 'ayushman'>('user');

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="floating-particles absolute inset-0" />
      
      {/* Header */}
      <div className="relative z-10 flex items-center justify-between p-6">
        <button 
          onClick={onBack}
          className="w-10 h-10 rounded-full glass-card flex items-center justify-center glow-button"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full overflow-hidden ring-2 ring-primary/30 animate-aurora-pulse">
            <img 
              src="/lovable-uploads/5fb0c354-6ee7-4146-820d-3a95c09a1b44.png" 
              alt="PureFlow" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <h1 className="text-xl font-bold text-gradient">Know the Creator</h1>
        </div>
        
        <User className="w-6 h-6 text-primary animate-glow-pulse" />
      </div>

      {/* Section Toggle */}
      <div className="relative z-10 px-6 mb-8">
        <div className="max-w-md mx-auto">
          <div className="glass-card p-2 rounded-2xl flex animate-slide-up">
            <button
              onClick={() => setActiveSection('user')}
              className={`flex-1 p-3 rounded-xl font-medium transition-all duration-300 ${
                activeSection === 'user'
                  ? 'glow-button text-background'
                  : 'text-foreground/70 hover:text-foreground'
              }`}
            >
              You Are the Creator
            </button>
            <button
              onClick={() => setActiveSection('ayushman')}
              className={`flex-1 p-3 rounded-xl font-medium transition-all duration-300 ${
                activeSection === 'ayushman'
                  ? 'glow-button text-background'
                  : 'text-foreground/70 hover:text-foreground'
              }`}
            >
              Meet Ayushman
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-6">
        {activeSection === 'user' ? (
          /* You Are the Creator Section - Enhanced Futuristic */
          <div className="max-w-md mx-auto text-center">
            {/* Holographic Welcome */}
            <div className="mb-8 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-3xl blur-2xl animate-pulse" />
              <div className="relative z-10">
                <div className="w-24 h-24 mx-auto mb-6 relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-secondary animate-aurora-pulse" />
                  <div className="absolute inset-1 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-md" />
                  <div className="absolute inset-3 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center">
                    <Sparkles className="w-10 h-10 text-primary animate-float" />
                  </div>
                  {/* Floating particles around icon */}
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-primary rounded-full animate-ping"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${i * 0.5}s`,
                        animationDuration: '2s'
                      }}
                    />
                  ))}
                </div>
                
                <h2 className="text-4xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent mb-6 animate-slide-up">
                  You Are the Creator
                </h2>
                
                {/* Enhanced Glass Card with Holographic Effect */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <div className="relative glass-card p-8 rounded-2xl mb-6 animate-slide-up border border-primary/20 backdrop-blur-xl" style={{ animationDelay: '0.2s' }}>
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-t-2xl" />
                    <p className="text-foreground/90 leading-relaxed text-lg">
                      "Every ripple you create—every post, every spin, every vibe—powers PureFlow. 
                      This isn't just hydration. It's a movement. And you're shaping it. 
                      You're the creator. The story starts with you."
                    </p>
                    {/* Floating orbs inside card */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-primary/60 rounded-full animate-pulse" />
                    <div className="absolute bottom-4 left-4 w-1 h-1 bg-accent/80 rounded-full animate-bounce" />
                  </div>
                </div>
              </div>
            </div>

            {/* Futuristic Creator Profile Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-conic from-primary via-accent to-secondary rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative glass-card p-6 rounded-2xl mb-6 animate-slide-up border border-gradient-to-r border-primary/30" style={{ animationDelay: '0.4s' }}>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-b-full" />
                <h3 className="text-xl font-bold text-gradient mb-6 text-center">Your Creator Profile</h3>
                
                <div className="space-y-4 text-left">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-primary/10 to-transparent">
                    <span className="text-foreground/70 flex items-center"><div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />Status:</span>
                    <span className="text-primary font-medium">Flow Creator</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-accent/10 to-transparent">
                    <span className="text-foreground/70 flex items-center"><div className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse" />Impact Level:</span>
                    <span className="text-accent font-medium">Ripple Maker</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-secondary/10 to-transparent">
                    <span className="text-foreground/70 flex items-center"><div className="w-2 h-2 bg-secondary rounded-full mr-2 animate-pulse" />Vibe Score:</span>
                    <span className="text-gradient font-bold">∞ Legendary</span>
                  </div>
                </div>
                
                {/* Data visualization bars */}
                <div className="mt-6 space-y-2">
                  <div className="flex justify-between text-xs text-foreground/60">
                    <span>Creator Level</span>
                    <span>MAX</span>
                  </div>
                  <div className="h-2 bg-muted/20 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-accent rounded-full animate-pulse w-full" />
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced CTA Button */}
            <button className="relative w-full mb-4 animate-slide-up group overflow-hidden" style={{ animationDelay: '0.6s' }}>
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary animate-gradient-x" />
              <div className="relative glow-button p-4 rounded-xl font-medium">
                <div className="flex items-center justify-center space-x-2">
                  <Zap className="w-5 h-5 group-hover:animate-spin" />
                  <span>Activate Creator Mode</span>
                  <div className="w-2 h-2 bg-white rounded-full animate-ping" />
                </div>
              </div>
            </button>

            <p className="text-sm text-foreground/60 animate-slide-up" style={{ animationDelay: '0.8s' }}>
              🚀 Unlock mood-based Creator Cards • 📱 Story mentions • ⚡ Exclusive vibe badges
            </p>
          </div>
        ) : (
          /* Meet Ayushman Section */
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-gradient mb-4 animate-slide-up">
                Meet the Original Creator
              </h2>
              <h3 className="text-2xl font-semibold text-foreground animate-slide-up" style={{ animationDelay: '0.2s' }}>
                Ayushman (Age 16)
              </h3>
            </div>

            {/* Creator Story */}
            <div className="glass-card p-8 rounded-2xl mb-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <p className="text-foreground/90 leading-relaxed mb-6">
                "At just 16, Ayushman turned a late-night idea into a cinematic brand. PureFlow was born from curiosity, passion, and a drive to make water feel legendary. While most teens were scrolling, Ayushman was sketching, coding, building. He wasn't waiting for permission—he was creating impact."
              </p>
              
              <div className="w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent mb-6" />
              
              <blockquote className="text-center">
                <p className="text-lg text-gradient font-medium italic mb-4">
                  "I started PureFlow not because I had everything figured out—but because I couldn't wait to build what I believed in. You don't need age to make waves. You need purpose."
                </p>
                <cite className="text-foreground/70 text-sm">— Ayushman, Founder</cite>
              </blockquote>
            </div>

            {/* Creator Details */}
            <div className="glass-card p-6 rounded-2xl mb-6 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <h3 className="text-lg font-bold text-foreground mb-4 flex items-center">
                <User className="w-5 h-5 mr-2 text-primary" />
                Creator Profile
              </h3>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-foreground/70">Name:</span>
                  <span className="text-foreground font-medium">Ayushman</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-foreground/70">Age:</span>
                  <span className="text-foreground font-medium">16</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-foreground/70">Role:</span>
                  <span className="text-foreground font-medium">Founder & Creative Director</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-foreground/70">Vision:</span>
                  <span className="text-foreground font-medium">Make hydration cinematic & Gen-Z</span>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-3 animate-slide-up" style={{ animationDelay: '0.8s' }}>
              <button
                onClick={() => window.open('https://instagram.com/pureflow48.official', '_blank')}
                className="w-full glass-card p-4 rounded-xl hover:neon-border transition-all duration-300 group"
              >
                <div className="flex items-center space-x-3">
                  <Instagram className="w-5 h-5 text-primary group-hover:animate-spin" />
                  <span className="font-medium text-foreground">@pureflow48.official</span>
                </div>
              </button>
              
              <button
                onClick={() => window.open('mailto:pureflow48@gmail.com', '_blank')}
                className="w-full glass-card p-4 rounded-xl hover:neon-border transition-all duration-300 group"
              >
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary group-hover:animate-bounce" />
                  <span className="font-medium text-foreground">pureflow48@gmail.com</span>
                </div>
              </button>
              
              <button
                onClick={() => window.open('mailto:ayushmans627@hotmail.com', '_blank')}
                className="w-full glass-card p-4 rounded-xl hover:neon-border transition-all duration-300 group"
              >
                <div className="flex items-center space-x-3">
                  <Heart className="w-5 h-5 text-primary group-hover:animate-pulse" />
                  <span className="font-medium text-foreground">ayushmans627@hotmail.com</span>
                </div>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreatorProfile;