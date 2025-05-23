"use client";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import "./page.css";
import { motion } from "framer-motion";

const tabs = [
  { name: "General Queries", key: "GeneralInquiries" },
  { name: "AI & Tools Related", key: "ProgramLearning" },
  { name: "Contnet and Learning related", key: "ContentRealated" },
  { name: "Payment Related", key: "PaymentRelated" },
  { name: "Instructor and Mentor related", key: "Instructor" },
];

const faqData = {
  GeneralInquiries: [
    {
      question: "What is different about Mastering Product Management 2.0?",
      answer:
        "Mastering Product Management 2.0 brings a complete shift in how product skills are built. We've embedded use of AI into every module. From discovery and design to roadmapping and personal branding. This Program doesn’t just teach you how to be a Product Manager, it helps you become a 1% operator who uses AI to think faster, build smarter, and execute better. It’s not an upgrade — it’s a transformation.",
    },
    {
      question: "What is so special about this program?",
      answer:
        "This isn’t just about learning content — it’s about shifting your mindset. Through the community, intensity, and real-world building, you’ll develop the habits, systems, and clarity of a top 1% operator. Over 150 students have landed product roles since Cohort 1 started in Jan 2024 of MPM at companies like IBM, Amazon, Meta, Tata 1MG, Toyota, not just by studying, but by transforming how they work and think and taking action on it.",
    },
    {
      question: "How advanced is the content taught in this Program?",
      answer:
        "The program goes beyond product frameworks — it aims to build you into a high-agency Product Manager and Generalist with strong systems thinking and emotional clarity. It’s designed to shape aspiring and existing Product Managers who value depth, action, and long-term growth — not just in their careers, but in life.",
    },
    {
      question: "Do you have a referral policy?",
      answer:
        "Yes we do have a referral policy. You can get a referral by alums of our program and get a discount of Rs. 5000 during checkout! This is provided you get shortlisted first. A referral can also improve your chances to get shortlisted!",
    },
    {
      question: "How do I reach out to alumni to know more about the program?",
      answer:
        "We have a lot of our alumns mentioned on our website who you can DM on LinkedIn. A lot of them are also on our common WhatsApp groups so you can reach out to them there as well. If they feel you have the right mindset and hunger to learn and become 1% better everyday, they will be happy to refer you!",
    },
    {
      question: "Will we get a chance to meet our peers in person?",
      answer:
        "Yes! We host an offline Graduation Retreat at the end of every cohort — a 3-day weekend getaway filled with fun, learning, and real connection. It’s a separately paid experience where students and alumni come together to unwind, reflect, and celebrate after 9 intense weeks, alongside peers and seasoned industry leaders. We also host city-based meetups regularly, giving alumni more chances to connect, collaborate, and stay close to the community.",
    },
    {
      question: "How do I know this program is for me?",
      answer:
        "If you are inherently curious and wanting to become 1% better everyday is the motto you live your life by, then this Program is definitely for you! It's a bonus if you are a PM/SPM or want to become one with at least 4 years of work experience.",
    },
    {
      question: "How will classes take place in the cohort?",
      answer:
        "The teaching method is going to be online through a mix of live and recorded classes conducted over Zoom. The Program has been structured into 7 modules which will be covered across 9 weeks along with activities and a Productathon at the end of it.",
    },
    {
      question: "Does this Program guarantee me a Product Management job?",
      answer:
        "No, and we want to make this clear to everyone. This Program is not a job guarantee Program. Nobody can guarantee you a job unless you put in effort and time. However we do bring some seasoned leaders for sessions who you can connect over the 9 weeks. Apart from this, we do refer people from time to time whoever are the best performers of the Program and help them get roles. At the end of the day, your effort will decide how fast you are able to crack a role!",
    },
    {
      question: "How long is the program for?",
      answer:
        "The upcoming program will be for 9 weeks starting 29th June 2025.",
    },
    {
      question:
        "I have some issues and can’t continue mid program, what happens then?",
      answer:
        "In this case, we give students an option to defer their admission and join back for the coming program provided the reason is justified. We reserve the right to make the decision of deferment.",
    },
    {
      question:
        "Once I get shortlisted for this cohort, can I use the same application and join the next cohort?",
      answer:
        "While we would love to give the option to defer, it’ll be difficult for us to do so. Once you get shortlisted, you will only be shortlisted for that cohort. If you want to defer it, you will have to fill the application process again for the next Program as and when it comes!",
    },
    {
      question: "Which Time Zone will the Program be conducted in?",
      answer:
        "The program is conducted in IST. All timings mentioned on the website are in IST only.",
    },
    {
      question: "What will happen if I fall behind in my courseware?",
      answer:
        "Each person who is shortlisted and comes to the Program will be assigned a group and each group is assigned a mentor. You can reach out to your mentors for the same, they should be able to help you out on this. Also recordings of all sessions will always be available for you to watch in your free time.",
    },
    {
      question:
        "I’ve already done/enrolled in a Program based course on product management, should I still join?",
      answer:
        "We encourage people to ask themselves a question which usually helps them answer this on their own. “Have I learnt all the skills necessary to become the best version of myself professionally and land my dream job?” If you think you haven’t, then you should consider applying as this is going to be a grilling 9 weeks. If you think you have, then it's all good, all the best for your future endeavors!",
    },
    {
      question:
        "Do you offer career support after course completion? (Interview prep, resume review)",
      answer:
        "Yes we do offer career support after the program. You can reach out to folks in the community or our mentors for career guidance, interview prep, portfolio building and resume review. They will gladly help you out. However it will depend on their availability once the Program ends. While you are in the Program, they will be available to take your queries.",
    },
  ],
  ProgramLearning: [
    {
      question: "Do I need to know AI before joining the program?",
      answer:
        "Not at all. The program is designed for people from all backgrounds. We’ll start with the basics and show you how to use AI tools effectively, regardless of your experience level.",
    },
    {
      question: "What kind of AI tools will I learn to use?",
      answer:
        "You’ll get hands-on experience with ChatGPT, Perplexity, Lovable, Claude, Replit, NotebookLM, and more — each tied to real Product Manager’s day-to-day use-cases like PRD writing, roadmap planning, and analytics.",
    },
    {
      question: "How is AI integrated into the program?",
      answer:
        "AI is woven into every week — from designing products to analysing data and writing content. You won’t just learn AI; you’ll build with it, every single week.",
    },
    {
      question: "I’m already using ChatGPT. What more can I expect to learn?",
      answer:
        "We go beyond prompting — you’ll learn workflows, how to build agents, automate tasks, run competitive analysis, and pair AI with product thinking.",
    },
    {
      question: "Can I build my own AI tools during the program?",
      answer:
        "Yes! During the Productathon, many students ship live AI-powered tools — from cold email agents to PRD generators. You’ll have space, mentorship, and time to build.",
    },
    {
      question: "Will I get help if I get stuck with AI tools?",
      answer:
        "Absolutely. Our lab sessions, group discussions, and instructors will guide you through the “how” of building with AI, along with theory.",
    },
  ],
  ContentRealated: [
    {
      question: "Does this Program include case-studies?",
      answer:
        "Mastering Product Management 2.0 brings a complete shift in how product skills are built. Yes, the Program includes case studies with real world examples, however we will also be building real products in the program. We give assignments to everyone to solve in breakout rooms in the core lectures and also give weekly assignments to groups to solve to help them get a flavour of working as a Product Manager.",
    },
    {
      question: "What are the session timings?",
      answer:
        "The Core Lectures are on Saturdays and Sundays from 12PM to 4PM (timing may shift or get extended an hour here or there depending on Shravan’s availability and the complexity of the topic). The Master sessions will be held based on the master’s availability and will be mostly on every Wednesday in the evenings.",
    },
    {
      question: "How will our groups be formed?",
      answer:
        "Groups are thoughtfully curated to maximize diversity — in roles, experience levels, and perspectives. You won’t be grouped with people just like you. Instead, you’ll collaborate with folks from different backgrounds so you can learn, unlearn, and grow by seeing how others think and build.",
    },
    {
      question:
        "Will I get extra material to read and prep before and after sessions?",
      answer:
        "Yes, you will get pre-reads and post reads for every week. You are expected to read these notes before joining to gain some context of the session and have a better learning experience.",
    },
    {
      question:
        "How long will I have access to the session recordings once the cohort is over?",
      answer:
        "You will have access to all the session recordings during the Program. If you stay active and keep contributing to the community, you will continue to have access after your Program as well.",
    },
    {
      question: "Will I receive a certificate upon completion?",
      answer:
        "Yes we will be providing you a certificate of completion once the cohort is over! This is provided you have more than 80% attendance across all of the sessions conducted in the Program.",
    },
    {
      question: "When will I receive the recorded sessions?",
      answer:
        "Some weeks will have theory sessions which will be shared in a recorded format. These sessions will be shared on Monday and students are expected to go through them before the weekend.",
    },
    {
      question: "What are lab sessions?",
      answer:
        "Lab sessions are hands-on, build-first sessions where you apply what you’ve learned to solve real-world problems. You'll use AI tools, collaborate with your peers, and ship actual products. These sessions happen every Sunday where you will build with Shravan!",
    },
  ],
  PaymentRelated: [
    {
      question: "What are the available payment options?",
      answer:
        "We have the following payment options- Credit and Debit Cards, Net Banking: For our students in India, we offer the option to pay via net banking from a wide range of banks. UPI (Only for Indian Customers), Wallets: Payment through various digital wallets is supported for ease of transaction. Bank Transfers: We accept direct bank transfers, including NEFT, RTGS, and IMPS, for both domestic and international students. Please note that for international transfers, additional bank charges may apply.",
    },
    {
      question: "Do you have a refund policy?",
      answer:
        "Yes. If you request a refund before the program starts, we’ll refund the full amount (minus transaction charges) — no questions asked. If the program has already started, refunds are only provided in exceptional cases. We’ll review your situation and, if valid, issue a partial refund based on how far you are in the cohort.",
    },
    {
      question: "Do you provide EMIs?",
      answer:
        "Yes we have EMI options with select banks. EMI options are going to have different interest rates based on your bank and cards, please read about the interest rates once before using the option on the checkout page once you get shortlisted. No cost EMI on 3 month EMI options are also available for select banks.",
    },
    {
      question: "How will the refund be processed?",
      answer:
        "All eligible refunds will be processed and settled to the source account. i.e. the same payment mode through which the transaction was initiated. The refunds will be processed together at the end of the month.",
    },
    {
      question: "Do you offer invoices for reimbursement or tax purposes?",
      answer:
        "Yes we do. Some students might be reimbursing this through L&D budgets or claiming it under tax deductions.",
    },
    {
      question:
        "My payment is stuck or not going through, but the money was deducted. What should I do?",
      answer:
        "Don’t worry — this happens sometimes due to gateway delays. If your payment is stuck or the amount is deducted without confirmation, just call us at 8586043822 with your transaction details or a screenshot. We’ll make sure it’s resolved quickly or your money is safely refunded.",
    },
  ],
  Instructor: [
    {
      question: "Who is Shravan? What are his credentials?",
      answer:
        "Shravan is a seasoned Product Leader, Instructor, Angel Investor, Founder and Influencer on Product Management. With 10+ years as a Product Leader across logistics, edtech, and consumer tech startups. He is a globally recognized Product Management Influencer and Educator, with 174K+ followers on LinkedIn and 45K+ on YouTube. He is also a Guest lecturer at IIMs, IITs, NTU, and ISB, he bridges academic theory with real-world expertise, empowering product managers worldwide. He has mentored 5000+ PMs globally. His mentees now build products at Microsoft, Meta, Google, and Amazon. For more information, you can check him out on LinkedIn: https://www.linkedin.com/in/shravantickoo/ and YouTube: https://www.youtube.com/@TheSwagWalaPM",
    },
    {
      question:
        "Will Shravan be available for questions, discussions and feedback outside the classes?",
      answer:
        "Yes, Shravan will be available in an async manner for doubts and queries. However you are advised to talk to your mentors as they are equipped to solve most of your queries. If need be, they will route your queries to him.",
    },
    {
      question:
        "Do I get personalized doubt-clearance sessions with mentors/instructors?",
      answer:
        "Yes, mentors will be available in an async manner and they will also be joining your group discussion sessions periodically when you will be discussing your assignment and case studies and guide you over there. You can set up some personal time for 1 on 1’s with them during the week as well.",
    },
    {
      question: "What happens once the Program is over?",
      answer:
        "After the Program ends, you will have the distinction of being an alumni of the Mastering Product Management Program 2.0 by Shravan Tickoo and Rethink Systems. You will be part of our alumni community where we keep doing some cool stuff, so you can have access to that. You can also take up roles of responsibility inside the community and get a chance to work with Rethink Systems!",
    },
    {
      question:
        "Do I get access to all of Rethink Systems events if I’m a Program alumni?",
      answer:
        "Yes you do! We do a lot of events in and out of the program. You will be eligible to attend all of them, even the invite only ones! Some events might be paid, but we will let you know that upfront through Slack and Whatsapp.",
    },
  ],
};

export default function FAQSection() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="faq-section text-white">
      <div className="container mx-auto">
        <motion.h2
          className="text-center text-3xl font-semibold mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: 0.2,
          }}
        >
          FAQs
        </motion.h2>

        {/* Tabs */}
        <motion.div
          className="tabs flex justify-center mb-6 gap-5"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: 0.4,
          }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.key}
              className={`pb-2 px-10 text-sm md:text-base font-medium ${
                activeTab.key === tab.key
                  ? "border-b-2 border-white text-white"
                  : "text-gray-400 hover:text-white"
              }`}
              onClick={() => {
                setActiveTab(tab);
                setOpenIndex(null);
              }}
            >
              {tab.name}
            </button>
          ))}
        </motion.div>

        {/* Accordion */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {(faqData[activeTab.key] || []).map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: 0.6,
              }}
              key={index}
              className="accordion-div border border-gray-700 rounded-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 text-left focus:outline-none"
              >
                <span className="text-sm md:text-base font-medium">
                  {item.question}
                </span>
                <ChevronDownIcon
                  className={`h-5 w-5 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 text-sm text-gray-400">
                  {item.answer}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
