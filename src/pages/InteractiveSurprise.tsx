import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { RotateCcw, Heart, Sparkles } from "lucide-react";

const InteractiveSurprise = () => {
  const navigate = useNavigate();
  const [isSpinning, setIsSpinning] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [rotation, setRotation] = useState(0);

  const surpriseMessages = [
    "You are my forever, Preggie 💍",
    "My heart beats only for you 💖",
    "You make every day magical ✨",
    "Together we are unstoppable 🌟",
    "You are my greatest adventure 🌈",
    "In your love, I found myself 💕"
  ];

  const [currentMessage, setCurrentMessage] = useState(surpriseMessages[0]);

  const spinWheel = () => {
    if (isSpinning) return;
    
    setIsSpinning(true);
    setRevealed(false);
    
    const spins = 5 + Math.random() * 5; // 5-10 rotations
    const finalRotation = rotation + (spins * 360);
    setRotation(finalRotation);
    
    // Select random message
    const randomIndex = Math.floor(Math.random() * surpriseMessages.length);
    
    setTimeout(() => {
      setCurrentMessage(surpriseMessages[randomIndex]);
      setIsSpinning(false);
      setRevealed(true);
      setShowConfetti(true);
      
      // Stop confetti after 3 seconds
      setTimeout(() => setShowConfetti(false), 3000);
    }, 3000);
  };

  useEffect(() => {
    // Auto-spin on first load
    const timer = setTimeout(() => {
      spinWheel();
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen py-8 px-4 relative overflow-hidden">
      {/* Confetti Effect */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full animate-confetti"
              style={{
                left: `${Math.random() * 100}%`,
                backgroundColor: `hsl(${340 + Math.random() * 40}, 70%, ${60 + Math.random() * 30}%)`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      )}

      <div className="max-w-4xl mx-auto text-center">
        <h1 className="font-dancing text-4xl md:text-6xl text-primary mb-8 animate-fade-in-up">
          Spin the Love Wheel! 🎡
        </h1>
        
        <p className="font-quicksand text-lg text-muted-foreground mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          Every spin reveals how much you mean to me...
        </p>

        {/* Wheel Container */}
        <div className="relative flex flex-col items-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          {/* Wheel */}
          <div className="relative">
            <div 
              className={`w-64 h-64 md:w-80 md:h-80 rounded-full glass-effect border-4 border-primary/30 flex items-center justify-center transition-transform duration-3000 ease-out ${isSpinning ? '' : 'hover:scale-105'}`}
              style={{ 
                transform: `rotate(${rotation}deg)`,
                background: 'conic-gradient(from 0deg, hsl(340 75% 85%), hsl(280 70% 85%), hsl(320 75% 85%), hsl(350 70% 85%), hsl(290 75% 85%), hsl(340 75% 85%))'
              }}
            >
              <div className="text-center z-10">
                <Heart className="w-12 h-12 md:w-16 md:h-16 text-white mb-2 mx-auto animate-heart-float" fill="currentColor" />
                <span className="font-dancing text-lg md:text-xl text-white font-bold">Love Wheel</span>
              </div>
              
              {/* Wheel sections decoration */}
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-20 bg-white/30"
                  style={{
                    top: '20%',
                    left: '50%',
                    transformOrigin: '50% 100%',
                    transform: `rotate(${i * 60}deg) translateX(-50%)`
                  }}
                />
              ))}
            </div>
            
            {/* Pointer */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
              <div className="w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-primary"></div>
            </div>
          </div>

          {/* Spin Button */}
          <Button
            onClick={spinWheel}
            disabled={isSpinning}
            className={`mt-8 font-quicksand bg-gradient-heart hover:scale-105 transition-all duration-300 rounded-full px-8 py-4 love-glow ${isSpinning ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <RotateCcw className={`w-5 h-5 mr-2 ${isSpinning ? 'animate-spin' : ''}`} />
            {isSpinning ? 'Spinning...' : 'Spin Again!'}
          </Button>
        </div>

        {/* Revealed Message */}
        {revealed && (
          <div className="glass-effect rounded-3xl p-8 md:p-12 mb-8 animate-fade-in-up">
            <Sparkles className="w-12 h-12 text-primary mx-auto mb-4 animate-pulse" />
            <h2 className="font-dancing text-3xl md:text-5xl text-primary mb-4">
              {currentMessage}
            </h2>
            <p className="font-quicksand text-lg text-muted-foreground">
              Every message is true, every word from my heart 💝
            </p>
          </div>
        )}

        {/* Navigation */}
        {revealed && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <Button
              onClick={() => navigate("/")}
              className="font-quicksand bg-gradient-romantic hover:scale-105 transition-all duration-300 rounded-full px-6 py-3"
            >
              Back to Start 💖
            </Button>
            <Button
              onClick={spinWheel}
              className="font-quicksand bg-gradient-heart hover:scale-105 transition-all duration-300 rounded-full px-6 py-3 love-glow"
            >
              Another Spin? ✨
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default InteractiveSurprise;