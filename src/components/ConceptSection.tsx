import { Card } from "@/components/ui/card";

const ConceptSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
            How <span className="text-pastel-purple">Mind Mate</span> Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our app uses your emotional and behavioral data to create a personalized growth journey, 
            modeling your personality traits and recommending communities and hobbies that align with your unique self.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="p-8 bg-gradient-to-br from-card to-pastel-lavender/10 border-border/50 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-2">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-pastel-purple to-pastel-lavender rounded-2xl flex items-center justify-center mx-auto">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground">Emotional Intelligence</h3>
              <p className="text-muted-foreground">
                Track and understand your emotions with AI-powered insights that help you recognize patterns and growth opportunities.
              </p>
            </div>
          </Card>
          
          <Card className="p-8 bg-gradient-to-br from-card to-pastel-mint/10 border-border/50 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-2">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-pastel-mint to-pastel-coral rounded-2xl flex items-center justify-center mx-auto">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground">Personalized Recommendations</h3>
              <p className="text-muted-foreground">
                Discover hobbies, communities, and activities tailored to your personality using advanced collaborative filtering.
              </p>
            </div>
          </Card>
          
          <Card className="p-8 bg-gradient-to-br from-card to-pastel-coral/10 border-border/50 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-2">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-pastel-coral to-soft-yellow rounded-2xl flex items-center justify-center mx-auto">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground">Growth Companion</h3>
              <p className="text-muted-foreground">
                Watch your virtual pet evolve as you grow, creating a meaningful bond that reflects your personal journey.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ConceptSection;