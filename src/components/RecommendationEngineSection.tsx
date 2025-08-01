import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const RecommendationEngineSection = () => {
  const recommendations = [
    {
      type: "Creative Workshop",
      title: "Watercolor Meditation",
      reason: "You've been exploring mindful activities alone",
      tags: ["Creative", "Mindful", "Solo"],
      match: 95
    },
    {
      type: "Community Group", 
      title: "Book Club for Introverts",
      reason: "Your reading streak and preference for small groups",
      tags: ["Social", "Learning", "Cozy"],
      match: 88
    },
    {
      type: "Skill Building",
      title: "Plant Care Basics",
      reason: "Your nurturing personality and love for growth",
      tags: ["Nurturing", "Growth", "Therapeutic"],
      match: 92
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Smart <span className="text-pastel-purple">Recommendations</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our AI analyzes your emotional patterns, activities, and growth to suggest personalized experiences that truly fit you.
          </p>
        </div>

        {/* How it works */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="p-6 text-center bg-gradient-to-br from-card to-pastel-purple/5 border-border/50 shadow-[var(--shadow-card)]">
            <div className="w-12 h-12 bg-pastel-purple rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-xl">🔍</span>
            </div>
            <h3 className="font-heading font-semibold text-foreground mb-2">Pattern Analysis</h3>
            <p className="text-sm text-muted-foreground">
              We analyze your emotional check-ins and activity patterns to understand your unique preferences.
            </p>
          </Card>

          <Card className="p-6 text-center bg-gradient-to-br from-card to-pastel-mint/5 border-border/50 shadow-[var(--shadow-card)]">
            <div className="w-12 h-12 bg-pastel-mint rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-xl">🤝</span>
            </div>
            <h3 className="font-heading font-semibold text-foreground mb-2">Collaborative Filtering</h3>
            <p className="text-sm text-muted-foreground">
              Connect with others who share similar growth patterns and discover what worked for them.
            </p>
          </Card>

          <Card className="p-6 text-center bg-gradient-to-br from-card to-pastel-coral/5 border-border/50 shadow-[var(--shadow-card)]">
            <div className="w-12 h-12 bg-pastel-coral rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-xl">💡</span>
            </div>
            <h3 className="font-heading font-semibold text-foreground mb-2">Explainable AI</h3>
            <p className="text-sm text-muted-foreground">
              Every suggestion comes with clear reasoning so you understand why it's perfect for you.
            </p>
          </Card>
        </div>

        {/* Example recommendations */}
        <div className="bg-gradient-to-r from-card to-muted/20 rounded-3xl p-8 shadow-[var(--shadow-card)]">
          <h3 className="text-2xl font-heading font-bold text-center text-foreground mb-8">
            Example Recommendations for You
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {recommendations.map((rec, index) => (
              <Card key={index} className="p-6 bg-card border-border/50 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <Badge variant="secondary" className="text-xs">
                      {rec.type}
                    </Badge>
                    <div className="text-right">
                      <div className="text-lg font-bold text-pastel-purple">{rec.match}%</div>
                      <div className="text-xs text-muted-foreground">match</div>
                    </div>
                  </div>
                  
                  <h4 className="font-heading font-semibold text-foreground">
                    {rec.title}
                  </h4>
                  
                  <p className="text-sm text-muted-foreground italic">
                    "{rec.reason}"
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {rec.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecommendationEngineSection;