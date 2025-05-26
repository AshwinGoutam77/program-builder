"use client";

import { WeekItem } from "../CourseCurriculum/WeekItem";
import { SessionTheory } from "../CourseCurriculum/SessionTheory";
import { SessionLab } from "../CourseCurriculum/SessionLab";
import { PartnerLogos } from "../CourseCurriculum/PartnerLogos";
import { useState } from "react";
import MobileCurriculum from "../CourseCurriculum/MobileCurriculum";
import { delay, motion } from "framer-motion";
export default function CourseCurriculum() {
  return (
    <div className="bg-gradient-to-br text-white p-6 md:p-12 flex justify-center items-center">
      <div className="max-w-7xl w-full">
        <CourseSchedule />
      </div>
    </div>
  );
}

function CourseSchedule() {
  const [activeWeek, setActiveWeek] = useState(1);

  const weekContent = {
    1: {
      theory: {
        title: "Live Theory Session",
        topics: [
          "How to think like a 1% Product Manager? ",
          "How AI is changing the work of Product Managers?",
          "Where is the future of Product Management?",
          "The Mindset needed to become a 1% Product Manager",
        ],
      },
      lab: {
        title: "Live Lab Session",
        topics: [
          "Get hands-on with the AI stack powering the program",
          "Understand the real use cases of each tool — where and how they fit into a product workflow.",
          "Explore tools like Lovable, Replit, and Grok — and how they help you move from idea to execution faster.",
          "Set up your AI workspace — so you’re ready to build, write, analyze, and ship from Week 2 onward.",
        ],
      },
    },
    2: {
      theory: {
        title: "Live Theory Session",
        topics: [
          "How to Identify and solve the Right Problem First",
          "Principles of meta‑cognition, problem framing and arriving at clarity‑driven decisions.",
          "How to align your product with business needs",
          "Figuring out the right problems to solve and drive maximum impact",
        ],
      },
      lab: {
        title: "Live Lab Session",
        topics: [
          "Built a full-stack strategy for Tier 2 & 3 India—covering logistics, user insights, and PMF. ",
          "Approach: Use ChatGPT, Perplexity & Notebook LM to uncover infra gaps and simulate operations.",
          "Outcome: A playbook that could power Zepto’s next 100-city blitz",
        ],
      },
    },
    3: {
      theory: {
        title: "Live Theory Session",
        topics: [
          "Building Scalable design systems and UX application.",
          "Design Thinking and its use in building great Products",
          "UI vs UX — Knowing the Real Difference",
          "What Great Design Actually Feels Like",
        ],
      },
      lab: {
        title: "Live Lab Session",
        topics: [
          "Built an end-to-end strategy for launching a video platform in Bharat — optimized for local content, low bandwidth, and mass engagement.",
          "Approach: Use Replit, Lovable and Claude to map user behavior, regional content demand, and tech constraints across Tier 2/3 India.",
          "Outcome: A content, distribution, and UX playbook designed to power India’s next 100 million streamers.",
        ],
      },
    },
    4: {
      theory: {
        title: "Live Theory Session",
        topics: [
          "North Star Metrics & KPI’s – How to define and track the right success metrics",
          "Data Ingestion Structures and how to track them",
          "What is Product Market FIt? How do you Quantify it? How to create an Analytics System?",
        ],
      },
      lab: {
        title: "Live Lab Session",
        topics: [
          "Designed a full-funnel analytics system for Rethink’s landing page — tracking user behavior from first click to final conversion.",
          "Approach: Used Google Analytics, Hotjar and MixPanel to define key metrics, map drop-offs, and simulate user flows.",
          "Outcome: A data-backed dashboard that reveals what’s working, what’s not, and where to double down.",
        ],
      },
    },
    5: {
      theory: {
        title: "Live Theory Session",
        topics: [
          "Crafting Product Roadmaps for winning products, Pre and Post Release Management,",
          "What are moats and Defensible Growth? How do you achieve it?",
          "What are Growth Loops? How do you create one?",
        ],
      },
      lab: {
        title: "Live Lab Session",
        topics: [
          "Built a product roadmap for Swiggy to scale its hyperlocal grocery delivery — solving for reach, retention, and reliability one feature at a time.",
          "Approach: Used ChatGPT, Perplexity & real-world data to identify user needs, map operational bottlenecks, and simulate feature impact across Tier 2/3 cities.",
          "Outcome: A phased rollout plan with high-leverage features designed to power Swiggy’s next stage of Instamart growth.",
        ],
      },
    },
    6: {
      theory: {
        title: "Live Theory Session",
        topics: [
          "What are Databases: Relational vs Non-Relational Native vs Hybrid vs Progressive Web Apps. What to build?",
          "Basics System Design",
          "What are APIs? How they connect Everything?",
          "Data Science for Product Managers",
        ],
      },
      lab: {
        title: "Live Lab Session",
        topics: [
          "Built an AI agent that automates Jira task scheduling and follow-ups — saving time, reducing misses, and keeping teams on track.",
          "Approach: Used ChatGPT, Zapier, and Jira APIs to create smart triggers that auto-assign tasks, set reminders, and follow up based on project context.",
          "Outcome: A plug-and-play automation agent that acts like your PM sidekick inside Jira.",
        ],
      },
    },
    7: {
      theory: {
        title: "Live Theory Session",
        topics: [
          "Types of AI tools and how to leverage them to create workflows",
          "Prompting Masterclass: Talk to AI Like a Pro",
          "How to build products with AI as your co-pilot?",
          "No-Code, Low-Code, Full-Code — What approach to use when?",
        ],
      },
      lab: {
        title: "Live Lab Session",
        topics: [
          "Built a custom GPT that drafts high-quality Product Requirement Documents — tailored to feature context, user goals, and stakeholder needs.",
          "Approach: Used OpenAI’s GPT Builder and prompt chaining to capture product thinking, auto-structure PRDs, and refine based on feedback loops.",
          "Outcome: A reliable writing assistant that helps PMs go from idea to crisp PRD in minutes, not hours.",
        ],
      },
    },
    8: {
      theory: {
        title: "Live Theory Session",
        topics: [
          "Cracking Cold Outreach: Land Jobs via LinkedIn the Smart Way",
          "Your Brand is Your Resume Now- How to Build It Right Networking in the Age of AI- Mock Interview with Shravan",
        ],
      },
      lab: {
        title: "Live Lab Session",
        topics: [
          "Built an AI agent that writes personalized cold emails to HRs hiring for product roles — tailored to your background and the job context.",
          "Approach: Used ChatGPT, LinkedIn scraping, and Zapier to craft emails that sound human, relevant, and actionable.",
          "Outcome: A smart outreach tool that helps you stand out in crowded inboxes and start real conversations with the right people.100-city blitz",
        ],
      },
    },
  };

  return (
    <>
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{
          duration: 0.2,
          ease: "easeOut",
        }}
      >
        <h1 className="text-4xl font-bold mb-2">What will you learn?</h1>
        <p className="text-sm text-gray-400">
          Build real products, become a systems thinker and master the Product
          mindset <span className="block">-all with AI by your side.</span>
        </p>
      </motion.div>
      <div className="block md:hidden ">
        <MobileCurriculum />
        
      </div>
      <div className="md:grid md:grid-cols-12 gap-6 hidden">
        <div className="md:col-span-4 space-y-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((week) => (
            <WeekItem
              key={week}
              number={week}
              isActive={week === activeWeek}
              onClick={() => setActiveWeek(week)}
            />
          ))}
        </div>

        <div className="md:col-span-8">
          <div className="bg-indigo-950/50 rounded-xl p-6 border border-indigo-800/30 backdrop-blur-sm space-y-8">
            <SessionTheory content={weekContent[activeWeek].theory} />
            <SessionLab content={weekContent[activeWeek].lab} />
            <PartnerLogos />
          </div>
        </div>
      </div>
    </>
  );
}
