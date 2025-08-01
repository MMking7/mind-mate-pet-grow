import HeroSection from "@/components/HeroSection";
import ConceptSection from "@/components/ConceptSection";
import UserJourneySection from "@/components/UserJourneySection";
import GameMechanicsSection from "@/components/GameMechanicsSection";
import RecommendationEngineSection from "@/components/RecommendationEngineSection";


import EngagementSection from "@/components/EngagementSection";
import CallToActionSection from "@/components/CallToActionSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ConceptSection />
      <UserJourneySection />
      <GameMechanicsSection />
      <RecommendationEngineSection />
      
      
      <EngagementSection />
      <CallToActionSection />
    </div>
  );
};

export default Index;
