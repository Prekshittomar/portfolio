import { StaticImageData } from "next/image";

export interface IProjectData {
  LIVE_PREVIEW?: string;
  GITHUB?: string;
  DESCRIPTION: string[];
  NOTE?: string;
  TECH_STACK: string[];
  IMAGE: StaticImageData;
}

export const DATA = {
  HEADER: {
    NAME: "Prekshit Tomar",
    AGE: "21",
    PRONOUN: "he/him",
    HEADLINE:
      "Aspiring Data Scientist & Generative AI Engineer passionate about data-driven innovation and intelligent systems.",
    RESUME: "#",
    EMAIL: "mailto:prekshittomar@gmail.com",
    GITHUB: "https://github.com/PrekshitTomar",
    LINKEDIN: "https://www.linkedin.com/in/prekshit-tomar",
  },

  ABOUT_ME: {
    INTRO:
      "Hey! I'm a Generative AI and Data Science enthusiast who loves working with data, building intelligent applications, and creating solutions powered by LLMs and Agents. My journey began with curiosity—helping my professor organize research data—which sparked a deep interest in data, AI, and problem‑solving.",
    EXPERTISE:
      "My expertise spans Machine Learning, Deep Learning, LLMs, RAG systems, AI agents, and data‑centric application development using Python, LangChain, LlamaIndex, and modern GenAI tools.",
  },

  EXPERIENCE: {
    "Ransh Innovations Private Limited — Generative AI Data Scientist Intern": {
      WEBSITE:
        "https://www.linkedin.com/company/ransh-innovations/posts/?feedView=all",
      POSITION: "Generative AI Data Scientist Intern",
      LOCATION: "Remote",
      DURATION: "Aug 2024 – Jan 2025",
      DESCRIPTION: [
        "Developed an AI-based web application capable of translating songs and performing sentiment analysis.",
        "Scraped and processed multilingual datasets using Selenium.",
        "Integrated LLMs including Gemini and Groq to build intelligent response systems.",
        "Designed the application pipeline using Python and LangChain.",
      ],
      TECH_STACK: [
        "Python",
        "LangChain",
        "TensorFlow",
        "Keras",
        "Gemini",
        "Groq",
        "Selenium",
        "MongoDB",
      ],
    },

    "Ransh Innovations Private Limited — Prompt Engineer Intern": {
      WEBSITE:
        "https://www.linkedin.com/company/ransh-innovations/posts/?feedView=all",
      POSITION: "Prompt Engineer Intern",
      LOCATION: "Remote",
      DURATION: "Oct 2024 – Dec 2024",
      DESCRIPTION: [
        "Designed and optimized prompts for LLMs across 30+ languages.",
        "Worked on multilingual translations and prompt adaptation.",
        "Applied context engineering to reduce hallucinations and improve output accuracy.",
      ],
      TECH_STACK: ["LLMs", "Prompt Engineering", "Python", "Gemini", "Groq"],
    },

    "Outlier — Mathematics & Coding AI Trainer (Freelance)": {
      WEBSITE: "https://outlier.ai/",
      POSITION: "AI Trainer (Math & Coding)",
      LOCATION: "Remote",
      DURATION: "Jun 2024 – Jul 2024",
      DESCRIPTION: [
        "Trained AI models to improve mathematical reasoning.",
        "Designed stump prompts and improved model evaluation workflows.",
        "Enhanced prompt quality to achieve more accurate outputs.",
      ],
      TECH_STACK: ["Python", "LLMs", "Prompt Engineering"],
    },

    "AGIE AI — Generative AI Engineer Trainee": {
      WEBSITE: "https://www.linkedin.com/company/agie-ai/posts/?feedView=all",
      POSITION: "Generative AI Engineer Trainee",
      LOCATION: "Remote",
      DURATION: "Jun 2024 – Aug 2024",
      DESCRIPTION: [
        "Built multiple RAG applications for improved information retrieval.",
        "Used MongoDB for vector storage and embeddings.",
        "Developed AI agents using tools like CrewAI and JARVIS.",
      ],
      TECH_STACK: [
        "Python",
        "LangChain",
        "LlamaIndex",
        "MongoDB",
        "Vector DBs",
        "CrewAI",
        "OpenAI",
        "Gemini",
      ],
    },

    "IBM — Data Analyst Intern": {
      WEBSITE: "https://www.skillsbuildcsrbox.in/",
      POSITION: "Data Analyst Intern",
      LOCATION: "Remote",
      DURATION: "2024",
      DESCRIPTION: [
        "Completed 8 IBM professional courses in Data Analytics.",
        "Performed data cleaning, transformation, and predictive modeling.",
        "Worked on breast cancer prediction using ML models.",
      ],
      TECH_STACK: ["Python", "Pandas", "NumPy", "SkLearn", "Tableau"],
    },
  },

  PROJECTS: {
    "Lumynary — LLM-powered Data Interaction App": {
      GITHUB: "https://github.com/Prekshittomar/Lumynary",
      DESCRIPTION: [
        "Built an AI & LLM-powered web application offering conversational interaction with data.",
        "Implemented Chat-with-CSV, Chat-with-PDF, Chat-with-YouTube, and image-based recipe generation.",
        "Integrated RAG pipelines, Vector DBs, and LangChain agents.",
      ],
      TECH_STACK: [
        "Python",
        "LangChain",
        "VectorDB",
        "Gemini",
        "LlamaIndex",
        "Streamlit",
        "PyPDF",
      ],
      IMAGE: null,
    },

    "RAG-GITA — Sustainable Spiritual AI System": {
      GITHUB: "https://github.com/Prekshittomar/Lumynary",
      DESCRIPTION: [
        "Developed an LLM-based Retrieval Augmented Generation (RAG) system for Bhagavad Gita conversations.",
        "Focused on sustainability, spiritual knowledge retrieval, and contextual reasoning.",
        "Published as a research paper exploring AI + spirituality.",
      ],
      TECH_STACK: ["Python", "LangChain", "VectorDB", "LLMs", "Embeddings"],
      IMAGE: null,
    },
  },

  RESEARCH: {},

  SKILLS: {
    Languages: ["Python", "R", "C", "C++", "Java", "SQL"],
    "ML & AI": [
      "Machine Learning",
      "Deep Learning",
      "LLMs",
      "RAG",
      "AI Agents",
      "Prompt Engineering",
    ],
    Frameworks: ["TensorFlow", "Keras", "LangChain", "LlamaIndex", "SkLearn"],
    Visualization: ["Matplotlib", "Seaborn", "Plotly", "Tableau", "PowerBI"],
    Databases: ["MySQL", "MongoDB", "VectorDBs"],
    Tools: [
      "Git",
      "GitHub",
      "VS Code",
      "Jupyter",
      "Spyder",
      "Colab",
      "Selenium",
      "BeautifulSoup",
      "Scrapy",
    ],
    GenAI: ["OpenAI", "Gemini", "Claude", "Meta", "DeepSeek", "LLama3", "Phi3"],
  },
};
