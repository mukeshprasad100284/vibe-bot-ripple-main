import { useState } from 'react';
import { ArrowLeft, MessageSquare, Star, Send, CheckCircle } from 'lucide-react';

interface FeedbackTrackerProps {
  onBack: () => void;
}

const FeedbackTracker = ({ onBack }: FeedbackTrackerProps) => {
  const [feedback, setFeedback] = useState({
    experience: 0,
    reward: '',
    suggestions: '',
    email: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const experienceOptions = [
    { value: 5, label: 'Absolutely Amazing! 🔥', color: '#43e97b' },
    { value: 4, label: 'Pretty Great! ✨', color: '#4facfe' },
    { value: 3, label: 'Good Vibes 👍', color: '#fa709a' },
    { value: 2, label: 'Could Be Better 🤔', color: '#ffecd2' },
    { value: 1, label: 'Needs Work 😅', color: '#ff9a9e' }
  ];

  const rewardOptions = [
    '1-Minute Podcast Feature',
    'Fun Task Challenge',
    '5 Insta Likes',
    '5 New Follows',
    '5+ Comments Boost',
    '20+ Likes Viral',
    'Flow Fact Feature',
    '2-Day Story Mention',
    'No reward yet'
  ];

  const handleSubmit = () => {
    if (feedback.experience === 0) return;
    
    // Here you would typically send the feedback to your API
    console.log('Feedback submitted:', feedback);
    setSubmitted(true);
  };

  const handleStarClick = (rating: number) => {
    setFeedback(prev => ({ ...prev, experience: rating }));
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background relative overflow-hidden flex items-center justify-center">
        <div className="floating-particles absolute inset-0" />
        
        <div className="relative z-10 text-center max-w-md mx-auto px-6">
          {/* Success Animation */}
          <div className="w-24 h-24 mx-auto mb-8 relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 animate-aurora-pulse" />
            <div className="absolute inset-2 rounded-full bg-background flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-green-400 animate-float" />
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gradient mb-4 animate-slide-up">
            Flow Received! 🌊
          </h2>
          
          <p className="text-foreground/80 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Your feedback is flowing straight to our team. Thanks for helping us improve the Flow experience!
          </p>

          {/* Bonus Opportunity */}
          <div className="glass-card p-6 rounded-2xl mb-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-lg font-bold text-foreground mb-3">Bonus Flow Opportunity! ✨</h3>
            <p className="text-sm text-foreground/70 mb-4">
              Tag @pureflow48.official in your story for a chance at surprise rewards and shoutouts!
            </p>
            <button
              onClick={() => window.open('https://instagram.com/pureflow48.official', '_blank')}
              className="w-full glow-button p-3 rounded-xl font-medium"
            >
              Visit Our Instagram
            </button>
          </div>

          <button
            onClick={onBack}
            className="w-full glass-card p-4 rounded-xl font-medium hover:neon-border transition-all duration-300"
          >
            Back to Flow Zone
          </button>
        </div>
      </div>
    );
  }

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
          <div className="w-8 h-8 rounded-full">
            <img 
              src="/lovable-uploads/5fb0c354-6ee7-4146-820d-3a95c09a1b44.png" 
              alt="PureFlow" 
              className="w-full h-full object-contain animate-logo-pulse"
            />
          </div>
          <h1 className="text-xl font-bold text-gradient">Feedback Tracker</h1>
        </div>
        
        <MessageSquare className="w-6 h-6 text-primary animate-glow-pulse" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-6 pt-8">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gradient mb-4 animate-slide-up">
              Share Your Flow Experience
            </h2>
            <p className="text-foreground/70 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Your thoughts help us make Flow even more legendary
            </p>
          </div>

          <div className="space-y-6">
            {/* Experience Rating */}
            <div className="glass-card p-6 rounded-2xl animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                <Star className="w-5 h-5 mr-2 text-primary" />
                How was your Flow experience?
              </h3>
              
              <div className="space-y-3">
                {experienceOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleStarClick(option.value)}
                    className={`w-full p-4 rounded-xl text-left transition-all duration-300 ${
                      feedback.experience === option.value
                        ? 'neon-border'
                        : 'glass-card hover:bg-muted/20'
                    }`}
                    style={{
                      background: feedback.experience === option.value 
                        ? `linear-gradient(135deg, ${option.color}20, ${option.color}10)`
                        : undefined
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-foreground">{option.label}</span>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < option.value
                                ? 'text-yellow-400 fill-current'
                                : 'text-muted-foreground'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Reward Selection */}
            <div className="glass-card p-6 rounded-2xl animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                What reward did you get?
              </h3>
              
              <select
                value={feedback.reward}
                onChange={(e) => setFeedback(prev => ({ ...prev, reward: e.target.value }))}
                className="w-full bg-muted/20 rounded-xl px-4 py-3 text-foreground border border-border/20 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
              >
                <option value="">Select your reward...</option>
                {rewardOptions.map((reward) => (
                  <option key={reward} value={reward}>{reward}</option>
                ))}
              </select>
            </div>

            {/* Suggestions */}
            <div className="glass-card p-6 rounded-2xl animate-slide-up" style={{ animationDelay: '0.8s' }}>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Ideas to improve the Flow?
              </h3>
              
              <textarea
                value={feedback.suggestions}
                onChange={(e) => setFeedback(prev => ({ ...prev, suggestions: e.target.value }))}
                placeholder="Share your thoughts, ideas, or suggestions..."
                rows={4}
                className="w-full bg-muted/20 rounded-xl px-4 py-3 text-foreground placeholder-muted-foreground border border-border/20 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
              />
            </div>

            {/* Email (Optional) */}
            <div className="glass-card p-6 rounded-2xl animate-slide-up" style={{ animationDelay: '1s' }}>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Email (Optional)
              </h3>
              
              <input
                type="email"
                value={feedback.email}
                onChange={(e) => setFeedback(prev => ({ ...prev, email: e.target.value }))}
                placeholder="your@email.com (for surprise rewards!)"
                className="w-full bg-muted/20 rounded-xl px-4 py-3 text-foreground placeholder-muted-foreground border border-border/20 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
              />
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={feedback.experience === 0}
              className={`w-full p-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center space-x-2 animate-slide-up ${
                feedback.experience === 0
                  ? 'bg-muted/20 text-muted-foreground cursor-not-allowed'
                  : 'glow-button hover:scale-105'
              }`}
              style={{ animationDelay: '1.2s' }}
            >
              <Send className="w-5 h-5" />
              <span>Submit Flow Feedback</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackTracker;