import SOPLayout from "@/components/SOPLayout";

const sidebarItems = [
  { id: "introduction", label: "1. Introduction" },
  { id: "purpose", label: "2. Purpose" },
  { id: "scope", label: "3. Scope" },
  { id: "prerequisites", label: "4. Pre-requisites" },
  { id: "references", label: "5. Reference Documentation" },
  { id: "roles", label: "6. Roles & Responsibility" },
  { id: "abbreviations", label: "7. Abbreviations" },
  { id: "definitions", label: "8. Definitions" },
  { id: "categorization", label: "9. Categorization of ESAVI" },
  { id: "detection", label: "10. Detection of ESAVI" },
  { id: "notification", label: "11. Notification of ESAVI" },
  { id: "reporting", label: "12. Reporting of ESAVI" },
  { id: "channels", label: "13. Reporting Channels" },
  { id: "procedure", label: "14. Procedure" },
];

const Detection = () => (
  <SOPLayout title="ESAVI Detection and Reporting (Paper Based)" version="1.0" updateDate="25/06/2025"
    headerImage="/images/detection.png" sidebarItems={sidebarItems}
    backLink={{ to: "/sop-overview", label: "SOP Overview" }}>

    <section id="introduction" className="sop-section">
      <h2 className="text-xl font-heading font-bold text-secondary mb-3">1. Introduction</h2>
      <p className="text-muted-foreground text-sm leading-relaxed">This Standard Operating Procedure (SOP) outlines the standardized processes for the detection and notification of Events Supposedly Attributable to Vaccination or Immunization (ESAVI) in Trinidad and Tobago. This SOP is aligned with WHO and PAHO international guidelines.</p>
    </section>

    <section id="purpose" className="sop-section">
      <h2 className="text-xl font-heading font-bold text-secondary mb-3">2. Purpose</h2>
      <p className="text-muted-foreground text-sm">The purpose of this SOP is to describe the process and workflow for detecting and reporting of ESAVI in Trinidad and Tobago.</p>
    </section>

    <section id="scope" className="sop-section">
      <h2 className="text-xl font-heading font-bold text-secondary mb-3">3. Scope</h2>
      <p className="text-muted-foreground text-sm">This procedure applies for detecting ESAVI by healthcare workers and notifying and reporting to the sub-national and national level.</p>
    </section>

    <section id="prerequisites" className="sop-section">
      <h2 className="text-xl font-heading font-bold text-secondary mb-3">4. Pre-requisites or Assumptions</h2>
      <ol className="list-decimal list-inside text-sm text-muted-foreground space-y-1">
        <li>National reporting form meeting international and regional standards.</li>
        <li>All healthcare workers have received training on the ESAVI case definition.</li>
      </ol>
    </section>

    <section id="references" className="sop-section">
      <h2 className="text-xl font-heading font-bold text-secondary mb-3">5. Reference Documentation</h2>
      <ol className="list-decimal list-inside text-sm text-muted-foreground space-y-1">
        <li>National ESAVI surveillance manual</li>
        <li>National EPI manual</li>
        <li>Regional ESAVI surveillance manual</li>
        <li>National Public Health and Medical Act Chapters 28-31</li>
      </ol>
    </section>

    <section id="roles" className="sop-section">
      <h2 className="text-xl font-heading font-bold text-secondary mb-3">6. Roles & Responsibility</h2>
      <ul className="text-sm text-muted-foreground space-y-2">
        <li><strong className="text-foreground">Healthcare workers</strong> – Any health professional who works within a healthcare setting and contributes to the delivery of healthcare services.</li>
        <li><strong className="text-foreground">ESAVI focal point</strong> – A designated individual responsible for coordinating and managing ESAVI activities within a specific area.</li>
        <li><strong className="text-foreground">Surveillance Nurse</strong> – A healthcare worker (nurse) who plays a key role in systematic collection, analysis and interpretation of health-related data.</li>
      </ul>
    </section>

    <section id="abbreviations" className="sop-section">
      <h2 className="text-xl font-heading font-bold text-secondary mb-3">7. Abbreviations</h2>
      <div className="grid grid-cols-2 gap-1 text-sm text-muted-foreground">
        {[["ESAVI","Events Supposedly Attributable to Vaccination or Immunization"],["CMOH","County Medical Officer of Health"],["CMO","Chief Medical Officer"],["EPI","Expanded Programme in Immunization"],["WHO","World Health Organization"],["PAHO","Pan American Health Organization"],["MoH","Ministry of Health"],["HcW","Healthcare worker"]].map(([a,b])=>(
          <div key={a} className="flex gap-2"><strong className="text-foreground w-16 shrink-0">{a}</strong><span>{b}</span></div>
        ))}
      </div>
    </section>

    <section id="definitions" className="sop-section">
      <h2 className="text-xl font-heading font-bold text-secondary mb-3">8. Definitions</h2>
      <ul className="text-sm text-muted-foreground space-y-2">
        <li><strong className="text-foreground">ESAVI</strong> – Any untoward medical occurrence which follows immunization, and which does not necessarily have a causal relationship with the usage of the vaccine.</li>
        <li><strong className="text-foreground">Detection</strong> – Process of identifying health events of interest based on a pre-specified criteria or definition.</li>
        <li><strong className="text-foreground">Notification</strong> – The act of communicating information of any adverse health events to health authorities.</li>
        <li><strong className="text-foreground">Reporting</strong> – Documenting and sharing information of an adverse event post vaccination to health authorities.</li>
      </ul>
    </section>

    <section id="categorization" className="sop-section">
      <h2 className="text-xl font-heading font-bold text-secondary mb-3">9. Categorization of ESAVI</h2>
      <p className="text-sm text-muted-foreground mb-3">ESAVIs are categorized based on seriousness. A <strong className="text-foreground">serious ESAVI</strong> meets any of:</p>
      <ol className="list-decimal list-inside text-sm text-muted-foreground space-y-1 mb-4">
        <li>Causes death of the vaccinated individual</li>
        <li>Poses imminent danger to life</li>
        <li>Requires or prolongs hospitalization</li>
        <li>Causes persistent or significant disability</li>
        <li>Suspected of causing a congenital abnormality or stillbirth</li>
        <li>Suspected of causing an abortion</li>
      </ol>
      <p className="text-sm text-muted-foreground mb-3">A <strong className="text-foreground">non-serious ESAVI</strong> does NOT meet serious criteria and resolves without medical intervention.</p>
      <img src="/images/esavi_detection.png" alt="ESAVI detection and seriousness categorization algorithm" className="w-full rounded-lg border border-border" />
      <p className="text-xs text-muted-foreground mt-2 italic">Figure 1: ESAVI detection and seriousness categorization algorithm</p>
    </section>

    <section id="detection" className="sop-section">
      <h2 className="text-xl font-heading font-bold text-secondary mb-3">10. Detection of ESAVI</h2>
      <p className="text-sm text-muted-foreground">In the passive surveillance system, ESAVIs are identified by the vaccinated person, their family, or a healthcare professional. Any change in health status within the first <strong className="text-foreground">30 days</strong> post vaccination may be suspected as a result of the vaccine, however occurrence after 30 days does not exclude possible association.</p>
    </section>

    <section id="notification" className="sop-section">
      <h2 className="text-xl font-heading font-bold text-secondary mb-3">11. Notification of ESAVI</h2>
      <p className="text-sm text-muted-foreground">All healthcare providers must notify any ESAVI to the designated local ESAVI focal point using the standardized reporting form.</p>
    </section>

    <section id="reporting" className="sop-section">
      <h2 className="text-xl font-heading font-bold text-secondary mb-3">12. Reporting of ESAVI</h2>
      <p className="text-sm text-muted-foreground">All adverse events post vaccination should be notified to the ESAVI focal point (supervisory surveillance nurse). Cases should be reported using the national reporting form for serious and non-serious ESAVI.</p>
    </section>

    <section id="channels" className="sop-section">
      <h2 className="text-xl font-heading font-bold text-secondary mb-3">13. Reporting Channels</h2>
      <h3 className="font-semibold text-foreground text-sm mb-2">a. Paper-based reporting</h3>
      <p className="text-sm text-muted-foreground mb-3">Following completion of the paper-based form, the healthcare worker submits it to the ESAVI focal point for review. Approved forms are sent to the CMOH office, then to the EPI manager at the Ministry of Health.</p>
      <h3 className="font-semibold text-foreground text-sm mb-2">b. Electronic reporting</h3>
      <p className="text-sm text-muted-foreground">Healthcare workers can electronically report through a secure, web-based portal with data validation checks and automated notifications.</p>
    </section>

    <section id="procedure" className="sop-section">
      <h2 className="text-xl font-heading font-bold text-secondary mb-3">14. Procedure</h2>
      <div className="overflow-x-auto">
        <table className="sop-table">
          <thead><tr><th className="w-16">Step</th><th>Procedure</th><th className="w-48">Responsible</th></tr></thead>
          <tbody>
            {[
              ["1","Initial assessment/examination of individual presenting at healthcare facility.","Healthcare Worker"],
              ["2","Provide adequate healthcare. Prompt: Do you think the event might have been caused by a vaccine? If Yes: Go to step 3. If No: End ESAVI process.","Healthcare Worker"],
              ["3","Patient continues treatment. Does case meet ESAVI definition? If Yes: Go to step 4. If No: Review step 2.","Healthcare Worker"],
              ["4","Verify complete information to notify and categorize based on seriousness.","Healthcare Worker"],
              ["5","Is the ESAVI serious? If Yes: Notify within 48 hours. If No: Notify within 7 days.","Healthcare Worker"],
              ["6","Complete national ESAVI reporting form.","Healthcare Worker"],
              ["7","Submit form to ESAVI focal point for review.","Healthcare Worker"],
              ["8","Store reporting form in case file/dossier.","ESAVI focal point"],
              ["9","Review form for accuracy and completeness.","ESAVI focal point"],
              ["10","Is form complete? If Yes: Step 11. If No: Request additional info.","ESAVI focal point"],
              ["11","Transfer completed form to CMOH ESAVI focal point.","ESAVI focal point"],
              ["12","Confirmation of receipt.","CMOH ESAVI focal point"],
              ["13","Review form for accuracy and completeness.","CMOH ESAVI focal point"],
              ["14","Is form complete? If Yes: Step 15. If No: Request missing info.","CMOH ESAVI focal point"],
              ["15","Transfer to MoH EPI ESAVI focal point.","CMOH ESAVI focal point"],
              ["16","Confirmation of receipt.","MoH EPI focal point"],
              ["17","Review form checking accuracy and completeness.","MoH EPI focal point"],
              ["18","Is form complete? If Yes: Step 19. If No: Request missing info.","MoH EPI focal point"],
              ["19","Does case require investigation? If Yes: Notify investigation team. If No: Send to Epidemiology Division.","MoH EPI focal point"],
              ["20","Share reporting form with Epidemiology division and investigation team.","MoH EPI focal point"],
              ["21","Initiate ESAVI investigation using Investigation SOP.","National Investigation Team"],
              ["22","Update national ESAVI surveillance database.","Epidemiology Division"],
            ].map(([s,p,r])=>(
              <tr key={s}><td className="font-semibold">{s}</td><td>{p}</td><td>{r}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  </SOPLayout>
);

export default Detection;
