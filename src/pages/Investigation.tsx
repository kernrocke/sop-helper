import SOPLayout from "@/components/SOPLayout";

const base = import.meta.env.BASE_URL;

const sidebarItems = [
  { id: "introduction", label: "1. Introduction" },
  { id: "purpose", label: "2. Purpose" },
  { id: "scope", label: "3. Scope" },
  { id: "prerequisites", label: "4. Pre-requisites" },
  { id: "references", label: "5. Reference Documentation" },
  { id: "roles", label: "6. Roles & Responsibility" },
  { id: "abbreviations", label: "7. Abbreviations" },
  { id: "definitions", label: "8. Definitions" },
  { id: "criteria", label: "9. Investigation Criteria" },
  { id: "procedure", label: "10. Procedure" },
];

const Investigation = () => (
  <SOPLayout title="ESAVI Investigation" version="1.0" updateDate="25/06/2025"
    headerImage={`${base}images/investigation.png`} sidebarItems={sidebarItems}
    backLink={{ to: "/sop-overview", label: "SOP Overview" }}>

    <section id="introduction" className="sop-section">
      <h2 className="text-xl font-heading font-bold text-secondary mb-3">1. Introduction</h2>
      <p className="text-sm text-muted-foreground">This SOP outlines standardized processes for ESAVI investigation in Trinidad and Tobago, aligned with WHO and PAHO guidelines. It provides guidelines for the national investigation team and other relevant personnel.</p>
    </section>

    <section id="purpose" className="sop-section">
      <h2 className="text-xl font-heading font-bold text-secondary mb-3">2. Purpose</h2>
      <p className="text-sm text-muted-foreground">To describe the process and workflow for investigating ESAVI cases in Trinidad and Tobago.</p>
    </section>

    <section id="scope" className="sop-section">
      <h2 className="text-xl font-heading font-bold text-secondary mb-3">3. Scope</h2>
      <p className="text-sm text-muted-foreground">This procedure applies to the investigation of ESAVI cases at the sub-national and national level.</p>
    </section>

    <section id="prerequisites" className="sop-section">
      <h2 className="text-xl font-heading font-bold text-secondary mb-3">4. Pre-requisites</h2>
      <ol className="list-decimal list-inside text-sm text-muted-foreground space-y-1">
        <li>ESAVI detection and notification SOP is in place</li>
        <li>National investigation team is established and trained</li>
        <li>Investigation forms and tools are available</li>
      </ol>
    </section>

    <section id="references" className="sop-section">
      <h2 className="text-xl font-heading font-bold text-secondary mb-3">5. Reference Documentation</h2>
      <ol className="list-decimal list-inside text-sm text-muted-foreground space-y-1">
        <li>National ESAVI surveillance manual</li>
        <li>National EPI manual</li>
        <li>Regional ESAVI surveillance manual</li>
        <li>WHO Global Manual on Surveillance of AEFI</li>
      </ol>
    </section>

    <section id="roles" className="sop-section">
      <h2 className="text-xl font-heading font-bold text-secondary mb-3">6. Roles & Responsibility</h2>
      <ul className="text-sm text-muted-foreground space-y-2">
        <li><strong className="text-foreground">National ESAVI Investigation Team</strong> – Conducts investigation of serious ESAVI cases</li>
        <li><strong className="text-foreground">MoH EPI ESAVI focal point</strong> – Coordinates investigation activities at national level</li>
        <li><strong className="text-foreground">CMOH ESAVI focal point</strong> – Supports investigation at sub-national level</li>
        <li><strong className="text-foreground">Healthcare Workers</strong> – Provide clinical information and support investigation</li>
      </ul>
    </section>

    <section id="abbreviations" className="sop-section">
      <h2 className="text-xl font-heading font-bold text-secondary mb-3">7. Abbreviations</h2>
      <div className="grid grid-cols-2 gap-1 text-sm text-muted-foreground">
        {[["ESAVI","Events Supposedly Attributable to Vaccination or Immunization"],["CMOH","County Medical Officer of Health"],["EPI","Expanded Programme in Immunization"],["MoH","Ministry of Health"],["WHO","World Health Organization"],["PAHO","Pan American Health Organization"]].map(([a,b])=>(
          <div key={a} className="flex gap-2"><strong className="text-foreground w-16 shrink-0">{a}</strong><span>{b}</span></div>
        ))}
      </div>
    </section>

    <section id="definitions" className="sop-section">
      <h2 className="text-xl font-heading font-bold text-secondary mb-3">8. Definitions</h2>
      <ul className="text-sm text-muted-foreground space-y-2">
        <li><strong className="text-foreground">ESAVI Investigation</strong> – A systematic process to determine the cause and circumstances of an ESAVI case</li>
        <li><strong className="text-foreground">Serious ESAVI</strong> – Cases that result in death, hospitalization, disability, or life-threatening conditions</li>
      </ul>
    </section>

    <section id="criteria" className="sop-section">
      <h2 className="text-xl font-heading font-bold text-secondary mb-3">9. ESAVI Investigation Criteria</h2>
      <p className="text-sm text-muted-foreground mb-3">An investigation should be initiated when:</p>
      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
        <li>The ESAVI case is classified as serious</li>
        <li>There is a cluster of ESAVI cases</li>
        <li>There is a signal of an unexpected or unusual ESAVI</li>
        <li>The case generates significant public or media concern</li>
        <li>There is suspected programmatic error</li>
      </ul>
      <p className="text-sm text-muted-foreground mt-3">Investigations for serious cases should begin within <strong className="text-foreground">48 hours</strong> of notification.</p>
      <img src={`${base}images/ESAVI_clusters.png`} alt="ESAVI clusters investigation flowchart" className="w-full rounded-lg border border-border mt-4" />
      <p className="text-xs text-muted-foreground mt-2 italic">Figure: ESAVI clusters investigation flowchart</p>
    </section>

    <section id="procedure" className="sop-section">
      <h2 className="text-xl font-heading font-bold text-secondary mb-3">10. Procedure</h2>
      <div className="overflow-x-auto">
        <table className="sop-table">
          <thead><tr><th className="w-16">Step</th><th>Procedure</th><th className="w-48">Responsible</th></tr></thead>
          <tbody>
            {[
              ["1","Receive notification of ESAVI case requiring investigation","MoH EPI focal point"],
              ["2","Assemble the national ESAVI investigation team","MoH EPI focal point"],
              ["3","Review all available case documentation and reporting forms","Investigation Team"],
              ["4","Plan investigation: define objectives, timeline, resources needed","Investigation Team"],
              ["5","Conduct field investigation at the healthcare facility","Investigation Team"],
              ["6","Interview healthcare workers, patient/family, and witnesses","Investigation Team"],
              ["7","Review medical records, vaccination records, and cold chain documentation","Investigation Team"],
              ["8","Collect and analyze biological samples if applicable","Investigation Team"],
              ["9","Compile investigation findings and prepare preliminary report","Investigation Team"],
              ["10","Submit investigation report to MoH EPI and Causality Assessment committee","Investigation Team"],
            ].map(([s,p,r])=>(
              <tr key={s}><td className="font-semibold">{s}</td><td>{p}</td><td>{r}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  </SOPLayout>
);

export default Investigation;