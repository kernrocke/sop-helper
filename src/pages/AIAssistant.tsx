import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";

interface Message {
  role: "user" | "bot";
  text: string;
}

// Comprehensive knowledge base from SOPs
const knowledgeBase: Record<string, { keywords: string[]; answer: string }> = {
  DEFINITION_ESAVI: {
    keywords: ["what is esavi", "esavi definition", "esavi stand for", "define esavi", "esavi mean", "what does esavi"],
    answer: "**ESAVI** stands for **Events Supposedly Attributable to Vaccination or Immunization**. It is defined as any untoward medical occurrence which follows immunization, and which does not necessarily have a causal relationship with the usage of the vaccine. The adverse event may be any unfavorable or unintended sign, abnormal laboratory finding, symptom, or disease."
  },
  SERIOUS_CRITERIA: {
    keywords: ["serious esavi", "serious criteria", "when is esavi serious", "life-threatening", "causes death", "hospitalization esavi", "serious case"],
    answer: "An ESAVI is classified as **Serious** if it meets any of the following:\n\n1. Causes the **death** of the vaccinated individual\n2. Poses an **imminent danger to life**\n3. Requires or prolongs **hospitalization**\n4. Causes persistent or significant **disability/incapacity**\n5. Is suspected of causing a **congenital abnormality or stillbirth**\n6. Is suspected of causing an **abortion**\n\nSerious ESAVIs must be notified **within 48 hours** of detection."
  },
  NON_SERIOUS_CRITERIA: {
    keywords: ["non-serious esavi", "non serious", "not serious", "mild esavi", "minor esavi"],
    answer: "An ESAVI is **Non-Serious** if it does **NOT** meet any serious criteria. Specifically:\n\n- Does NOT cause death\n- Does NOT require hospitalization\n- Does NOT cause disability or long-term disorders\n- Does NOT endanger the vaccinated person, embryo, fetus, or newborn\n- Is resolved without medical intervention or with symptomatic treatment\n\nNon-serious ESAVIs should be reported within **7 days** of detection."
  },
  DETECTION: {
    keywords: ["how to detect", "detect esavi", "detection process", "who detects", "identify esavi", "30 days", "detection timeframe", "passive surveillance"],
    answer: "In the **passive surveillance system**, ESAVIs are identified by:\n- The **vaccinated person** themselves\n- Their **family members**\n- A **healthcare professional**\n\nAny change in health status within the first **30 days** post-vaccination may be suspected as an ESAVI. However, events occurring after 30 days do not exclude possible vaccine association.\n\nDetection uses the standardized **ESAVI case definition** and cases are categorized by seriousness."
  },
  REPORTING_HOW: {
    keywords: ["how to report", "report esavi", "reporting channels", "method of reporting", "paper report", "electronic report", "reporting form"],
    answer: "ESAVI can be reported through **two channels**:\n\n**1. Paper-based reporting:**\n- Complete the national ESAVI reporting form\n- Submit to the ESAVI focal point (Surveillance Nurse)\n- Form is reviewed, then sent to CMOH office, then to EPI manager\n- Scanned copies can be sent via email\n\n**2. Electronic reporting:**\n- Through a secure, web-based portal\n- Direct data entry with validation checks\n- Automated notifications to relevant authorities"
  },
  REPORTING_DEADLINES: {
    keywords: ["deadline", "how long to report", "time to report", "48 hours", "7 days", "when to report", "reporting timeline", "notification time"],
    answer: "Reporting deadlines depend on seriousness:\n\n- **Serious ESAVI**: Must be notified **as soon as possible, no later than 48 hours** after detection\n- **Non-Serious ESAVI**: Must be notified **no later than 7 days** after detection\n\nAll cases should be reported using the **national ESAVI reporting form**."
  },
  REPORTING_TO_WHOM: {
    keywords: ["report to whom", "who to report", "where to report", "focal point", "submit form", "surveillance nurse"],
    answer: "ESAVIs should be reported to the **designated local ESAVI focal point** at your health facility, which is typically the **Supervisory Surveillance Nurse**.\n\nThe reporting chain is:\n1. Healthcare Worker → **ESAVI focal point** (at healthcare institution)\n2. ESAVI focal point → **CMOH ESAVI focal point** (county level)\n3. CMOH focal point → **MoH EPI ESAVI focal point** (national level)"
  },
  NOTIFICATION_REPORTERS: {
    keywords: ["who reports", "who notifies", "healthcare provider responsibility", "who can report"],
    answer: "**All healthcare providers** are responsible for notifying any ESAVI to the designated local ESAVI focal point. This includes doctors, nurses, pharmacists, and any health professional who works within a healthcare setting."
  },
  INVESTIGATION_CRITERIA: {
    keywords: ["investigation criteria", "when to investigate", "start investigation", "investigation required", "trigger investigation"],
    answer: "An ESAVI investigation should be initiated when:\n\n1. The case is classified as a **serious ESAVI**\n2. There is a **cluster** of ESAVI cases\n3. There is a **signal** of an unexpected or unusual ESAVI\n4. The case generates significant **public or media concern**\n5. There is a **suspected programmatic error**\n\nInvestigations for serious cases should begin within **48 hours** of notification."
  },
  INVESTIGATION_PROCESS: {
    keywords: ["investigation process", "how to investigate", "investigation steps", "investigation team", "field investigation"],
    answer: "The ESAVI investigation process includes:\n\n1. **Receive** notification of the case\n2. **Assemble** the national ESAVI investigation team\n3. **Review** all case documentation\n4. **Plan** the investigation (objectives, timeline, resources)\n5. **Conduct field investigation** at the healthcare facility\n6. **Interview** healthcare workers, patient/family, and witnesses\n7. **Review** medical records, vaccination records, cold chain documentation\n8. **Collect and analyze** biological samples if applicable\n9. **Compile findings** and prepare preliminary report\n10. **Submit** investigation report for causality assessment"
  },
  CAUSALITY_ASSESSMENT: {
    keywords: ["causality assessment", "causality", "causal relationship", "who methodology", "cause of esavi", "assessment steps"],
    answer: "**Causality Assessment** follows the **WHO revised methodology** with four key questions:\n\n**I.** Is there strong evidence for **other causes**?\n**II.** Is there a known **causal association** with the vaccine/vaccination? (includes vaccine product, quality, immunization errors, anxiety)\n**III.** Is there strong evidence **against** a causal association?\n**IV.** Review **other qualifying factors** (prior reactions, background rates, pre-existing conditions)\n\nAssessment is conducted by the **National Vaccine Safety Committee (NVSC/NITAG)**."
  },
  CAUSALITY_CLASSIFICATION: {
    keywords: ["classification", "final classification", "categories", "consistent", "indeterminate", "inconsistent", "unclassifiable", "causality result"],
    answer: "The final classification categories are:\n\n**A. Consistent with causal association:**\n- A1: Vaccine product-related reaction\n- A2: Vaccine quality defect-related\n- A3: Immunization error-related\n- A4: Immunization anxiety-related (ISRR)\n\n**B. Indeterminate:**\n- B1: Temporal relationship consistent but insufficient evidence\n- B2: Conflicting trends of consistency/inconsistency\n\n**C. Inconsistent with causal association (Coincidental)**\n\n**D. Unclassifiable** – Inadequate information available"
  },
  CASE_MANAGEMENT: {
    keywords: ["case management", "manage case", "case management process", "phases", "case dossier", "follow-up"],
    answer: "ESAVI Case Management has **three phases**:\n\n**Phase 1: Receipt and Initial Assessment**\n- Initial receipt and assessment of the ESAVI report\n\n**Phase 2: Data Entry and Verification**\n- Entry of case data into the national database with quality checks\n\n**Phase 3: Case Follow-up and Information Gathering**\n- Ongoing follow-up, additional information gathering, and case closure\n\nThe management chain flows from local/district level → intermediate (CMOH) → central (MoH/EPI) → international (PAHO/WHO)."
  },
  CMOH_ROLE: {
    keywords: ["cmoh", "cmoh role", "county medical officer", "cmoh focal point", "cmoh responsibility"],
    answer: "The **CMOH (County Medical Officer of Health) ESAVI focal point** is responsible for:\n\n- **Reviewing** ESAVI reporting forms for accuracy and completeness\n- **Verifying** data from the healthcare institution level\n- **Deciding** if serious cases require investigation\n- **Preparing** cases for review at the national level\n- **Coordinating** with the MoH EPI focal point"
  },
  DATA_MANAGEMENT: {
    keywords: ["data management", "data analysis", "database", "data quality", "signal detection", "data indicators"],
    answer: "ESAVI Data Management & Analysis includes:\n\n**Data collection and entry** into the national surveillance database\n**Quality indicators** monitored:\n- **Completeness** – Percentage of fields completed\n- **Timeliness** – Time from detection to database entry\n- **Accuracy** – Rate of data entry errors\n- **Consistency** – Internal consistency of related fields\n- **Validity** – Values within expected ranges\n\n**Analysis** includes descriptive statistics, signal detection, trend analysis, and periodic reporting (weekly, monthly, quarterly)."
  },
  ESAVI_CATEGORIES: {
    keywords: ["esavi categories", "types of esavi", "esavi types", "six categories", "classification of esavi", "product-related", "programmatic error", "coincidental", "anxiety"],
    answer: "ESAVI can be classified into **six categories**:\n\n1. **Vaccine product-related event** – Expected or unexpected reaction from vaccine properties\n2. **Vaccine quality defect-related event** – Caused by manufacturing or quality issues\n3. **Programmatic error-related event** – Caused by errors in handling, storage, or administration\n4. **Immunisation anxiety-related event** – Stress-related reactions (e.g., vasovagal)\n5. **Coincidental event** – Occurs after vaccination but not caused by it\n6. **Non-classifiable event** – Cannot be classified due to insufficient information"
  },
  ROLES_RESPONSIBILITIES: {
    keywords: ["roles", "responsibilities", "who is responsible", "focal point", "epi manager", "healthcare worker role"],
    answer: "Key roles in the ESAVI system:\n\n- **Healthcare Workers (HcW)** – Detect, notify, and report ESAVI cases\n- **ESAVI Focal Point** (Surveillance Nurse) – Coordinates ESAVI activities at the facility level\n- **CMOH ESAVI Focal Point** – Reviews and manages cases at the sub-national (county) level\n- **MoH EPI ESAVI Focal Point** – Oversees activities at the national level\n- **National ESAVI Investigation Team** – Conducts investigation of serious cases\n- **NVSC/NITAG** – Performs causality assessment of serious cases\n- **Epidemiology Division** – Database management and data analysis"
  },
  VACCINES_GENERAL: {
    keywords: ["vaccine", "vaccination", "immunisation", "immunization", "type of vaccine", "how vaccines work"],
    answer: "A **vaccine** is a biological preparation that improves immunity to a particular disease. There are **six vaccine technology platforms**:\n\n1. **Live Attenuated** – Weakened pathogens (e.g., MMR)\n2. **Inactivated** – Killed pathogens (e.g., Polio)\n3. **Subunit** – Pieces of pathogen (e.g., Hep B)\n4. **Toxoids** – Inactivated toxins (e.g., Tetanus)\n5. **Viral Vector** – Harmless virus delivering antigen code (e.g., AstraZeneca)\n6. **mRNA** – Teaches body to make specific protein (e.g., Pfizer)\n\nAll vaccines distributed in T&T are approved and meet international safety, quality, and efficacy requirements."
  },
};

function getBotResponse(input: string): string {
  const normalized = input.toLowerCase().replace(/[?.,!]/g, "").trim();
  
  // Check greetings
  if (/^(hi|hello|hey|good morning|good afternoon|good evening)/.test(normalized)) {
    return "Hello! 👋 I'm the ESAVI AI Assistant for Trinidad and Tobago. I can help you with questions about:\n\n- ESAVI definitions and categories\n- Detection and reporting procedures\n- Investigation criteria and process\n- Causality assessment methodology\n- Case management phases\n- Data management and analysis\n\nHow can I help you today?";
  }

  // Score each topic by matching keywords
  let bestMatch: string | null = null;
  let bestScore = 0;

  for (const [topic, data] of Object.entries(knowledgeBase)) {
    let score = 0;
    for (const keyword of data.keywords) {
      if (normalized.includes(keyword.toLowerCase())) {
        score += keyword.split(" ").length; // longer matches score higher
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestMatch = topic;
    }
  }

  if (bestMatch && bestScore > 0) {
    return knowledgeBase[bestMatch].answer;
  }

  return `I'm designed to answer questions based strictly on the **ESAVI Standard Operating Procedures** of Trinidad and Tobago. I couldn't find a specific answer for your question.\n\nTry asking about:\n- "What is an ESAVI?"\n- "How do I report an ESAVI?"\n- "What are the reporting deadlines?"\n- "What is causality assessment?"\n- "What are the investigation criteria?"`;
}

const AIAssistant = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "Hello! 👋 I'm the **ESAVI AI Assistant** for Trinidad and Tobago. I can help you with questions about ESAVI definitions, reporting procedures, investigation criteria, causality assessment, and more.\n\nAll my answers are based on the official **ESAVI Standard Operating Procedures**. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatRef.current?.scrollTo({ top: chatRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const send = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: "user", text: userMsg }]);
    setTimeout(() => {
      setMessages(prev => [...prev, { role: "bot", text: getBotResponse(userMsg) }]);
    }, 400);
  };

  const quickQuestions = [
    "What is an ESAVI?",
    "How do I report an ESAVI?",
    "What are the reporting deadlines?",
    "What is causality assessment?",
    "What are the investigation criteria?",
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <Link to="/" className="text-secondary hover:underline text-sm mb-4 inline-block">&larr; Back to Home</Link>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Info Panel */}
        <div className="lg:col-span-1 space-y-4">
          <div className="sop-section">
            <h2 className="text-lg font-heading font-bold text-foreground mb-3 flex items-center gap-2">
              <Bot size={20} className="text-secondary" /> About the AI Assistant
            </h2>
            <p className="text-sm text-muted-foreground mb-3">The ESAVI AI Assistant provides instant access to information from the Trinidad and Tobago ESAVI Standard Operating Procedures.</p>
            <div className="p-3 rounded-lg bg-muted border-l-4 border-gov-gold">
              <div className="flex items-start gap-2">
                <AlertCircle size={16} className="text-gov-gold flex-shrink-0 mt-0.5" />
                <p className="text-xs text-muted-foreground">This assistant provides guidance based on current SOPs. Always verify critical information with official documentation.</p>
              </div>
            </div>
          </div>

          <div className="sop-section">
            <h3 className="text-sm font-semibold text-foreground mb-2">Quick Questions</h3>
            <div className="flex flex-wrap gap-2">
              {quickQuestions.map(q => (
                <button key={q} onClick={() => { setInput(q); }}
                  className="text-xs px-3 py-1.5 rounded-full bg-muted text-muted-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors">
                  {q}
                </button>
              ))}
            </div>
          </div>

          <div className="sop-section">
            <h3 className="text-sm font-semibold text-foreground mb-2">Related Resources</h3>
            <ul className="text-xs space-y-1">
              <li><Link to="/sop-overview" className="text-secondary hover:underline">View All SOPs</Link></li>
              <li><Link to="/manual" className="text-secondary hover:underline">National ESAVI Manual</Link></li>
              <li><Link to="/detection" className="text-secondary hover:underline">Detection & Notification</Link></li>
              <li><Link to="/causality" className="text-secondary hover:underline">Causality Assessment</Link></li>
            </ul>
          </div>
        </div>

        {/* Chat Panel */}
        <div className="lg:col-span-2 sop-section flex flex-col" style={{ minHeight: "500px" }}>
          <h2 className="text-lg font-heading font-bold text-foreground mb-4">💬 Ask the ESAVI Assistant</h2>
          
          <div ref={chatRef} className="flex-1 overflow-y-auto space-y-3 mb-4 pr-2" style={{ maxHeight: "450px" }}>
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className="flex items-start gap-2 max-w-[85%]">
                  {msg.role === "bot" && <Bot size={18} className="text-secondary flex-shrink-0 mt-1" />}
                  <div className={msg.role === "bot" ? "chat-bubble-bot" : "chat-bubble-user"}>
                    <p className="text-sm whitespace-pre-line">{msg.text.replace(/\*\*(.*?)\*\*/g, "$1")}</p>
                  </div>
                  {msg.role === "user" && <User size={18} className="text-secondary flex-shrink-0 mt-1" />}
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && send()}
              placeholder="Type your ESAVI question..."
              className="flex-1 px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <button onClick={send} className="px-4 py-2.5 rounded-lg bg-secondary text-secondary-foreground hover:opacity-90 transition-opacity">
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
