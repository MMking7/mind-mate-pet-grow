import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const EngagementSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Stay <span className="text-pastel-purple">Engaged</span> & Motivated
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Build lasting habits with gamified features that make emotional growth feel rewarding and fun
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left side - Features */}
          <div className="space-y-8">
            <Card className="p-6 bg-gradient-to-br from-card to-pastel-purple/5 border-border/50 shadow-[var(--shadow-card)]">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-pastel-purple rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🔥</span>
                </div>
                <div className="space-y-2">
                  <h3 className="font-heading font-semibold text-foreground">Daily Streaks</h3>
                  <p className="text-sm text-muted-foreground">
                    Build momentum with check-in streaks that unlock special pet animations and rewards
                  </p>
                  <div className="flex items-center space-x-2 pt-2">
                    <span className="text-xs text-muted-foreground">Current streak:</span>
                    <span className="font-bold text-pastel-purple">7 days</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-card to-pastel-mint/5 border-border/50 shadow-[var(--shadow-card)]">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-pastel-mint rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🎯</span>
                </div>
                <div className="space-y-2">
                  <h3 className="font-heading font-semibold text-foreground">Mini Missions</h3>
                  <p className="text-sm text-muted-foreground">
                    Complete small challenges that help you explore emotions and try new activities
                  </p>
                  <div className="pt-2">
                    <div className="flex justify-between text-xs mb-1">
                      <span>Try something creative today</span>
                      <span>2/3</span>
                    </div>
                    <Progress value={67} className="h-2" />
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-card to-pastel-coral/5 border-border/50 shadow-[var(--shadow-card)]">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-pastel-coral rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🌱</span>
                </div>
                <div className="space-y-2">
                  <h3 className="font-heading font-semibold text-foreground">Visual Growth</h3>
                  <p className="text-sm text-muted-foreground">
                    Watch your pet evolve with new features, accessories, and environments that reflect your journey
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Right side - Pet showcase */}
          <div className="relative">
            <Card className="p-8 bg-gradient-to-br from-card to-pastel-lavender/10 border-border/50 shadow-[var(--shadow-card)]">
              <div className="text-center space-y-6">
                <h3 className="text-xl font-heading font-semibold text-foreground">
                  Meet Luna - Level 12 Fox
                </h3>
                
                {/* Pet display */}
                <div className="relative">
                  <div className="w-32 h-32 bg-gradient-to-br from-pastel-purple/20 to-pastel-mint/20 rounded-full flex items-center justify-center mx-auto text-6xl">
                    🦊
                  </div>
                  {/* Floating accessories */}
                  <div className="absolute -top-2 -right-2 text-2xl animate-bounce">✨</div>
                  <div className="absolute -bottom-1 -left-1 text-xl animate-pulse">🌸</div>
                </div>
                
                {/* Pet stats */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Curiosity</span>
                    <span className="text-sm font-semibold">Level 8</span>
                  </div>
                  <Progress value={80} className="h-2" />
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Empathy</span>
                    <span className="text-sm font-semibold">Level 6</span>
                  </div>
                  <Progress value={60} className="h-2" />
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Confidence</span>
                    <span className="text-sm font-semibold">Level 9</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>
                
                <p className="text-sm text-muted-foreground italic">
                  "Luna has been with Sarah for 3 months and loves exploring art galleries!"
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Social features */}
        <div className="bg-gradient-to-r from-card to-muted/30 rounded-3xl p-8 md:p-12 shadow-[var(--shadow-card)]">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-center text-foreground mb-8">
            Connect & Share Your Journey
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-pastel-purple rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">👥</span>
              </div>
              <h4 className="font-heading font-semibold text-foreground">Pet Playdates</h4>
              <p className="text-sm text-muted-foreground">
                Let your pets interact and learn from each other in safe, moderated environments
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-pastel-mint rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">📖</span>
              </div>
              <h4 className="font-heading font-semibold text-foreground">Growth Stories</h4>
              <p className="text-sm text-muted-foreground">
                Share anonymous stories of breakthrough moments and inspire others on their journey
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-pastel-coral rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🎭</span>
              </div>
              <h4 className="font-heading font-semibold text-foreground">Identity Reinforcement</h4>
              <p className="text-sm text-muted-foreground">
                "This pet is growing just like me" - build a deeper sense of self through your companion
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngagementSection;