"use client";

import { useState, useRef, useEffect } from "react";
import { motion, Variants } from "framer-motion";
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
  Check, // Added Check icon for the sent state
} from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

export default function CateringProcess() {
  // --- Original Steps Data ---
  const steps = [
    "Inquire online or give us a call with your event details.",
    "Consult with our catering manager for menu selection.",
    "Receive a personalized quote and confirm your booking.",
    "We arrive at your venue and deliver the charcoal magic!",
  ];

  // --- Form State & Logic ---
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    guests: "20-50 Guests",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false); // <--- NEW STATE
  const [isGuestsOpen, setIsGuestsOpen] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const guestsRef = useRef<HTMLDivElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);

  const guestOptions = [
    "10-20 Guests (Small Gathering)",
    "20-50 Guests (Medium Event)",
    "50-100 Guests (Large Event)",
    "100+ Guests (Grand Event)",
  ];

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        guestsRef.current &&
        !guestsRef.current.contains(event.target as Node)
      ) {
        setIsGuestsOpen(false);
      }
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target as Node)
      ) {
        setIsCalendarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Calendar Helpers
  const getDaysInMonth = (month: number, year: number) =>
    new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (month: number, year: number) =>
    new Date(year, month, 1).getDay();

  const handleDateSelect = (day: number) => {
    const date = new Date(selectedYear, selectedMonth, day);
    const formattedDate = date.toISOString().split("T")[0];
    setFormData((prev) => ({ ...prev, date: formattedDate }));
    setIsCalendarOpen(false);
  };

  const formatDisplayDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSent(false);

    try {
      const aggregatedMessage = `CATERING REQUEST | Phone: ${formData.phone} | Date: ${formData.date} | Guests: ${formData.guests} | Message: ${formData.message}`;
      const submitData = new FormData();
      submitData.append("name", formData.name);
      submitData.append("email", formData.email);
      submitData.append("message", aggregatedMessage);

      const response = await fetch(
        "https://formsubmit.co/milan.201420@ncit.edu.np",
        {
          method: "POST",
          body: submitData,
          headers: { Accept: "application/json" },
        },
      );

      if (response.ok) {
        toast.success("Catering inquiry sent! We'll allow 24hrs for a quote.", {
          duration: 5000,
          position: "bottom-right",
          style: { background: "#10b981", color: "#fff", fontWeight: "bold" },
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          guests: "20-50 Guests",
          message: "",
        });

        // --- Success Logic ---
        setIsSent(true);
        // Reset the button back to default after 3 seconds
        setTimeout(() => setIsSent(false), 3000);
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      toast.error("Failed to send inquiry. Please try again.", {
        duration: 5000,
        position: "bottom-right",
        style: { background: "#ef4444", color: "#fff", fontWeight: "bold" },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // --- ANIMATIONS (Optimized for smoothness) ---
  const slideInContainer: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0, // No delay prevents the "pause"
      },
    },
  };

  const slideInItem: Variants = {
    hidden: {
      x: -40,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 90, // Lower stiffness (was 480) for smoother momentum
        damping: 14, // Lower damping to prevent stopping mid-air
        mass: 1,
      },
    },
  };

  const formAnimation: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
      },
    },
  };

  return (
    <div className="py-20 md:py-24 bg-background">
      <Toaster />
      <div className="container mx-auto px-4 max-w-[1540px]">
        {/* Grid Layout: Left (Form) - Right (Process) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* --- LEFT COLUMN: Booking Form (Takes 7/12 columns) --- */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={formAnimation}
            className="lg:col-span-7 order-2 lg:order-1"
            id="catering-form"
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-5xl font-modern font-black text-secondary uppercase tracking-tighter">
                Start Your{" "}
                <span className="text-primary font-artistic normal-case text-5xl md:text-6xl inline-block -rotate-2">
                  Order
                </span>
              </h3>
              <p className="text-secondary/60 mt-4 font-medium max-w-xl mx-auto">
                Fill out the details below to request a quote. Our team will
                review your requirements and get back to you within 24 hours.
              </p>
            </div>

            <div className="shadow-[0_10px_40px_rgba(0,0,0,0.1)] rounded-3xl overflow-hidden border-[0.5px] border-secondary/20">
              <form
                className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 md:p-10"
                onSubmit={handleSubmit}
              >
                {/* Name Field */}
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
                      disabled={isSubmitting || isSent}
                      className="w-full p-4 pl-12 bg-surface-hover border-[0.5px] border-secondary/10 rounded-2xl text-text-main transition-all focus:outline-none focus:border-primary/40 focus:bg-white focus:ring-4 focus:ring-primary/5 hover:border-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="e.g. Alexander Hamilton"
                    />
                  </div>
                </div>

                {/* Email Field */}
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
                      disabled={isSubmitting || isSent}
                      className="w-full p-4 pl-12 bg-surface-hover border-[0.5px] border-secondary/10 rounded-2xl text-text-main transition-all focus:outline-none focus:border-primary/40 focus:bg-white focus:ring-4 focus:ring-primary/5 hover:border-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="e.g. alex@example.com"
                    />
                  </div>
                </div>

                {/* Phone Field */}
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
                      disabled={isSubmitting || isSent}
                      className="w-full p-4 pl-12 bg-surface-hover border-[0.5px] border-secondary/10 rounded-2xl text-text-main transition-all focus:outline-none focus:border-primary/40 focus:bg-white focus:ring-4 focus:ring-primary/5 hover:border-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="e.g. 0400 123 456"
                    />
                  </div>
                </div>

                {/* Date Field */}
                <div className="text-left group">
                  <label className="block text-xs font-modern font-black text-secondary uppercase tracking-[0.2em] mb-2 group-focus-within:text-primary transition-colors">
                    Event Date
                  </label>
                  <div className="relative" ref={calendarRef}>
                    <Calendar
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-primary transition-colors pointer-events-none z-10"
                      size={18}
                    />
                    <button
                      type="button"
                      onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                      disabled={isSubmitting || isSent}
                      className="w-full p-4 pl-12 pr-4 bg-surface-hover border-[0.5px] border-secondary/10 rounded-2xl text-text-main text-left transition-all focus:outline-none focus:border-primary/40 focus:bg-white focus:ring-4 focus:ring-primary/5 hover:border-primary/20 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {formData.date
                        ? formatDisplayDate(formData.date)
                        : "Select date"}
                    </button>

                    {/* Calendar Dropdown */}
                    {isCalendarOpen && (
                      <div className="absolute top-full left-0 mt-2 w-full bg-white border-[0.5px] border-secondary/20 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] p-2 z-50">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-2">
                          <button
                            type="button"
                            onClick={() => {
                              if (selectedMonth === 0) {
                                setSelectedMonth(11);
                                setSelectedYear(selectedYear - 1);
                              } else {
                                setSelectedMonth(selectedMonth - 1);
                              }
                            }}
                            className="p-1 hover:bg-surface-hover rounded-lg transition-colors"
                          >
                            <ChevronLeft
                              size={16}
                              className="text-text-muted"
                            />
                          </button>
                          <div className="font-modern font-black text-xs uppercase tracking-wider text-secondary">
                            {new Date(
                              selectedYear,
                              selectedMonth,
                            ).toLocaleDateString("en-US", {
                              month: "long",
                              year: "numeric",
                            })}
                          </div>
                          <button
                            type="button"
                            onClick={() => {
                              if (selectedMonth === 11) {
                                setSelectedMonth(0);
                                setSelectedYear(selectedYear + 1);
                              } else {
                                setSelectedMonth(selectedMonth + 1);
                              }
                            }}
                            className="p-1 hover:bg-surface-hover rounded-lg transition-colors"
                          >
                            <ChevronRight
                              size={16}
                              className="text-text-muted"
                            />
                          </button>
                        </div>

                        {/* Days Header */}
                        <div className="grid grid-cols-7 gap-0 mb-1">
                          {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(
                            (day) => (
                              <div
                                key={day}
                                className="text-center text-[10px] font-bold text-text-muted"
                              >
                                {day}
                              </div>
                            ),
                          )}
                        </div>

                        {/* Days Grid */}
                        <div className="grid grid-cols-7 gap-0.5">
                          {Array.from({
                            length: getFirstDayOfMonth(
                              selectedMonth,
                              selectedYear,
                            ),
                          }).map((_, i) => (
                            <div key={`empty-${i}`} />
                          ))}
                          {Array.from({
                            length: getDaysInMonth(selectedMonth, selectedYear),
                          }).map((_, i) => {
                            const day = i + 1;
                            const dateStr = new Date(
                              selectedYear,
                              selectedMonth,
                              day,
                            )
                              .toISOString()
                              .split("T")[0];
                            const isSelected = formData.date === dateStr;
                            const isToday =
                              new Date().toDateString() ===
                              new Date(
                                selectedYear,
                                selectedMonth,
                                day,
                              ).toDateString();

                            return (
                              <button
                                key={day}
                                type="button"
                                onClick={() => handleDateSelect(day)}
                                className={`h-7 w-full flex items-center justify-center text-xs rounded-md transition-all ${
                                  isSelected
                                    ? "bg-primary text-white font-bold shadow-sm"
                                    : isToday
                                      ? "bg-primary/10 text-primary font-bold"
                                      : "hover:bg-surface-hover text-text-main"
                                }`}
                              >
                                {day}
                              </button>
                            );
                          })}
                        </div>

                        {/* Footer */}
                        <div className="flex gap-2 mt-2 pt-2 border-t border-secondary/10">
                          <button
                            type="button"
                            onClick={() => {
                              const today = new Date();
                              setSelectedMonth(today.getMonth());
                              setSelectedYear(today.getFullYear());
                              handleDateSelect(today.getDate());
                            }}
                            className="flex-1 flex items-center justify-center gap-1.5 px-2 py-1.5 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-all font-medium text-[10px] uppercase tracking-wider"
                          >
                            <CalendarDays size={12} />
                            Today
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              setFormData((prev) => ({ ...prev, date: "" }));
                              setIsCalendarOpen(false);
                            }}
                            className="flex-1 flex items-center justify-center gap-1.5 px-2 py-1.5 bg-surface-hover text-text-muted rounded-lg hover:bg-secondary/10 transition-all font-medium text-[10px] uppercase tracking-wider"
                          >
                            <X size={12} /> Clear
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Guest Count Field */}
                <div className="text-left group">
                  <label className="block text-xs font-modern font-black text-secondary uppercase tracking-[0.2em] mb-2 group-focus-within:text-primary transition-colors">
                    Estimated Guests
                  </label>
                  <div className="relative" ref={guestsRef}>
                    <Users
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-primary transition-colors pointer-events-none z-10"
                      size={18}
                    />
                    <button
                      type="button"
                      onClick={() => setIsGuestsOpen(!isGuestsOpen)}
                      disabled={isSubmitting || isSent}
                      className="w-full p-4 pl-12 pr-10 bg-surface-hover border-[0.5px] border-secondary/10 rounded-2xl text-text-main text-left transition-all focus:outline-none focus:border-primary/40 focus:bg-white focus:ring-4 focus:ring-primary/5 hover:border-primary/20 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {formData.guests}
                    </button>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-text-muted group-focus-within:text-primary transition-all z-10">
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-300 ${isGuestsOpen ? "rotate-180" : ""}`}
                      />
                    </div>
                    {isGuestsOpen && (
                      <div className="absolute top-full left-0 mt-2 w-full bg-white border-[0.5px] border-secondary/20 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] overflow-hidden z-50">
                        {guestOptions.map((option, index) => (
                          <button
                            key={option}
                            type="button"
                            onClick={() => {
                              setFormData((prev) => ({
                                ...prev,
                                guests: option,
                              }));
                              setIsGuestsOpen(false);
                            }}
                            className={`w-full px-4 py-3 text-left transition-all hover:bg-primary/5 hover:text-primary ${
                              formData.guests === option
                                ? "bg-primary/10 text-primary font-semibold"
                                : "text-text-main"
                            } ${index !== 0 ? "border-t border-secondary/10" : ""}`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Message Field */}
                <div className="text-left col-span-1 md:col-span-2 group">
                  <label className="block text-xs font-modern font-black text-secondary uppercase tracking-[0.2em] mb-2 group-focus-within:text-primary transition-colors">
                    Special Requests
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
                      disabled={isSubmitting || isSent}
                      className="w-full p-4 pl-12 bg-surface-hover border-[0.5px] border-secondary/10 rounded-2xl text-text-main transition-all focus:outline-none focus:border-primary/40 focus:bg-white focus:ring-4 focus:ring-primary/5 min-h-[260px] resize-y hover:border-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="Tell us about the occasion, dietary requirements..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="col-span-1 md:col-span-2 flex justify-center mt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting || isSent}
                    className={`w-full md:w-auto text-white py-4 px-10 text-base font-modern font-black rounded-2xl uppercase tracking-[0.2em] transition-all
                      ${
                        isSent
                          ? "bg-green-600 hover:bg-green-700 shadow-none scale-100"
                          : "bg-primary hover:bg-primary-light hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(239,68,68,0.3)] active:translate-y-0 active:shadow-md"
                      }
                      disabled:opacity-70 disabled:translate-y-0 disabled:shadow-none disabled:cursor-not-allowed`}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : isSent ? (
                      <span className="flex items-center gap-2">
                        <Check size={20} strokeWidth={3} /> Inquiry Sent!
                      </span>
                    ) : (
                      "Book an Event"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>

          {/* --- RIGHT COLUMN: How It Works (Takes 5/12 columns) --- */}
          <div className="lg:col-span-5 order-1 lg:order-2 h-fit lg:self-center border-l border-secondary/20 pl-10 overflow-hidden py-4">
            <motion.div
              variants={slideInContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.h2
                variants={slideInItem}
                className="text-4xl md:text-5xl font-modern font-black text-secondary uppercase tracking-tighter mb-10 leading-none"
              >
                How It{" "}
                <span className="font-artistic text-primary normal-case text-5xl md:text-6xl inline-block -rotate-2">
                  Works
                </span>
              </motion.h2>

              <div className="space-y-6">
                {steps.map((step, i) => (
                  <motion.div
                    key={i}
                    variants={slideInItem}
                    className="flex items-start gap-5 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm transition-transform hover:-translate-y-1 duration-300"
                  >
                    <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-modern font-black text-lg shrink-0 shadow-lg shadow-primary/30 mt-1">
                      {i + 1}
                    </div>
                    <p className="text-base font-modern text-secondary font-medium leading-relaxed">
                      {step}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Decorative note */}
              <motion.div
                variants={slideInItem}
                className="mt-10 p-6 bg-secondary/5 rounded-2xl border border-dashed border-secondary/20"
              >
                <p className="font-modern text-secondary/80 text-sm font-semibold italic">
                  "We handle the fire, you handle the fun. Our team arrives 2
                  hours prior to service to set up."
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
