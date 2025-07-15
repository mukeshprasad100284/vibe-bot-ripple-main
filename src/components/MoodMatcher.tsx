import { useState } from 'react';
import { ArrowLeft, Heart, Zap, Cloud, Target, Sparkles, Coffee, Palette } from 'lucide-react';

interface MoodMatcherProps {
  onBack: () => void;
}

const MoodMatcher = ({ onBack }: MoodMatcherProps) => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [customMood, setCustomMood] = useState('');
  const [moodResponse, setMoodResponse] = useState<string | null>(null);
  const [moodColor, setMoodColor] = useState('#00ffff');
  const [isLoading, setIsLoading] = useState(false);

  const API_KEY = '96431dc4150727172b052fd68445ff01a4fe2f20df15ae77d62e526e1acd8324';

  const predefinedMoods = [
    { id: 'chill', name: 'Chill', icon: '😎', color: '#4facfe' },
    { id: 'hyped', name: 'Hyped', icon: '🔥', color: '#ff6b6b' },
    { id: 'thoughtful', name: 'Thoughtful', icon: '💭', color: '#a8e6cf' },
    { id: 'meh', name: 'Meh', icon: '🌧', color: '#dda0dd' },
    { id: 'focused', name: 'Focused', icon: '🎯', color: '#ffd93d' },
    { id: 'curious', name: 'Curious', icon: '✨', color: '#6c5ce7' }
  ];

  const callMoodAPI = async (moodInput: string) => {
    try {
      setIsLoading(true);
      const response = await fetch('https://api.deepseek.com/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'deepseek-chat',
          messages: [
            {
              role: 'system',
              content: 'You are Flow, a Gen-Z AI mood matcher for PureFlow water bottles. Based on the user\'s mood, give a trendy, supportive, and engaging response under 60 words. Be quirky and use modern slang. Always end with hydration motivation. Be super relatable and authentic.'
            },
            {
              role: 'user',
              content: `My mood is: ${moodInput}. Give me a Flow response that matches my vibe.`
            }
          ],
          temperature: 0.9,
          max_tokens: 120
        })
      });

      if (!response.ok) {
        throw new Error('API call failed');
      }

      const data = await response.json();
      return data.choices[0].message.content;
    } catch (error) {
      console.error('Mood API Error:', error);
      return "Your vibe is giving main character energy! Whatever mood you're in, Flow is here for it. Stay hydrated and keep that energy flowing! 💧✨";
    } finally {
      setIsLoading(false);
    }
  };

  const handleMoodSelect = async (mood: string) => {
    setSelectedMood(mood);
    const selectedMoodData = predefinedMoods.find(m => m.id === mood);
    if (selectedMoodData) {
      setMoodColor(selectedMoodData.color);
    }
    const response = await callMoodAPI(mood);
    setMoodResponse(response);
  };

  const handleCustomMoodSubmit = async () => {
    if (!customMood.trim()) return;
    setSelectedMood('custom');
    const response = await callMoodAPI(customMood);
    setMoodResponse(response);
  };

  const handleMoodRemix = async () => {
    const remixPrompts = [
      "Give me a totally different energy remix",
      "What if I flipped my mood upside down?",
      "Surprise me with an unexpected vibe shift"
    ];
    const randomPrompt = remixPrompts[Math.floor(Math.random() * remixPrompts.length)];
    const response = await callMoodAPI(randomPrompt);
    setMoodResponse(response);
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="floating-particles absolute inset-0" />
      
      {/* Dynamic Background Based on Mood */}
      {selectedMood && (
        <div 
          className="absolute inset-0 opacity-10 transition-all duration-1000"
          style={{
            background: `radial-gradient(circle at center, ${moodColor}20 0%, transparent 70%)`
          }}
        />
      )}
      
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
          <h1 className="text-xl font-bold text-gradient">Mood Matcher</h1>
        </div>
        
        <Heart className="w-6 h-6 text-primary animate-glow-pulse" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-6 pt-8">
        {!moodResponse ? (
          <>
            {/* Mood Detection Panel */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto mb-6 relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-accent animate-aurora-pulse" />
                <div className="absolute inset-2 rounded-full bg-background flex items-center justify-center">
                  <Zap className="w-8 h-8 text-primary animate-float" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-gradient mb-4 animate-slide-up">
                What's your mood today?
              </h2>
              <p className="text-foreground/70 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                Choose or type it out. Flow is syncing to your vibe...
              </p>
            </div>

            {/* Predefined Moods */}
            <div className="max-w-md mx-auto mb-8">
              <div className="grid grid-cols-2 gap-4">
                {predefinedMoods.map((mood, index) => (
                  <button
                    key={mood.id}
                    onClick={() => handleMoodSelect(mood.id)}
                    className="glass-card p-6 rounded-2xl text-center transition-all duration-300 hover:scale-105 ripple-effect group animate-slide-up"
                    style={{ 
                      animationDelay: `${0.4 + index * 0.1}s`,
                      '--mood-color': mood.color
                    } as React.CSSProperties}
                  >
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      {mood.icon}
                    </div>
                    <h3 className="font-semibold text-foreground group-hover:text-gradient transition-all duration-300">
                      {mood.name}
                    </h3>
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Mood Input */}
            <div className="max-w-md mx-auto">
              <div className="glass-card p-6 rounded-2xl animate-slide-up" style={{ animationDelay: '1s' }}>
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                  <Palette className="w-5 h-5 mr-2 text-primary" />
                  Custom Mood
                </h3>
                <div className="flex space-x-3">
                  <input
                    type="text"
                    value={customMood}
                    onChange={(e) => setCustomMood(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleCustomMoodSubmit()}
                    placeholder="Describe your unique vibe..."
                    className="flex-1 bg-muted/20 rounded-xl px-4 py-3 text-foreground placeholder-muted-foreground border border-border/20 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  />
                  <button
                    onClick={handleCustomMoodSubmit}
                    disabled={isLoading}
                    className="px-6 py-3 glow-button rounded-xl font-medium transition-all duration-300 disabled:opacity-50"
                  >
                    {isLoading ? (
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-background rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-background rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-2 h-2 bg-background rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      </div>
                    ) : (
                      'Submit'
                    )}
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          /* Mood Response */
          <div className="max-w-md mx-auto text-center">
            <div className="glass-card p-8 rounded-2xl mb-6 animate-slide-up">
              <div className="w-16 h-16 mx-auto mb-6 relative">
                <div 
                  className="absolute inset-0 rounded-full animate-aurora-pulse"
                  style={{ backgroundColor: moodColor + '40' }}
                />
                <div className="absolute inset-2 rounded-full bg-background flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-primary animate-float" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gradient mb-4">Flow Sync Complete</h3>
              {isLoading ? (
                <div className="flex justify-center space-x-1">
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
              ) : (
                <p className="text-foreground/90 leading-relaxed">{moodResponse}</p>
              )}
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <button
                onClick={handleMoodRemix}
                disabled={isLoading}
                className="w-full glass-card p-4 rounded-xl transition-all duration-300 hover:neon-border group disabled:opacity-50"
              >
                <div className="flex items-center justify-center space-x-3">
                  <Coffee className="w-5 h-5 text-primary group-hover:animate-spin" />
                  <span className="font-medium text-foreground">Remix My Mood</span>
                </div>
              </button>
              
              <button
                onClick={() => {
                  setSelectedMood(null);
                  setMoodResponse(null);
                  setCustomMood('');
                }}
                className="w-full glow-button p-4 rounded-xl font-medium"
              >
                Try Another Mood
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MoodMatcher;