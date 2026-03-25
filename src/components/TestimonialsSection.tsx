import { Star } from "lucide-react";

const testimonials = [
  {
    name: "María G.",
    text: "Este material cambió mi perspectiva sobre mi matrimonio. Ahora entiendo mi rol como esposa con más claridad y amor.",
  },
  {
    name: "Ana L.",
    text: "Las reflexiones diarias me ayudaron a reconectar con mi esposo y con Dios. ¡Lo recomiendo a todas las mujeres!",
  },
  {
    name: "Carmen R.",
    text: "Nunca pensé que un estudio bíblico pudiera transformar tanto mi relación. Estoy agradecida por esta guía.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto text-center space-y-10">
        <h2 className="text-3xl md:text-4xl font-heading font-bold">
          Testimonios de <span className="text-gold-gradient">Esposas Transformadas</span>
        </h2>
        <p className="text-muted-foreground">
          Más de 4.000 mujeres ya están fortaleciendo su matrimonio con esta guía.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card border border-gold/10 rounded-xl p-6 text-left space-y-4"
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground text-sm italic leading-relaxed">"{t.text}"</p>
              <p className="text-primary font-bold text-sm">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
