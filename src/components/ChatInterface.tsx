import { useState, useRef, useEffect } from 'react';
import { ArrowLeft, Send, MessageSquare, Globe } from 'lucide-react';

interface ChatInterfaceProps {
  onBack: () => void;
}

const ChatInterface = ({ onBack }: ChatInterfaceProps) => {
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [messages, setMessages] = useState<Array<{type: 'user' | 'bot', content: string}>>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸', greeting: 'Hey there! Ready to vibe with Flow? Pick an option and let\'s get this conversation flowing!' },
    { code: 'hi', name: 'हिंदी', flag: '🇮🇳', greeting: 'नमस्ते! Flow के साथ vibe करने के लिए तैयार हैं? एक option चुनें और बातचीत शुरू करते हैं!' },
    { code: 'bn', name: 'বাংলা', flag: '🇧🇩', greeting: 'হ্যালো! Flow এর সাথে vibe করতে প্রস্তুত? একটি option বেছে নিন এবং কথোপকথন শুরু করি!' }
  ];

  // Voice welcome message
  const playWelcomeVoice = () => {
    const utterance = new SpeechSynthesisUtterance("Welcome to the Flow Zone");
    utterance.rate = 0.8;
    utterance.pitch = 1.2;
    speechSynthesis.speak(utterance);
  };

  const API_KEY = '96431dc4150727172b052fd68445ff01a4fe2f20df15ae77d62e526e1acd8324';

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const quickOptions = [
    { en: 'Roast Battle Flow 🔥', hi: 'Roast Battle Flow 🔥', bn: 'Roast Battle Flow 🔥' },
    { en: '5-Minute Recipe 🍳', hi: '5 मिनट Recipe 🍳', bn: '৫ মিনিট Recipe 🍳' },
    { en: 'Mood Booster 💫', hi: 'Mood Booster 💫', bn: 'Mood Booster 💫' },
    { en: 'Hydration Reminder 💧', hi: 'पानी की याद दिलाना 💧', bn: 'পানির রিমাইন্ডার 💧' },
    { en: 'Tell Me a Secret 🤫', hi: 'मुझे राज़ बताओ 🤫', bn: 'আমাকে গোপন কথা বলো 🤫' },
    { en: 'Pick My Outfit Vibe ✨', hi: 'मेरा Outfit Vibe चुनो ✨', bn: 'আমার Outfit Vibe বেছে নাও ✨' },
    { en: 'Give Me a Challenge 💪', hi: 'मुझे Challenge दो 💪', bn: 'আমাকে Challenge দাও 💪' },
    { en: 'Drop a Meme 😂', hi: 'Meme सुनाओ 😂', bn: 'Meme বলো 😂' },
    { en: 'Rate My Vibe ⭐', hi: 'मेरी Vibe Rate करो ⭐', bn: 'আমার Vibe Rate করো ⭐' },
    { en: 'Make Me Laugh 😄', hi: 'हंसाओ मुझे 😄', bn: 'আমাকে হাসাও 😄' }
  ];

  const handleLanguageSelect = (language: typeof languages[0]) => {
    setSelectedLanguage(language.code);
    setMessages([{ type: 'bot', content: language.greeting }]);
    playWelcomeVoice();
  };

  const callAPI = async (message: string, languageCode: string) => {
    try {
      setIsLoading(true);
      
      const languageMap = {
        'en': 'English',
        'hi': 'Hindi', 
        'bn': 'Bengali'
      };
      
      const response = await fetch('https://api.together.xyz/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'deepseek-ai/DeepSeek-V3',
          messages: [
            {
              role: 'system',
              content: `You are Flow, a Gen-Z AI assistant for PureFlow water bottles. Be quirky, engaging, and trendy. Always respond in ${languageMap[languageCode as keyof typeof languageMap] || 'English'}. Keep responses under 50 words and match the vibe of the user. Be playful, use modern slang, and always stay hydrated-themed.`
            },
            {
              role: 'user',
              content: message
            }
          ],
          max_tokens: 100
        })
      });

      if (!response.ok) {
        throw new Error('API call failed');
      }

      const data = await response.json();
      return data.choices[0].message.content;
    } catch (error) {
      console.error('API Error:', error);
      const fallbackResponses = {
        en: "Yo! Something's up with my connection right now, but I'm still vibing! Pick another option and let's keep flowing! 💧",
        hi: "यो! अभी मेरे connection में कुछ problem है, पर मैं अभी भी vibe कर रहा हूं! दूसरा option चुनो! 💧",
        bn: "ইয়ো! এখন আমার connection এ কিছু সমস্যা আছে, কিন্তু আমি এখনও vibe করছি! আরেকটা option বেছে নাও! 💧"
      };
      return fallbackResponses[languageCode as keyof typeof fallbackResponses] || fallbackResponses.en;
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickOption = async (option: any) => {
    const optionText = option[selectedLanguage as keyof typeof option] || option.en;
    setMessages(prev => [...prev, { type: 'user', content: optionText }]);
    
    const botResponse = await callAPI(optionText, selectedLanguage!);
    setMessages(prev => [...prev, { type: 'bot', content: botResponse }]);
  };

  if (!selectedLanguage) {
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
            <h1 className="text-xl font-bold text-gradient">Chat & Vibe</h1>
          </div>
          
          <div className="w-10" />
        </div>

        {/* Language Selection */}
        <div className="relative z-10 px-6 pt-8">
          <div className="text-center mb-8">
            <Globe className="w-16 h-16 mx-auto mb-4 text-primary animate-float" />
            <h2 className="text-3xl font-bold text-gradient mb-4">Choose Your Flow Language</h2>
            <p className="text-foreground/70">Select your preferred language to start vibing with Flow</p>
          </div>

          <div className="max-w-md mx-auto space-y-4">
            {languages.map((language, index) => (
              <button
                key={language.code}
                onClick={() => handleLanguageSelect(language)}
                className="w-full glass-card rounded-2xl p-6 text-left transition-all duration-300 hover:scale-105 ripple-effect group animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{language.flag}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-gradient transition-all duration-300">
                      {language.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Chat in {language.name}
                    </p>
                  </div>
                  <div className="w-3 h-3 rounded-full bg-primary opacity-50 group-hover:animate-aurora-pulse group-hover:scale-150 transition-all duration-300" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex flex-col">
      <div className="floating-particles absolute inset-0" />
      
      {/* Header */}
      <div className="relative z-10 flex items-center justify-between p-6 border-b border-border/20">
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
          <div className="text-center">
            <h1 className="text-lg font-bold text-gradient">Flow Chat</h1>
            <p className="text-xs text-muted-foreground">
              {languages.find(l => l.code === selectedLanguage)?.name}
            </p>
          </div>
        </div>
        
        <MessageSquare className="w-6 h-6 text-primary animate-glow-pulse" />
      </div>

      {/* Messages */}
      <div className="flex-1 relative z-10 p-6 overflow-y-auto">
        <div className="space-y-4 mb-6">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} animate-slide-up`}
            >
              {message.type === 'bot' ? (
                <div className="bg-muted/30 rounded-2xl p-4 max-w-[80%] animate-slide-up">
                  <p className="text-foreground">{message.content}</p>
                </div>
              ) : (
                <div className="bg-gradient-to-r from-primary to-accent text-background rounded-2xl p-4 max-w-[80%]">
                  <p>{message.content}</p>
                </div>
              )}
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-muted/30 rounded-2xl p-4">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Advanced Quick Options Grid */}
        <div className="mb-6">
          <p className="text-sm text-muted-foreground mb-4 text-center">⚡ Tap any Flow option to get instant AI vibes ⚡</p>
          <div className="grid grid-cols-2 gap-3">
            {quickOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => handleQuickOption(option)}
                className="glass-card p-4 rounded-xl text-center hover:neon-border transition-all duration-300 group animate-fade-in hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-lg mb-1 group-hover:animate-bounce">
                  {option[selectedLanguage as keyof typeof option]?.split(' ')[0] || option.en.split(' ')[0]}
                </div>
                <div className="text-xs text-foreground/70 group-hover:text-foreground transition-colors">
                  {option[selectedLanguage as keyof typeof option]?.split(' ').slice(1).join(' ') || option.en.split(' ').slice(1).join(' ')}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;