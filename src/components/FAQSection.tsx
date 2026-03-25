import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "¿Cómo recibiré el material después de la compra?",
    a: "Una vez confirmado el pago, recibirás un correo electrónico con el acceso inmediato a todo el contenido digital. No necesitas esperar ni pagar envío. Todo es 100% online y accesible desde cualquier dispositivo.",
  },
  {
    q: "¿Y si el material no es lo que esperaba?",
    a: "No te preocupes. Tienes 7 días de garantía incondicional. Si el contenido no cumple tus expectativas, puedes solicitar tu reembolso total sin complicaciones.",
  },
  {
    q: "¿Necesito tener conocimientos previos de la Biblia?",
    a: "¡Para nada! Esta guía fue diseñada para todas las mujeres: nuevas creyentes, esposas experimentadas, líderes o cualquier mujer que desee fortalecer su matrimonio. El lenguaje es claro, práctico y accesible.",
  },
  {
    q: "¿Por qué es tan económico? ¿Es un producto confiable?",
    a: "Queremos que miles de mujeres tengan acceso a este estudio sin barreras. El bajo precio no refleja baja calidad, sino una misión: facilitar el crecimiento espiritual y matrimonial a toda mujer comprometida. Más de 4.000 personas ya han confiado en nosotros.",
  },
  {
    q: "¿Puedo pagar en mi moneda local?",
    a: "Sí. Aunque el precio esté en USD, al momento de la compra podrás pagar automáticamente en tu moneda local, usando tarjeta de crédito, débito o billetera digital de forma segura.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="max-w-3xl mx-auto space-y-8">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center">
          ❓ Preguntas <span className="text-gold-gradient">Frecuentes</span>
        </h2>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card border border-gold/10 rounded-xl px-6 overflow-hidden"
            >
              <AccordionTrigger className="text-foreground font-heading text-left hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
