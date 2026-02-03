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
  const [isGuestsOpen, setIsGuestsOpen] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const guestsRef = useRef<HTMLDivElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);

  const guestOptions = [
    "Small Table (1-2 People)",
    "Standard Table (3-4 People)",
    "Family Table (5-6 People)",
    "Large Party (7+ People)",
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

  // Generate calendar days
  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };

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
            position: "bottom-right",
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
        position: "bottom-right",
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
            <span className="font-artistic text-primary normal-case text-5xl md:text-8xl inline-block rotate-[-2deg] mt-2">
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
                <div className="relative" ref={calendarRef}>
                  <Calendar
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-primary transition-colors pointer-events-none z-10"
                    size={18}
                  />
                  <button
                    type="button"
                    onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                    disabled={isSubmitting}
                    className="w-full p-4.5 pl-12 pr-4 bg-surface-hover border-[0.5px] border-secondary/10 rounded-2xl text-text-main text-left transition-all focus:outline-none focus:border-primary/40 focus:bg-white focus:ring-4 focus:ring-primary/5 hover:border-primary/20 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formData.date
                      ? formatDisplayDate(formData.date)
                      : "Select a date"}
                  </button>

                  {isCalendarOpen && (
                    <div className="absolute top-full left-0 mt-2 w-full bg-white border-[0.5px] border-secondary/20 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] p-3 z-50">
                      {/* Month/Year Navigation */}
                      <div className="flex items-center justify-between mb-3">
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
                          className="p-2 hover:bg-surface-hover rounded-lg transition-colors"
                        >
                          <ChevronLeft size={18} className="text-text-muted" />
                        </button>
                        <div className="font-modern font-black text-sm uppercase tracking-wider text-secondary">
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
                          className="p-2 hover:bg-surface-hover rounded-lg transition-colors"
                        >
                          <ChevronRight size={18} className="text-text-muted" />
                        </button>
                      </div>

                      {/* Day Labels */}
                      <div className="grid grid-cols-7 gap-0.5 mb-1">
                        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(
                          (day) => (
                            <div
                              key={day}
                              className="text-center text-[10px] font-bold text-text-muted py-0.5"
                            >
                              {day}
                            </div>
                          ),
                        )}
                      </div>

                      {/* Calendar Days */}
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
                          const today = new Date();
                          const isToday =
                            today.getDate() === day &&
                            today.getMonth() === selectedMonth &&
                            today.getFullYear() === selectedYear;

                          return (
                            <button
                              key={day}
                              type="button"
                              onClick={() => handleDateSelect(day)}
                              className={`aspect-square flex items-center justify-center text-xs rounded-md transition-all ${
                                isSelected
                                  ? "bg-primary text-white font-bold shadow-md"
                                  : isToday
                                    ? "bg-primary/10 text-primary font-semibold"
                                    : "hover:bg-surface-hover text-text-main"
                              }`}
                            >
                              {day}
                            </button>
                          );
                        })}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2 mt-3 pt-3 border-t border-secondary/10">
                        <button
                          type="button"
                          onClick={() => {
                            const today = new Date();
                            setSelectedMonth(today.getMonth());
                            setSelectedYear(today.getFullYear());
                            handleDateSelect(today.getDate());
                          }}
                          className="flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-all font-medium text-xs"
                        >
                          <CalendarDays size={14} />
                          Today
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setFormData((prev) => ({ ...prev, date: "" }));
                            setIsCalendarOpen(false);
                          }}
                          className="flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 bg-surface-hover text-text-muted rounded-lg hover:bg-secondary/10 hover:text-secondary transition-all font-medium text-xs"
                        >
                          <X size={14} />
                          Clear
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="text-left group">
                <label className="block text-xs font-modern font-black text-secondary uppercase tracking-[0.2em] mb-2 group-focus-within:text-primary transition-colors">
                  Number of Guests
                </label>
                <div className="relative" ref={guestsRef}>
                  <Users
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-primary transition-colors pointer-events-none z-10"
                    size={18}
                  />
                  <button
                    type="button"
                    onClick={() => setIsGuestsOpen(!isGuestsOpen)}
                    disabled={isSubmitting}
                    className="w-full p-4.5 pl-12 pr-10 bg-surface-hover border-[0.5px] border-secondary/10 rounded-2xl text-text-main text-left transition-all focus:outline-none focus:border-primary/40 focus:bg-white focus:ring-4 focus:ring-primary/5 hover:border-primary/20 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
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
                    className="w-full p-4.5 pl-12 bg-surface-hover border-[0.5px] border-secondary/10 rounded-2xl text-text-main transition-all focus:outline-none focus:border-primary/40 focus:bg-white focus:ring-4 focus:ring-primary/5 min-h-[260px] resize-y hover:border-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
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
