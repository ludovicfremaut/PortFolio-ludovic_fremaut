import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Envoi en cours...");
    setTimeout(() => {
      console.log("Message envoyé", formData);
      setStatus("Message envoyé avec succès !");
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
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

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-slate-900 p-8 rounded-xl space-y-6"
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

        {status && (
          <p className="text-sm text-center text-slate-300 mt-2">{status}</p>
        )}
      </form>
    </motion.section>
  );
}
