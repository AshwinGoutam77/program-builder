// components/ScheduleTable.jsx
"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { createPortal } from "react-dom"

const scheduleData = [
    { day: "Sat, 14th June", type: "Live Theory, Live Lab", weekKey: "week1" },
    { day: "Sun, 15th June", type: "Live Theory", weekKey: "week2" },
    { day: "Mon, 23rd June", type: "Recorded Theory", weekKey: "week3" },
    { day: "Sat, 5th July", type: "Live Theory, Live Lab", weekKey: "week4" },
    { day: "Mon, 7th & Sat, 12th Jul", type: "Recorded; Live Theory & Lab", weekKey: "week5" },
    { day: "Wed,16th & Sat,19th", type: "Guest; Live Theory & Lab", weekKey: "week6" },
    { day: "Wed,23rd & Sat,27th", type: "Guest; Live Theory & Lab", weekKey: "week7" },
    { day: "Sat,2nd & Sun,3rd Aug", type: "Live Theory & Lab", weekKey: "week8" },
    { day: "Mon, 4th Aug", type: "Productathon Kickoff", weekKey: "week9" },
    { day: "Wed, 14th Aug", type: "Live Demo", weekKey: "week10" },
]

const detailedData = {
    week1: {
        A: {
            title: "1% Operator Mindset Conversation",
            tag: "Live • 2.5h",
            when: "Saturday, 14th June",
            desc: "Deep dive into meta‌-cognition, problem framing, and clarity‌-driven decisions.",
            insight: "Unlock the mental edge that separates average managers from world‌-class operators—think 10x, act 1% at a time."
        },
        B: {
            title: "Zepto Tier‌-2/3 Discovery Plan",
            tag: "Live • 2.5h",
            desc: "Hands‌-on AI lab using ChatGPT to build a scalable discovery plan.",
            insight: "Master Zepto’s playbook for new‌-market expansion—target untapped cities with precision."
        },
        C: {
            tools: "ChatGPT; n8n (intro); Figma (basics)",
            insight: "Build your AI‌-powered toolkit from day one—automate ideation, orchestrate workflows, and visualize ideas."
        }
    },
    week2: {
        A: {
            title: "Intro to Product Management",
            tag: "Live • 3.5h",
            when: "Sunday, 15th June",
            desc: "Core principles, role evolution, and product lifecycle management.",
            insight: "Reframe every challenge as an opportunity—craft products that resonate and endure."
        },
        B: {
            title: "(No Lab)", tag: "-", desc: "-", insight: "-"
        },
        C: {
            tools: "ChatGPT; Claude; Lovable",
            insight: "Discover the synergy of AI & creativity—transform raw ideas into compelling user experiences."
        }
    },
    week3: {
        A: {
            title: "Design Alchemy",
            tag: "Recorded • -",
            when: "Monday, 23rd June",
            desc: "Scalable design systems and UX application.",
            insight: "Turn design into your competitive moat—build interfaces users can’t resist."
        },
        B: {
            title: "Netflix Tier‌-2/3 Redesign",
            tag: "Live • 2.5h",
            desc: "Redesign Netflix for India’s Tier‌-2/3 audience.",
            insight: "Localize global giants—engineer native experiences that feel custom‌-built."
        },
        C: {
            tools: "Lovable; Sora AI/Kling AI",
            insight: "Elevate your design speed—leverage AI plugins for rapid prototyping without compromise."
        }
    },
    week4: {
        A: {
            title: "Analytics",
            tag: "Live • 4h",
            when: "Saturday, 5th July",
            desc: "Data ingestion, tracking methods, and A/B testing basics.",
            insight: "Turn data into decisions—unlock growth levers hidden in user behavior."
        },
        B: {
            title: "Rethink Systems Analytics Dashboard",
            tag: "Live • 2.5h",
            desc: "Build analytics dashboard for landing page.",
            insight: "Own your metrics—visualize impact and persuade stakeholders with clear insights."
        },
        C: {
            tools: "ChatGPT; Replit",
            insight: "Code less, iterate faster—use AI‌-driven dev environments to ship analytics pipelines."
        }
    },
    week5: {
        A: {
            title: "Roadmaps & GTM",
            tag: "Recorded • -",
            when: "Monday, 7th July",
            desc: "Roadmap crafting and growth strategy.",
            insight: "Map the future—architect product journeys that scale and sustain."
        },
        B: {
            title: "Swiggy Grocery Roadmap",
            tag: "Live • 2.5h",
            desc: "Build hyperlocal roadmap for Swiggy.",
            insight: "Navigate complexity—chart the course for next‌-gen logistics in foodtech."
        },
        C: {
            tools: "n8n",
            insight: "Automate your roadmap—connect tools and processes into a seamless orchestration."
        }
    },
    week6: {
        A: {
            title: "Tech for PMs",
            tag: "Guest Live • 1.5h; Recorded • 3h",
            when: "Wed, 16th & Sat, 19th July",
            desc: "Databases, APIs, and system design.",
            insight: "Speak tech fluently—bridge the gap between vision and engineering execution."
        },
        B: {
            title: "Jira Automation Calendar Agent",
            tag: "Live • 2.5h",
            desc: "Build calendar automation using Jira API.",
            insight: "Free your time—build agents that manage schedules so you can focus on strategy."
        },
        C: {
            tools: "Jira API; n8n",
            insight: "Master integration—wire up tools into cohesive, automated workflows."
        }
    },
    week7: {
        A: {
            title: "AI for PMs",
            tag: "Guest Live • 1.5h; Live • 4h",
            when: "Wed, 23rd & Sat, 27th July",
            desc: "AI technologies and prompt engineering.",
            insight: "Stay ahead—apply bleeding‌-edge AI techniques before they hit the mainstream."
        },
        B: {
            title: "Custom GPT for PRD Drafts",
            tag: "Live • 2.5h",
            desc: "Build and test a GPT agent for PRD creation.",
            insight: "Automate your writing—spin up AI copilots that draft specs in seconds."
        },
        C: {
            tools: "ChatGPT; n8n",
            insight: "Combine generative AI with orchestration to multiply your output."
        }
    },
    week8: {
        A: {
            title: "LinkedIn Branding & Mock Interviews",
            tag: "Live • 3h",
            when: "Saturday, 2nd August",
            desc: "Profile optimization and interview prep.",
            insight: "Craft your personal brand—position yourself as the PM everyone wants to hire."
        },
        B: {
            title: "Mock Interview & Productathon Kickoff",
            tag: "Live • 3h",
            desc: "Conduct mock interviews and launch Productathon.",
            insight: "Sharpen your edge—practice real‌-world interviews to nail your next opportunity."
        },
        C: {
            tools: "ChatGPT; n8n",
            insight: "Simulate scenarios—use AI to rehearse, refine, and record your best performance."
        }
    },
    week9: {
        A: {
            title: "Productathon Kickoff",
            tag: "Live • -",
            when: "Monday, 4th August",
            desc: "Ideation and team formation.",
            insight: "Collaborate at warp speed—form cross‌-functional teams and iterate MVPs in days."
        },
        B: { title: "N/A", tag: "-", desc: "-", insight: "-" },
        C: {
            tools: "Various AI & no-code tools",
            insight: "Explore your toolkit—choose the right AI to accelerate every phase."
        }
    },
    week10: {
        A: {
            title: "Productathon Demo",
            tag: "Live • -",
            when: "Wednesday, 14th August",
            desc: "Present and refine final projects.",
            insight: "Showcase your best—pitch polished MVPs that reflect your newfound AI mastery."
        },
        B: { title: "N/A", tag: "-", desc: "-", insight: "-" },
        C: {
            tools: "Various AI & no-code tools",
            insight: "Leverage your learning—apply the perfect tool for every future challenge."
        }
    },
}

export { scheduleData, detailedData }
