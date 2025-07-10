import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const InteractiveSurprise = () => {
  const navigate = useNavigate();
  const [yesClicked, setYesClicked] = useState(false);
  const [noClickCount, setNoClickCount] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleNoClick = () => {
    setNoClickCount(prev => prev + 1);
  };

  const handleYesClick = () => {
    setYesClicked(true);
    setShowConfetti(true);
    // Stop confetti after 3 seconds
    setTimeout(() => setShowConfetti(false), 3000);
  };

  const getYesButtonSize = () => {
    const baseSize = 'px-8 py-4 text-lg';
    if (noClickCount === 0) return baseSize;
    if (noClickCount < 3) return 'px-12 py-6 text-xl';
    if (noClickCount < 5) return 'px-16 py-8 text-2xl';
    return 'px-20 py-10 text-3xl';
  };

  if (yesClicked) {
    return (
      <div className="min-h-screen py-8 px-4 relative overflow-hidden">
        {/* Blurred Background Image */}
        <div 
          className="fixed inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="1200" height="800" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3ClinearGradient id="grad1" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:hsl(340 60%25 95%25);stop-opacity:1" /%3E%3Cstop offset="100%25" style="stop-color:hsl(280 50%25 90%25);stop-opacity:1" /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width="1200" height="800" fill="url(%23grad1)" /%3E%3Cellipse cx="300" cy="200" rx="150" ry="100" fill="hsl(340 70%25 88%25)" opacity="0.6" /%3E%3Cellipse cx="900" cy="600" rx="200" ry="120" fill="hsl(320 65%25 85%25)" opacity="0.5" /%3E%3Cellipse cx="600" cy="400" rx="100" ry="80" fill="hsl(350 75%25 90%25)" opacity="0.4" /%3E%3C/svg%3E")',
            filter: 'blur(20px)',
            transform: 'scale(1.1)'
          }}
        />
        
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

        <div className="relative z-10 max-w-4xl mx-auto text-center flex items-center justify-center min-h-screen">
          <div className="glass-effect rounded-3xl p-8 md:p-16 animate-fade-in-up">
            <Heart className="w-16 h-16 md:w-24 md:h-24 text-primary mx-auto mb-6 animate-heart-float" fill="currentColor" />
            <h1 className="font-dancing text-4xl md:text-6xl text-primary mb-8">
              I love you so much Preggie 💖
            </h1>
            <p className="font-quicksand text-lg md:text-xl text-muted-foreground mb-8">
              Thank you for saying yes to forever with me 💍
            </p>
            <Button
              onClick={() => navigate("/")}
              className="font-quicksand bg-gradient-romantic hover:scale-105 transition-all duration-300 rounded-full px-8 py-4 love-glow"
            >
              Back to Start 💕
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center flex items-center justify-center min-h-screen">
        <div className="glass-effect rounded-3xl p-8 md:p-16 animate-fade-in-up">
          <Heart className="w-16 h-16 md:w-24 md:h-24 text-primary mx-auto mb-8 animate-heart-float" fill="currentColor" />
          
          <h1 className="font-dancing text-4xl md:text-6xl text-primary mb-12">
            Wanna be mine Forever? 💍
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              onClick={handleYesClick}
              className={`font-quicksand bg-gradient-heart hover:scale-105 transition-all duration-300 rounded-full love-glow ${getYesButtonSize()}`}
            >
              Yes! 💖
            </Button>
            
            <Button
              onClick={handleNoClick}
              variant="outline"
              className="font-quicksand px-8 py-4 text-lg rounded-full hover:scale-105 transition-all duration-300"
            >
              No
            </Button>
          </div>
          
          {noClickCount > 0 && (
            <p className="font-quicksand text-sm text-muted-foreground mt-6 animate-fade-in-up">
              Are you sure? The yes button is getting bigger... 👀
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default InteractiveSurprise;