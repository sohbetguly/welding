import React from "react";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();

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
          <form className="flex flex-col h-full w-full max-width-xs" action="">
            <div className="flex flex-col gap-x-3">
              <input
                placeholder={t("contact.name")}
                className="form-field w-full rounded-btn margin-bottom border border-gray-700/10 focus:border-gray-500 bg-secondary-white text-secondary-dark focus:ring-0 outline-none px-6 py-3 shadow-sm"
                type="text"
                name="form_submission[name]"
                id="form_submission_name"
              />
              <input
                placeholder={t("contact.email")}
                className="form-field w-full rounded-btn margin-bottom border border-gray-700/10 focus:border-gray-500 bg-secondary-white text-secondary-dark focus:ring-0 outline-none px-6 py-3 shadow-sm"
                type="text"
                name="form_submission[email]"
                id="form_submission_email"
              />
            </div>
            <textarea
              placeholder={t("contact.message")}
              className="form-field rounded-btn margin-bottom w-full border border-gray-700/10 focus:border-gray-500 bg-secondary-white text-secondary-dark !outline-none focus:ring-0 px-6 py-6 min-h-[150px]"
              name="form_submission[message]"
              id="form_submission_message"
            ></textarea>
            <input
              value="section_Lx2lr7wk3J75HeR9BKZm5oRD"
              autoComplete="off"
              type="hidden"
              name="form_submission[sexion]"
              id="form_submission_sexion"
            />
            <button
              data-action="subscriber#checkForm"
              type="submit"
              id="submit-button"
              className="flex uppercase justify-center rounded-btn text-secondary-btn-color bg-secondary-btn-color hover:bg-secondary-btn-color/90 cursor-pointer duration-300 mt-4 text-center inline-block w-full py-3 px-6"
            >
              {t("contact.button")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
