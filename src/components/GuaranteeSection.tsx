import { ShieldCheck } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <ShieldCheck className="w-16 h-16 text-primary mx-auto" />
        <h2 className="text-3xl md:text-4xl font-heading font-bold">
          Garantía Incondicional de <span className="text-gold-gradient">7 Días</span>
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          ¿Aún tienes dudas? Tranquila, tu compra está 100% protegida. Si por cualquier motivo el contenido que recibes no cumple con lo prometido, tienes hasta 7 días para solicitar el reembolso completo, sin preguntas ni complicaciones.
        </p>
        <p className="text-foreground text-base">
          Recuerda que tu acceso es de por vida, y constantemente añadimos nuevos materiales diseñados para fortalecer tu fe, tu matrimonio y tu hogar.
        </p>
      </div>
    </section>
  );
};

export default GuaranteeSection;
