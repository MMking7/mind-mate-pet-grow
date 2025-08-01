import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const CallToActionSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-pastel-purple/10 via-background to-pastel-mint/10">
      <div className="container mx-auto px-4">
        {/* Main CTA */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">
            Ready to Start <span className="bg-gradient-to-r from-pastel-purple to-pastel-coral bg-clip-text text-transparent">Growing</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Join thousands of users discovering their authentic selves through the power of emotional growth and companionship.
          </p>
        </div>

        {/* Beta signup */}
        <Card className="max-w-2xl mx-auto p-8 md:p-12 bg-gradient-to-br from-card to-pastel-lavender/10 border-border/50 shadow-[var(--shadow-card)] mb-16">
          <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-gradient-to-r from-pastel-purple to-pastel-mint rounded-full flex items-center justify-center mx-auto">
              <span className="text-3xl">🚀</span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
              Join the Beta Program
            </h3>
            
            <p className="text-muted-foreground">
              Be among the first to experience Mind Mate and help shape the future of emotional wellness technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email address" 
                className="rounded-xl border-border/50 bg-background/50 h-12"
              />
              <Button variant="hero" size="lg" className="whitespace-nowrap">
                Get Early Access
              </Button>
            </div>
            
            <p className="text-xs text-muted-foreground">
              No spam, ever. Unsubscribe anytime. Read our{" "}
              <a href="#" className="text-pastel-purple hover:underline">privacy policy</a>.
            </p>
          </div>
        </Card>

        {/* Additional CTAs */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6 text-center bg-gradient-to-br from-card to-pastel-purple/5 border-border/50 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-2">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-pastel-purple rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🎮</span>
              </div>
              <h3 className="font-heading font-semibold text-foreground">Try the Demo</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Experience a quick interactive prototype of Mind Mate's core features
              </p>
              <Button variant="soft" size="sm" className="w-full">
                Play Demo
              </Button>
            </div>
          </Card>

          <Card className="p-6 text-center bg-gradient-to-br from-card to-pastel-mint/5 border-border/50 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-2">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-pastel-mint rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="font-heading font-semibold text-foreground">Take Our Survey</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Help us understand what features matter most to you
              </p>
              <Button variant="secondary" size="sm" className="w-full">
                Share Feedback
              </Button>
            </div>
          </Card>

          <Card className="p-6 text-center bg-gradient-to-br from-card to-pastel-coral/5 border-border/50 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-2">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-pastel-coral rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="font-heading font-semibold text-foreground">Join Community</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Connect with other beta testers and share your journey
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Join Discord
              </Button>
            </div>
          </Card>
        </div>

        {/* Footer info */}
        <div className="text-center mt-16 space-y-4">
          <p className="text-muted-foreground">
            Questions? Email us at{" "}
            <a href="mailto:hello@mindmate.app" className="text-pastel-purple hover:underline font-medium">
              hello@mindmate.app
            </a>
          </p>
          <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-pastel-purple transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-pastel-purple transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-pastel-purple transition-colors">About Us</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;