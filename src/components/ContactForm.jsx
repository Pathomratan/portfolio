import { useState } from "react";
import { portfolio } from "../data/portfolio.js";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    setStatus("Opening your email app...");
    window.location.href = `mailto:${portfolio.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form className="grid gap-4 rounded-[40px] bg-white/10 p-7" onSubmit={handleSubmit}>
      <label className="grid gap-2 font-bold text-white">
        Name
        <input
          className="w-full rounded-full border-0 bg-white/60 px-5 py-3.5 text-[#171722] outline-none transition focus:bg-white"
          type="text"
          name="name"
          placeholder="Your name"
          required
        />
      </label>
      <label className="grid gap-2 font-bold text-white">
        Email
        <input
          className="w-full rounded-full border-0 bg-white/60 px-5 py-3.5 text-[#171722] outline-none transition focus:bg-white"
          type="email"
          name="email"
          placeholder="you@example.com"
          required
        />
      </label>
      <label className="grid gap-2 font-bold text-white">
        Message
        <textarea
          className="min-h-40 w-full resize-y rounded-2xl border-0 bg-white/60 px-5 py-3.5 text-[#171722] outline-none transition focus:bg-white"
          name="message"
          placeholder="Write your message"
          required
        />
      </label>
      <button
        className="rounded-full border border-[#f1f2c4] bg-[#f1f2c4] px-4 py-2.5 font-extrabold text-[#20202a] transition duration-200 hover:-translate-y-0.5 hover:bg-transparent hover:text-[#f1f2c4]"
        type="submit"
      >
        Submit
      </button>
      {status && <p className="text-center text-sm font-bold text-[#f1f2c4]">{status}</p>}
    </form>
  );
}
