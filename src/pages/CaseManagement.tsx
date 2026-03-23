import SOPLayout from "@/components/SOPLayout";

const base = import.meta.env.BASE_URL;

const sidebarItems = [
  { id: "introduction", label: "1. Introduction" },
  { id: "purpose", label: "2. Purpose" },
  { id: "scope", label: "3. Scope" },
  { id: "prerequisites", label: "4. Pre-requisites" },
  { id: "roles", label: "5. Roles & Responsibility" },
  { id: "definitions", label: "6. Definitions" },
  { id: "procedure", label: "7. Procedure" },
];

const CaseManagement = () => (
  <SOPLayout title="ESAVI Case Management" version="1.0" updateDate="31/05/2025"
    headerImage={`${base}images/case_management.png`} sidebarItems={sidebarItems}
    backLink={{ to: "/sop-overview", label: "SOP Overview" }}>

    <section id="introduction" className="sop-section">
      <h2 className="text-xl font-heading font-bold text-secondary mb-3">1. Introduction</h2>
      <p className="text-sm text-muted-foreground">This SOP outlines standardized processes for ESAVI case management at the sub-national and national levels in Trinidad and Tobago. It provides guidelines for personnel in charge of surveillance or pharmacovigilance.</p>
    </section>

    <section id="purpose" className="sop-section">
      <h2 className="text-xl font-heading font-bold text-secondary mb-3">2. Purpose</h2>
      <p className="text-sm text-muted-foreground">To describe the process and workflow for managing ESAVI cases from receipt through follow-up.</p>
    </section>

    <section id="scope" className="sop-section">
      <h2 className="text-xl font-heading font-bold text-secondary mb-3">3. Scope</h2>
      <p className="text-sm text-muted-foreground">This procedure applies to all ESAVI case management activities at the sub-national and national level.</p>
    </section>

    <section id="prerequisites" className="sop-section">
      <h2 className="text-xl font-heading font-bold text-secondary mb-3">4. Pre-requisites</h2>
      <ol className="list-decimal list-inside text-sm text-muted-foreground space-y-1">
        <li>Detection and notification SOP is operational</li>
        <li>Case management personnel trained</li>
        <li>Case management tools and forms available</li>
      </ol>
    </section>

    <section id="roles" className="sop-section">
      <h2 className="text-xl font-heading font-bold text-secondary mb-3">5. Roles & Responsibility</h2>
      <ul className="text-sm text-muted-foreground space-y-2">
        <li><strong className="text-foreground">ESAVI focal point</strong> – Manages case at institutional level</li>
        <li><strong className="text-foreground">CMOH ESAVI focal point</strong> – Reviews and manages cases at sub-national level</li>
        <li><strong className="text-foreground">MoH EPI focal point</strong> – Oversees case management at national level</li>
        <li><strong className="text-foreground">Epidemiology Division</strong> – Data entry and database management</li>
      </ul>
    </section>

    <section id="definitions" className="sop-section">
      <h2 className="text-xl font-heading font-bold text-secondary mb-3">6. Definitions</h2>
      <ul className="text-sm text-muted-foreground space-y-2">
        <li><strong className="text-foreground">Case Management</strong> – The systematic process of receiving, assessing, documenting, and following up on ESAVI cases</li>
        <li><strong className="text-foreground">Case Dossier</strong> – Complete documentation of an ESAVI case including reports, investigation findings, and follow-up records</li>
      </ul>
    </section>

    <section id="procedure" className="sop-section">
      <h2 className="text-xl font-heading font-bold text-secondary mb-3">7. Procedure</h2>
      <p className="text-sm text-muted-foreground mb-4">The ESAVI Case Management procedure is defined in three phases:</p>

      <div className="space-y-4 mb-6">
        <div className="p-4 rounded-lg bg-muted border-l-4 border-secondary">
          <h4 className="font-semibold text-foreground">Phase 1: Receipt and Initial Assessment</h4>
          <p className="text-xs text-muted-foreground mt-1">Initial receipt and assessment of the ESAVI report by the focal point.</p>
        </div>
        <div className="p-4 rounded-lg bg-muted border-l-4 border-accent">
          <h4 className="font-semibold text-foreground">Phase 2: Data Entry and Verification</h4>
          <p className="text-xs text-muted-foreground mt-1">Entry of case data into the national database with quality checks.</p>
        </div>
        <div className="p-4 rounded-lg bg-muted border-l-4 border-gov-gold">
          <h4 className="font-semibold text-foreground">Phase 3: Case Follow-up and Information Gathering</h4>
          <p className="text-xs text-muted-foreground mt-1">Ongoing follow-up, additional information gathering, and case closure.</p>
        </div>
      </div>

      <img src={`${base}images/case_management_TTO.png`} alt="T&T ESAVI Case Management Flow Diagram" className="w-full rounded-lg border border-border" />
      <p className="text-xs text-muted-foreground mt-2 italic">Figure: T&T ESAVI Surveillance System Flow Diagram - Case Management</p>
    </section>
  </SOPLayout>
);

export default CaseManagement;