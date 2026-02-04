"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Scale } from "lucide-react";

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

export default function TermsContent() {
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
            <Scale size={24} />
          </div>
          <span className="font-modern font-bold text-primary uppercase tracking-widest text-sm">
            Legal
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-artistic text-secondary">
          Terms of Service
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
        <Section title="1. Agreement to Terms">
          <p>
            By accessing our website and placing an order with{" "}
            <strong>Roost and Roast</strong>, you agree to be bound by these
            Terms of Service. If you disagree with any part of these terms,
            please do not use our services.
          </p>
        </Section>

        <Section title="2. Ordering & Payments">
          <p>
            All orders are subject to availability. We reserve the right to
            refuse service to anyone for any reason at any time.
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-2">
            <li>Prices are subject to change without notice.</li>
            <li>
              Payment must be completed at the time of ordering unless a prior
              arrangement has been made.
            </li>
            <li>
              We accept major credit cards and verified digital payment methods.
            </li>
          </ul>
        </Section>

        <Section title="3. Cancellations & Refunds">
          <p>
            Due to the perishable nature of our food, the following cancellation
            policies apply:
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-2">
            <li>
              Cancellations made <strong>24 hours</strong> prior to the
              scheduled delivery/pickup time may be eligible for a full refund.
            </li>
            <li>
              Cancellations made within 24 hours are non-refundable as
              preparation has likely begun.
            </li>
            <li>
              If there is an error with your order on our part, please contact
              us immediately for a resolution or refund.
            </li>
          </ul>
        </Section>

        <Section title="4. Allergens & Dietary Requirements">
          <p>
            While we take extreme care in food preparation, our kitchen handles
            nuts, gluten, dairy, and other allergens. We cannot guarantee that
            our products are 100% allergen-free. It is the customer's
            responsibility to disclose allergies at the time of ordering.
          </p>
        </Section>

        <Section title="5. Intellectual Property">
          <p>
            All content on this website, including menu designs, text, graphics,
            logos, and images, is the property of Roost and Roast and is
            protected by copyright laws. You may not use our content without
            express written permission.
          </p>
        </Section>

        <Section title="6. Liability">
          <p>
            Roost and Roast shall not be liable for any indirect, incidental, or
            consequential damages arising from the use of our service or
            website.
          </p>
        </Section>

        <Section title="7. Contact Information">
          <p>
            Questions about the Terms of Service should be sent to us at:
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
