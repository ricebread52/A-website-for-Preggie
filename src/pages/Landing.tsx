import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const Landing = () => {
  const navigate = useNavigate();
  const [showHeart, setShowHeart] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowHeart(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleHeartClick = () => {
    navigate("/memories");
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Floating Hearts Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute text-2xl opacity-30 animate-floating-hearts"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
            }}
          >
            💖
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="text-center z-10 px-6 max-w-2xl">
        <div className="glass-effect rounded-3xl p-8 md:p-12">
          <h1 className="font-dancing text-4xl md:text-6xl lg:text-7xl text-primary mb-6 animate-fade-in-up font-bold">
            Happy 1 Year Anniversary, Preggie 💖
          </h1>
          
          <p className="font-quicksand text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            A year of beautiful memories, endless laughter, and infinite love...
          </p>

          {showHeart && (
            <Button
              onClick={handleHeartClick}
              className="group bg-gradient-heart hover:scale-110 transition-all duration-300 rounded-full p-6 love-glow animate-fade-in-up border-0"
              style={{ animationDelay: '1s' }}
            >
              <Heart 
                className="w-12 h-12 md:w-16 md:h-16 text-white group-hover:animate-heart-float" 
                fill="currentColor"
              />
            </Button>
          )}

          {showHeart && (
            <p className="font-quicksand text-sm text-muted-foreground mt-4 animate-fade-in-up" style={{ animationDelay: '1.5s' }}>
              Click the heart to continue our journey 💕
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Landing;