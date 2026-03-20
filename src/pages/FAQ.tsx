import { Link } from "react-router-dom";

const faqItems = [
  { q: "What is vaccine safety?", a: "Vaccine safety involves monitoring and ensuring that vaccines are safe for use, minimizing adverse effects, and maintaining public trust in vaccination programs." },
  { q: "What is an ESAVI?", a: "ESAVI stands for Events Supposedly Attributable to Vaccination or Immunization. It is any untoward medical occurrence which follows immunization, and which does not necessarily have a causal relationship with the usage of the vaccine." },
  { q: "What is an AESI?", a: "An AESI is a pre-specified medically significant event that has the potential to be causally associated with the vaccine product based on past experience, the technology used to make the vaccine, or the infection the vaccine protects against." },
  { q: "What is ESAVI surveillance?", a: "ESAVI surveillance is the systematic monitoring, reporting, and investigation of adverse events following immunization to ensure vaccine safety." },
  { q: "How to report?", a: "To report an ESAVI, follow the guidelines in the ESAVI SOP, including contacting local health authorities or using official reporting channels provided by the Ministry of Health." },
  { q: "What is Regional ESAVI surveillance?", a: "Regional ESAVI surveillance involves collaboration with organizations like PAHO to monitor vaccine safety across the Americas." },
  { q: "Which approved vaccines in T&T are the safest?", a: "All vaccines distributed in Trinidad and Tobago are approved by Chemistry Food and Drug Division and fulfill international safety, quality, and efficacy requirements. All available vaccines are safe and effective." },
  { q: "Are there deaths following vaccination?", a: "Reports of deaths following vaccination are taken very seriously. They should not be automatically assumed to be causally linked to the vaccine. A thorough investigation of causal association must be done by the national vaccine safety committee." },
];

const FAQ = () => (
  <div className="container mx-auto px-4 py-12 max-w-3xl">
    <div className="text-center mb-10">
      <Link to="/" className="text-secondary hover:underline text-sm mb-4 inline-block">&larr; Back to Home</Link>
      <h1 className="text-3xl font-heading font-bold text-foreground">Frequently Asked Questions</h1>
    </div>
    <div className="space-y-4">
      {faqItems.map((item, i) => (
        <div key={i} className="sop-section">
          <h3 className="font-semibold text-secondary mb-2">{item.q}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{item.a}</p>
        </div>
      ))}
    </div>
  </div>
);

export default FAQ;
