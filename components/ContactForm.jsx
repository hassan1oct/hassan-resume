import { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Check if environment variables are loaded
    if (
      !process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ||
      !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ||
      !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    ) {
      alert("Environment variables are not configured properly!");
      console.error("Missing EmailJS environment variables.");
      return;
    }

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("Email successfully sent:", result.text);
          alert("Message sent successfully!");
          form.current.reset(); // Reset the form after submission
        },
        (error) => {
          console.error("Error sending email:", error.text);
          alert("Failed to send the message. Please try again.");
        }
      );
  };

  return (
    <div className="mt-10 bg-white p-6 shadow rounded">
      <h3 className="text-lg font-bold">Contact Me</h3>
      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        {/* Name Field */}
        <input
          type="text"
          name="from_name" // Matches EmailJS variable
          placeholder="Your Name"
          required
          className="w-full p-2 border rounded"
        />

        {/* Email Field */}
        <input
  type="email"
  name="user_email"
  placeholder="Your Email"
  required
  className="w-full p-2 border rounded"
/>


        {/* Message Field */}
        <textarea
          name="message" // Matches EmailJS variable
          placeholder="Your Message"
          required
          className="w-full p-2 border rounded"
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
