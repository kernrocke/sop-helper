import SOPLayout from "@/components/SOPLayout";

const sidebarItems = [
  { id: "introduction", label: "1. Introduction" },
  { id: "purpose", label: "2. Purpose" },
  { id: "scope", label: "3. Scope" },
  { id: "prerequisites", label: "4. Pre-requisites" },
  { id: "roles", label: "5. Roles & Responsibility" },
  { id: "definitions", label: "6. Definitions" },
  { id: "procedure", label: "7. Procedure" },
  { id: "quality-indicators", label: "8. Quality Indicators" },
];

const DataAnalysis = () => (
  <SOPLayout title="ESAVI Data Management & Analysis" version="1.0" updateDate="25/06/2025"
    headerImage="/images/data_analysis.png" sidebarItems={sidebarItems}
    backLink={{ to: "/sop-overview", label: "SOP Overview" }}>

    <section id="introduction" className="sop-section">
      <h2 className="text-xl font-heading font-bold text-secondary mb-3">1. Introduction</h2>
      <p className="text-sm text-muted-foreground">This SOP outlines standardized processes for the management and analysis of ESAVI data in Trinidad and Tobago. It provides guidelines for data analysts, biostatisticians, epidemiologists, and other relevant personnel.</p>
    </section>

    <section id="purpose" className="sop-section">
      <h2 className="text-xl font-heading font-bold text-secondary mb-3">2. Purpose</h2>
      <p className="text-sm text-muted-foreground">To describe the standardized processes for ESAVI data collection, management, quality assurance, and analysis.</p>
    </section>

    <section id="scope" className="sop-section">
      <h2 className="text-xl font-heading font-bold text-secondary mb-3">3. Scope</h2>
      <p className="text-sm text-muted-foreground">This procedure applies to all personnel involved in ESAVI data management and analysis at the national level.</p>
    </section>

    <section id="prerequisites" className="sop-section">
      <h2 className="text-xl font-heading font-bold text-secondary mb-3">4. Pre-requisites</h2>
      <ol className="list-decimal list-inside text-sm text-muted-foreground space-y-1">
        <li>National ESAVI database established</li>
        <li>Data management personnel trained</li>
        <li>Data quality standards defined</li>
        <li>Statistical analysis tools available</li>
      </ol>
    </section>

    <section id="roles" className="sop-section">
      <h2 className="text-xl font-heading font-bold text-secondary mb-3">5. Roles & Responsibility</h2>
      <ul className="text-sm text-muted-foreground space-y-2">
        <li><strong className="text-foreground">Data Analyst/Biostatistician</strong> – Data entry, cleaning, analysis and reporting</li>
        <li><strong className="text-foreground">Epidemiologist</strong> – Data interpretation and signal detection</li>
        <li><strong className="text-foreground">MoH EPI focal point</strong> – Oversees data management activities</li>
        <li><strong className="text-foreground">Epidemiology Division</strong> – Database management and maintenance</li>
      </ul>
    </section>

    <section id="definitions" className="sop-section">
      <h2 className="text-xl font-heading font-bold text-secondary mb-3">6. Definitions</h2>
      <ul className="text-sm text-muted-foreground space-y-2">
        <li><strong className="text-foreground">Data Management</strong> – Systematic collection, storage, processing and quality control of ESAVI data</li>
        <li><strong className="text-foreground">Signal Detection</strong> – Identification of potential safety concerns from data analysis</li>
        <li><strong className="text-foreground">Data Quality</strong> – Accuracy, completeness, timeliness, and consistency of recorded data</li>
      </ul>
    </section>

    <section id="procedure" className="sop-section">
      <h2 className="text-xl font-heading font-bold text-secondary mb-3">7. Procedure</h2>
      <div className="overflow-x-auto">
        <table className="sop-table">
          <thead><tr><th className="w-16">Step</th><th>Procedure</th><th className="w-48">Responsible</th></tr></thead>
          <tbody>
            {[
              ["1","Receive completed ESAVI reporting forms and case documentation","Data Analyst"],
              ["2","Enter data into the national ESAVI surveillance database","Data Analyst"],
              ["3","Perform data validation and quality checks","Data Analyst"],
              ["4","Clean and standardize data entries","Data Analyst"],
              ["5","Conduct descriptive statistical analysis","Epidemiologist"],
              ["6","Perform signal detection and trend analysis","Epidemiologist"],
              ["7","Generate periodic reports (weekly, monthly, quarterly)","Epidemiologist"],
              ["8","Present findings to relevant stakeholders","MoH EPI focal point"],
              ["9","Archive and backup data according to retention policies","Data Analyst"],
              ["10","Report to PAHO/WHO regional database as required","MoH EPI focal point"],
            ].map(([s,p,r])=>(
              <tr key={s}><td className="font-semibold">{s}</td><td>{p}</td><td>{r}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>

    <section id="quality-indicators" className="sop-section">
      <h2 className="text-xl font-heading font-bold text-secondary mb-3">8. Quality of Data Indicators</h2>
      <p className="text-sm text-muted-foreground mb-3">Data quality is monitored using the following indicators:</p>
      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
        <li><strong className="text-foreground">Completeness</strong> – Percentage of fields completed in reporting forms</li>
        <li><strong className="text-foreground">Timeliness</strong> – Time from detection to database entry</li>
        <li><strong className="text-foreground">Accuracy</strong> – Rate of data entry errors detected</li>
        <li><strong className="text-foreground">Consistency</strong> – Internal consistency of related data fields</li>
        <li><strong className="text-foreground">Validity</strong> – Values within expected ranges</li>
      </ul>
    </section>
  </SOPLayout>
);

export default DataAnalysis;
