import { useState } from 'react';
import { ArrowLeft, Gift, Star, Instagram, Mail, Calendar } from 'lucide-react';

interface SpinToWinProps {
  onBack: () => void;
}

const SpinToWin = ({ onBack }: SpinToWinProps) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [hasSpun, setHasSpun] = useState(false);
  const [wonReward, setWonReward] = useState<any>(null);
  const [rotation, setRotation] = useState(0);

  const rewards = [
    { id: 1, name: '1-Min Podcast Feature', icon: '🎙️', rarity: 'common', color: '#4facfe' },
    { id: 2, name: 'Fun Task Challenge', icon: '🎯', rarity: 'common', color: '#43e97b' },
    { id: 3, name: '5 Insta Likes', icon: '❤️', rarity: 'uncommon', color: '#fa709a' },
    { id: 4, name: '5 New Follows', icon: '👥', rarity: 'uncommon', color: '#ffecd2' },
    { id: 5, name: '5+ Comments Boost', icon: '💬', rarity: 'rare', color: '#a8edea' },
    { id: 6, name: '20+ Likes Viral', icon: '👍', rarity: 'rare', color: '#fed6e3' },
    { id: 7, name: 'Flow Fact Feature', icon: '📚', rarity: 'legendary', color: '#ff9a9e' },
    { id: 8, name: '2-Day Story Mention', icon: '📢', rarity: 'ultra-rare', color: '#ffecd2' }
  ];

  const handleSpin = () => {
    if (hasSpun || isSpinning) return;

    setIsSpinning(true);
    const spins = 8; // More rotations for dramatic effect
    const finalRotation = rotation + (spins * 360) + Math.random() * 360;
    setRotation(finalRotation);

    setTimeout(() => {
      setIsSpinning(false);
      setHasSpun(true);
      
      // Determine winning reward based on final position
      const segmentAngle = 360 / rewards.length;
      const normalizedAngle = finalRotation % 360;
      const winningIndex = Math.floor((360 - normalizedAngle) / segmentAngle) % rewards.length;
      setWonReward(rewards[winningIndex]);
    }, 5000); // Longer spin duration
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return '#4facfe';
      case 'uncommon': return '#43e97b';
      case 'rare': return '#fa709a';
      case 'legendary': return '#ff9a9e';
      case 'ultra-rare': return '#ffecd2';
      default: return '#4facfe';
    }
  };

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
          <h1 className="text-xl font-bold text-gradient">Spin to Win</h1>
        </div>
        
        <Gift className="w-6 h-6 text-primary animate-glow-pulse" />
      </div>

      {!wonReward ? (
        /* Spin Wheel Interface */
        <div className="relative z-10 px-6 pt-8 text-center">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gradient mb-4 animate-slide-up">
              Spin to Win
            </h2>
            <p className="text-foreground/70 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Tap the Flow Emblem to Start Spinning!
            </p>
            <p className="text-sm text-muted-foreground mt-2 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              1 Spin / Week • Rewards delivered post-spin
            </p>
          </div>

          {/* Enhanced Futuristic Wheel Container */}
          <div className="relative w-80 h-80 mx-auto mb-8">
            {/* Outer Glow Ring */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 blur-xl animate-pulse" />
            
            {/* Wheel Background with Multi-layer Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 via-accent/20 to-secondary/30 animate-aurora-pulse" />
            <div className="absolute inset-2 rounded-full bg-gradient-to-r from-accent/20 to-primary/20 animate-spin-slow opacity-60" />
            <div className="absolute inset-4 rounded-full bg-background/80 backdrop-blur-sm border border-primary/20" />
            
            {/* Enhanced Wheel with Glass Effect */}
            <div 
              className="absolute inset-6 rounded-full transition-transform duration-[5000ms] ease-out backdrop-blur-md border border-primary/30 shadow-[0_0_60px_hsl(var(--primary)/0.5)] animate-pulse"
              style={{ 
                transform: `rotate(${rotation}deg)`,
                background: `conic-gradient(${rewards.map((reward, index) => {
                  const angle = (360 / rewards.length) * index;
                  const nextAngle = (360 / rewards.length) * (index + 1);
                  return `${reward.color}90 ${angle}deg ${nextAngle}deg`;
                }).join(', ')})`
              }}
            >
              {/* Futuristic Segments with Icons */}
              {rewards.map((reward, index) => {
                const angle = (360 / rewards.length) * index;
                return (
                  <div
                    key={reward.id}
                    className="absolute inset-0"
                    style={{
                      transform: `rotate(${angle}deg)`,
                      transformOrigin: 'center'
                    }}
                  >
                    {/* Segment Divider */}
                    <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gradient-to-b from-primary/40 to-transparent transform -translate-x-1/2" />
                    
                    {/* Icon Container */}
                    <div 
                      className="absolute top-6 left-1/2 transform -translate-x-1/2"
                      style={{ transform: `translateX(-50%) rotate(${-angle + 22.5}deg)` }}
                    >
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm border border-white/30 flex items-center justify-center shadow-lg">
                        <span className="text-lg filter drop-shadow-sm">{reward.icon}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Premium Center Button */}
            <button
              onClick={handleSpin}
              disabled={hasSpun || isSpinning}
              className={`absolute inset-0 w-20 h-20 m-auto rounded-full flex items-center justify-center transition-all duration-300 group ${
                hasSpun || isSpinning 
                  ? 'bg-muted/50 cursor-not-allowed opacity-50' 
                  : 'bg-gradient-to-br from-primary via-accent to-secondary shadow-[0_0_30px_hsl(var(--primary)/0.5)] hover:scale-110 hover:shadow-[0_0_50px_hsl(var(--primary)/0.8)]'
              }`}
            >
              {/* Inner Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="w-12 h-12 relative z-10 rounded-full overflow-hidden">
                <img 
                  src="/lovable-uploads/5fb0c354-6ee7-4146-820d-3a95c09a1b44.png" 
                  alt="Spin" 
                  className={`w-full h-full object-cover rounded-full ${!hasSpun && !isSpinning ? 'group-hover:scale-110' : ''} transition-transform duration-300`}
                />
              </div>
            </button>

            {/* Enhanced Pointer with Glow */}
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2">
              <div className="relative">
                <div className="w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-primary drop-shadow-[0_0_10px_hsl(var(--primary)/0.8)]" />
                <div className="absolute top-2 left-1/2 w-1 h-1 bg-primary rounded-full transform -translate-x-1/2 animate-pulse" />
              </div>
            </div>
            
            {/* Rotating Outer Ring */}
            <div className="absolute inset-0 rounded-full border-2 border-primary/10 animate-spin-slow" />
            <div className="absolute inset-8 rounded-full border border-accent/20 animate-spin-slow" style={{ animationDirection: 'reverse' }} />
          </div>

          {/* Spinning Status */}
          {isSpinning && (
            <div className="text-center animate-fade-in">
              <p className="text-xl text-gradient font-bold">Flow's fortune wheel is spinning...</p>
              <div className="w-32 h-1 bg-muted rounded-full mx-auto mt-4 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-primary to-accent rounded-full animate-pulse" />
              </div>
            </div>
          )}

          {/* Follow Reminder */}
          <div className="glass-card p-4 rounded-xl max-w-md mx-auto animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center justify-center space-x-2 text-sm text-foreground/80">
              <Instagram className="w-4 h-4 text-primary" />
              <span>Follow @pureflow48.official to unlock rewards</span>
            </div>
          </div>
        </div>
      ) : (
        /* Win Result Interface */
        <div className="relative z-10 px-6 pt-8 text-center">
          {/* Confetti Effect */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-primary rounded-full animate-bounce"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${1 + Math.random()}s`
                }}
              />
            ))}
          </div>

          <div className="max-w-md mx-auto">
            <div className="glass-card p-8 rounded-2xl mb-6 animate-slide-up">
              <div className="text-6xl mb-4">{wonReward.icon}</div>
              <h3 className="text-2xl font-bold text-gradient mb-4">
                🎉 You Won!
              </h3>
              <h4 className="text-xl font-semibold text-foreground mb-4">
                {wonReward.name}
              </h4>
              <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white mb-6`}
                   style={{ backgroundColor: getRarityColor(wonReward.rarity) }}>
                {wonReward.rarity.toUpperCase()}
              </div>
            </div>

            {/* Claim Instructions */}
            <div className="glass-card p-6 rounded-2xl space-y-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <h4 className="font-bold text-foreground mb-4 flex items-center justify-center">
                <Star className="w-5 h-5 mr-2 text-primary" />
                How to Claim Your Reward
              </h4>
              
              <div className="space-y-3 text-sm text-foreground/80">
                <div className="flex items-center space-x-3">
                  <Instagram className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Follow @pureflow48.official</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Email: pureflow48@gmail.com with screenshot</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Story mention required for top-tier rewards</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4 mt-6">
              <button
                onClick={() => window.open('https://instagram.com/pureflow48.official', '_blank')}
                className="w-full glow-button p-4 rounded-xl font-medium"
              >
                Follow @pureflow48.official
              </button>
              
              <button
                onClick={() => setHasSpun(false)}
                className="w-full glass-card p-4 rounded-xl font-medium hover:neon-border transition-all duration-300"
              >
                Back to Wheel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpinToWin;