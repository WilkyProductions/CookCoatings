import { Resend } from "resend";

const TO_EMAIL = "cookcoatings@gmail.com";

export async function POST(request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("Contact form error: RESEND_API_KEY is not configured.");
      return Response.json(
        { error: "Something went wrong. Please try again or call us directly." },
        { status: 500 }
      );
    }

    const { name, email, phone, company, services, message } = await request.json();

    if (!name || !email || !message) {
      return Response.json({ error: "Name, email, and comments are required." }, { status: 400 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const serviceList = Array.isArray(services) && services.length ? services.join(", ") : "Not specified";

    const { error } = await resend.emails.send({
      from: "Cook Coatings Website <onboarding@resend.dev>",
      to: TO_EMAIL,
      replyTo: email,
      subject: `New estimate request from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`,
        `Company: ${company || "Not provided"}`,
        `Services interested in: ${serviceList}`,
        "",
        "Comments:",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json(
        { error: "Something went wrong sending your message. Please call us directly." },
        { status: 502 }
      );
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return Response.json(
      { error: "Something went wrong. Please try again or call us directly." },
      { status: 500 }
    );
  }
}
