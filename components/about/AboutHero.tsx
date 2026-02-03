export default function AboutHero() {
  return (
    <div className="container mx-auto px-4 text-center mt-20 mb-16">
      <h1 className="text-5xl md:text-7xl font-modern font-black text-secondary mb-4 uppercase tracking-tighter">
        Our{" "}
        <span className="font-artistic text-primary normal-case text-6xl md:text-8xl inline-block rotate-[-2deg]">
          Story
        </span>
      </h1>
      <p className="text-xl text-text-muted max-w-2xl mx-auto font-modern">
        From humble beginnings to your favorite local roast house.
      </p>
    </div>
  );
}
