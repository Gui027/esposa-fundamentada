const items = [
  "Quieres fortalecer tu matrimonio con sabiduría bíblica y amor verdadero.",
  "Deseas ser una esposa que inspira, apoya y construye un hogar en fe.",
  "Buscas consejos prácticos para restaurar la confianza y la comunicación.",
  "Quieres aprender a honrar a tu esposo según los principios de Dios.",
  "Te sientes perdida en tu rol y necesitas dirección espiritual clara.",
];

const ForYouSection = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-heading font-bold">
          Este material es <span className="text-gold-gradient">para ti</span> si:
        </h2>
        <div className="space-y-4 text-left">
          {items.map((item, i) => (
            <div key={i} className="flex items-start gap-3 bg-card p-4 rounded-lg border border-gold/10">
              <span className="text-primary text-xl mt-0.5">✔️</span>
              <p className="text-foreground text-base">{item}</p>
            </div>
          ))}
        </div>
        <a
          href="#precio"
          className="inline-block bg-gold-gradient text-primary-foreground font-bold px-10 py-4 rounded-lg text-lg hover:scale-105 transition-transform duration-300"
        >
          SÍ, LO QUIERO
        </a>
      </div>
    </section>
  );
};

export default ForYouSection;
