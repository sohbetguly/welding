import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

function Contact() {
  const { t } = useTranslation();

  // State for form fields and errors
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validate email format
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = t("contact.errors.name");
    }

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = t("contact.errors.email");
    } else if (!validateEmail(formData.email)) {
      newErrors.email = t("contact.errors.invalidEmail");
    }

    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = t("contact.errors.message");
    }

    // Check for errors
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      sendEmail();
    }
  };

  // Function to send email
  const sendEmail = async () => {
    setIsSending(true);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs
      .send("service_guraioe", "template_2ra5xia", templateParams)

      .then(
        () => {
          setIsSending(false);
          setSuccessMessage(t("contact.success"));
          setFormData({ name: "", email: "", message: "" });
        },
        (err) => {
          console.error(err);
          setIsSending(false);
          alert(t("contact.errors.emailService"));
        }
      );
  };

  return (
    <section className="secondary-default font-default rounded-btn bg-secondary-color group/alignment px-9">
      <div className="max-width-md mx-auto padding-top-full padding-bottom-full">
        <div className="flex flex-col items-center mx-auto text-center">
          <div
            animation-type=""
            animation-delay=""
            className="animate-element ql-content-styles font-secondary-title margin-bottom"
          >
            <p className="text-4xl md:text-6xl text-secondary-marked">
              <strong>{t("contact.title")}</strong>
            </p>
          </div>
          <div
            animation-type=""
            animation-delay=""
            className="animate-element max-w-xl text-2xl ql-content-styles max-width-sm"
          >
            <p>{t("contact.subtitle")}</p>
          </div>
        </div>
        <div className="flex items-center justify-center pt-8">
          <form
            className="flex flex-col h-full w-full max-width-xs"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-x-3">
              <input
                placeholder={t("contact.name")}
                className={`form-field w-full rounded-btn margin-bottom border ${
                  errors.name ? "border-red-500" : "border-gray-700/10"
                } focus:border-gray-500 bg-secondary-white text-secondary-dark focus:ring-0 outline-none px-6 py-3 shadow-sm`}
                type="text"
                name="name"
                id="form_submission_name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                placeholder={t("contact.email")}
                className={`form-field w-full rounded-btn margin-bottom border ${
                  errors.email ? "border-red-500" : "border-gray-700/10"
                } focus:border-gray-500 bg-secondary-white text-secondary-dark focus:ring-0 outline-none px-6 py-3 shadow-sm`}
                type="text"
                name="email"
                id="form_submission_email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <textarea
              placeholder={t("contact.message")}
              className={`form-field rounded-btn margin-bottom w-full border ${
                errors.message ? "border-red-500" : "border-gray-700/10"
              } focus:border-gray-500 bg-secondary-white text-secondary-dark !outline-none focus:ring-0 px-6 py-6 min-h-[150px]`}
              name="message"
              id="form_submission_message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button
              data-action="subscriber#checkForm"
              type="submit"
              id="submit-button"
              className={`flex uppercase justify-center rounded-btn text-secondary-btn-color bg-secondary-btn-color hover:bg-secondary-btn-color/90 cursor-pointer duration-300 mt-4 text-center inline-block w-full py-3 px-6 ${
                isSending ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isSending}
            >
              {isSending ? t("contact.sending") : t("contact.button")}
            </button>
            {successMessage && (
              <p className="text-green-500 text-sm mt-4">{successMessage}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
