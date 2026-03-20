import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const hubItems = [
  { to: "/manual", img: "/images/manual_tto.png", label: "National ESAVI Manual" },
  { to: "/sop-overview", img: "/images/sop_tto.png", label: "ESAVI SOPs" },
  { to: "/ai-assistant", img: "/images/AI_image.png", label: "AI Assistant" },
  { href: "https://iris.paho.org/handle/10665.2/55945", img: "/images/paho_manual.png", label: "PAHO Regional Manual" },
  { href: "https://health.gov.tt/services/vaccines-and-immunization/vaccine-safety", img: "/images/information.png", label: "General Information" },
  { to: "/faq", img: "/images/faq.png", label: "FAQ" },
];

const categories = [
  "Vaccine product-related event",
  "Vaccine quality defect-related event",
  "Programmatic error-related event",
  "Immunisation anxiety-related event",
  "Coincidental event",
  "Non-classifiable event",
];

const Index = () => (
  <div>
    {/* Hero */}
    <section className="hero-section text-primary-foreground py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-heading font-bold mb-4">
          ESAVI Surveillance Information Hub
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
          Trinidad and Tobago's central resource for vaccine safety monitoring, reporting, and investigation
        </motion.p>
      </div>
    </section>

    {/* Hub Cards */}
    <section className="container mx-auto px-4 -mt-10 relative z-10 mb-12">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {hubItems.map((item, i) => {
          const content = (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.08 }}
              className="hub-card flex flex-col items-center gap-3">
              <img src={item.img} alt={item.label} className="w-20 h-20 object-cover rounded-full" />
              <p className="text-sm font-semibold text-foreground">{item.label}</p>
            </motion.div>
          );
          if (item.to) return <Link key={item.label} to={item.to}>{content}</Link>;
          return <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer">{content}</a>;
        })}
      </div>
    </section>

    {/* About Section */}
    <section className="container mx-auto px-4 pb-16">
      <div className="sop-section max-w-4xl mx-auto">
        <h2 className="text-2xl font-heading font-bold text-foreground mb-4">About ESAVI Surveillance</h2>
        <p className="text-muted-foreground mb-4">
          Welcome to the Trinidad and Tobago ESAVI surveillance webpage hub. This website provides healthcare workers, analysts, and officials with guidance on the national ESAVI surveillance system.
        </p>
        <p className="text-muted-foreground mb-4">
          An <strong className="text-foreground">ESAVI</strong> (Event Supposedly Attributable to Vaccination or Immunization) is any untoward medical occurrence which follows immunization, and which does not necessarily have a causal relationship with the usage of the vaccine. Most adverse events from vaccines are non-serious and resolve within 2-3 days.
        </p>
        <p className="text-muted-foreground mb-4">ESAVI can be classified into six categories:</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
          {categories.map(c => (
            <li key={c} className="flex items-center gap-2 text-sm text-foreground">
              <span className="w-2 h-2 rounded-full bg-secondary flex-shrink-0" />
              {c}
            </li>
          ))}
        </ul>
        <p className="text-muted-foreground text-sm">
          The Expanded Programme on Immunization (EPI) oversees vaccine safety monitoring. The National Immunisation Technical Advisory Group (NITAG) is responsible for causality assessment of all serious ESAVI.
        </p>
      </div>
    </section>
  </div>
);

export default Index;
