"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section className="py-24 bg-background" id="order">
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

          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-surface p-8 md:p-12 rounded-xl border border-border"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="text-left">
              <label className="block text-sm text-text-muted mb-2">Name</label>
              <input
                type="text"
                className="w-full p-4 bg-background border border-border rounded-md text-text-main transition-colors focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder="John Doe"
              />
            </div>
            <div className="text-left">
              <label className="block text-sm text-text-muted mb-2">
                Phone
              </label>
              <input
                type="tel"
                className="w-full p-4 bg-background border border-border rounded-md text-text-main transition-colors focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder="0400 000 000"
              />
            </div>
            <div className="text-left">
              <label className="block text-sm text-text-muted mb-2">Date</label>
              <input
                type="date"
                className="w-full p-4 bg-background border border-border rounded-md text-text-main transition-colors focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>
            <div className="text-left">
              <label className="block text-sm text-text-muted mb-2">
                Guests
              </label>
              <select className="w-full p-4 bg-background border border-border rounded-md text-text-main transition-colors focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary">
                <option>2 People</option>
                <option>4 People</option>
                <option>Large Group</option>
              </select>
            </div>
            <div className="text-left col-span-1 md:col-span-2">
              <label className="block text-sm text-text-muted mb-2">
                Message / Special Requests
              </label>
              <textarea
                className="w-full p-4 bg-background border border-border rounded-md text-text-main transition-colors focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary min-h-[120px] resize-y"
                placeholder="Any dietary requirements?"
              />
            </div>
            <button
              type="submit"
              className="col-span-1 md:col-span-2 bg-primary text-white p-4 font-semibold rounded-md uppercase tracking-wide transition-colors hover:bg-primary-light mt-4"
            >
              Submit Request
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
