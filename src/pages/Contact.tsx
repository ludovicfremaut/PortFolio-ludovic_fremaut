import React, { useState } from "react";
import { motion } from "framer-motion";
import GameCanvas from "../components/GameCanvas";
import { sendContactForm } from "../services/contactService";
import confetti from 'canvas-confetti';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    website: "", // honeypot
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 🕵️ Honeypot check
    if (formData.website.trim() !== "") {
      console.warn("Tentative de spam détectée");
      setStatus("Une erreur est survenue.");
      return;
    }

    setStatus("Envoi en cours...");

    try {
      await sendContactForm({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      });

      setStatus("Message envoyé avec succès !");
      setFormData({ name: "", email: "", message: "", website: "" });
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
      
    } catch (err) {
      console.error("Erreur lors de l’envoi :", err);
      setStatus("Erreur lors de l’envoi du message.");
    }
  };

  return (
    <motion.section
      id="contact"
      className="scroll-mt-40 min-h-screen px-4 py-20 bg-slate-800/60 text-white flex flex-col items-center justify-center"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold text-cyan-400 mb-8">Me contacter</h2>

      <div className="flex flex-col lg:flex-row gap-8 max-w-6xl w-full">
        {/* Game */}
        <div className="flex-1 min-h-[600px] bg-slate-900 rounded-xl p-4">
          <GameCanvas />
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 min-h-[600px] bg-slate-900 p-8 rounded-xl space-y-4 flex flex-col"
        >
          <input
            type="text"
            name="name"
            placeholder="Nom"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded bg-slate-700 placeholder-slate-400 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded bg-slate-700 placeholder-slate-400 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            required
          />

          {/* Champ honeypot invisible */}
          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleChange}
            className="absolute left-[-9999px]"
            tabIndex={-1}
            autoComplete="off"
          />

          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className="w-full p-3 rounded bg-slate-700 placeholder-slate-400 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            required
          />

          <button
            type="submit"
            className="w-full py-3 rounded bg-cyan-500 hover:bg-cyan-600 transition text-white font-semibold"
          >
            Envoyer
          </button>

          <p className="text-xs text-slate-400 italic text-center mt-2">
            Les données envoyées via ce formulaire ne sont pas stockées et servent uniquement à vous répondre par e-mail.
          </p>

          {status && (
            <motion.p
              className={`text-sm text-center mt-2 ${
                status.includes("succès") ? "text-green-400" : "text-red-400"
              }`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {status}
            </motion.p>
          )}
        </form>
      </div>
    </motion.section>
  );
}
