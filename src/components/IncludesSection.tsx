import { BookOpen, Heart, MessageCircle, Sun, Users } from "lucide-react";

const items = [
  {
    icon: BookOpen,
    title: "Estudio Bíblico Completo",
    desc: "Un recorrido profundo por los versículos clave sobre el matrimonio, con reflexiones y aplicaciones diarias.",
  },
  {
    icon: Heart,
    title: "Devocional de 30 Días",
    desc: "Fortalece tu vida espiritual y tu matrimonio con una guía devocional basada en la Palabra de Dios.",
  },
  {
    icon: MessageCircle,
    title: "Consejos Prácticos de Comunicación",
    desc: "Aprende a comunicarte con amor, respeto y sabiduría para transformar tu relación.",
  },
  {
    icon: Sun,
    title: "Reflexiones sobre el Rol de la Esposa",
    desc: "Comprende el propósito bíblico de la esposa y cómo aplicarlo con gracia en la vida moderna.",
  },
  {
    icon: Users,
    title: "Guía para la Vida en Familia",
    desc: "Herramientas para construir un hogar fundamentado en la fe, el amor y el respeto mutuo.",
  },
];

const IncludesSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto text-center space-y-12">
        <h2 className="text-3xl md:text-4xl font-heading font-bold">
          ¿Qué incluye la <span className="text-gold-gradient">Guía</span>?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-card border border-gold/10 rounded-xl p-6 text-left space-y-3 hover:border-gold/30 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IncludesSection;
