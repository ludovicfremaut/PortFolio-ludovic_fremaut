import emailjs from '@emailjs/browser';

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export const sendContactForm = async (data: ContactFormData) => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID!;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID!;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY!;

  const now = new Date();
  const time = now.toLocaleString("fr-FR", {
    dateStyle: "short",
    timeStyle: "short",
  });

  const params = {
    ...data,
    time, // injecté dans l’email pour {{time}}
  };

  return emailjs.send(serviceId, templateId, params, publicKey);
};
