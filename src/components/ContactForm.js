// src/components/ContactForm.js
"use client";
import { useState } from "react";

export default function ContactForm({ onSubmitCallback }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // Temporary demo behavior: just show success message
    // Replace this with actual fetch/post to your API route later
    console.log("Contact submit:", { name, email, msg });
    setSent(true);
    setName(""); setEmail(""); setMsg("");
    if (typeof onSubmitCallback === "function") onSubmitCallback();
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      {sent && <div style={{color:"#ffd98a", marginBottom:8}}>Message sent (demo)</div>}
      <input
        placeholder="Your name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        required
      />
      <input
        placeholder="Your email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        required
      />
      <textarea
        placeholder="Your message"
        value={msg}
        onChange={(e)=>setMsg(e.target.value)}
        required
      />
      <button className="btn btn-primary" type="submit">Send</button>
    </form>
  );
}
