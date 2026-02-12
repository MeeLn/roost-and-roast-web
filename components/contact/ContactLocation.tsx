"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Image from "next/image";

export default function ContactLocation() {
  return (
    <section className="py-24 bg-surface-hover">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div
            className="flex-1 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-modern font-black text-secondary uppercase tracking-tighter mb-6">
                Where to{" "}
                <span className="text-primary italic font-artistic normal-case text-6xl">
                  Find Us
                </span>
              </h2>
              <p className="text-lg text-text-muted leading-relaxed">
                Located in the heart of Foodville, our doors are always open for
                those seeking the authentic taste of charcoal-fired chicken.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-white rounded-xl text-primary shadow-sm border border-primary/10 transition-transform group-hover:scale-110">
                    <MapPin size={24} />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="font-modern font-bold text-secondary uppercase tracking-wide text-xs">
                      Location
                    </h4>
                    <p className="text-text-main text-sm font-medium">
                      West Gosford Shopping Village, 23/299 Brisbane Water Drive
                      West Gosford NSW, 2250
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-white rounded-xl text-primary shadow-sm border border-primary/10 transition-transform group-hover:scale-110">
                    <Phone size={24} />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="font-modern font-bold text-secondary uppercase tracking-wide text-xs">
                      Call Us
                    </h4>
                    <p className="text-text-main text-sm font-medium">
                      +61 02 43427887
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-white rounded-xl text-primary shadow-sm border border-primary/10 transition-transform group-hover:scale-110">
                    <Mail size={24} />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="font-modern font-bold text-secondary uppercase tracking-wide text-xs">
                      Email
                    </h4>
                    <p className="text-text-main text-sm font-medium">
                      info@roostnroast.com.au
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-white rounded-xl text-secondary shadow-sm border border-secondary/10 transition-transform group-hover:scale-110">
                    <Clock size={24} />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="font-modern font-bold text-secondary uppercase tracking-wide text-xs">
                      Hours
                    </h4>
                    <p className="text-text-main text-sm font-medium">
                      Mon-Sun: 9am-8pm
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 flex items-center">
                <div className="h-full max-h-[360px] md:w-auto w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412.345678901234!2d151.2093!3d-33.8688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae40!2sSydney%20CBD!5e0!3m2!1sen!2sau!4v1234567890123"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-xl border border-border shadow-sm grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex-1 w-full"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/contact/roasted-chicken-slider.jpeg"
                alt="Restaurant Exterior"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-secondary/10 pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
