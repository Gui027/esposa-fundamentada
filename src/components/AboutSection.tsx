import { BookOpen, Heart, Home, Sparkles } from "lucide-react";

const features = [
  { icon: BookOpen, label: "Sabiduría" },
  { icon: Heart, label: "Amor" },
  { icon: Home, label: "Hogar" },
  { icon: Sparkles, label: "Propósito" },
];

const AboutSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-heading font-bold">
          ¿Qué es <span className="text-gold-gradient">Guía de la Esposa Fundamentada en la Biblia</span>?
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
          Es un recurso transformador que te guía a través de los principios bíblicos para fortalecer tu relación, fomentar la confianza y restaurar el amor en tu matrimonio. Con consejos prácticos, reflexiones diarias y sabiduría profunda, este material te ayudará a redescubrir el propósito de tu relación y a construir una vida juntos basada en la fe y el respeto mutuo.
        </p>
        <div className="flex justify-center gap-8 md:gap-12 pt-4">
          {features.map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center border border-gold/30">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm font-body text-gold-light">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
