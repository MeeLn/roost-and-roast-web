import { Utensils, Users, Calendar } from "lucide-react";

const cateringFeatures = [
  {
    icon: <Users className="w-10 h-10 text-primary" />,
    title: "Small & Large Events",
    description:
      "From intimate family gatherings to large corporate parties, we scale our service to your needs.",
  },
  {
    icon: <Utensils className="w-10 h-10 text-primary" />,
    title: "Customized Menus",
    description:
      "Work with our chefs to create a perfect menu featuring our signature charcoal roasts and fresh sides.",
  },
  {
    icon: <Calendar className="w-10 h-10 text-primary" />,
    title: "Full Service",
    description:
      "We handle the set-up, service, and clean-up, so you can focus on enjoying your event.",
  },
];

export default function CateringFeatures() {
  return (
    <div className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {cateringFeatures.map((feature, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-6 flex justify-center">{feature.icon}</div>
              <h3 className="text-2xl font-modern font-black text-secondary mb-4 uppercase">
                {feature.title}
              </h3>
              <p className="text-text-muted font-modern leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
