import { Card } from "@/components/ui/card";

const TechStackSection = () => {
  const techStacks = [
    {
      category: "Frontend",
      icon: "📱",
      tech: "React Native + Expo",
      description: "Cross-platform mobile app with smooth animations and native feel",
      color: "pastel-purple"
    },
    {
      category: "Backend", 
      icon: "⚡",
      tech: "FastAPI + PostgreSQL",
      description: "High-performance API with secure data storage and real-time sync",
      color: "pastel-mint"
    },
    {
      category: "AI/ML",
      icon: "🧠", 
      tech: "Lightweight Personalization",
      description: "Smart rule-based logic with collaborative filtering for recommendations",
      color: "pastel-coral"
    },
    {
      category: "Alternative",
      icon: "🔥",
      tech: "Firebase Suite", 
      description: "Rapid prototyping with real-time database and cloud functions",
      color: "soft-yellow"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Built with <span className="text-pastel-purple">Modern Tech</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our MVP uses proven technologies for rapid development and scalable growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {techStacks.map((stack, index) => (
            <Card key={index} className={`p-6 text-center bg-gradient-to-br from-card to-${stack.color}/10 border-border/50 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-2`}>
              <div className={`w-16 h-16 bg-${stack.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                <span className="text-2xl">{stack.icon}</span>
              </div>
              <div className="space-y-3">
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                  {stack.category}
                </div>
                <h3 className="font-heading font-bold text-foreground">
                  {stack.tech}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {stack.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* MVP Features */}
        <div className="bg-gradient-to-r from-card to-muted/30 rounded-3xl p-8 md:p-12 shadow-[var(--shadow-card)]">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-center text-foreground mb-8">
            MVP Development Approach
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-pastel-purple rounded-xl flex items-center justify-center mx-auto">
                <span className="text-xl">🚀</span>
              </div>
              <h4 className="font-heading font-semibold text-foreground">Rapid Prototyping</h4>
              <p className="text-sm text-muted-foreground">
                Get to market quickly with essential features, then iterate based on user feedback
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-pastel-mint rounded-xl flex items-center justify-center mx-auto">
                <span className="text-xl">📈</span>
              </div>
              <h4 className="font-heading font-semibold text-foreground">Scalable Architecture</h4>
              <p className="text-sm text-muted-foreground">
                Built to handle growth from hundreds to millions of users with minimal refactoring
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-pastel-coral rounded-xl flex items-center justify-center mx-auto">
                <span className="text-xl">🔧</span>
              </div>
              <h4 className="font-heading font-semibold text-foreground">Simple Rule Logic</h4>
              <p className="text-sm text-muted-foreground">
                Start with straightforward algorithms, evolve to complex ML as data grows
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;