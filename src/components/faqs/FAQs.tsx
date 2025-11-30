import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./FAQs.css";

const FAQs = [
  {
    question:
      "Is there a penalty for early total loan repayment or overpayment of the monthly repayments?",
    answer: "NO",
  },
  {
    question: "For diasporans, which tax clearance do I show?",
    answer: "The tax clearance certificate of the property seller can be used",
  },
  {
    question: "Can self-employed individuals apply?",
    answer: "YES. Your business statement of account will be used",
  },
  {
    question: "How much loan can I access with FHF?",
    answer: "100M or below",
  },
  {
    question: "How much loan can I access with PMI?",
    answer: "Above 100M",
  },
  {
    question: "What's the maximum property cost funded by FHF?",
    answer: "100M",
  },
  {
    question: "What's the maximum property cost funded by PMI?",
    answer:
      "Above 100M to 500M for individuals, Above 100M to 2Bn for corporate organisations",
  },
  {
    question: "Can corporate organisations apply?",
    answer: "YES - please contact us directly",
  },
  {
    question: "Can self-employed apply?",
    answer: "YES",
  },
  {
    question: "How much equity do I require?",
    answer: "10% for FHF, 30% for PMI",
  },
  {
    question: "When do I pay my equity and fees?",
    answer:
      "UPFRONT immediately after qualification status is completed and documents are submitted",
  },
];

const FAQComponent: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="w-full max-w-2xl mx-auto p-4 container">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <div className="accordion" id="faqAccordion">
          {FAQs.map((faq, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header" id={`heading${index}`}>
                <button
                  className={`accordion-button ${
                    openIndex === index ? "" : "collapsed"
                  }`}
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`collapse${index}`}
                >
                  {faq.question}
                </button>
              </h2>
              <div
                id={`collapse${index}`}
                className={`accordion-collapse collapse ${
                  openIndex === index ? "show" : ""
                }`}
                aria-labelledby={`heading${index}`}
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQComponent;
