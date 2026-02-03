export default function MenuHero() {
  return (
    <div className="container mx-auto px-4 mt-12 md:mt-20 mb-8 md:mb-12 text-center">
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-modern font-black text-secondary mb-3 md:mb-4 uppercase tracking-tighter">
        Our{" "}
        <span className="font-artistic text-primary normal-case text-5xl sm:text-6xl md:text-8xl inline-block -rotate-2">
          Menu
        </span>
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-text-muted max-w-[90%] md:max-w-2xl mx-auto font-modern leading-relaxed">
        From our signature charcoal chicken to fresh salads and homemade sauces,
        explore authentic flavors made with passion.
      </p>
    </div>
  );
}
