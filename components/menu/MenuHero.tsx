export default function MenuHero() {
  return (
    <div className="container mx-auto px-4 mt-20 mb-10 text-center">
      <h1 className="text-5xl md:text-7xl font-modern font-black text-secondary mb-4 uppercase tracking-tighter">
        Our{" "}
        <span className="font-artistic text-primary normal-case text-6xl md:text-8xl inline-block rotate-[-2deg]">
          Menu
        </span>
      </h1>
      <p className="text-xl text-text-muted max-w-2xl mx-auto font-modern">
        From our signature charcoal chicken to fresh salads and homemade sauces,
        explore authentic flavors made with passion.
      </p>
    </div>
  );
}
