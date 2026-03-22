// Curated Q&A from the SOPs — concise, role-specific answers
// Each entry has intent patterns and a well-structured answer

export interface QAEntry {
  intents: string[];
  answer: string;
}

export const curatedQA: QAEntry[] = [
  // === ESAVI Definition ===
  {
    intents: ["what is esavi", "esavi definition", "define esavi", "esavi mean", "esavi stand for", "what does esavi"],
    answer: "**ESAVI** (Events Supposedly Attributable to Vaccination or Immunization) is any untoward medical occurrence which follows immunization, and which does not necessarily have a causal relationship with the usage of the vaccine. The adverse event may be any unfavorable or unintended sign, abnormal laboratory finding, symptom, or disease.\n\n*(Source: SOP – Detection & Reporting, Section 8)*"
  },

  // === Who detects ===
  {
    intents: ["who detect", "who is responsible for detection", "responsible for esavi detection", "who identifies esavi", "who finds esavi"],
    answer: "ESAVI detection is the responsibility of:\n\n• **Healthcare Workers (HcW)** — Any health professional working within a healthcare setting who identifies a suspected ESAVI during patient assessment\n• **The vaccinated person** themselves\n• **Family members** of the vaccinated person\n\nThe **Healthcare Worker** performs the initial assessment, reviews the patient's signs, symptoms, lab findings, and disease status, and determines if the event may have been caused by a vaccine.\n\n*(Source: SOP – Detection & Reporting, Sections 6, 10 & Procedure Steps 1-2)*"
  },

  // === Detection process ===
  {
    intents: ["how is esavi detected", "detection process", "how to detect esavi", "esavi detection", "detect esavi"],
    answer: "ESAVI detection follows this process:\n\n1. **Initial assessment** — Healthcare worker examines the patient presenting at a healthcare facility, reviewing signs, symptoms, lab findings, and disease status\n2. **Suspicion prompt** — The HcW asks: \"Could this event have been caused by a vaccine/vaccination?\"\n3. **Case definition check** — If yes, the HcW verifies if the case meets the standardized ESAVI case definition\n4. **Categorization** — The case is categorized as **serious** or **non-serious** based on seriousness criteria\n\nAny change in health status within the first **30 days** post-vaccination may be suspected as an ESAVI, though events after 30 days are not excluded.\n\n*(Source: SOP – Detection & Reporting, Sections 10, 14)*"
  },

  // === Serious criteria ===
  {
    intents: ["serious esavi", "serious criteria", "when is esavi serious", "what makes esavi serious", "serious case"],
    answer: "An ESAVI is classified as **Serious** if it meets any of the following criteria:\n\n1. Causes the **death** of the vaccinated individual\n2. Poses an **imminent danger to life**\n3. Requires **hospitalization** or prolongs a hospital stay\n4. Causes persistent or significant **disability or incapacity**\n5. Suspected of causing a **congenital abnormality or stillbirth**\n6. Suspected of causing an **abortion**\n\nSerious ESAVIs must be notified **no later than 48 hours** after detection.\n\n*(Source: SOP – Detection & Reporting, Section 9)*"
  },

  // === Non-serious criteria ===
  {
    intents: ["non-serious esavi", "non serious", "not serious", "mild esavi", "minor esavi"],
    answer: "An ESAVI is **Non-Serious** if it meets ALL of the following:\n\n• Does NOT cause death\n• Does NOT require hospitalization\n• Does NOT cause disability or long-term disorders\n• Does NOT endanger the vaccinated person, embryo, fetus, or newborn\n• Is resolved without medical intervention or with symptomatic treatment\n\nNon-serious ESAVIs must be reported **no later than 7 days** after detection.\n\n*(Source: SOP – Detection & Reporting, Section 9)*"
  },

  // === Reporting — how ===
  {
    intents: ["how to report", "report esavi", "reporting process", "reporting channels", "submit report", "reporting form"],
    answer: "ESAVIs can be reported through **two channels**:\n\n**1. Paper-based reporting:**\n• Complete the national ESAVI reporting form (located among MoH surveillance forms at the facility)\n• Submit to the ESAVI focal point (Surveillance Nurse) at the healthcare institution\n• The form is reviewed for completeness, then forwarded to the CMOH office, then to the MoH EPI manager\n• Scanned copies can be sent via email or approved messaging apps\n\n**2. Electronic reporting:**\n• Report via a secure, web-based portal accessible through the healthcare institution's intranet\n• Direct data entry with validation checks and automated notifications\n\n*(Source: SOP – Detection & Reporting, Section 13)*"
  },

  // === Reporting — deadlines ===
  {
    intents: ["reporting deadline", "how long to report", "time to report", "48 hours", "7 days", "when to report", "reporting timeline", "notification time", "reporting deadlines"],
    answer: "Reporting deadlines depend on seriousness:\n\n• **Serious ESAVI** — Must be notified **as soon as possible, no later than 48 hours** after detection\n• **Non-Serious ESAVI** — Must be notified **no later than 7 days** after detection\n\n*(Source: SOP – Detection & Reporting, Procedure Step 5)*"
  },

  // === Reporting — to whom ===
  {
    intents: ["report to whom", "who to report to", "where to report", "who do i report", "submit form to"],
    answer: "The ESAVI reporting chain is:\n\n1. **Healthcare Worker** → submits the form to the **ESAVI focal point** (Supervisory Surveillance Nurse) at the healthcare institution\n2. **ESAVI focal point** → reviews and forwards to the **CMOH ESAVI focal point** (county level)\n3. **CMOH focal point** → reviews and forwards to the **MoH EPI ESAVI focal point** (national level)\n4. **MoH EPI focal point** → determines if investigation is needed and forwards to the **Epidemiology Division** for database entry\n\n*(Source: SOP – Detection & Reporting, Procedure Steps 7-22)*"
  },

  // === Who reports ===
  {
    intents: ["who reports", "who notifies", "who can report", "who is responsible for reporting", "healthcare provider report"],
    answer: "**All healthcare providers** are responsible for notifying any ESAVI to the designated local ESAVI focal point. This includes any health professional working within a healthcare setting — doctors, nurses, pharmacists, and other healthcare workers.\n\n*(Source: SOP – Detection & Reporting, Sections 6, 11)*"
  },

  // === Roles & responsibilities ===
  {
    intents: ["roles", "responsibilities", "who is responsible", "key personnel", "esavi personnel"],
    answer: "Key roles in the ESAVI surveillance system:\n\n• **Healthcare Workers (HcW)** — Detect, notify, and report ESAVI cases using the national reporting form\n• **ESAVI Focal Point (Surveillance Nurse)** — Reviews reporting forms for completeness/accuracy at the healthcare facility level\n• **CMOH ESAVI Focal Point** — Reviews and manages cases at the county level; decides if investigation is needed\n• **MoH EPI ESAVI Focal Point** — Oversees ESAVI activities at the national level; coordinates with investigation teams\n• **National ESAVI Investigation Team** — Conducts field investigations of serious ESAVI cases\n• **NVSC/NITAG** — National Vaccine Safety Committee that performs causality assessment\n• **Epidemiology Division** — Manages the national ESAVI database and conducts data analysis\n\n*(Source: SOP – Detection & Reporting, Section 6; Investigation SOP, Section 6; Causality SOP, Section 6)*"
  },

  // === ESAVI focal point ===
  {
    intents: ["esavi focal point", "focal point role", "what does focal point do", "surveillance nurse role"],
    answer: "The **ESAVI Focal Point** is a designated individual (typically a **Supervisory Surveillance Nurse**) responsible for:\n\n• **Coordinating** and managing ESAVI activities within their area (healthcare facility, county, or national level)\n• **Reviewing** completed ESAVI reporting forms for accuracy and completeness\n• **Storing** the reporting form and supporting information in a case file/dossier\n• **Forwarding** approved forms to the next level (CMOH or MoH EPI)\n\nThere are focal points at three levels: healthcare institution, CMOH (county), and MoH EPI (national).\n\n*(Source: SOP – Detection & Reporting, Sections 6, Procedure Steps 8-11)*"
  },

  // === CMOH role ===
  {
    intents: ["cmoh", "cmoh role", "county medical officer", "cmoh focal point", "cmoh responsibility"],
    answer: "The **CMOH (County Medical Officer of Health) ESAVI Focal Point** is responsible for:\n\n• **Confirming receipt** of the ESAVI reporting package from the healthcare institution\n• **Reviewing** ESAVI reporting forms for accuracy and completeness\n• **Requesting corrections** if information is missing or inaccurate\n• **Verifying** the case meets the ESAVI case definition and minimum quality criteria\n• **Determining** if serious cases require investigation\n• **Forwarding** approved forms to the MoH EPI ESAVI focal point\n\n*(Source: SOP – Detection & Reporting, Procedure Steps 12-15; Case Management SOP, Procedure Steps 1-12)*"
  },

  // === Investigation criteria ===
  {
    intents: ["investigation criteria", "when to investigate", "when is investigation needed", "trigger investigation", "start investigation"],
    answer: "An ESAVI investigation should be initiated when:\n\n1. The case is classified as a **serious ESAVI**\n2. There is a **cluster** of ESAVI cases (two or more similar events related in time, location, or vaccine)\n3. There is a **signal** of an unexpected or unusual ESAVI\n4. The case generates significant **public or media concern**\n5. There is a **suspected programmatic error**\n6. Events are above the **expected rate** or of unusual severity\n7. There is doubt about the need to **recall a vaccine batch**\n\nInvestigations should begin within **48 hours** of notification.\n\n*(Source: SOP – Investigation, Section 9; Causality SOP, Section 9)*"
  },

  // === Investigation process ===
  {
    intents: ["investigation process", "investigation steps", "how to investigate", "how is investigation conducted", "field investigation"],
    answer: "The ESAVI investigation follows these steps:\n\n1. **Define the problem** — Review who, where, how, and when\n2. **Plan & prepare** — Identify team members and additional experts needed\n3. **Establish timeline** — Document sequence of events\n4. **Hospital review** — Review medical records, interview treating physicians\n5. **Vaccination site visit** — Observe vaccine handling, cold chain, administration techniques\n6. **Patient/family interview** — Visit residence, observe environmental conditions\n7. **Stakeholder interviews** — Food & Drug Division, EPI Manager, Epidemiology Division\n8. **Collect samples** — Patient samples and vaccine samples as needed\n9. **Compile findings** — Complete the national ESAVI investigation form\n10. **Submit report** — To CMO, EPI manager, and Epidemiology Division\n\n*(Source: SOP – Investigation, Procedure Steps 1-27)*"
  },

  // === Investigation team ===
  {
    intents: ["investigation team", "who investigates", "who conducts investigation", "investigation team members"],
    answer: "The **National ESAVI Investigation Team** conducts ESAVI investigations. Key requirements:\n\n• The team must have a designated **team lead**\n• All members must have received **training on ESAVI investigation**\n• Members must have **no affiliation** to vaccine manufacturers or distributors\n• Members must adhere to **ethical principles** and maintain **confidentiality**\n• No member should have been previously involved in the patient's care\n\nThe team is activated by the **MoH EPI ESAVI Focal Point** when investigation criteria are met.\n\n*(Source: SOP – Investigation, Sections 4, 6)*"
  },

  // === Causality assessment ===
  {
    intents: ["causality assessment", "what is causality", "causality process", "how is causality assessed", "who methodology"],
    answer: "**Causality Assessment** follows the WHO revised methodology with these steps:\n\n1. **Evaluation of eligibility** — Confirm valid diagnosis, sequence of events, and completed investigation\n2. **Verification checklist** — Answer yes/no/not known to standardized questions with supporting evidence\n3. **Causality assessment algorithm** — Apply the algorithm based on checklist responses\n4. **Classification of the event** — Assign a final classification category\n\nThe assessment is conducted by the **National Vaccine Safety Committee (NVSC)**, a sub-committee of NITAG, using case dossiers prepared by the MoH EPI ESAVI focal point.\n\n*(Source: SOP – Causality Assessment, Sections 10.1-10.4)*"
  },

  // === Causality classification ===
  {
    intents: ["causality classification", "classification categories", "final classification", "consistent", "indeterminate", "inconsistent", "unclassifiable"],
    answer: "The causality assessment classification categories are:\n\n**A. Consistent with causal association:**\n• Vaccine product-related event\n• Vaccine quality deviation-related event\n• Programmatic error-related event\n• Stress-related event (immunization anxiety)\n\n**B. Undetermined:**\n• Temporal relationship is consistent but insufficient evidence\n• Conflicting trends of consistency and inconsistency\n\n**C. Inconsistent with causal association** (coincidental event)\n\n**D. Non-classifiable** — Insufficient information to classify\n\n*(Source: SOP – Causality Assessment, Section 10.4)*"
  },

  // === NVSC / NITAG ===
  {
    intents: ["nvsc", "nitag", "vaccine safety committee", "who does causality", "causality committee"],
    answer: "The **National Vaccine Safety Committee (NVSC)** is a sub-committee of the NITAG responsible for causality assessment. Key roles:\n\n• **President** — Chairs meetings, directs discussions, votes on final classification\n• **Vice President** — Chairs in the President's absence\n• **Committee Members** — Independent experts who review cases and vote on classification\n• **Secretariat** — Coordinates logistics, prepares agendas, drafts minutes and reports\n• **Invited Experts** — Provide technical input but cannot vote\n\nMembers must have **no affiliation** to vaccine manufacturers, governmental agencies, or previous involvement with the case.\n\n*(Source: SOP – Causality Assessment, Sections 4, 6)*"
  },

  // === Case management ===
  {
    intents: ["case management", "manage case", "case management phases", "case management process"],
    answer: "ESAVI Case Management has **three phases**:\n\n**Phase 1: Receipt and Initial Assessment**\n• CMOH focal point reviews if the case meets the ESAVI case definition\n• Requests healthcare institution to prioritize patient treatment\n\n**Phase 2: Data Entry and Verification**\n• Verify completeness of minimum ESAVI data\n• Verify accuracy of information in the report\n• If quality criteria not met, request corrections from the reporting HcW\n\n**Phase 3: Case Follow-up and Information Gathering**\n• Determine if case is serious → convene surveillance task force\n• Determine if investigation criteria are met\n• File case and ensure data is entered for analysis\n\n*(Source: SOP – Case Management, Section 9)*"
  },

  // === ESAVI categories / types ===
  {
    intents: ["esavi categories", "types of esavi", "esavi types", "six categories", "classification of esavi", "kinds of esavi"],
    answer: "ESAVI events are classified into **six categories**:\n\n1. **Vaccine product-related event** — Caused by inherent properties of the vaccine product or its components\n2. **Vaccine quality deviation-related event** — Caused by deviations in manufacturing, storage, or distribution\n3. **Programmatic error-related event** — Caused by errors in vaccine handling, storage, or administration\n4. **Stress-related event (ISRR)** — Caused by anxiety/stress about the vaccination process\n5. **Coincidental event** — Has a temporal relationship with the vaccine but is not caused by it\n6. **Non-classifiable event** — Cannot be classified due to insufficient information\n\n*(Source: SOP – Causality Assessment, Section 8)*"
  },

  // === Clusters ===
  {
    intents: ["cluster", "esavi cluster", "what is a cluster", "cluster definition", "cluster classification"],
    answer: "An **ESAVI cluster** is defined as **two or more cases** of the same or similar events related in:\n• **Time**\n• **Geographical location or area**\n• **Vaccine administered**\n\nClusters may be identified through:\n• **Data analysis** — Surveillance systems using cluster detection algorithms\n• **Notification** — Multiple similar ESAVI cases at a healthcare facility\n\nAn abbreviated investigation may be conducted for non-serious clusters when the diagnosis is unambiguous, alternative explanations are ruled out, cases show no unusual pattern, are not linked to the same vaccine lot, and there's no evidence of programmatic errors.\n\n*(Source: SOP – Investigation, Appendix 1: ESAVI Clusters)*"
  },

  // === Data management ===
  {
    intents: ["data management", "data analysis", "database", "data quality", "data entry"],
    answer: "ESAVI Data Management & Analysis involves:\n\n**Key roles:**\n• **Data Entry Clerk** — Transcribes paper records into the digital database\n• **Data Analyst** — Manages and analyzes public health data\n• **Data Manager** — Approves all data analysis steps and quality checks\n\n**Process phases:**\n1. **Phase 0** — Identify the database model and variable dictionary\n2. **Phase 1** — File structure evaluation and conversion to analysis format\n3. **Phase 2** — Error identification and database cleanup\n4. **Phase 3** — Signal detection and trend analysis\n\nAnalysis is conducted by the **Epidemiology Division** at the national level.\n\n*(Source: SOP – Data Management & Analysis, Sections 6, 9)*"
  },

  // === Cold chain ===
  {
    intents: ["cold chain", "vaccine storage", "vaccine handling", "temperature"],
    answer: "During ESAVI investigations, the **cold chain** is assessed by examining:\n\n• How vaccines are **handled** at the facility\n• The **condition of vaccine vials**\n• Vaccine **distribution and disposal** procedures\n• **Batch numbers and expiration dates**\n• Whether vials are properly **labelled**\n• Whether other drugs are stored **with the vaccines and diluents**\n• How vaccines are placed in the **cold chain equipment**\n• **Shipping conditions** from manufacturer into the country\n\nCold chain maintenance is verified from the entrance of the vaccine through the entire distribution process.\n\n*(Source: SOP – Investigation, Procedure Step 14)*"
  },

  // === Programmatic errors ===
  {
    intents: ["programmatic error", "immunization error", "administration error", "vaccine error"],
    answer: "A **programmatic error-related event** is an ESAVI caused by deviations in vaccine handling, storage, or administration. During investigations, the team examines:\n\n• **Vaccine administration techniques**\n• **Reconstitution procedures** and time between reconstitution and administration\n• **Storage conditions** of vaccines, diluents, and administration devices\n• Number of vaccines administered within a specific timeframe\n• Reports of **anomalies** with vaccine manipulation\n• Problems observed with the **vaccinator, vaccination site, and supplies**\n• Monitoring of programmatic error **trends** at the vaccination site\n\n*(Source: SOP – Investigation, Procedure Steps 14, 18; Causality SOP, Section 8)*"
  },

  // === Notification definition ===
  {
    intents: ["what is notification", "notification definition", "notification vs reporting", "difference between notification and reporting"],
    answer: "According to the SOPs:\n\n• **Notification** — The act of **communicating information** of any adverse health events to health authorities or interested stakeholders\n• **Reporting** — The act of **documenting and sharing** information of an adverse event post-vaccination to health authorities via the national reporting form\n\nIn practice: notification is the initial alert, while reporting involves completing the formal documentation.\n\n*(Source: SOP – Detection & Reporting, Section 8)*"
  },
];
