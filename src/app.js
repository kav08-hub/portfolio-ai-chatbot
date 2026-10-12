/**
 * Personal Portfolio with AI Chatbot
 * Interactive Portfolio Logic & Knowledge-Engine Chatbot
 * Configured for: Baby Kavya G (AI / Machine Learning Enthusiast)
 */

// Initialize profileData from window.PROFILE_DATA if available, or fallback
let profileData = window.PROFILE_DATA || {
  name: "Baby Kavya G",
  initials: "GK",
  title: "AI / Machine Learning Enthusiast",
  subtitle: "B.Tech CSE (AI & ML) Student at VNR Vignana Jyothi Institute of Engineering & Technology",
  location: "Hyderabad, India",
  phone: "+91 9063238677",
  email: "gkavi1325@gmail.com",
  links: {
    github: "https://github.com/kav08-hub",
    linkedin: "https://www.linkedin.com/in/baby-kavya-gurram",
    resume: "/resume.pdf"
  },
  stats: {
    academicYear: "2nd Year",
    intermediateScore: "98.9%",
    tenthScore: "89.8%",
    certificationsCount: "7+"
  },
  about: {
    summary: "Second-year B.Tech student in Computer Science (Artificial Intelligence & Machine Learning) at VNR Vignana Jyothi Institute of Engineering & Technology, Hyderabad. Highly driven AI/ML enthusiast with hands-on experience developing LLM chatbots, software network systems, and participating in competitive hackathons and startup expos.",
    highlights: [
      "Pursuing B.Tech in CSE (AI & ML) at VNR Vignana Jyothi Institute of Engineering & Technology (2025 - Present).",
      "Scored 98.9% in Intermediate (12th Grade) at Sri Aadya Junior College and 89.8% in 10th Grade at Surya the Global School.",
      "Presented innovative healthcare AI idea at Startup Expo – VNRVJIET: 'Early detection of chronic diseases without relying on high-cost hospital visits'.",
      "Completed Generative AI Workshop at IIT Hyderabad and AI with Python certification with Coincent.ai & E-Cell IIT Madras.",
      "Active participant in Agentic AI, Vibe Coding Hackathon, Synthetic Data Creation Hackathon, and ML Challenge."
    ]
  },
  skills: [
    {
      category: "Programming",
      items: ["Python", "C", "Data Structures (basic)"]
    },
    {
      category: "Tools & Platforms",
      items: ["GitHub", "Google Colab", "VS Code"]
    },
    {
      category: "Soft Skills",
      items: ["Problem-solving", "Team collaboration", "Communication"]
    },
    {
      category: "Languages",
      items: ["Telugu", "English"]
    }
  ],
  projects: [
    {
      title: "AI Chatbot using LLM",
      description: "An intelligent conversational chatbot application leveraging Large Language Models (LLMs) to deliver contextual responses, automate dialogue workflows, and provide an interactive AI-powered conversational experience.",
      technologies: ["Python", "LLMs", "Generative AI", "Prompt Engineering", "GitHub"],
      githubUrl: "https://github.com/kav08-hub/ai-chatbot-llm",
      liveUrl: "https://github.com/kav08-hub/ai-chatbot-llm",
      tag: "AI & LLM"
    },
    {
      title: "Hospital Network System",
      description: "A structured hospital management software system designed to coordinate healthcare departmental workflows, patient records, and hospital network resources efficiently.",
      technologies: ["C / Python", "Data Structures", "GitHub", "VS Code"],
      githubUrl: "https://github.com/kav08-hub/Hospital-Network",
      liveUrl: "https://github.com/kav08-hub/Hospital-Network",
      tag: "Systems & Healthcare"
    }
  ],
  education: [
    {
      degree: "B. Tech — Computer Science (AI & ML)",
      institution: "VNR Vignana Jyothi Institute of Engineering & Technology",
      period: "2025 - Present",
      status: "Second-year B.Tech Student",
      location: "Hyderabad, India",
      description: "Core specialization in Artificial Intelligence, Machine Learning algorithms, Data Structures, and Agentic Application Deployment."
    },
    {
      degree: "Intermediate (12th Grade)",
      institution: "Sri Aadya Junior College",
      period: "2023 - 2025",
      status: "Score: 98.9%",
      location: "Hyderabad, India",
      description: "Achieved academic excellence with 98.9% score focusing on Mathematics and Physical Sciences."
    },
    {
      degree: "10th Grade (Secondary School)",
      institution: "Surya the Global School",
      period: "2023",
      status: "Score: 89.8%",
      location: "Hyderabad, India",
      description: "Graduated with 89.8% academic distinction."
    }
  ],
  certifications: [
    {
      title: "Generative AI Workshop",
      issuer: "IIT Hyderabad",
      type: "Workshop"
    },
    {
      title: "Artificial Intelligence with Python",
      issuer: "Coincent.ai & E-Cell IIT Madras",
      type: "Certification"
    },
    {
      title: "Agentic AI: Deployment of Applications",
      issuer: "VNRVJIET",
      type: "Certification"
    },
    {
      title: "Startup Expo – Presented Idea",
      issuer: "VNRVJIET",
      description: "Early detection of chronic diseases without relying on high-cost hospital visits",
      type: "Presentation / Expo"
    },
    {
      title: "Vibe Coding Hackathon",
      issuer: "VNRVJIET",
      type: "Hackathon"
    },
    {
      title: "Synthetic Data Creation Hackathon",
      issuer: "VNRVJIET",
      type: "Hackathon"
    },
    {
      title: "ML Challenge",
      issuer: "VNRVJIET",
      type: "Competition"
    }
  ],
  resume: {
    headline: "Baby Kavya G - AI / Machine Learning Enthusiast",
    pdfPath: "/resume.pdf",
    education: "B. Tech — Computer Science (AI & ML), VNR Vignana Jyothi Institute of Engineering & Technology (2025 - Present)",
    summary: "Second-year B.Tech student in Computer Science (AI & ML) with strong foundation in Python, C, Data Structures, Generative AI, and competitive hackathons."
  }
};

/**
 * Attempt to load fresh profile.json via fetch
 */
async function loadProfileJson() {
  const fileCandidates = ["profile.json", "src/profile.json", "./profile.json", "./src/profile.json"];
  for (const file of fileCandidates) {
    try {
      const response = await fetch(file);
      if (response.ok) {
        const data = await response.json();
        profileData = data;
        console.log(`Successfully fetched profile data from ${file}`);
        return;
      }
    } catch {
      // Ignore network / CORS errors and continue
    }
  }
  console.log("Using pre-loaded profile data.");
}

/**
 * Actively map and render all profile.json data to the frontend DOM
 */
function renderPortfolioData() {
  // 1. Text Info & Hero
  document.querySelectorAll(".profile-name").forEach(el => el.textContent = profileData.name);
  document.querySelectorAll(".profile-initials").forEach(el => el.textContent = profileData.initials || "GK");
  document.querySelectorAll(".profile-title").forEach(el => el.textContent = profileData.title);
  document.querySelectorAll(".profile-subtitle").forEach(el => el.textContent = profileData.subtitle || "");
  document.querySelectorAll(".profile-location").forEach(el => el.textContent = profileData.location);
  document.querySelectorAll(".profile-phone").forEach(el => el.textContent = profileData.phone);
  document.querySelectorAll(".profile-email").forEach(el => el.textContent = profileData.email);

  // Resume path linking
  const resumeHref = profileData.links?.resume || profileData.resume?.pdfPath || "/resume.pdf";
  document.querySelectorAll(".resume-link").forEach(el => {
    el.setAttribute("href", "/resume.pdf");
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener noreferrer");
  });

  // Social Links
  const githubLinkEl = document.getElementById("hero-github-link");
  if (githubLinkEl && profileData.links?.github) githubLinkEl.href = profileData.links.github;

  const linkedinLinkEl = document.getElementById("hero-linkedin-link");
  if (linkedinLinkEl && profileData.links?.linkedin) linkedinLinkEl.href = profileData.links.linkedin;

  // About Summary & Highlights
  const summaryEl = document.getElementById("about-summary");
  if (summaryEl && profileData.about?.summary) {
    summaryEl.textContent = profileData.about.summary;
  }

  const highlightsContainer = document.getElementById("about-highlights");
  if (highlightsContainer && profileData.about?.highlights) {
    highlightsContainer.innerHTML = profileData.about.highlights.map(h => `
      <li class="flex items-start gap-3 text-slate-300">
        <span class="inline-flex items-center justify-center w-5 h-5 rounded-full bg-cyan-500/10 text-cyan-400 mt-1 flex-shrink-0 text-xs font-bold">✓</span>
        <span>${h}</span>
      </li>
    `).join("");
  }

  // Academic Stats
  if (profileData.stats) {
    const statYear = document.getElementById("stat-year");
    const statInter = document.getElementById("stat-inter");
    const statTenth = document.getElementById("stat-tenth");
    const statCerts = document.getElementById("stat-certs");
    if (statYear) statYear.textContent = profileData.stats.academicYear || "2nd Year";
    if (statInter) statInter.textContent = profileData.stats.intermediateScore || "98.9%";
    if (statTenth) statTenth.textContent = profileData.stats.tenthScore || "89.8%";
    if (statCerts) statCerts.textContent = profileData.stats.certificationsCount || "7+";
  }

  // 2. MAPPING AND RENDERING SKILLS ARRAY
  const skillsContainer = document.getElementById("skills-grid");
  if (skillsContainer && profileData.skills) {
    const categoryIcons = {
      "Programming": "💻",
      "Tools & Platforms": "🛠️",
      "Soft Skills": "🤝",
      "Languages": "🌐"
    };

    // Normalize skills: if array of {category, items} or key-value object
    let normalizedSkills = [];
    if (Array.isArray(profileData.skills)) {
      normalizedSkills = profileData.skills;
    } else if (typeof profileData.skills === "object") {
      normalizedSkills = Object.entries(profileData.skills).map(([category, items]) => ({
        category,
        items: Array.isArray(items) ? items : [items]
      }));
    }

    // Actively map and render skills array
    skillsContainer.innerHTML = normalizedSkills.map(skillGroup => `
      <div class="glass-card rounded-2xl p-6 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300">
        <div class="flex items-center gap-3 mb-4">
          <span class="text-2xl">${categoryIcons[skillGroup.category] || "⚡"}</span>
          <h3 class="text-lg font-semibold text-white">${skillGroup.category}</h3>
        </div>
        <div class="flex flex-wrap gap-2">
          ${skillGroup.items.map(skill => `
            <span class="px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-800/90 text-slate-200 border border-slate-700/60 hover:border-cyan-400/50 hover:text-cyan-300 transition-colors">
              ${skill}
            </span>
          `).join("")}
        </div>
      </div>
    `).join("");
  }

  // 3. MAPPING AND RENDERING PROJECTS ARRAY
  const projectsContainer = document.getElementById("projects-grid");
  if (projectsContainer && Array.isArray(profileData.projects)) {
    // Actively map and render projects array
    projectsContainer.innerHTML = profileData.projects.map(project => `
      <div class="glass-card rounded-2xl overflow-hidden border border-slate-800/80 hover:border-cyan-500/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
        <div class="p-6">
          <div class="flex items-center justify-between gap-2 mb-3">
            <span class="text-xs uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              ${project.tag || "College Project"}
            </span>
            <button onclick="askBotAboutProject('${project.title.replace(/'/g, "\\'")}')" class="text-xs text-slate-400 hover:text-cyan-300 flex items-center gap-1 transition-colors" title="Ask AI about this project">
              <span>✨ Ask Chatbot</span>
            </button>
          </div>
          <h3 class="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
            ${project.title}
          </h3>
          <p class="text-slate-400 text-sm leading-relaxed mb-4">
            ${project.description}
          </p>
          <div class="flex flex-wrap gap-1.5 mb-6">
            ${(project.technologies || []).map(t => `
              <span class="text-[11px] px-2.5 py-1 rounded-md bg-slate-800/90 text-slate-300 border border-slate-700/50">
                ${t}
              </span>
            `).join("")}
          </div>
        </div>
        <div class="px-6 py-4 bg-slate-900/60 border-t border-slate-800/80 flex items-center justify-between">
          <a href="${project.githubUrl || project.liveUrl}" target="_blank" rel="noopener noreferrer" class="text-sm font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
            View on GitHub
          </a>
          <button onclick="askBotAboutProject('${project.title.replace(/'/g, "\\'")}')" class="text-xs text-slate-400 hover:text-cyan-300">
            Learn More →
          </button>
        </div>
      </div>
    `).join("");
  }

  // 4. MAPPING AND RENDERING EDUCATION ARRAY
  const eduContainer = document.getElementById("education-timeline");
  if (eduContainer && Array.isArray(profileData.education)) {
    eduContainer.innerHTML = profileData.education.map((edu, index) => `
      <div class="relative pl-8 pb-8 ${index === profileData.education.length - 1 ? '' : 'border-l-2 border-slate-800'}">
        <div class="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-cyan-400 border-4 border-slate-950"></div>
        <div class="glass-card rounded-xl p-6 border border-slate-800/80 hover:border-slate-700 transition-all">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
            <h4 class="text-lg font-bold text-white">${edu.degree}</h4>
            <span class="text-xs font-semibold px-2.5 py-1 rounded bg-slate-800 text-cyan-300 w-fit">${edu.period}</span>
          </div>
          <div class="text-sm font-medium text-slate-400 mb-2 flex items-center gap-2">
            <span class="text-slate-300 font-semibold">${edu.institution}</span>
            <span>•</span>
            <span class="text-emerald-400 font-semibold">${edu.status}</span>
          </div>
          <p class="text-sm text-slate-400 leading-relaxed">${edu.description}</p>
        </div>
      </div>
    `).join("");
  }

  // 5. MAPPING AND RENDERING CERTIFICATIONS ARRAY
  const certContainer = document.getElementById("certifications-grid");
  if (certContainer && Array.isArray(profileData.certifications)) {
    certContainer.innerHTML = profileData.certifications.map(c => `
      <div class="glass-card p-5 rounded-xl border border-slate-800/80 hover:border-cyan-500/40 transition-all flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-2">
            <span class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">${c.type}</span>
            <span class="text-xs text-slate-400">${c.issuer}</span>
          </div>
          <h4 class="text-sm font-bold text-white mb-1.5">${c.title}</h4>
          ${c.description ? `<p class="text-xs text-slate-400 leading-relaxed italic">"${c.description}"</p>` : ''}
        </div>
      </div>
    `).join("");
  }
}

/**
 * -------------------------------------------------------------
 * CLIENT-SIDE CHATBOT INTELLIGENCE ENGINE
 * Keyword matching and response generator parsing profile.json
 * -------------------------------------------------------------
 */

let chatOpen = false;
let isBotTyping = false;

function toggleChat() {
  chatOpen = !chatOpen;
  const chatWindow = document.getElementById("chat-window");
  const chatToggleBtn = document.getElementById("chat-toggle-btn");
  const chatBadge = document.getElementById("chat-badge");

  if (chatOpen) {
    chatWindow.classList.remove("hidden");
    chatWindow.classList.add("flex");
    chatToggleBtn.classList.add("bg-cyan-600");
    if (chatBadge) chatBadge.classList.add("hidden");
    const input = document.getElementById("chat-input");
    if (input) input.focus();
  } else {
    chatWindow.classList.add("hidden");
    chatWindow.classList.remove("flex");
    chatToggleBtn.classList.remove("bg-cyan-600");
  }
}

function askBotAboutProject(projectName) {
  if (!chatOpen) toggleChat();
  sendUserMessage(`Tell me about the project "${projectName}"`);
}

function askBotQuick(question) {
  if (!chatOpen) toggleChat();
  sendUserMessage(question);
}

/**
 * Client-side keyword matching and response generator
 * Parses the exact structure of profile.json
 */
function generateChatbotResponse(userInput) {
  const query = userInput.toLowerCase().trim();
  const userName = profileData.name || "Baby Kavya G";
  const resumeUrl = profileData.links?.resume || profileData.resume?.pdfPath || "/resume.pdf";

  // 1. KEYWORD: "project" or "projects"
  if (query.includes("project") || query.includes("projects") || query.includes("portfolio")) {
    if (Array.isArray(profileData.projects) && profileData.projects.length > 0) {
      const projectList = profileData.projects.map((p, idx) => {
        const techs = Array.isArray(p.technologies) ? p.technologies.join(", ") : "";
        const link = p.githubUrl || p.liveUrl || "";
        return `${idx + 1}. **${p.title}** (${p.tag || "Project"})\n   ${p.description}\n   • **Technologies:** ${techs}\n   • **GitHub:** [${p.title} Repository](${link})`;
      }).join("\n\n");

      return `Here are the projects **${userName}** has engineered:\n\n${projectList}\n\nYou can also explore both repositories directly on her [GitHub Profile](${profileData.links?.github || "https://github.com/kav08-hub"}).`;
    }
    return `**${userName}** has worked on projects including **AI Chatbot using LLM** and **Hospital Network System**.`;
  }

  // 2. KEYWORD: "skill", "skills", "technolog", "tech stack", "languages"
  if (
    query.includes("skill") ||
    query.includes("skills") ||
    query.includes("technolog") ||
    query.includes("tech stack") ||
    query.includes("tools") ||
    query.includes("programming")
  ) {
    if (Array.isArray(profileData.skills)) {
      const skillText = profileData.skills.map(s => {
        const items = Array.isArray(s.items) ? s.items.join(", ") : s.items;
        return `• **${s.category}:** ${items}`;
      }).join("\n");

      return `Here are the skills and technologies known by **${userName}**:\n\n${skillText}\n\nShe is currently building AI/ML solutions focusing on **Python**, **C**, **Generative AI & LLMs**, and **Data Structures**!`;
    } else if (typeof profileData.skills === "object") {
      const skillText = Object.entries(profileData.skills).map(([cat, items]) => {
        return `• **${cat}:** ${Array.isArray(items) ? items.join(", ") : items}`;
      }).join("\n");
      return `Here are the skills and technologies known by **${userName}**:\n\n${skillText}`;
    }
  }

  // 3. KEYWORD: "resume", "cv", "pdf", "download"
  if (query.includes("resume") || query.includes("cv") || query.includes("download") || query.includes("pdf")) {
    const summary = profileData.resume?.summary || profileData.about?.summary || "";
    const education = profileData.resume?.education || "";
    return `📄 **${userName}'s Resume Details:**\n\n• **Title:** ${profileData.title}\n• **Education:** ${education}\n• **Summary:** ${summary}\n\nYou can view and download her verified resume directly here:\n🔗 **[Open Resume PDF (${resumeUrl})](${resumeUrl})**`;
  }

  // 4. KEYWORD: "education", "college", "university", "study", "b.tech", "grades", "percentage"
  if (
    query.includes("education") ||
    query.includes("college") ||
    query.includes("study") ||
    query.includes("b.tech") ||
    query.includes("university") ||
    query.includes("marks") ||
    query.includes("percentage")
  ) {
    if (Array.isArray(profileData.education)) {
      const eduText = profileData.education.map(e => `• **${e.degree}** — *${e.institution}* (${e.period})\n  Result: **${e.status}**\n  ${e.description}`).join("\n\n");
      return `Here is **${userName}'s** academic background:\n\n${eduText}`;
    }
  }

  // 5. KEYWORD: "hackathon", "certification", "workshop", "competition", "expo", "disease"
  if (
    query.includes("hackathon") ||
    query.includes("certification") ||
    query.includes("workshop") ||
    query.includes("expo") ||
    query.includes("compet") ||
    query.includes("award")
  ) {
    if (Array.isArray(profileData.certifications)) {
      const certText = profileData.certifications.map(c => `• **${c.title}** (${c.issuer})${c.description ? ` — *Idea: "${c.description}"*` : ''}`).join("\n");
      return `**${userName}** has completed the following certifications and hackathons:\n\n${certText}`;
    }
  }

  // 6. KEYWORD: "contact", "email", "phone", "linkedin", "github", "reach"
  if (
    query.includes("contact") ||
    query.includes("email") ||
    query.includes("phone") ||
    query.includes("linkedin") ||
    query.includes("github") ||
    query.includes("reach") ||
    query.includes("location")
  ) {
    return `You can reach out to **${userName}** directly:\n\n• **Email:** [${profileData.email}](mailto:${profileData.email})\n• **Phone:** ${profileData.phone}\n• **LinkedIn:** [LinkedIn Profile](${profileData.links?.linkedin})\n• **GitHub:** [GitHub Profile](${profileData.links?.github})\n• **Location:** ${profileData.location}`;
  }

  // 7. DEFAULT FALLBACK RESPONSE
  return `I am an AI assistant representing ${userName}. Feel free to ask me about my B.Tech projects or technical skills!`;
}

/**
 * Append Message Bubble to Chat Log
 */
function appendMessage(sender, text) {
  const container = document.getElementById("chat-messages");
  if (!container) return;

  const msgDiv = document.createElement("div");
  msgDiv.className = `flex ${sender === "user" ? "justify-end" : "justify-start"} items-start gap-2.5`;

  let formattedText = text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-cyan-300 underline font-medium hover:text-cyan-200">$1</a>')
    .replace(/\n/g, '<br/>');

  if (sender === "user") {
    msgDiv.innerHTML = `
      <div class="max-w-[85%] rounded-2xl rounded-tr-sm bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-4 py-2.5 text-xs sm:text-sm leading-relaxed shadow-md">
        ${formattedText}
      </div>
    `;
  } else {
    msgDiv.innerHTML = `
      <div class="w-6 h-6 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-500 flex items-center justify-center text-[10px] text-white flex-shrink-0 mt-0.5 shadow-sm">
        ✨
      </div>
      <div class="max-w-[85%] rounded-2xl rounded-tl-sm bg-slate-800/90 text-slate-200 border border-slate-700/60 px-4 py-2.5 text-xs sm:text-sm leading-relaxed shadow-md">
        ${formattedText}
      </div>
    `;
  }

  container.appendChild(msgDiv);
  container.scrollTop = container.scrollHeight;
}

/**
 * Simulate Bot Typing Indicator & Respond
 */
function respondAsBot(userQuery) {
  if (isBotTyping) return;
  isBotTyping = true;

  const container = document.getElementById("chat-messages");
  const typingIndicator = document.createElement("div");
  typingIndicator.id = "bot-typing-indicator";
  typingIndicator.className = "flex items-center gap-2 text-slate-400 text-xs pl-8";
  typingIndicator.innerHTML = `
    <span class="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-bounce"></span>
    <span class="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.2s]"></span>
    <span class="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.4s]"></span>
    <span class="text-[11px] text-slate-400">Processing...</span>
  `;
  container.appendChild(typingIndicator);
  container.scrollTop = container.scrollHeight;

  const delay = Math.min(600, Math.max(250, userQuery.length * 10));

  setTimeout(() => {
    typingIndicator.remove();
    isBotTyping = false;
    const answer = generateChatbotResponse(userQuery);
    appendMessage("bot", answer);
  }, delay);
}

/**
 * Handle User Message Submission
 */
function sendUserMessage(explicitText) {
  const input = document.getElementById("chat-input");
  const text = (explicitText !== undefined ? explicitText : input ? input.value : "").trim();
  if (!text) return;

  if (input && explicitText === undefined) {
    input.value = "";
  }

  appendMessage("user", text);
  respondAsBot(text);
}

/**
 * Reset / Clear Chat
 */
function clearChat() {
  const container = document.getElementById("chat-messages");
  if (!container) return;
  container.innerHTML = "";
  const userName = profileData.name || "Baby Kavya G";
  appendMessage("bot", `Hello! I am an AI assistant representing **${userName}**. Feel free to ask me about my B.Tech projects or technical skills!`);
}

/**
 * Initialize on DOM Load
 */
document.addEventListener("DOMContentLoaded", async () => {
  // Render synchronously first
  renderPortfolioData();

  // Try fetching fresh profile.json in background
  await loadProfileJson();
  renderPortfolioData();

  // Chat event listeners
  const sendBtn = document.getElementById("chat-send-btn");
  const chatInput = document.getElementById("chat-input");

  if (sendBtn) {
    sendBtn.addEventListener("click", () => sendUserMessage());
  }

  if (chatInput) {
    chatInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        sendUserMessage();
      }
    });
  }

  // Greeting in chatbot
  setTimeout(() => {
    const userName = profileData.name || "Baby Kavya G";
    appendMessage(
      "bot",
      `Hi! 👋 I am an AI assistant representing **${userName}**. Feel free to ask me about my B.Tech projects or technical skills!`
    );
  }, 300);
});
