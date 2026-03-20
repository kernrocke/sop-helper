import SOPLayout from "@/components/SOPLayout";

const sidebarItems = [
  { id: "introduction", label: "1. Introduction" },
  { id: "purpose", label: "2. Purpose" },
  { id: "scope", label: "3. Scope" },
  { id: "prerequisites", label: "4. Pre-requisites" },
  { id: "roles", label: "5. Roles & Responsibility" },
  { id: "definitions", label: "6. Definitions" },
  { id: "case-selection", label: "7. Case Selection" },
  { id: "assessment-steps", label: "8. Assessment Steps" },
  { id: "report-structure", label: "9. Final Report Structure" },
  { id: "procedure", label: "10. Procedure" },
];

const Causality = () => (
  <SOPLayout title="ESAVI Causality Assessment & Final Classification" version="1.0" updateDate="04/04/2025"
    headerImage="/images/causality.png" sidebarItems={sidebarItems}
    backLink={{ to: "/sop-overview", label: "SOP Overview" }}>

    <section id="introduction" className="sop-section">
      <h2 className="text-xl font-heading font-bold text-secondary mb-3">1. Introduction</h2>
      <p className="text-sm text-muted-foreground">This SOP outlines standardized processes for the causality assessment and final classification of ESAVI cases in Trinidad and Tobago, aligned with WHO revised methodology.</p>
    </section>

    <section id="purpose" className="sop-section">
      <h2 className="text-xl font-heading font-bold text-secondary mb-3">2. Purpose</h2>
      <p className="text-sm text-muted-foreground">To describe the process for causality assessment of ESAVI cases and their final classification.</p>
    </section>

    <section id="scope" className="sop-section">
      <h2 className="text-xl font-heading font-bold text-secondary mb-3">3. Scope</h2>
      <p className="text-sm text-muted-foreground">This procedure applies to all serious ESAVI cases and selected non-serious cases that require causality assessment at the national level.</p>
    </section>

    <section id="prerequisites" className="sop-section">
      <h2 className="text-xl font-heading font-bold text-secondary mb-3">4. Pre-requisites</h2>
      <ol className="list-decimal list-inside text-sm text-muted-foreground space-y-1">
        <li>National Vaccine Safety Committee (NVSC) established</li>
        <li>Investigation report completed and available</li>
        <li>WHO revised causality assessment methodology adopted</li>
      </ol>
    </section>

    <section id="roles" className="sop-section">
      <h2 className="text-xl font-heading font-bold text-secondary mb-3">5. Roles & Responsibility</h2>
      <ul className="text-sm text-muted-foreground space-y-2">
        <li><strong className="text-foreground">National Vaccine Safety Committee (NVSC/NITAG)</strong> – Conducts causality assessment of all serious ESAVI</li>
        <li><strong className="text-foreground">MoH EPI ESAVI focal point</strong> – Prepares and presents cases for assessment</li>
        <li><strong className="text-foreground">Epidemiology Division</strong> – Provides data analysis support</li>
      </ul>
    </section>

    <section id="definitions" className="sop-section">
      <h2 className="text-xl font-heading font-bold text-secondary mb-3">6. Definitions</h2>
      <ul className="text-sm text-muted-foreground space-y-2">
        <li><strong className="text-foreground">Causality Assessment</strong> – Systematic evaluation of whether a causal relationship exists between vaccination and the adverse event</li>
        <li><strong className="text-foreground">WHO Revised Methodology</strong> – Structured approach using four key questions and qualifying factors</li>
      </ul>
    </section>

    <section id="case-selection" className="sop-section">
      <h2 className="text-xl font-heading font-bold text-secondary mb-3">7. Case Selection for Causality Assessment</h2>
      <p className="text-sm text-muted-foreground mb-3">Cases selected for causality assessment include:</p>
      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
        <li>All serious ESAVI cases</li>
        <li>Clusters of ESAVI cases</li>
        <li>Cases with significant public health implications</li>
        <li>Cases generating public concern</li>
      </ul>
      <img src="/images/causality1.png" alt="Create question on causality" className="w-full rounded-lg border border-border mt-4" />
    </section>

    <section id="assessment-steps" className="sop-section">
      <h2 className="text-xl font-heading font-bold text-secondary mb-3">8. Causality Assessment Steps</h2>
      <p className="text-sm text-muted-foreground mb-4">The WHO revised causality assessment methodology follows four key questions:</p>
      
      <div className="space-y-4">
        <div className="p-4 rounded-lg bg-muted">
          <h4 className="font-semibold text-foreground text-sm mb-1">I. Is there strong evidence for other causes?</h4>
          <p className="text-xs text-muted-foreground">Medical history, clinical examination, and investigations that confirm another cause.</p>
        </div>
        <div className="p-4 rounded-lg bg-muted">
          <h4 className="font-semibold text-foreground text-sm mb-1">II. Is there a known causal association with the vaccine or vaccination?</h4>
          <p className="text-xs text-muted-foreground">Evidence in published literature, biological plausibility, vaccine quality, immunization errors, anxiety-related responses.</p>
        </div>
        <div className="p-4 rounded-lg bg-muted">
          <h4 className="font-semibold text-foreground text-sm mb-1">III. Is there strong evidence against a causal association?</h4>
          <p className="text-xs text-muted-foreground">Published evidence against causal association between the vaccine and the event.</p>
        </div>
        <div className="p-4 rounded-lg bg-muted">
          <h4 className="font-semibold text-foreground text-sm mb-1">IV. Other qualifying factors for classification</h4>
          <p className="text-xs text-muted-foreground">Prior reactions, background rates, pre-existing conditions, medications, other exposures.</p>
        </div>
      </div>

      <img src="/images/causality2.png" alt="Causality assessment checklist part 1" className="w-full rounded-lg border border-border mt-4" />
      <img src="/images/causality_2_2.png" alt="Causality assessment checklist part 2" className="w-full rounded-lg border border-border mt-4" />
      <img src="/images/causality3.png" alt="Causality assessment algorithm" className="w-full rounded-lg border border-border mt-4" />
      <p className="text-xs text-muted-foreground mt-2 italic">Figure: WHO Causality Assessment Algorithm</p>
    </section>

    <section id="report-structure" className="sop-section">
      <h2 className="text-xl font-heading font-bold text-secondary mb-3">9. Final Classification</h2>
      <img src="/images/causality4.png" alt="Final classification categories" className="w-full rounded-lg border border-border mb-4" />
      <div className="space-y-3">
        <div className="p-3 rounded-lg border-l-4 border-accent">
          <h4 className="font-semibold text-foreground text-sm">A. Consistent with causal association</h4>
          <p className="text-xs text-muted-foreground">A1: Vaccine product-related, A2: Quality defect, A3: Immunization error, A4: Anxiety-related (ISRR)</p>
        </div>
        <div className="p-3 rounded-lg border-l-4 border-gov-gold">
          <h4 className="font-semibold text-foreground text-sm">B. Indeterminate</h4>
          <p className="text-xs text-muted-foreground">B1: Temporal relationship consistent but insufficient evidence, B2: Conflicting trends</p>
        </div>
        <div className="p-3 rounded-lg border-l-4 border-secondary">
          <h4 className="font-semibold text-foreground text-sm">C. Inconsistent with causal association (Coincidental)</h4>
          <p className="text-xs text-muted-foreground">Underlying or emerging conditions, or exposure to other factors</p>
        </div>
        <div className="p-3 rounded-lg border-l-4 border-muted-foreground">
          <h4 className="font-semibold text-foreground text-sm">D. Unclassifiable</h4>
          <p className="text-xs text-muted-foreground">Adequate information not available for classification</p>
        </div>
      </div>
    </section>

    <section id="procedure" className="sop-section">
      <h2 className="text-xl font-heading font-bold text-secondary mb-3">10. Procedure</h2>
      <div className="overflow-x-auto">
        <table className="sop-table">
          <thead><tr><th className="w-16">Step</th><th>Procedure</th><th className="w-48">Responsible</th></tr></thead>
          <tbody>
            {[
              ["1","Receive completed investigation report and case documentation","MoH EPI focal point"],
              ["2","Prepare case summary for the NVSC/NITAG meeting","MoH EPI focal point"],
              ["3","Convene NVSC/NITAG meeting for causality assessment","Committee Chair"],
              ["4","Present case and apply WHO revised causality assessment methodology","NVSC/NITAG"],
              ["5","Answer the four key questions systematically","NVSC/NITAG"],
              ["6","Determine final classification (A, B, C, or Unclassifiable)","NVSC/NITAG"],
              ["7","Document findings and prepare final causality assessment report","NVSC/NITAG"],
              ["8","Communicate results to relevant stakeholders","MoH EPI focal point"],
              ["9","Update national ESAVI database with classification","Epidemiology Division"],
              ["10","Report to PAHO/WHO as required","MoH EPI focal point"],
            ].map(([s,p,r])=>(
              <tr key={s}><td className="font-semibold">{s}</td><td>{p}</td><td>{r}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
      <img src="/images/TTO_ESAVI_causality.png" alt="T&T ESAVI Surveillance System Flow Diagram for Causality" className="w-full rounded-lg border border-border mt-4" />
    </section>
  </SOPLayout>
);

export default Causality;
