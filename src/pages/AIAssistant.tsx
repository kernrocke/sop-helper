import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, AlertCircle, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { loadSOP, searchSOP } from "@/lib/sopSearch";

interface Message {
  role: "user" | "bot";
  text: string;
}

const AIAssistant = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "Hello! 👋 I'm the ESAVI AI Assistant for Trinidad and Tobago. I can help you with questions about ESAVI definitions, reporting procedures, investigation criteria, causality assessment, and more.\n\nAll my answers are based on the official ESAVI Standard Operating Procedures. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [sopLoaded, setSopLoaded] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    loadSOP().then(() => setSopLoaded(true));
  }, []);

  useEffect(() => {
    chatRef.current?.scrollTo({ top: chatRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const send = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: "user", text: userMsg }]);
    setIsTyping(true);

    setTimeout(() => {
      const normalized = userMsg.toLowerCase().trim();
      let response: string;

      if (/^(hi|hello|hey|good morning|good afternoon|good evening)\b/.test(normalized)) {
        response = "Hello! 👋 I'm the ESAVI AI Assistant for Trinidad and Tobago. I can help you with questions about:\n\n• ESAVI definitions and categories\n• Detection and reporting procedures\n• Investigation criteria and process\n• Causality assessment methodology\n• Case management phases\n• Data management and analysis\n\nHow can I help you today?";
      } else {
        response = searchSOP(userMsg);
      }

      setIsTyping(false);
      setMessages(prev => [...prev, { role: "bot", text: response }]);
    }, 600);
  };

  const quickQuestions = [
    "What is an ESAVI?",
    "How do I report an ESAVI?",
    "What are the reporting deadlines?",
    "What is causality assessment?",
    "What are the investigation criteria?",
    "Who is responsible for ESAVI detection?",
    "What is the cold chain?",
    "What are programmatic errors?",
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
            <p className="text-sm text-muted-foreground mb-3">The ESAVI AI Assistant searches the official Trinidad and Tobago ESAVI Standard Operating Procedures to answer your questions.</p>
            <div className="p-3 rounded-lg bg-muted border-l-4 border-gov-gold">
              <div className="flex items-start gap-2">
                <AlertCircle size={16} className="text-gov-gold flex-shrink-0 mt-0.5" />
                <p className="text-xs text-muted-foreground">All answers come directly from the official SOP documents. Always verify critical decisions with official documentation.</p>
              </div>
            </div>
            {!sopLoaded && (
              <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                <Loader2 size={14} className="animate-spin" /> Loading SOP documents...
              </div>
            )}
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
                    <p className="text-sm whitespace-pre-line">{msg.text}</p>
                  </div>
                  {msg.role === "user" && <User size={18} className="text-secondary flex-shrink-0 mt-1" />}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start gap-2">
                  <Bot size={18} className="text-secondary flex-shrink-0 mt-1" />
                  <div className="chat-bubble-bot">
                    <div className="flex items-center gap-1">
                      <Loader2 size={14} className="animate-spin" />
                      <span className="text-sm text-muted-foreground">Searching SOPs...</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
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
            <button onClick={send} disabled={!sopLoaded} className="px-4 py-2.5 rounded-lg bg-secondary text-secondary-foreground hover:opacity-90 transition-opacity disabled:opacity-50">
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
