"use client";

import { useState } from "react";

const SERVICE_OPTIONS = [
  "New Roof System Application",
  "Roof Restoration System",
  "Roof Maintenance Plan",
  "Not sure / Other",
];

const initialState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  services: [],
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const toggleService = (service) => {
    setForm((f) => ({
      ...f,
      services: f.services.includes(service)
        ? f.services.filter((s) => s !== service)
        : [...f.services, service],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("success");
      setForm(initialState);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message);
    }
  };

  if (status === "success") {
    return (
      <div className="form-success">
        <h3>Thanks, we&apos;ve got your message.</h3>
        <p>
          We&apos;ll get back to you shortly. In the meantime, feel free to call us at{" "}
          <a href="tel:+19512962664">951-296-2664</a>.
        </p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="name">Name *</label>
          <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email *</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="phone">Phone *</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <label htmlFor="company">Company / Business Name</label>
          <input id="company" name="company" type="text" value={form.company} onChange={handleChange} />
        </div>
      </div>
      <div className="form-field">
        <span className="form-label">Services Interested In</span>
        <div className="checkbox-group">
          {SERVICE_OPTIONS.map((service) => (
            <label key={service} className="checkbox-option">
              <input
                type="checkbox"
                checked={form.services.includes(service)}
                onChange={() => toggleService(service)}
              />
              {service}
            </label>
          ))}
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="message">Comments *</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={form.message}
          onChange={handleChange}
        />
      </div>
      {status === "error" && <p className="form-error">{errorMsg}</p>}
      <button className="btn btn-primary btn-block" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
