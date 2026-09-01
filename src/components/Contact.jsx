import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import SectionHeading from "./SectionHeading";

const initial = { name: "", email: "", phone: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.email.trim()) {
      e.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) e.message = "Please write a short message.";
    return e;
  };

  const handleChange = (field) => (ev) => {
    setForm((f) => ({ ...f, [field]: ev.target.value }));
    setErrors((er) => ({ ...er, [field]: undefined }));
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) {
      // Ready for future backend integration.
      setSubmitted(true);
      setForm(initial);
    }
  };

  const fieldClass = (field) =>
    `w-full bg-cream border rounded-xl px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/40 outline-none transition-colors focus:border-forest ${
      errors[field] ? "border-red-400" : "border-forest/20"
    }`;

  return (
    <section id="contact" className="py-24 md:py-32 bg-cream-soft/60">
      <div className="container-farm grid lg:grid-cols-2 gap-14 lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="Let's Connect"
            title="Get in Touch."
            subtitle="Send an inquiry about the farm and we'll get back to you."
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          {submitted ? (
            <div className="flex flex-col items-start gap-4 bg-white/60 rounded-2xl p-8 border border-forest/10">
              <CheckCircle2 size={32} className="text-forest" strokeWidth={1.5} />
              <p className="font-display text-2xl text-forest">Thank you.</p>
              <p className="text-charcoal/70 text-sm leading-relaxed">
                Your inquiry has been received. We'll be in touch soon.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-sm text-forest border-b border-forest/40 hover:border-forest"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm text-charcoal/70 mb-1.5 block">Name</label>
                  <input
                    value={form.name}
                    onChange={handleChange("name")}
                    className={fieldClass("name")}
                    placeholder="Your name"
                  />
                  {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="text-sm text-charcoal/70 mb-1.5 block">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={handleChange("email")}
                    className={fieldClass("email")}
                    placeholder="you@email.com"
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm text-charcoal/70 mb-1.5 block">Phone</label>
                  <input
                    value={form.phone}
                    onChange={handleChange("phone")}
                    className={fieldClass("phone")}
                    placeholder="Optional"
                  />
                </div>
                <div>
                  <label className="text-sm text-charcoal/70 mb-1.5 block">Subject</label>
                  <input
                    value={form.subject}
                    onChange={handleChange("subject")}
                    className={fieldClass("subject")}
                    placeholder="Optional"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-charcoal/70 mb-1.5 block">Message</label>
                <textarea
                  value={form.message}
                  onChange={handleChange("message")}
                  rows={5}
                  className={fieldClass("message")}
                  placeholder="Tell us what you'd like to know"
                />
                {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="mt-2 self-start inline-flex items-center gap-2 bg-forest text-cream px-7 py-3.5 rounded-full text-sm tracking-wide hover:bg-forest-deep transition-colors"
              >
                Send Inquiry
                <Send size={15} strokeWidth={1.8} />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
