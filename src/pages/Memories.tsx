import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import memory1 from "@/assets/memory1.jpg";
import memory2 from "@/assets/memory2.jpg";
import memory3 from "@/assets/memory3.jpg";
import memory4 from "@/assets/memory4.jpg";
import memory5 from "@/assets/memory5.jpg";

const Memories = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Beautiful romantic memories
  const memories = [
    {
      image: memory1,
      caption: "Our first date 💕",
      description: "The day everything began..."
    },
    {
      image: memory2,
      caption: "Goa trip 🌊",
      description: "Sun, sand, and endless smiles"
    },
    {
      image: memory3,
      caption: "Cozy movie night 🍿",
      description: "Perfect evening together"
    },
    {
      image: memory4,
      caption: "Birthday surprise 🎂",
      description: "Making wishes come true"
    },
    {
      image: memory5,
      caption: "Adventure day 🎢",
      description: "Thrills and laughter"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % memories.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + memories.length) % memories.length);
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-dancing text-4xl md:text-6xl text-primary mb-4 animate-fade-in-up">
            Our Beautiful Memories ✨
          </h1>
          <p className="font-quicksand text-lg text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Every moment with you is a treasure worth keeping forever
          </p>
        </div>

        {/* Memory Gallery */}
        <div className="glass-effect rounded-3xl p-6 md:p-8 mb-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="relative overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {memories.map((memory, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="aspect-[4/3] md:aspect-[16/9] relative overflow-hidden rounded-xl">
                    <img 
                      src={memory.image}
                      alt={memory.caption}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to gradient if image doesn't load
                        const target = e.currentTarget as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) {
                          fallback.style.display = 'flex';
                        }
                      }}
                    />
                    <div className="w-full h-full gradient-romantic absolute inset-0 hidden items-center justify-center">
                      <span className="text-4xl">📸</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="font-dancing text-2xl md:text-3xl mb-2">{memory.caption}</h3>
                      <p className="font-quicksand text-sm md:text-base opacity-90">{memory.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <Button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 border-0 rounded-full p-3"
            >
              <ArrowLeft className="w-5 h-5 text-white" />
            </Button>
            
            <Button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 border-0 rounded-full p-3"
            >
              <ArrowRight className="w-5 h-5 text-white" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {memories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-primary scale-125' : 'bg-primary/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Navigation to next page */}
        <div className="text-center">
          <Button
            onClick={() => navigate("/message")}
            className="font-quicksand bg-gradient-heart hover:scale-105 transition-all duration-300 rounded-full px-8 py-3 love-glow"
          >
            Continue to Special Message 💌
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Memories;