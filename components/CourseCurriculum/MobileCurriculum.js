"use client";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import "./page.css";
import { motion } from "framer-motion";
import { PartnerLogos } from "./PartnerLogos";

const curriculumData = [
  {
    week: 1,
    title: "Product Thinking in an AI World",
    tabs: [
      {
        key: "live",
        label: "Live Theory Session",
        content: (
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6">

            <div>
              <div className="flex gap-2">
                <span className="badge">SATURDAY- 12PM IST</span>
                <span className="badge"> LIVE • 3hrs</span>
              </div>
              <ul>
                <li>
                  <img src="/images/right-click.png" alt="icon" />
                  How to think like a 1% Product Manager?
                </li>
                <li>
                  <img src="/images/right-click.png" alt="icon" />
                  How AI is changing the work of Product Managers?
                </li>
                <li>
                  <img src="/images/right-click.png" alt="icon" />
                  Where is the future of Product Management?
                </li>
                <li>
                  <img src="/images/right-click.png" alt="icon" />
                  The Mindset needed to become a 1% Product Manager
                </li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        key: "assignments",
        label: "Live Lab Session",
        content: (
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6">

            <div>
              <div className="flex gap-2">
                <span className="badge">SATURDAY- 12PM IST</span>
                <span className="badge"> LIVE • 3hrs</span>
              </div>
              <ul>
                <li>
                  <img src="/images/right-click.png" alt="icon" />
                  Get hands-on with the AI stack powering the program
                </li>
                <li>
                  <img src="/images/right-click.png" alt="icon" />
                  Understand the real use cases of each tool — where and how
                  they fit into a product workflow.
                </li>
                <li>
                  <img src="/images/right-click.png" alt="icon" />
                  Explore tools like Lovable, Replit, and Grok — and how they
                  help you move from idea to execution faster.
                </li>
                <li>
                  <img src="/images/right-click.png" alt="icon" />
                  Set up your AI workspace — so you’re ready to build, write,
                  analyze, and ship from Week 2 onward.
                </li>
              </ul>
            </div>
          </div>
        ),
      },
    ],
  },
  {
    week: 2,
    title: "AI-Driven Discovery & Problem Solving",
    tabs: [
      {
        key: "live",
        label: "Live Theory Session",
        content: (
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6">

            <div>
              <div className="flex gap-2">
                <span className="badge">SUNDAY- 12PM IST</span>
                <span className="badge"> LIVE • 3hrs</span>
              </div>
              <ul>
                <li>
                  <img src="/images/right-click.png" alt="icon" />
                  How to Identify and solve the Right Problem First
                </li>
                <li>
                  <img src="/images/right-click.png" alt="icon" />
                  Principles of meta‑cognition, problem framing and arriving at
                  clarity‑driven decisions.
                </li>
                <li>
                  <img src="/images/right-click.png" alt="icon" />
                  How to align your product with business needs
                </li>
                <li>
                  <img src="/images/right-click.png" alt="icon" />
                  Figuring out the right problems to solve and drive maximum
                  impact
                </li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        key: "assignments",
        label: "Live Lab Session",
        content: (
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6">

            <div>
              <div className="flex gap-2">
                <span className="badge">Sunday- 12PM IST</span>
                <span className="badge"> LIVE • 3hrs</span>
              </div>
              <ul>
                <li>
                  <img src="/images/right-click.png" alt="icon" />
                  Built a full-stack strategy for Tier 2 & 3 India—covering
                  logistics, user insights, and PMF.{" "}
                </li>
                <li>
                  <img src="/images/right-click.png" alt="icon" />
                  Approach: Use ChatGPT, Perplexity & Notebook LM to uncover
                  infra gaps and simulate operations.
                </li>
                <li>
                  <img src="/images/right-click.png" alt="icon" />
                  Outcome: A playbook that could power Zepto’s next 100-city
                  blitz
                </li>
              </ul>
            </div>
          </div>
        ),
      },
    ],
  },
  {
    week: 3,
    title: "Designing with AI — UI, UX & Beyond ",
    tabs: [
      {
        key: "live",
        label: "Live Theory Session",
        content: (
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6">

            <div>
              <ul>
                <li>
                  <img src="/images/right-click.png" alt="icon" />
                  Building Scalable design systems and UX application.
                </li>
                <li>
                  <img src="/images/right-click.png" alt="icon" />
                  Design Thinking and its use in building great Products
                </li>
                <li>
                  <img src="/images/right-click.png" alt="icon" />
                  UI vs UX — Knowing the Real Difference
                </li>
                <li>
                  <img src="/images/right-click.png" alt="icon" />
                  What Great Design Actually Feels Like
                </li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        key: "assignments",
        label: "Live Lab Session",
        content: (
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6">

            <div>
              <div className="flex gap-2">
                <span className="badge">Sunday- 12PM IST</span>
                <span className="badge"> LIVE • 3hrs</span>
              </div>
              <ul>
                <li>
                  <img src="/images/right-click.png" alt="icon" />
                  Built an end-to-end strategy for launching a video platform in
                  Bharat — optimized for local content, low bandwidth, and mass
                  engagement.{" "}
                </li>
                <li>
                  <img src="/images/right-click.png" alt="icon" />
                  Approach: Use Replit, Lovable and Claude to map user behavior,
                  regional content demand, and tech constraints across Tier 2/3
                  India.
                </li>
                <li>
                  <img src="/images/right-click.png" alt="icon" />
                  Outcome: A content, distribution, and UX playbook designed to
                  power India’s next 100 million streamers.
                </li>
              </ul>
            </div>
          </div>
        ),
      },
    ],
  },
  {
    week: 4,
    title: "Analytics and Metric Systems",
    tabs: [
      {
        key: "live",
        label: "Live Theory Session",
        content: (
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6">

            <div>
              <ul>
                <li>
                  <img src="/images/right-click.png" alt="icon" />
                  North Star Metrics & KPI’s – How to define and track the right
                  success metrics
                </li>
                <li>
                  <img src="/images/right-click.png" alt="icon" />
                  Data Ingestion Structures and how to track them
                </li>
                <li>
                  <img src="/images/right-click.png" alt="icon" />
                  What is Product Market FIt? How do you Quantify it?
                </li>
                <li>
                  <img src="/images/right-click.png" alt="icon" />
                  How to create an Analytics System?
                </li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        key: "assignments",
        label: "Live Lab Session",
        content: (
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6">

            <div>
              <div className="flex gap-2">
                <span className="badge">Sunday- 12PM IST</span>
                <span className="badge"> LIVE • 3hrs</span>
              </div>
              <ul>
                <li>
                  <img src="/images/right-click.png" alt="icon" />
                  Designed a full-funnel analytics system for Rethink’s landing
                  page — tracking user behavior from first click to final
                  conversion.
                </li>
                <li>
                  <img src="/images/right-click.png" alt="icon" />
                  Approach: Used Google Analytics, Hotjar and MixPanel to define
                  key metrics, map drop-offs, and simulate user flows.
                </li>
                <li>
                  <img src="/images/right-click.png" alt="icon" />
                  Outcome: A data-backed dashboard that reveals what’s working,
                  what’s not, and where to double down.
                </li>
              </ul>
            </div>
          </div>
        ),
      },
    ],
  },
  {
    week: 5,
    title: "Roadmaps & Growth Systems — Built with AI",
    tabs: [
      {
        key: "live",
        label: "Live Theory Session",
        content: (
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6">

            <div>
              <ul>
                <li>
                  <img src="/images/right-click.png" alt="icon" />
                  Crafting Product Roadmaps for winning products,{" "}
                </li>
                <li>
                  <img src="/images/right-click.png" alt="icon" />
                  Pre and Post Release Management,{" "}
                </li>
                <li>
                  <img src="/images/right-click.png" alt="icon" />
                  What are moats and Defensible Growth? How do you achieve it?
                </li>
                <li>
                  <img src="/images/right-click.png" alt="icon" />
                  What are Growth Loops? How do you create one?
                </li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        key: "assignments",
        label: "Live Lab Session",
        content: (
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6">

            <div>
              <div className="flex gap-2">
                <span className="badge">Sunday- 12PM IST</span>
                <span className="badge"> LIVE • 3hrs</span>
              </div>
              <ul>
                <li>
                  <img src="/images/right-click.png" alt="icon" />
                  Built a product roadmap for Swiggy to scale its hyperlocal
                  grocery delivery — solving for reach, retention, and
                  reliability one feature at a time.{" "}
                </li>
                <li>
                  <img src="/images/right-click.png" alt="icon" />
                  Approach: Used ChatGPT, Perplexity & real-world data to
                  identify user needs, map operational bottlenecks, and simulate
                  feature impact across Tier 2/3 cities.
                </li>
                <li>
                  <img src="/images/right-click.png" alt="icon" />
                  Outcome: A phased rollout plan with high-leverage features
                  designed to power Swiggy’s next stage of Instamart growth.
                </li>
              </ul>
            </div>
          </div>
        ),
      },
    ],
  },
  {
    week: 6,
    title: "Tech for PMs in the Age of AI",
    tabs: [
      {
        key: "live",
        label: "Live Theory Session",
        content: (
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6">

            <div>
              <ul>
                <li>
                  <img src="/images/right-click.png" alt="icon" />
                  What are Databases: Relational vs Non-Relational Native vs
                  Hybrid vs Progressive Web Apps. What to build?
                </li>
                <li>
                  <img src="/images/right-click.png" alt="icon" />
                  Basics System Design
                </li>
                <li>
                  <img src="/images/right-click.png" alt="icon" />
                  What are APIs? How they connect Everything?
                </li>
                <li>
                  <img src="/images/right-click.png" alt="icon" />
                  Data Science for Product Managers
                </li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        key: "assignments",
        label: "Live Lab Session",
        content: (
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6">

            <div>
              <div className="flex gap-2">
                <span className="badge">Sunday- 12PM IST</span>
                <span className="badge"> LIVE • 3hrs</span>
              </div>
              <ul>
                <li>
                  <img src="/images/right-click.png" alt="icon" />
                  Built an AI agent that automates Jira task scheduling and
                  follow-ups — saving time, reducing misses, and keeping teams
                  on track.{" "}
                </li>
                <li>
                  <img src="/images/right-click.png" alt="icon" />
                  Approach: Used ChatGPT, Zapier, and Jira APIs to create smart
                  triggers that auto-assign tasks, set reminders, and follow up
                  based on project context.
                </li>
                <li>
                  <img src="/images/right-click.png" alt="icon" />
                  Outcome: A plug-and-play automation agent that acts like your
                  PM sidekick inside Jira.
                </li>
              </ul>
            </div>
          </div>
        ),
      },
    ],
  },
  {
    week: 7,
    title: "AI for PMs — From Tools to Agents",
    tabs: [
      {
        key: "live",
        label: "Live Theory Session",
        content: (
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6">

            <div>
              <ul>
                <li>
                  <img src="/images/right-click.png" alt="icon" />
                  Types of AI tools and how to leverage them to create workflows
                </li>
                <li>
                  <img src="/images/right-click.png" alt="icon" />
                  Prompting Masterclass: Talk to AI Like a Pro
                </li>
                <li>
                  <img src="/images/right-click.png" alt="icon" />
                  How to build products with AI as your co-pilot?
                </li>
                <li>
                  <img src="/images/right-click.png" alt="icon" />
                  No-Code, Low-Code, Full-Code — What approach to use when?
                </li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        key: "assignments",
        label: "Live Lab Session",
        content: (
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6">

            <div>
              <div className="flex gap-2">
                <span className="badge">Sunday- 12PM IST</span>
                <span className="badge"> LIVE • 3hrs</span>
              </div>
              <ul>
                <li>
                  <img src="/images/right-click.png" alt="icon" />
                  Built a custom GPT that drafts high-quality Product
                  Requirement Documents — tailored to feature context, user
                  goals, and stakeholder needs.{" "}
                </li>
                <li>
                  <img src="/images/right-click.png" alt="icon" />
                  Approach: Used OpenAI’s GPT Builder and prompt chaining to
                  capture product thinking, auto-structure PRDs, and refine
                  based on feedback loops.
                </li>
                <li>
                  <img src="/images/right-click.png" alt="icon" />
                  Outcome: A reliable writing assistant that helps PMs go from
                  idea to crisp PRD in minutes, not hours.
                </li>
              </ul>
            </div>
          </div>
        ),
      },
    ],
  },
  {
    week: 8,
    title: "Personal Branding & Networking in an AI Era",
    tabs: [
      {
        key: "live",
        label: "Live Theory Session",
        content: (
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6">

            <div>
              <ul>
                <li>
                  <img src="/images/right-click.png" alt="icon" />
                  Cracking Cold Outreach: Land Jobs via LinkedIn the Smart Way
                </li>
                <li>
                  <img src="/images/right-click.png" alt="icon" />
                  Your Brand is Your Resume Now- How to Build It Right
                </li>
                <li>
                  <img src="/images/right-click.png" alt="icon" />
                  Networking in the Age of AI-
                </li>
                <li>
                  <img src="/images/right-click.png" alt="icon" />
                  Mock Interview with Shravan
                </li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        key: "assignments",
        label: "Live Lab Session",
        content: (
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6">

            <div>
              <div className="flex gap-2">
                <span className="badge">Sunday- 12PM IST</span>
                <span className="badge"> LIVE • 3hrs</span>
              </div>
              <ul>
                <li>
                  <img src="/images/right-click.png" alt="icon" />
                  Built an AI agent that writes personalized cold emails to HRs
                  hiring for product roles — tailored to your background and the
                  job context.{" "}
                </li>
                <li>
                  <img src="/images/right-click.png" alt="icon" />
                  Approach: Used ChatGPT, LinkedIn scraping, and Zapier to craft
                  emails that sound human, relevant, and actionable.
                </li>
                <li>
                  <img src="/images/right-click.png" alt="icon" />
                  Outcome: A smart outreach tool that helps you stand out in
                  crowded inboxes and start real conversations with the right
                  people.100-city blitz
                </li>
              </ul>
            </div>
          </div>
        ),
      },
    ],
  },
];

export default function MobileCurriculum() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="w-full text-white py-20 px-4 md:px-8 lg:px-16 overflow-hidden tabs-content-section" id="curriculum-overview">
      <div className="max-w-5xl mx-auto">
        {curriculumData.map(({ week, title, tabs, locked }, i) => (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
            key={i}
            className="border border-gray-800 rounded-lg overflow-hidden mb-4 transition-all duration-300"
          >
            <button
              onClick={() => toggleAccordion(i)}
              className="w-full flex items-center justify-between p-4 focus:outline-none cursor-pointer"
              disabled={locked}
            >
              <div className="flex items-center gap-4 text-left">
                <span className="week-box">Week {week}</span>
                <span className="font-medium">{title}</span>
              </div>
              <div className="flex items-center gap-2">
                <ChevronDownIcon
                  className={`h-4 w-4 transform transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""
                    } ${locked ? "opacity-50" : ""}`}
                />
              </div>
            </button>

            {openIndex === i && (
              <div className="border-t border-gray-800 px-4 pb-6 pt-2">
                {locked ? (
                  <p className="text-gray-400">
                    Content for Week {week} will be unlocked soon.
                  </p>
                ) : (
                  <div className="flex flex-col gap-6">
                    {tabs.map(({ key, label, content }) => (
                      <div key={key}>
                        <h4 className="text-lg font-semibold mb-2">{label}</h4>
                        <div>{content}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </motion.div>
        ))}
        <PartnerLogos />
      </div>
    </div>
  );
}
