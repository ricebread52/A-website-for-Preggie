import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Play, Pause, Volume2 } from "lucide-react";

const SpecialMessage = () => {
  const navigate = useNavigate();
  const [isTyping, setIsTyping] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [displayedText, setDisplayedText] = useState("");

  const loveMessage = `My dearest Preggie,

  A heartfelt letter from your boy Jeneil. One year ago, you walked into my life and everything changed. You brought colors to my black and white world, melodies to my silence, and warmth to my heart.

  Every sunrise feels like a new adventure with you, every sunset a peaceful end to another beautiful day together. Your laugh is my favorite sound, your smile my greatest treasure.

  In your eyes, I found my home. In your arms, I found my peace. In your heart, I found my forever.

  Thank you for being my partner, my best friend, my everything. Here's to countless more years of love, laughter, and making beautiful memories together.

  You are my today, my tomorrow, and all my tomorrows after that. You are my dream, the only dream I dream of making it into a reality.

  Forever yours,
  Your Love 💖`;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(true);
      typewriterEffect();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const typewriterEffect = () => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < loveMessage.length) {
        setDisplayedText(loveMessage.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
        setIsTyping(false);
      }
    }, 50);
  };

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
    // Note: In a real implementation, you would integrate with an audio player here
  };

  return (
    <div className="min-h-screen py-8 px-4 relative overflow-hidden">
      {/* Blurred Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/lovable-uploads/deed8793-1e43-496c-80d9-6d69daf9c5d4.png")',
          filter: 'blur(15px)',
          transform: 'scale(1.1)'
        }}
      />
      <div className="fixed inset-0 bg-background/30" />
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="font-dancing text-4xl md:text-6xl text-primary mb-4 animate-fade-in-up">
            A Message From My Heart 💕
          </h1>
          
          {/* Music Controls */}
          <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <Button
              onClick={toggleMusic}
              className="glass-effect rounded-full p-3 border-0 hover:scale-110 transition-all duration-300"
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </Button>
            <Volume2 className="w-5 h-5 text-muted-foreground" />
            <span className="font-quicksand text-sm text-muted-foreground">
              {isPlaying ? "Playing our song..." : "Click to play background music"}
            </span>
          </div>
        </div>

        {/* Love Letter */}
        <div className="glass-effect rounded-3xl p-8 md:p-12 mb-8 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <div className="prose prose-lg mx-auto">
            <div 
              className="font-quicksand text-lg md:text-xl leading-relaxed text-foreground whitespace-pre-line"
              style={{ 
                minHeight: '600px',
                fontFamily: 'Quicksand, sans-serif'
              }}
            >
              {displayedText}
              {isTyping && (
                <span className="inline-block w-0.5 h-6 bg-primary ml-1 animate-blink-cursor" />
              )}
            </div>
          </div>
        </div>

        {/* Floating Hearts Effect */}
        {!isTyping && displayedText.length > 0 && (
          <div className="fixed inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute text-2xl opacity-60 animate-floating-hearts"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 6}s`,
                }}
              >
                💝
              </div>
            ))}
          </div>
        )}

        {/* Navigation */}
        {!isTyping && displayedText.length > 0 && (
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '2s' }}>
            <Button
              onClick={() => navigate("/surprise")}
              className="font-quicksand bg-gradient-heart hover:scale-105 transition-all duration-300 rounded-full px-8 py-3 love-glow"
            >
              One More Surprise Awaits... ✨
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SpecialMessage;