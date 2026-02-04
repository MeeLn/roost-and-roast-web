"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Mail, Lock } from "lucide-react";

// --- Styled Section Component ---
const Section = ({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5 }}
    className="group relative pl-0 md:pl-16 py-8 border-b border-dashed border-border last:border-0"
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
      </h2>
      <div className="font-serif text-text-muted text-base md:text-lg leading-relaxed space-y-4">
        {children}
      </div>
    </div>
  </motion.section>
);

export default function PrivacyContent() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 pb-24 relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -z-10 opacity-5">
        <Lock size={200} className="text-primary rotate-12" />
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
          {/* Rotating Ring Animation */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-3 rounded-full border-2 border-dashed border-primary/30"
          />
          <div className="w-16 h-16 rounded-full bg-background border border-border shadow-sm flex items-center justify-center text-primary relative z-10">
            <ShieldCheck size={32} strokeWidth={1.5} />
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-artistic text-secondary mb-4">
          Privacy <span className="text-primary">Policy</span>
        </h1>
        <div className="flex flex-col md:flex-row gap-4 md:items-center text-text-muted font-serif italic text-lg">
          <p>Your secrets are safe in our kitchen.</p>
          <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-primary/40"></span>
          <p>Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </motion.div>

      {/* Content Container - Receipt Style */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="bg-white/50 backdrop-blur-sm rounded-[2rem] border border-white/40 shadow-sm p-4 md:p-8"
      >
        <Section number="01" title="Introduction">
          <p>
            At <strong>Roost and Roast</strong>, we value your trust as much as
            we value fresh ingredients. This Privacy Policy explains how we
            collect, use, and safeguard your personal information when you visit
            our website or order our catering services.
          </p>
        </Section>

        <Section number="02" title="Information We Collect">
          <p>To get your order right, we need a few details. We may collect:</p>
          <div className="grid md:grid-cols-2 gap-4 mt-2">
            {[
              {
                title: "Personal ID",
                desc: "Name, email, phone number & delivery address.",
              },
              {
                title: "Order Details",
                desc: "Dietary preferences, allergies & transaction history.",
              },
              {
                title: "Technical Data",
                desc: "IP address, browser type & cookie usage.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-background rounded-xl p-4 border border-border/50"
              >
                <strong className="block text-secondary font-modern mb-1">
                  {item.title}
                </strong>
                <span className="text-sm">{item.desc}</span>
              </div>
            ))}
          </div>
        </Section>

        <Section number="03" title="How We Use Your Data">
          <p>Your information is used strictly to serve you better:</p>
          <ul className="grid gap-2 pt-2">
            {[
              "Processing and delivering your catering orders efficiently.",
              "Communicating with you regarding order updates.",
              "Improving our menu offerings based on what you love.",
              "Sending delicious offers (only if you have opted in).",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-primary mt-1.5">●</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section number="04" title="Cookies & Tracking">
          <p>
            We use cookies to enhance your browsing experience (not the
            chocolate chip kind, unfortunately). These help remember your cart
            and preferences. You can choose to disable cookies through your
            browser settings, though some website features may not behave as
            expected.
          </p>
        </Section>

        <Section number="05" title="Third-Party Sharing">
          <p>
            We respect your privacy.{" "}
            <strong>We do not sell or trade your personal information.</strong>
          </p>
          <p>
            We only share necessary data with trusted service providers (like
            payment processors and delivery drivers) solely for the purpose of
            getting your food to you securely and on time.
          </p>
        </Section>

        {/* Contact Footer within the document */}
        <div className="mt-12 pt-12 border-t border-dashed border-border flex flex-col items-center text-center">
          <h3 className="font-artistic text-3xl text-secondary mb-4">
            Questions about your data?
          </h3>
          <p className="font-serif text-text-muted mb-6">
            We are transparent about our policies. Reach out anytime.
          </p>
          <a
            href="mailto:info@roostandroast.com"
            className="inline-flex items-center gap-3 bg-secondary text-white px-8 py-4 rounded-full font-modern font-bold hover:bg-primary transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            <Mail size={20} />
            Contact Privacy Officer
          </a>
        </div>
      </motion.div>
    </div>
  );
}
