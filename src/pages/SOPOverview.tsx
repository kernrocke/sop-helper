import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const base = import.meta.env.BASE_URL;

const sops = [
  { to: "/detection", img: `${base}images/detection.png`, label: "Detection and Notification" },
  { to: "/investigation", img: `${base}images/investigation.png`, label: "Investigation" },
  { to: "/causality", img: `${base}images/causality.png`, label: "Causality Assessment & Final Classification" },
  { to: "/case-management", img: `${base}images/case_management.png`, label: "Case Management" },
  { to: "/data-analysis", img: `${base}images/data_analysis.png`, label: "Data Management & Analysis" },
];

const SOPOverview = () => (
  <div className="container mx-auto px-4 py-12">
    <div className="text-center mb-10">
      <Link to="/" className="text-secondary hover:underline text-sm mb-4 inline-block">&larr; Back to Home</Link>
      <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground">ESAVI Standard Operating Procedures</h1>
      <p className="text-muted-foreground mt-2 max-w-xl mx-auto">Select a procedure to view the full documentation</p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
      {sops.map((sop, i) => (
        <Link key={sop.to} to={sop.to}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.1 }}
            className="hub-card flex flex-col items-center gap-4 min-h-[200px] justify-center">
            <img src={sop.img} alt={sop.label} className="w-24 h-24 object-contain" />
            <p className="text-sm font-semibold text-foreground">{sop.label}</p>
          </motion.div>
        </Link>
      ))}
    </div>
  </div>
);

export default SOPOverview;
