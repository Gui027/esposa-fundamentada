import { Gift } from "lucide-react";

const bonuses = [
  {
    num: 1,
    title: "El Poder de la Oración en el Matrimonio",
    desc: "Descubre cómo la oración transforma tu relación. Una guía con oraciones específicas para cada área de tu vida matrimonial.",
  },
  {
    num: 2,
    title: "Mujeres de la Biblia: Ejemplos de Fe y Virtud",
    desc: "Conoce las historias de mujeres bíblicas que marcaron la diferencia en sus hogares y aprende de su ejemplo.",
  },
  {
    num: 3,
    title: "Diario de Gratitud para Esposas",
    desc: "Un diario hermoso para registrar tus bendiciones, reflexiones y momentos de agradecimiento cada día.",
  },
  {
    num: 4,
    title: "Guía de Restauración Matrimonial",
    desc: "Pasos prácticos y bíblicos para sanar heridas, restaurar la confianza y renovar el amor en tu matrimonio.",
  },
  {
    num: 5,
    title: "Versículos Clave para la Esposa Cristiana",
    desc: "Una colección de versículos organizados por tema para meditar, memorizar y aplicar en tu vida diaria.",
  },
];

const BonusSection = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <p className="text-primary font-bold tracking-widest text-sm uppercase">
          🎁 ¡Bonos Exclusivos por Tiempo Limitado!
        </p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold">
          Al adquirir la guía hoy, recibirás{" "}
          <span className="text-gold-gradient">GRATIS</span> estos 5 regalos exclusivos
        </h2>
        <div className="space-y-4 pt-6">
          {bonuses.map((b) => (
            <div
              key={b.num}
              className="bg-card border border-gold/10 rounded-xl p-6 text-left flex gap-4 items-start hover:border-gold/30 transition-colors"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center">
                <Gift className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground">
                  BONO {b.num}: {b.title}
                </h3>
                <p className="text-muted-foreground text-sm mt-1">{b.desc}</p>
                <p className="text-primary text-xs mt-2 font-bold">DE $10 → GRATIS</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-gold-light font-heading text-xl pt-4">
          🎉 ¡Todo esto valorado en más de $49 USD… totalmente GRATIS solo por tiempo limitado!
        </p>
      </div>
    </section>
  );
};

export default BonusSection;
