"use client";

import { useState, useRef, useEffect } from "react";
import {
  User,
  Phone,
  Mail,
  Users,
  MessageSquare,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  X,
  CalendarDays,
  Check,
  Calendar,
} from "lucide-react";
import toast from "react-hot-toast";

export default function CateringForm() {
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
  const [isSent, setIsSent] = useState(false);
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

  const isFormValid =
    formData.name.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.phone.trim() !== "" &&
    formData.date !== "" &&
    formData.guests !== "";

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
    // Construct date string explicitly in local time (YYYY-MM-DD)
    const formattedDate = `${selectedYear}-${String(selectedMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    setFormData((prev) => ({ ...prev, date: formattedDate }));
    setIsCalendarOpen(false);
  };

  const formatDisplayDate = (dateString: string) => {
    if (!dateString) return "";
    // Parse the date string manually to avoid timezone issues with `new Date("YYYY-MM-DD")` (which is UTC)
    const [year, month, day] = dateString.split("-").map(Number);
    const date = new Date(year, month - 1, day);
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

    // Prevent submission if form is invalid (extra safety)
    if (!isFormValid) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    setIsSent(false);

    try {
      const aggregatedMessage = `CATERING REQUEST | Phone: ${formData.phone} | Date: ${formData.date} | Guests: ${formData.guests} | Message: ${formData.message}`;
      const submitData = {
        name: formData.name,
        email: formData.email,
        message: aggregatedMessage,
        // Disable captcha to prevent redirect issues
        _captcha: "false",
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

      if (response.ok) {
        toast.success("Catering inquiry sent! We'll allow 24hrs for a quote.", {
          duration: 5000,
          position: "bottom-right",
          style: { background: "#10b981", color: "#fff", fontWeight: "bold" },
          icon: <Check />,
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
      toast.error("Failed to send inquiry. Please check your connection.", {
        duration: 5000,
        position: "bottom-right",
        style: { background: "#ef4444", color: "#fff", fontWeight: "bold" },
        icon: <X />,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
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
              {formData.date ? formatDisplayDate(formData.date) : "Select date"}
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
                    <ChevronLeft size={16} className="text-text-muted" />
                  </button>
                  <div className="font-modern font-black text-xs uppercase tracking-wider text-secondary">
                    {new Date(selectedYear, selectedMonth).toLocaleDateString(
                      "en-US",
                      {
                        month: "long",
                        year: "numeric",
                      },
                    )}
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
                    <ChevronRight size={16} className="text-text-muted" />
                  </button>
                </div>

                {/* Days Header */}
                <div className="grid grid-cols-7 gap-0 mb-1">
                  {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                    <div
                      key={day}
                      className="text-center text-[10px] font-bold text-text-muted"
                    >
                      {day}
                    </div>
                  ))}
                </div>

                {/* Days Grid */}
                <div className="grid grid-cols-7 gap-0.5">
                  {Array.from({
                    length: getFirstDayOfMonth(selectedMonth, selectedYear),
                  }).map((_, i) => (
                    <div key={`empty-${i}`} />
                  ))}
                  {Array.from({
                    length: getDaysInMonth(selectedMonth, selectedYear),
                  }).map((_, i) => {
                    const day = i + 1;
                    const dateStr = `${selectedYear}-${String(selectedMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
                    const isSelected = formData.date === dateStr;
                    const isToday =
                      new Date().toDateString() ===
                      new Date(selectedYear, selectedMonth, day).toDateString();

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
            // Disabled if submitting, sent, or if form is incomplete
            disabled={isSubmitting || isSent || !isFormValid}
            className={`w-full md:w-auto text-white py-4 px-10 text-base font-modern font-black rounded-2xl uppercase tracking-[0.2em] transition-all
              ${
                isSent
                  ? "bg-green-600 hover:bg-green-700 shadow-none scale-100"
                  : "bg-primary hover:bg-primary-light hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(239,68,68,0.3)] active:translate-y-0 active:shadow-md"
              }
              disabled:opacity-50 disabled:translate-y-0 disabled:shadow-none disabled:cursor-not-allowed`}
          >
            {isSubmitting ? (
              "Sending..."
            ) : isSent ? (
              <span className="flex items-center gap-2">
                <Check size={20} strokeWidth={3} /> Inquiry Sent!
              </span>
            ) : (
              "Inquiry"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
