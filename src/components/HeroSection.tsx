import bookCover from "@/assets/book-cover.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      <div className="bg-radial-glow absolute inset-0 pointer-events-none" />
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">
        <div className="flex-1 text-center lg:text-left space-y-6">
          <p className="text-gold-light font-body text-sm tracking-[0.3em] uppercase">
            Guía Espiritual para tu Matrimonio
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
            <span className="text-gold-gradient">Guía de la Esposa</span>
            <br />
            <span className="text-foreground">Fundamentada en la</span>
            <br />
            <span className="text-gold-gradient">Biblia</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
            Un estudio bíblico para la mujer que desea amar, honrar y guiar su hogar con sabiduría, fe y propósito
          </p>
          <a
            href="#precio"
            className="inline-block bg-gold-gradient text-primary-foreground font-bold px-10 py-4 rounded-lg text-lg tracking-wide hover:scale-105 transition-transform duration-300 animate-pulse-gold"
          >
            QUIERO TRANSFORMAR MI MATRIMONIO
          </a>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src={bookCover}
            alt="Guía de la Esposa Fundamentada en la Biblia"
            className="w-72 md:w-96 drop-shadow-2xl animate-float"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
