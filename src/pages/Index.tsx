import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ForYouSection from "@/components/ForYouSection";
import IncludesSection from "@/components/IncludesSection";
import BonusSection from "@/components/BonusSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FAQSection from "@/components/FAQSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ForYouSection />
      <IncludesSection />
      <BonusSection />
      <TestimonialsSection />
      <PricingSection />
      <GuaranteeSection />
      <FAQSection />
      <footer className="py-10 text-center text-muted-foreground text-sm border-t border-border">
        <p>© 2025 Guía de la Esposa Fundamentada en la Biblia. Todos los derechos reservados.</p>
      </footer>
    </main>
  );
};

export default Index;
