"use server";

export async function submitMessage(name, email, message) {
  const apiKey = process.env.BREVO_API_KEY;
  const toEmail = process.env.TO_EMAIL;
  // Use SENDER_EMAIL if defined, otherwise fallback to TO_EMAIL
  const senderEmail = process.env.SENDER_EMAIL || toEmail;

  if (!apiKey || !toEmail) {
    console.error("Missing Brevo env variables");
    return false;
  }

  if (!name || !email || !message) {
    console.error("Missing required fields");
    return false;
  }

  const payload = {
    sender: { name: "Portfolio Contact Form", email: senderEmail }, // Must be a verified sender in Brevo
    replyTo: { email: email, name: name }, // Allows you to reply to the visitor
    to: [{ email: toEmail }],
    subject: `New Portfolio Message from ${name}`,
    htmlContent: `
      <html>
        <body>
          <h2>New Message Received</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </body>
      </html>
    `,
  };

  try {
    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "api-key": apiKey,
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const errorData = await res.json();
      console.error("Brevo API Error:", errorData);
      return false;
    }

    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
}
