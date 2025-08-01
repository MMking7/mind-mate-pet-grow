import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PrivacySection = () => {
  const privacyFeatures = [
    {
      icon: "🔒",
      title: "End-to-End Encryption",
      description: "All emotion and activity logs are encrypted both in transit and at rest",
      status: "Implemented"
    },
    {
      icon: "👤",
      title: "Full User Control",
      description: "Complete opt-in/opt-out control over data collection and usage",
      status: "Core Feature"
    },
    {
      icon: "📦",
      title: "Data Portability", 
      description: "Export all your data anytime in standard formats",
      status: "Available"
    },
    {
      icon: "🗑️",
      title: "Right to Delete",
      description: "Permanently delete your account and all associated data with one click",
      status: "Guaranteed"
    },
    {
      icon: "🕵️",
      title: "Anonymous Analytics",
      description: "Improve the app without compromising individual privacy",
      status: "Privacy-First"
    },
    {
      icon: "🌍",
      title: "GDPR Compliant",
      description: "Built with global privacy standards and regulations in mind",
      status: "Compliant"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Your <span className="text-pastel-purple">Privacy</span> is Sacred
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We believe emotional data is deeply personal. That's why we've built Mind Mate with privacy-first principles from day one.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {privacyFeatures.map((feature, index) => (
            <Card key={index} className="p-6 bg-gradient-to-br from-card to-pastel-lavender/5 border-border/50 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 bg-pastel-purple/20 rounded-xl flex items-center justify-center">
                    <span className="text-xl">{feature.icon}</span>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.status}
                  </Badge>
                </div>
                <h3 className="font-heading font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Privacy Promise */}
        <div className="bg-gradient-to-r from-card to-pastel-mint/10 rounded-3xl p-8 md:p-12 shadow-[var(--shadow-card)] border border-border/50">
          <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-gradient-to-r from-pastel-purple to-pastel-mint rounded-full flex items-center justify-center mx-auto">
              <span className="text-3xl">🤝</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
              Our Privacy Promise
            </h3>
            <div className="max-w-3xl mx-auto space-y-4 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                <strong className="text-foreground">We will never sell your data.</strong> Your emotional journey belongs to you, and we're here to support it, not profit from it.
              </p>
              <p>
                Mind Mate operates on a freemium model - premium features fund the platform, not your personal information. We're committed to building trust through transparency and giving you complete control over your digital emotional footprint.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl mb-2">🔐</div>
                <div className="font-semibold text-foreground">Zero Knowledge</div>
                <div className="text-sm text-muted-foreground">We can't see your raw emotional data</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🏠</div>
                <div className="font-semibold text-foreground">Local Processing</div>
                <div className="text-sm text-muted-foreground">Sensitive analysis happens on your device</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">📜</div>
                <div className="font-semibold text-foreground">Clear Terms</div>
                <div className="text-sm text-muted-foreground">Plain English privacy policy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacySection;