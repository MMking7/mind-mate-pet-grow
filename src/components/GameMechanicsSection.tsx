import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const GameMechanicsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 via-background to-pastel-lavender/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
            <span className="text-pastel-purple">Growth Trees</span> & Game Mechanics
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Your pet evolves through three core SDT pillars, with each interaction shaping their personality and unlocking new features.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Autonomy Tree */}
          <Card className="p-8 bg-gradient-to-br from-card to-pastel-purple/10 border-border/50 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)] transition-all duration-300">
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-gradient-to-r from-pastel-purple to-pastel-lavender rounded-full flex items-center justify-center mx-auto">
                <span className="text-3xl">⭐</span>
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground">Autonomy Tree</h3>
              <p className="text-muted-foreground">
                Make independent choices and watch your pet develop unique traits and decision-making abilities.
              </p>
              
              {/* Progress example */}
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Independence</span>
                  <span>75%</span>
                </div>
                <Progress value={75} className="h-3" />
                
                <div className="flex justify-between text-sm">
                  <span>Self-Expression</span>
                  <span>60%</span>
                </div>
                <Progress value={60} className="h-3" />
              </div>
            </div>
          </Card>

          {/* Competence Tree */}
          <Card className="p-8 bg-gradient-to-br from-card to-pastel-mint/10 border-border/50 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)] transition-all duration-300">
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-gradient-to-r from-pastel-mint to-pastel-coral rounded-full flex items-center justify-center mx-auto">
                <span className="text-3xl">🦄</span>
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground">Competence Tree</h3>
              <p className="text-muted-foreground">
                Build skills and overcome challenges as your pet grows stronger and more capable.
              </p>
              
              {/* Progress example */}
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Problem Solving</span>
                  <span>85%</span>
                </div>
                <Progress value={85} className="h-3" />
                
                <div className="flex justify-between text-sm">
                  <span>Learning</span>
                  <span>70%</span>
                </div>
                <Progress value={70} className="h-3" />
              </div>
            </div>
          </Card>

          {/* Relatedness Tree */}
          <Card className="p-8 bg-gradient-to-br from-card to-pastel-coral/10 border-border/50 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)] transition-all duration-300">
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-gradient-to-r from-pastel-coral to-soft-yellow rounded-full flex items-center justify-center mx-auto">
                <span className="text-3xl">🐾</span>
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground">Relatedness Tree</h3>
              <p className="text-muted-foreground">
                Foster connections and watch your pet develop social skills and emotional intelligence.
              </p>
              
              {/* Progress example */}
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Empathy</span>
                  <span>90%</span>
                </div>
                <Progress value={90} className="h-3" />
                
                <div className="flex justify-between text-sm">
                  <span>Social Bonds</span>
                  <span>65%</span>
                </div>
                <Progress value={65} className="h-3" />
              </div>
            </div>
          </Card>
        </div>

        {/* Pet Evolution Examples */}
        <div className="bg-gradient-to-r from-card to-muted/30 rounded-3xl p-8 md:p-12 shadow-[var(--shadow-card)]">
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-center text-foreground mb-8">
            Pet Evolution Examples
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="text-6xl">🦊</div>
              <h4 className="font-semibold text-foreground">Curious Fox</h4>
              <p className="text-sm text-muted-foreground">
                Develops when you explore new activities and ask questions
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="text-6xl">🐻</div>
              <h4 className="font-semibold text-foreground">Gentle Bear</h4>
              <p className="text-sm text-muted-foreground">
                Grows when you practice kindness and help others
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="text-6xl">🐰</div>
              <h4 className="font-semibold text-foreground">Active Bunny</h4>
              <p className="text-sm text-muted-foreground">
                Emerges when you stay active and embrace challenges
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameMechanicsSection;