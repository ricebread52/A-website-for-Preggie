import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Mail, X } from "lucide-react";

const FloatingMessageButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-heart hover:scale-110 transition-all duration-300 love-glow border-0 group"
      >
        <Mail className="w-6 h-6 text-white group-hover:animate-heart-float" />
      </Button>

      {/* Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="glass-effect border-0 rounded-3xl max-w-md mx-4">
          <DialogHeader>
            <DialogTitle className="font-dancing text-3xl text-primary text-center mb-4">
              💌 A Secret Message
            </DialogTitle>
          </DialogHeader>
          
          <div className="text-center py-6">
            <div className="mb-6">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full gradient-heart flex items-center justify-center">
                <span className="text-3xl">💗</span>
              </div>
            </div>
            
            <h3 className="font-dancing text-2xl text-primary mb-4">
              Can't wait for a million more years with you 💗
            </h3>
            
            <p className="font-quicksand text-muted-foreground leading-relaxed">
              Every day with you feels like a beautiful dream I never want to wake up from. 
              You are my sunshine, my moonlight, and every star in between.
            </p>
            
            <div className="mt-6 flex justify-center">
              <Button
                onClick={() => setIsOpen(false)}
                className="font-quicksand bg-gradient-romantic hover:scale-105 transition-all duration-300 rounded-full px-6 py-2"
              >
                Forever yours 💖
              </Button>
            </div>
          </div>
          
          {/* Floating hearts in modal */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute text-lg opacity-30 animate-floating-hearts"
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  top: `${20 + Math.random() * 60}%`,
                  animationDelay: `${Math.random() * 3}s`,
                }}
              >
                💕
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FloatingMessageButton;