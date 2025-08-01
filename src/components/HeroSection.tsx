import { Button } from "@/components/ui/button";
import heroImage from "@/assets/mind-mate-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-pastel-lavender/20 to-pastel-mint/20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-pastel-purple/5 to-pastel-mint/5"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-pastel-coral/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-pastel-purple/20 rounded-full blur-xl"></div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground leading-tight">
                Mind Pet –{" "}
                <span className="bg-gradient-to-r from-pastel-purple to-pastel-coral bg-clip-text text-transparent">
                  Grow With Your Emotions
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Track your feelings, care for your pet, and discover your unique self through playful reflection.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="hero" className="group">
                Start Your Journey
                <span className="ml-2 group-hover:translate-x-1 transition-transform">✨</span>
              </Button>
              <Button variant="soft" size="lg">
                Learn More
              </Button>
            </div>
            
            {/* Feature highlights */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start pt-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="text-lg">⭐</span>
                <span>Grow Autonomy</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="text-lg">🦄</span>
                <span>Build Competence</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="text-lg">🐾</span>
                <span>Foster Connection</span>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-card)] transform hover:scale-105 transition-transform duration-500">
              <img 
                src={heroImage} 
                alt="Mind Mate - A cute companion animal growing with your emotions" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pastel-purple/10 to-transparent"></div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-soft-yellow rounded-full animate-bounce"></div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-pastel-coral rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;