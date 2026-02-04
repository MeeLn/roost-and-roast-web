"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Scale, AlertCircle, Mail } from "lucide-react";

// --- Styled Section Component ---
const Section = ({
  number,
  title,
  children,
  isAlert = false,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
  isAlert?: boolean;
}) => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, margin: "-50px" }}
    transition={{ duration: 0.5 }}
    className={`group relative pl-0 md:pl-16 py-8 border-b border-dashed border-border last:border-0 ${
      isAlert
        ? "bg-red-50/50 -mx-4 px-4 md:px-20 rounded-3xl my-8 border-none"
        : ""
    }`}
  >
    {/* Artistic Number Background */}
    <div className="hidden md:block absolute left-0 top-6 select-none pointer-events-none">
      <span className="font-artistic text-5xl text-primary/10 group-hover:text-primary/20 transition-colors duration-300">
        {number}
      </span>
    </div>

    <div className="relative z-10">
      <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-modern font-black text-secondary mb-4 group-hover:text-primary transition-colors duration-300">
        <span className="md:hidden text-primary font-artistic text-xl mr-2">
          {number}.
        </span>
        {title}
        {isAlert && <AlertCircle size={24} className="text-primary" />}
      </h2>
      <div className="font-serif text-text-muted text-base md:text-lg leading-relaxed space-y-4">
        {children}
      </div>
    </div>
  </motion.section>
);

export default function TermsContent() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 pb-24 relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -z-10 opacity-5">
        <span className="font-artistic text-[200px] leading-none text-primary">
          §
        </span>
      </div>

      {/* Navigation */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-12"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-text-muted hover:text-primary transition-colors group font-modern font-bold uppercase tracking-wider text-sm"
        >
          <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all">
            <ArrowLeft size={14} />
          </div>
          Back to Home
        </Link>
      </motion.div>

      {/* Header */}
      <motion.div {...fadeIn} className="mb-20 ml-4 text-center md:text-left">
        <div className="inline-block relative mb-6">
          {/* Rotating Ring Animation (Matches Menu/ScrollTop) */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-3 rounded-full border-2 border-dashed border-primary/30"
          />
          <div className="w-16 h-16 rounded-full bg-background border border-border shadow-sm flex items-center justify-center text-primary relative z-10">
            <Scale size={32} strokeWidth={1.5} />
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-artistic text-secondary mb-4">
          Terms <span className="text-primary">&</span> Service
        </h1>
        <div className="flex flex-col md:flex-row gap-4 md:items-center text-text-muted font-serif italic text-lg">
          <p>Please read these terms carefully before ordering.</p>
          <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-primary/40"></span>
          <p>Effective Date: {new Date().toLocaleDateString()}</p>
        </div>
      </motion.div>

      {/* Content Container - Looks like a long receipt/paper */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="bg-white/50 backdrop-blur-sm rounded-[2rem] border border-white/40 shadow-sm p-2 md:p-8"
      >
        <Section number="01" title="Agreement to Terms">
          <p>
            Welcome to the Roost! By accessing our website and placing an order
            with <strong>Roost and Roast</strong>, you agree to be bound by
            these Terms of Service. Think of this as the recipe for a good
            relationship between us. If you disagree with any ingredient in
            these terms, please do not use our services.
          </p>
        </Section>

        <Section number="02" title="Ordering & Payments">
          <p>We take your hunger seriously. To ensure everyone gets fed:</p>
          <ul className="grid gap-2 pt-2">
            {[
              "All orders are subject to availability (fresh food runs out!).",
              "Prices may change without notice, but confirmed orders are locked in.",
              "Payment is required at the time of ordering via Card or Digital Wallet.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-primary mt-1.5">●</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section number="03" title="Cancellations & Refunds">
          <p>
            We start prepping your food early. Because fresh food is perishable,
            our policy is:
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-background rounded-xl p-5 border border-border">
              <span className="block font-modern font-bold text-secondary mb-1">
                24+ Hours Notice
              </span>
              <p className="text-sm">
                Eligible for a full refund or rescheduling.
              </p>
            </div>
            <div className="bg-background rounded-xl p-5 border border-border">
              <span className="block font-modern font-bold text-secondary mb-1">
                Under 24 Hours
              </span>
              <p className="text-sm">
                Non-refundable as preparation has begun.
              </p>
            </div>
          </div>
          <p className="text-sm mt-4 italic">
            *If we made a mistake with your order, contact us immediately. We
            will fix it.
          </p>
        </Section>

        {/* Highlighted Allergen Section */}
        <Section number="04" title="Allergens & Dietary" isAlert={true}>
          <p className="font-medium text-secondary">
            Your safety is our priority.
          </p>
          <p>
            While we take extreme care in food preparation, our kitchen handles
            <strong> nuts, gluten, dairy, eggs,</strong> and other allergens.
          </p>
          <p>
            We cannot guarantee that our products are 100% allergen-free due to
            the risk of cross-contamination.
            <strong>
              {" "}
              It is the customer's responsibility to disclose severe allergies
              at the time of ordering.
            </strong>
          </p>
        </Section>

        <Section number="05" title="Intellectual Property">
          <p>
            The "Roost and Roast" name, our logo, menu designs, and specific
            food photography are the intellectual property of Roost and Roast.
            You may not use our content for commercial purposes without express
            written permission. You are, however, welcome to share photos of
            your meal on social media!
          </p>
        </Section>

        <Section number="06" title="Liability">
          <p>
            Roost and Roast shall not be liable for any indirect, incidental, or
            consequential damages arising from the use of our service or
            website, to the extent permitted by law.
          </p>
        </Section>

        {/* Contact Footer within the document */}
        <div className="mt-12 pt-12 border-t border-dashed border-border flex flex-col items-center text-center">
          <h3 className="font-artistic text-3xl text-secondary mb-4">
            Still have questions?
          </h3>
          <p className="font-serif text-text-muted mb-6">
            We are here to help clarify things.
          </p>
          <a
            href="mailto:info@roostandroast.com"
            className="inline-flex items-center gap-3 bg-secondary text-white px-8 py-4 rounded-full font-modern font-bold hover:bg-primary transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            <Mail size={20} />
            Email the Team
          </a>
        </div>
      </motion.div>
    </div>
  );
}
