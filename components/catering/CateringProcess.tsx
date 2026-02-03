export default function CateringProcess() {
  const steps = [
    "Inquire online or give us a call with your event details.",
    "Consult with our catering manager for menu selection.",
    "Receive a personalized quote and confirm your booking.",
    "We arrive at your venue and deliver the charcoal magic!",
  ];

  return (
    <div className="py-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-modern font-black text-secondary uppercase tracking-tighter">
            How It{" "}
            <span className="font-artistic text-primary normal-case text-5xl md:text-7xl inline-block -rotate-2">
              Works
            </span>
          </h2>
        </div>

        <div className="space-y-8">
          {steps.map((step, i) => (
            <div
              key={i}
              className="flex items-center gap-6 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm"
            >
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-modern font-black text-xl shrink-0">
                {i + 1}
              </div>
              <p className="text-lg font-modern text-secondary font-medium">
                {step}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-primary text-white px-12 py-5 rounded-full font-modern font-black uppercase tracking-widest text-lg shadow-xl shadow-primary/20 hover:scale-105 transition-transform">
            Book Your Event
          </button>
        </div>
      </div>
    </div>
  );
}
