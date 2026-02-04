"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

// Helper for consistent section styling
const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section className="group">
    <h2 className="text-2xl md:text-3xl font-modern font-black text-secondary mb-4 group-hover:text-primary transition-colors duration-300">
      {title}
    </h2>
    <div className="font-serif text-text-muted text-base md:text-lg leading-relaxed">
      {children}
    </div>
  </section>
);

export default function PrivacyContent() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 pb-20">
      {/* Navigation */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-8"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-text-muted hover:text-primary transition-colors group font-modern font-bold uppercase tracking-wider text-sm"
        >
          <ArrowLeft
            size={18}
            className="group-hover:-translate-x-1 transition-transform"
          />
          Back to Home
        </Link>
      </motion.div>

      {/* Header */}
      <motion.div {...fadeIn} className="mb-16 border-b border-gray-100 pb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <ShieldCheck size={24} />
          </div>
          <span className="font-modern font-bold text-primary uppercase tracking-widest text-sm">
            Legal
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-artistic text-secondary">
          Privacy Policy
        </h1>
        <p className="mt-4 text-text-muted font-serif text-lg">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="space-y-12"
      >
        <Section title="1. Introduction">
          <p>
            At <strong>Roost and Roast</strong>, we value your privacy and are
            committed to protecting your personal data. This Privacy Policy
            explains how we collect, use, and safeguard your information when
            you visit our website or order our catering services.
          </p>
        </Section>

        <Section title="2. Information We Collect">
          <p>We may collect the following types of information:</p>
          <ul className="list-disc pl-5 mt-4 space-y-2">
            <li>
              <strong>Personal Identification:</strong> Name, email address,
              phone number, and delivery address when you place an order.
            </li>
            <li>
              <strong>Order Details:</strong> Dietary preferences, allergy
              information, and transaction history.
            </li>
            <li>
              <strong>Technical Data:</strong> IP address, browser type, and
              usage patterns via cookies to improve your website experience.
            </li>
          </ul>
        </Section>

        <Section title="3. How We Use Your Data">
          <p>Your information is used strictly for:</p>
          <ul className="list-disc pl-5 mt-4 space-y-2">
            <li>Processing and delivering your catering orders efficiently.</li>
            <li>
              Communicating with you regarding order updates or inquiries.
            </li>
            <li>Improving our menu offerings and website functionality.</li>
            <li>Sending promotional offers (only if you have opted in).</li>
          </ul>
        </Section>

        <Section title="4. Cookies & Tracking">
          <p>
            We use cookies to enhance your browsing experience. You can choose
            to disable cookies through your browser settings, though this may
            affect some website features.
          </p>
        </Section>

        <Section title="5. Third-Party Sharing">
          <p>
            We do not sell or trade your personal information. We may share data
            with trusted third-party service providers (e.g., payment
            processors, delivery partners) solely for the purpose of fulfilling
            your order.
          </p>
        </Section>

        <Section title="6. Contact Us">
          <p>
            If you have any questions regarding this policy, please contact us
            at:
            <br />
            <a
              href="mailto:info@roostandroast.com"
              className="text-primary font-bold hover:underline mt-2 inline-block"
            >
              info@roostandroast.com
            </a>
          </p>
        </Section>
      </motion.div>
    </div>
  );
}
