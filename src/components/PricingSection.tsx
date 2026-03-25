import { Check, Lock, Mail, Smartphone } from "lucide-react";

const included = [
  "Estudio Bíblico Completo sobre el Matrimonio",
  "Devocional de 30 Días para Esposas",
  "Consejos Prácticos de Comunicación",
  "Reflexiones sobre el Rol de la Esposa",
  "Guía para la Vida en Familia",
  "BONO 1: El Poder de la Oración en el Matrimonio",
  "BONO 2: Mujeres de la Biblia",
  "BONO 3: Diario de Gratitud para Esposas",
  "BONO 4: Guía de Restauración Matrimonial",
  "BONO 5: Versículos Clave para la Esposa Cristiana",
];

const PricingSection = () => {
  return (
    <section id="precio" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <p className="text-primary font-bold tracking-widest text-sm uppercase">
          Precio Especial de Lanzamiento
        </p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold">
          ¡Llévate <span className="text-gold-gradient">TODO</span> esto por solo
        </h2>
        <div className="text-6xl font-heading font-bold text-gold-gradient">$9,90 USD</div>
        <p className="text-muted-foreground">(Puedes pagar en tu moneda local)</p>

        <div className="bg-card border border-gold/20 rounded-2xl p-8 text-left space-y-3">
          <p className="font-heading font-semibold text-foreground text-center mb-4">
            Al acceder hoy recibirás:
          </p>
          {included.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <Check className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-foreground text-sm">{item}</span>
            </div>
          ))}
          <div className="pt-4 space-y-2 border-t border-border mt-4">
            <div className="flex items-center gap-2 text-muted-foreground text-xs">
              <Lock className="w-3 h-3" /> Acceso seguro y 100% digital
            </div>
            <div className="flex items-center gap-2 text-muted-foreground text-xs">
              <Smartphone className="w-3 h-3" /> Compatible con cualquier dispositivo
            </div>
            <div className="flex items-center gap-2 text-muted-foreground text-xs">
              <Mail className="w-3 h-3" /> Entrega inmediata al correo electrónico
            </div>
          </div>
        </div>

        <a
          href="#"
          className="inline-block bg-gold-gradient text-primary-foreground font-bold px-12 py-5 rounded-lg text-xl hover:scale-105 transition-transform duration-300 animate-pulse-gold"
        >
          QUIERO LA GUÍA AHORA
        </a>
        <p className="text-primary text-sm font-semibold">⏳ Oferta limitada — últimos cupos disponibles</p>
      </div>
    </section>
  );
};

export default PricingSection;
