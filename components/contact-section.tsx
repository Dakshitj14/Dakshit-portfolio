"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MagicCard } from "@/components/magic/magic-card";
import { ShimmerButton } from "@/components/magic/shimmer-button";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

type ToastState = {
  show: boolean;
  type: "success" | "error";
  message: string;
} | null;

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState<ToastState>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const showToast = (type: "success" | "error", message: string) => {
    setToast({ show: true, type, message });
    setTimeout(() => {
      setToast(null);
    }, 4500);
  };

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.subject.trim()) tempErrors.subject = "Subject is required";
    if (!formData.message.trim()) tempErrors.message = "Message is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return; // Prevent duplicate submissions

    if (!validate()) {
      showToast("error", "Please fix the errors in the form.");
      return;
    }

    setIsLoading(true);

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS environment variables are missing.");
      }

      // Template parameters matching EmailJS template variables
      const templateParams = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      showToast("success", "Thank you! Your message has been sent successfully.");
      
      // Reset Form State
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setErrors({});
    } catch (error) {
      console.error("EmailJS Error:", error);
      showToast("error", "Failed to send message. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 px-6 max-w-4xl mx-auto border-t border-zinc-200/50 dark:border-zinc-900 relative">
      {/* Toast Notification Stack */}
      <div className="fixed top-6 right-6 z-50 flex flex-col gap-2 max-w-md w-full">
        <AnimatePresence>
          {toast && toast.show && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              className={`p-4 rounded-xl border backdrop-blur-md shadow-2xl flex items-start gap-3 ${
                toast.type === "success"
                  ? "bg-emerald-950/80 border-emerald-500/30 text-emerald-200"
                  : "bg-rose-950/80 border-rose-500/30 text-rose-200"
              }`}
            >
              {toast.type === "success" ? (
                <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="h-5 w-5 text-rose-400 shrink-0 mt-0.5" />
              )}
              <div>
                <p className="font-bold text-sm">
                  {toast.type === "success" ? "Message Sent" : "Submission Failed"}
                </p>
                <p className="text-xs opacity-90 mt-1">{toast.message}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-outfit text-3xl font-bold md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400"
        >
          Get In Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-zinc-400 text-base mt-2 max-w-xl mx-auto"
        >
          Have a question or want to work together? Submit the form below to email me directly.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <MagicCard
          className="rounded-2xl border-zinc-900/50 bg-zinc-950/20 p-8 shadow-2xl transition-all duration-300"
          gradientColor="rgba(99, 102, 241, 0.05)"
          gradientFrom="#4f46e5"
          gradientTo="#818cf8"
        >
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 text-left">
            <div className="grid gap-6 sm:grid-cols-2">
              {/* Name Field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-semibold text-zinc-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  disabled={isLoading}
                  autoComplete="name"
                  className={`w-full px-4 py-3 rounded-xl bg-zinc-900/50 border text-white font-sans text-sm focus:outline-none transition-all duration-200 ${
                    errors.name
                      ? "border-rose-500/50 focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                      : "border-zinc-800/80 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  }`}
                />
                {errors.name && (
                  <span className="text-xs text-rose-400 flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" /> {errors.name}
                  </span>
                )}
              </div>

              {/* Email Field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-semibold text-zinc-300">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={isLoading}
                  autoComplete="email"
                  className={`w-full px-4 py-3 rounded-xl bg-zinc-900/50 border text-white font-sans text-sm focus:outline-none transition-all duration-200 ${
                    errors.email
                      ? "border-rose-500/50 focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                      : "border-zinc-800/80 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  }`}
                />
                {errors.email && (
                  <span className="text-xs text-rose-400 flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" /> {errors.email}
                  </span>
                )}
              </div>
            </div>

            {/* Subject Field */}
            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="text-sm font-semibold text-zinc-300">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                disabled={isLoading}
                className={`w-full px-4 py-3 rounded-xl bg-zinc-900/50 border text-white font-sans text-sm focus:outline-none transition-all duration-200 ${
                  errors.subject
                    ? "border-rose-500/50 focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                    : "border-zinc-800/80 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                }`}
              />
              {errors.subject && (
                <span className="text-xs text-rose-400 flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" /> {errors.subject}
                </span>
              )}
            </div>

            {/* Message Field */}
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-semibold text-zinc-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                disabled={isLoading}
                rows={5}
                className={`w-full px-4 py-3 rounded-xl bg-zinc-900/50 border text-white font-sans text-sm focus:outline-none resize-none transition-all duration-200 ${
                  errors.message
                    ? "border-rose-500/50 focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                    : "border-zinc-800/80 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                }`}
              />
              {errors.message && (
                <span className="text-xs text-rose-400 flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" /> {errors.message}
                </span>
              )}
            </div>

            {/* Shimmer Submit Button */}
            <div className="pt-2 flex justify-end">
              <ShimmerButton
                type="submit"
                disabled={isLoading}
                shimmerColor="#818cf8"
                background={isLoading ? "#27272a" : "linear-gradient(to right, #4f46e5, #6366f1)"}
                className={`font-semibold text-white px-8 py-3.5 w-full sm:w-auto ${
                  isLoading ? "cursor-not-allowed opacity-75" : ""
                }`}
              >
                <span className="flex items-center justify-center gap-2">
                  {isLoading ? (
                    <>
                      Sending... <Loader2 className="h-4 w-4 animate-spin" />
                    </>
                  ) : (
                    <>
                      Send Message <Send className="h-4 w-4" />
                    </>
                  )}
                </span>
              </ShimmerButton>
            </div>
          </form>
        </MagicCard>
      </motion.div>
    </section>
  );
}
