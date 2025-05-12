import React, { useState } from 'react'
import { motion } from 'framer-motion';

export const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('Envoie en cours ...');
        setTimeout(() => {
            console.log("Message envoyé", formData);
            setStatus('Message envoyé avec succès !');
            setFormData({ name: '', email: '', message: '' });
    }, 1000);
  return (
    <motion.section
        id="contact"
        className="min-h-screen px-4 py-20 bg-slate-800 text-slate-100 flex flex-col items-center justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
    >
    </motion.section>
  )


}
