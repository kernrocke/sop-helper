import SOPLayout from "@/components/SOPLayout";

const base = import.meta.env.BASE_URL;

const sidebarItems = [
  { id: "acknowledgements", label: "Acknowledgements" },
  { id: "ch1", label: "1. Introduction" },
  { id: "ch2", label: "2. Basic Concepts" },
  { id: "ch3", label: "3. Vaccination Safety" },
  { id: "ch4", label: "4. ESAVI Types" },
  { id: "ch5", label: "5. ESAVI Surveillance in TTO" },
  { id: "ch6", label: "6. Data Management" },
  { id: "ch7", label: "7. Causality Assessment" },
  { id: "ch8", label: "8. Actions Following Classification" },
  { id: "ch9", label: "9. Risk Communication" },
];

const Manual = () => (
  <SOPLayout title="National ESAVI Manual for Trinidad and Tobago" headerImage={`${base}images/manual_tto.png`} sidebarItems={sidebarItems}>
    <section id="acknowledgements" className="sop-section">
      <h2 className="text-xl font-heading font-bold text-secondary mb-3">Acknowledgements</h2>
      <p className="text-sm text-muted-foreground">This manual was completed with the support of PAHO, the Ministry of Health and the Expanded Programme on Immunisation (EPI) of Trinidad and Tobago.</p>
    </section>

    <section id="ch1" className="sop-section">
      <h2 className="text-xl font-heading font-bold text-secondary mb-3">1. Introduction</h2>
      <p className="text-sm text-muted-foreground mb-3">Immunisation is a process through which the body gains protection from infectious disease via the immune system, achieved with vaccine administration. The MOH of TTO established an Expanded Programme on Immunisation (EPI) with a goal to eradicate or minimize vaccine preventable deaths.</p>
      <p className="text-sm text-muted-foreground">An ESAVI is defined as any untoward medical occurrence which follows immunisation and which does not necessarily have a causal relationship with the vaccination process or the vaccine. This manual serves as a guide to ESAVI detection and management within Trinidad and Tobago.</p>
    </section>

    <section id="ch2" className="sop-section">
      <h2 className="text-xl font-heading font-bold text-secondary mb-3">2. Basic Concepts on Vaccines and Immunisation</h2>
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold text-foreground text-sm mb-1">2.1 Immunity</h3>
          <p className="text-sm text-muted-foreground">The ability of the human body to tolerate self-components while eliminating foreign materials. There are two types: Active and Passive.</p>
        </div>
        <div>
          <h3 className="font-semibold text-foreground text-sm mb-1">2.2 Active Immunity</h3>
          <p className="text-sm text-muted-foreground">Acquired when the immune system is stimulated to produce antibodies. Can be natural (from infection) or artificial (vaccination).</p>
        </div>
        <div>
          <h3 className="font-semibold text-foreground text-sm mb-1">2.3 Passive Immunity</h3>
          <p className="text-sm text-muted-foreground">Results when antibodies are transferred from one person to another. Disappears over time. Natural (mother to fetus) or artificial (antibody injections).</p>
        </div>
        <div>
          <h3 className="font-semibold text-foreground text-sm mb-1">2.4 Herd Immunity</h3>
          <p className="text-sm text-muted-foreground">The protective effect conferred to unimmunised individuals in a highly vaccinated community.</p>
        </div>
        <div>
          <h3 className="font-semibold text-foreground text-sm mb-1">2.5 Vaccines</h3>
          <p className="text-sm text-muted-foreground">Biological preparations that improve immunity. May be monovalent (single antigen) or multivalent (multiple antigens). Combined vaccines contain two or more different antigens.</p>
        </div>
        <div>
          <h3 className="font-semibold text-foreground text-sm mb-1">2.6 Vaccine Classifications</h3>
          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
            <li><strong className="text-foreground">Live Attenuated</strong> – Weakened pathogens (e.g., MMR, varicella)</li>
            <li><strong className="text-foreground">Inactivated</strong> – Killed pathogens (e.g., Polio, influenza)</li>
            <li><strong className="text-foreground">Subunit</strong> – Pieces of pathogen (e.g., Hib, hepatitis B)</li>
            <li><strong className="text-foreground">Toxoids</strong> – Inactivated toxins (e.g., tetanus, diphtheria)</li>
            <li><strong className="text-foreground">Viral Vector</strong> – Harmless virus delivering antigen code (e.g., AstraZeneca)</li>
            <li><strong className="text-foreground">mRNA</strong> – Teaches body to make specific protein (e.g., Pfizer-BioNTech)</li>
          </ul>
        </div>
      </div>
    </section>

    <section id="ch3" className="sop-section">
      <h2 className="text-xl font-heading font-bold text-secondary mb-3">3. Vaccination Safety System</h2>
      <p className="text-sm text-muted-foreground">The vaccination safety system in TTO ensures monitoring of vaccines from development through post-marketing surveillance, including pharmacovigilance activities coordinated by the EPI unit.</p>
    </section>

    <section id="ch4" className="sop-section">
      <h2 className="text-xl font-heading font-bold text-secondary mb-3">4. Events Supposedly Attributable to Vaccination or Immunisation (ESAVI)</h2>
      <div className="space-y-3">
        {[
          ["4.1 Vaccine product-related event", "Expected or unexpected reaction caused by the vaccine's intrinsic properties when administered correctly."],
          ["4.2 Vaccine quality defect-related event", "Event caused by a defect in vaccine quality, including manufacturing issues."],
          ["4.3 Programmatic error-related event", "Events caused by errors in vaccine handling, storage, preparation, or administration."],
          ["4.4 Stress-related event (Immunisation anxiety)", "Events related to anxiety or stress from the immunization process, including vasovagal reactions."],
          ["4.5 Coincidental event", "Events that occur after vaccination but are not caused by the vaccine – coincidental timing."],
          ["4.6 Non-classifiable event", "Events that cannot be classified into any of the above categories due to insufficient information."],
        ].map(([title, desc]) => (
          <div key={title} className="p-3 rounded-lg bg-muted">
            <h4 className="font-semibold text-foreground text-sm">{title}</h4>
            <p className="text-xs text-muted-foreground mt-1">{desc}</p>
          </div>
        ))}
      </div>
    </section>

    <section id="ch5" className="sop-section">
      <h2 className="text-xl font-heading font-bold text-secondary mb-3">5. ESAVI Surveillance within TTO</h2>
      <p className="text-sm text-muted-foreground">The ESAVI surveillance system in Trinidad and Tobago operates at local/district, intermediate (CMOH), and central (MoH/EPI) levels, with international reporting to PAHO/WHO. It follows a passive surveillance approach with active follow-up for serious cases.</p>
    </section>

    <section id="ch6" className="sop-section">
      <h2 className="text-xl font-heading font-bold text-secondary mb-3">6. Data Management and Indicators</h2>
      <p className="text-sm text-muted-foreground">ESAVI data management involves collection, entry, validation, analysis, and reporting of surveillance data. Key indicators include completeness, timeliness, accuracy, and consistency of reported data.</p>
    </section>

    <section id="ch7" className="sop-section">
      <h2 className="text-xl font-heading font-bold text-secondary mb-3">7. Causality Assessment of ESAVI</h2>
      <p className="text-sm text-muted-foreground">Causality assessment follows the WHO revised methodology, conducted by the National Vaccine Safety Committee (NVSC/NITAG). It systematically evaluates four key areas: other causes, known causal associations, evidence against causality, and qualifying factors.</p>
    </section>

    <section id="ch8" className="sop-section">
      <h2 className="text-xl font-heading font-bold text-secondary mb-3">8. Actions Following Classification</h2>
      <p className="text-sm text-muted-foreground">Following causality classification, appropriate actions are taken including signal validation, risk communication, corrective actions for programmatic errors, and reporting to international bodies.</p>
    </section>

    <section id="ch9" className="sop-section">
      <h2 className="text-xl font-heading font-bold text-secondary mb-3">9. Risk Communication</h2>
      <p className="text-sm text-muted-foreground">Risk communication strategies ensure transparent, timely, and accurate information sharing with the public, healthcare workers, and stakeholders regarding ESAVI findings and vaccine safety.</p>
    </section>
  </SOPLayout>
);

export default Manual;
