"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Phone,
  Mail,
  Calendar,
  Users,
  MessageSquare,
  ChevronDown,
} from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    guests: "Standard Table (3-4 People)",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Construct the aggregated message as per user request
      const aggregatedMessage = `Phone: ${formData.phone} | Date: ${formData.date} | Guests: ${formData.guests} | Message: ${formData.message}`;

      // Create FormData for FormSubmit.co
      const submitData = new FormData();
      submitData.append("name", formData.name);
      submitData.append("email", formData.email);
      submitData.append("message", aggregatedMessage);

      // Submit to FormSubmit.co
      const response = await fetch(
        "https://formsubmit.co/milan.201420@ncit.edu.np",
        {
          method: "POST",
          body: submitData,
          headers: {
            Accept: "application/json",
          },
        },
      );

      if (response.ok) {
        toast.success(
          "Reservation request sent successfully! We'll contact you shortly.",
          {
            duration: 5000,
            position: "top-center",
            style: {
              background: "#10b981",
              color: "#fff",
              fontWeight: "bold",
            },
          },
        );

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          guests: "Standard Table (3-4 People)",
          message: "",
        });
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      toast.error("Failed to send reservation. Please try again.", {
        duration: 5000,
        position: "top-center",
        style: {
          background: "#ef4444",
          color: "#fff",
          fontWeight: "bold",
        },
      });
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="py-24 bg-background" id="order">
      <Toaster />
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-modern font-black text-primary mb-12 uppercase tracking-tighter">
            Reserve a Table or Order <br />
            <span className="font-artistic normal-case text-5xl md:text-8xl inline-block rotate-[-2deg] mt-2">
              Online
            </span>
          </h2>

          <div className="max-w-4xl mx-auto shadow-[0_10px_40px_rgba(0,0,0,0.1)] rounded-3xl overflow-hidden border-[0.5px] border-secondary/20">
            <form
              className="grid grid-cols-1 md:grid-cols-2 gap-7 bg-white p-8 md:p-14"
              onSubmit={handleSubmit}
            >
              <div className="text-left group md:col-span-2">
                <label className="block text-xs font-modern font-black text-secondary uppercase tracking-[0.2em] mb-2 group-focus-within:text-primary transition-colors">
                  Your Full Name
                </label>
                <div className="relative">
                  <User
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-primary transition-colors"
                    size={18}
                  />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full p-4.5 pl-12 bg-surface-hover border-[0.5px] border-secondary/10 rounded-2xl text-text-main transition-all focus:outline-none focus:border-primary/40 focus:bg-white focus:ring-4 focus:ring-primary/5 hover:border-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="e.g. Alexander Hamilton"
                  />
                </div>
              </div>

              <div className="text-left group">
                <label className="block text-xs font-modern font-black text-secondary uppercase tracking-[0.2em] mb-2 group-focus-within:text-primary transition-colors">
                  Email Address
                </label>
                <div className="relative">
                  <Mail
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-primary transition-colors"
                    size={18}
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full p-4.5 pl-12 bg-surface-hover border-[0.5px] border-secondary/10 rounded-2xl text-text-main transition-all focus:outline-none focus:border-primary/40 focus:bg-white focus:ring-4 focus:ring-primary/5 hover:border-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="e.g. alex@example.com"
                  />
                </div>
              </div>

              <div className="text-left group">
                <label className="block text-xs font-modern font-black text-secondary uppercase tracking-[0.2em] mb-2 group-focus-within:text-primary transition-colors">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-primary transition-colors"
                    size={18}
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full p-4.5 pl-12 bg-surface-hover border-[0.5px] border-secondary/10 rounded-2xl text-text-main transition-all focus:outline-none focus:border-primary/40 focus:bg-white focus:ring-4 focus:ring-primary/5 hover:border-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="e.g. 0400 123 456"
                  />
                </div>
              </div>

              <div className="text-left group">
                <label className="block text-xs font-modern font-black text-secondary uppercase tracking-[0.2em] mb-2 group-focus-within:text-primary transition-colors">
                  Preferred Date
                </label>
                <div className="relative group/date">
                  <Calendar
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-primary transition-colors pointer-events-none z-10"
                    size={18}
                  />
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full p-4.5 pl-12 bg-surface-hover border-[0.5px] border-secondary/10 rounded-2xl text-text-main transition-all focus:outline-none focus:border-primary/40 focus:bg-white focus:ring-4 focus:ring-primary/5 hover:border-primary/20 cursor-pointer relative z-0 [color-scheme:light] disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>
              </div>

              <div className="text-left group">
                <label className="block text-xs font-modern font-black text-secondary uppercase tracking-[0.2em] mb-2 group-focus-within:text-primary transition-colors">
                  Number of Guests
                </label>
                <div className="relative">
                  <Users
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-primary transition-colors pointer-events-none z-10"
                    size={18}
                  />
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full p-4.5 pl-12 pr-10 bg-surface-hover border-[0.5px] border-secondary/10 rounded-2xl text-text-main transition-all focus:outline-none focus:border-primary/40 focus:bg-white focus:ring-4 focus:ring-primary/5 hover:border-primary/20 appearance-none cursor-pointer relative z-0 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <option>Small Table (1-2 People)</option>
                    <option>Standard Table (3-4 People)</option>
                    <option>Family Table (5-6 People)</option>
                    <option>Large Party (7+ People)</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-text-muted group-focus-within:text-primary transition-colors z-10">
                    <ChevronDown size={18} />
                  </div>
                </div>
              </div>

              <div className="text-left col-span-1 md:col-span-2 group">
                <label className="block text-xs font-modern font-black text-secondary uppercase tracking-[0.2em] mb-2 group-focus-within:text-primary transition-colors">
                  Message / Special Requests
                </label>
                <div className="relative">
                  <MessageSquare
                    className="absolute left-4 top-6 text-text-muted group-focus-within:text-primary transition-colors"
                    size={18}
                  />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full p-4.5 pl-12 bg-surface-hover border-[0.5px] border-secondary/10 rounded-2xl text-text-main transition-all focus:outline-none focus:border-primary/40 focus:bg-white focus:ring-4 focus:ring-primary/5 min-h-[160px] resize-y hover:border-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Let us know about dietary requirements, special occasions, or table preferences..."
                  />
                </div>
              </div>
              <div className="col-span-1 md:col-span-2 flex justify-center mt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary text-white py-4 px-12 text-base font-modern font-black rounded-2xl uppercase tracking-[0.2em] transition-all hover:bg-primary-light hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(239,68,68,0.3)] active:translate-y-0 active:shadow-md disabled:opacity-50 disabled:translate-y-0 disabled:shadow-none disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Secure Your Table"}
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
