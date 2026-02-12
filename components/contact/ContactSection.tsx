"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  User,
  Phone,
  Mail,
  Calendar,
  Users,
  MessageSquare,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  X,
  CalendarDays,
  Check,
} from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Check if all required fields are filled (Message is optional)
  const isFormValid =
    formData.name.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.phone.trim() !== "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Double check validation on submit just in case
    if (!isFormValid) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Construct the aggregated message
      const aggregatedMessage = `Phone: ${formData.phone} | Message: ${formData.message}`;

      // Create JSON payload
      const submitData = {
        name: formData.name,
        email: formData.email,
        message: aggregatedMessage,
        // IMPORTANT: Disable captcha to prevent AJAX redirects which cause failures
        _captcha: "false",
        _subject: "Order Request",
      };

      const response = await fetch(
        "https://us-central1-contact-from-470814.cloudfunctions.net/contactForm",
        {
          method: "POST",
          body: JSON.stringify(submitData),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        },
      );

      // Explicitly check for HTTP errors (4xx or 5xx)
      if (!response.ok) {
        throw new Error(`Server responded with ${response.status}`);
      }

      // If we get here, it was successful
      toast.success(
        "Order request sent successfully! We'll contact you shortly.",
        {
          duration: 5000,
          position: "bottom-right",
          style: {
            background: "#10b981",
            color: "#fff",
            fontWeight: "bold",
          },
          icon: <Check />,
        },
      );

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);

      toast.error("Failed to send order. Please check your connection.", {
        duration: 5000,
        position: "bottom-right",
        style: {
          background: "#ef4444",
          color: "#fff",
          fontWeight: "bold",
        },
        icon: <X />,
      });
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
    <section className="py-24 bg-[#faf9f6]" id="order">
      <Toaster />
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-modern font-black text-stone-900 mb-12 uppercase tracking-tighter">
            Order
            <span className="font-artistic text-primary normal-case text-5xl md:text-7xl inline-block rotate-[-2deg] ml-2 mt-2">
              Online
            </span>
          </h2>

          <div className="max-w-4xl mx-auto shadow-[0_10px_40px_rgba(0,0,0,0.1)] rounded-3xl overflow-hidden border-[0.5px] border-stone-200">
            <form
              className="grid grid-cols-1 md:grid-cols-2 gap-7 bg-white p-8 md:p-14"
              onSubmit={handleSubmit}
            >
              <div className="text-left group md:col-span-2">
                <label className="block text-xs font-modern font-black text-stone-500 uppercase tracking-[0.2em] mb-2 group-focus-within:text-primary transition-colors">
                  Your Full Name
                </label>
                <div className="relative">
                  <User
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 group-focus-within:text-primary transition-colors"
                    size={18}
                  />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full p-4.5 pl-12 bg-stone-50 border-[0.5px] border-stone-200 rounded-2xl text-stone-900 transition-all focus:outline-none focus:border-primary/40 focus:bg-white focus:ring-4 focus:ring-primary/5 hover:border-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="e.g. Alexander Hamilton"
                  />
                </div>
              </div>

              <div className="text-left group">
                <label className="block text-xs font-modern font-black text-stone-500 uppercase tracking-[0.2em] mb-2 group-focus-within:text-primary transition-colors">
                  Email Address
                </label>
                <div className="relative">
                  <Mail
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 group-focus-within:text-primary transition-colors"
                    size={18}
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full p-4.5 pl-12 bg-stone-50 border-[0.5px] border-stone-200 rounded-2xl text-stone-900 transition-all focus:outline-none focus:border-primary/40 focus:bg-white focus:ring-4 focus:ring-primary/5 hover:border-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="e.g. alex@example.com"
                  />
                </div>
              </div>

              <div className="text-left group">
                <label className="block text-xs font-modern font-black text-stone-500 uppercase tracking-[0.2em] mb-2 group-focus-within:text-primary transition-colors">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 group-focus-within:text-primary transition-colors"
                    size={18}
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full p-4.5 pl-12 bg-stone-50 border-[0.5px] border-stone-200 rounded-2xl text-stone-900 transition-all focus:outline-none focus:border-primary/40 focus:bg-white focus:ring-4 focus:ring-primary/5 hover:border-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="e.g. 0400 123 456"
                  />
                </div>
              </div>
              {/* Message */}
              <div className="text-left col-span-1 md:col-span-2 group">
                <label className="block text-xs font-modern font-black text-stone-500 uppercase tracking-[0.2em] mb-2 group-focus-within:text-primary transition-colors">
                  Message / Special Requests
                </label>
                <div className="relative">
                  <MessageSquare
                    className="absolute left-4 top-6 text-stone-400 group-focus-within:text-primary transition-colors"
                    size={18}
                  />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="w-full p-4.5 pl-12 bg-stone-50 border-[0.5px] border-stone-200 rounded-2xl text-stone-900 transition-all focus:outline-none focus:border-primary/40 focus:bg-white focus:ring-4 focus:ring-primary/5 min-h-[260px] resize-y hover:border-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Let us know about any dietary requirements, or preferences..."
                  />
                </div>
              </div>
              <div className="col-span-1 md:col-span-2 flex justify-center mt-4">
                <button
                  type="submit"
                  disabled={isSubmitting || !isFormValid}
                  className="bg-primary text-white py-4 px-12 text-base font-modern font-black rounded-2xl uppercase tracking-[0.2em] transition-all hover:bg-primary-light hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(239,68,68,0.3)] active:translate-y-0 active:shadow-md disabled:opacity-50 disabled:translate-y-0 disabled:shadow-none disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
