import { Button } from "@/components/ui/button";

const UserJourneySection = () => {
  const journeySteps = [
    {
      number: "01",
      title: "Take Our Survey",
      description: "Complete a simple Self-Determination Theory based assessment to understand your core motivations.",
      icon: "📋",
      color: "pastel-purple"
    },
    {
      number: "02", 
      title: "Choose Your Pet",
      description: "Select a baby animal avatar that resonates with you - each with unique traits and growth paths.",
      icon: "🐾",
      color: "pastel-mint"
    },
    {
      number: "03",
      title: "Daily Check-ins", 
      description: "Share your emotions and activities with simple, fun interactions that feel natural and supportive.",
      icon: "💭",
      color: "pastel-coral"
    },
    {
      number: "04",
      title: "Watch Growth",
      description: "See your pet evolve based on your behavior - developing new features, moods, and characteristics.",
      icon: "🌟",
      color: "soft-yellow"
    },
    {
      number: "05",
      title: "Get Recommendations",
      description: "Receive personalized suggestions for hobbies and communities that match your growing personality.",
      icon: "🎯",
      color: "pastel-lavender"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Your Journey to <span className="text-pastel-purple">Self-Discovery</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Follow these simple steps to start growing with your virtual companion
          </p>
        </div>

        <div className="relative">
          {/* Journey path line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-pastel-purple via-pastel-mint to-pastel-coral transform -translate-y-1/2 z-0"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {journeySteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  {/* Step circle */}
                  <div className={`w-20 h-20 mx-auto rounded-full bg-${step.color} flex items-center justify-center shadow-[var(--shadow-card)] group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl">{step.icon}</span>
                  </div>
                  {/* Step number */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-foreground text-background rounded-full flex items-center justify-center text-sm font-bold">
                    {step.number}
                  </div>
                </div>
                
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3 group-hover:text-pastel-purple transition-colors">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <Button variant="soft" size="lg">
            Start Your Journey Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UserJourneySection;