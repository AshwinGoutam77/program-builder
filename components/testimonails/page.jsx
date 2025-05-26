"use client";
import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import "./page.css";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

export default function Testimonials() {
  const [Comments, setComments] = useState(true);

  const TestimonialData = [
    {
      name: "Anupama Joshi",
      title: "",
      image: "/images/comments-",
      description: `Lovely comments
Today’s session gave me fresh perspective.
The CEO firing scenario stood out deeply.
It reminded me to think ahead,
not just align with what's familiar.
Your calm, open tone helped a lot.
I learned that others' stories teach too.
Grateful for the space to reflect today.
Thanks a ton, Shravan. 🙏`,
      linkedin: "https://www.linkedin.com/in/anupama-joshi-25698026/",
    },
    {
      name: "Puneet Mandil",
      title: "",
      image: "/images/comments-",
      description: `Today’s lecture accurately setup the expectation and need of practise for me going forward in the preparation process. Really enjoyed utilising what we have learnt over the weeks in today’s problem. Thanks @⁨Shravan Tickoo⁩ bhaiya for showing us the bigger picture, that we all need to focus on constant improvement, look at the long term process and get rid of our personal constraints.`,
      linkedin: "https://www.linkedin.com/in/puneet-mandil/",
    },
    {
      name: "Rahul Verma",
      title: "",
      image: "/images/comments-",
      description: `These are not just sessions these are long term advises to succeed in career, do better in our life, Making ourself competitive enough for the future. Thanks you @⁨Shravan Tickoo⁩ bhai for conducting this session. One of the core session of our journey.`,
      linkedin: "https://www.linkedin.com/in/rahulverma11/",
    },
    {
      name: "Yasmeen Taj",
      title: "",
      image: "/images/comments-",
      description: `Thank u so much @⁨Shravan Tickoo⁩ bhaiya for all the motivation, guidance. Feel very overwhelmed after ur lectures. Your approach on how to start on problem solving, product management is very helpful and resonating. Awesome session with deep learnings!`,
      linkedin: "https://www.linkedin.com/in/yasmeen-taj-08905217/",
    },
    {
      name: "Kaushik Samant",
      title: "",
      image: "/images/comments-",
      description: `These sessions went beyond product for me.
It’s about mindset shifts for life too.
The lessons apply personally and professionally both.
I’ve started thinking with more clarity now.
Thanks Shravan for showing what top 1% operators really do differently.
Grateful for this lens and community.`,
      linkedin: "https://www.linkedin.com/in/kaushik-samant/",
    },
    {
      name: "Satya Pandey",
      title: "",
      image: "/images/comments-",
      description: `Thanks Shravan bhaiya for the session.
I realised key mistakes in my approach—
especially in job search and LinkedIn use.
Your advice is always sharp and clear.
Every lecture stays engaging, never feels long.
You show up before we even do.
Appreciate the consistency and honesty throughout.
Thank you so much! 🙏`,
      linkedin: "https://www.linkedin.com/in/satya-pandey-b8448577/",
    },
    {
      name: "Leena Sahu",
      title: "",
      image: "/images/comments-",
      description: `Amazing session Shravan bhaiyya- I have lots of notes today. It definitely means that I learnt something from this, and it's time to process the information. AI definitely is an interesting subject to learn. Thank you for this wonderful session.`,
      linkedin: "https://www.linkedin.com/in/leena-sahu-7b665218/",
    },
    {
      name: "Dr. GVS Praveen",
      title: "",
      image: "/images/comments-",
      description: `Hi @⁨Shravan Tickoo⁩ , the session was very good, being a non-tech person, I was able to easily understand different tech components like app server, web server, web socket, DB, load balancer, API, Blob DB, CDN, etc. Hope you continue inspiring many more people like you do always. Thanks again.`,
      linkedin: "https://www.linkedin.com/in/drgvspraveen/",
    },
    {
      name: "Kartik Singla",
      title: "",
      image: "/images/comments-",
      description: `The session was truly a transformative experience. It felt like revisiting timeless life lessons, refreshing the soul and purifying knowledge that often gets buried in the rush of daily life. Grateful for the insights and the clarity it brought.
Thank you Shravan Bhaiya`,
      linkedin: "https://www.linkedin.com/in/kartiksingla005/",
    },
    {
      name: "Bhawna Chaudhary",
      title: "",
      image: "/images/comments-",
      description: `The session was incredibly insightful! The breakdown of PRD structures (BRD, FRD, DRD) and the emphasis on versioning really helped understand how to better manage scope.The growth model discussion was very helpful-especially how PLG drives viable product virality. Thank you bhaiya for the session.`,
      linkedin: "https://www.linkedin.com/in/chaudharybhawna/",
    },
    {
      name: "Pushpendra Sharma",
      title: "",
      image: "/images/comments-",
      description: `Amazing session, first half was completely relatable to what I learnt during my first startup.
I believe that the System thinking is not just the way to handle professional and personal scenarios, it’s a way of living the life. Once you get in the right mindset, your perspective also changes.`,
      linkedin: "https://www.linkedin.com/in/pushpendra/",
    },
    {
      name: "Aryen Naidu",
      title: "",
      image: "/images/comments-",
      description: `Before today, I had no clear understanding of A/B testing - just learnt how to do it instead of learning the WHY behind it.
But after today - I have deeper level of understanding on how it ACTUALLY aligns with the overarching goals of the organisation.
Thanks Shravan bhai for enculcating this level of depth on these topics. ✨`,
      linkedin: "https://www.linkedin.com/in/aryennaiduu/",
    },
  ];

  const TestimonialData2 = [
    {
      name: "Nitish Jain",
      title: "Cohort 2",
      image: "/images/job-offer-",
      description: `Bhaijaan. Good news. I got the offer from SISA as a technical product manager.
Thanks for your support Bhai.`,
      linkedin: "https://www.linkedin.com/in/nitishjainlinkdn/",
    },
    {
      name: "Sagar Mathur",
      title: "Cohort 2",
      image: "/images/job-offer-",
      description: `By the grace of God and your blessings, I got offered a Product Manager role at a fintech company in Pune. Thank you for making me a better thinker and a 1% operator. 🙏🙏`,
      linkedin: "https://www.linkedin.com/in/sagar-swarup-mathur-a2067b1ab/",
    },
    {
      name: "Bhishm Juneja",
      title: "Student Cohort 3",
      image: "/images/job-offer-",
      description: `Hey Shravan
Hope you are doing good bhai!! Just wanted to inform you that I’ve been offered the role of Product Manager from IBM software labs.
Wanted to thank you and the whole community for the support. 😊`,
      linkedin: "https://www.linkedin.com/in/bhishmjuneja/",
    },
    {
      name: "Saif Sadiq",
      title: "Cohort 5",
      image: "/images/job-offer-",
      description: `Hello bhaiya, very excited to share with you
I got very nice hike in appraisal in the last review, along with additional ESOPS 🚀
Thank you so much for all the sessions 🙏🏼`,
      linkedin: "https://www.linkedin.com/in/saif-sadiq/",
    },
    {
      name: "Jeff Wellesly",
      title: "Program 4",
      image: "/images/job-offer-",
      description: `Shravan bhai! There is a happy news. I got an internship offer from Amazon as Senior Program Manager. Internship will start by the mid of May.`,
      linkedin: "https://www.linkedin.com/in/jeffwe/",
    },
    {
      name: "Kevin Thomas",
      title: "Student- Cohort 3",
      image: "/images/job-offer-",
      description: `Hey Shravan, I got the AI PM role
at IBM — thanks to your sessions.
The Productathon helped me build confidently.
Showcased that AI product in interviews.
Also cleared another role but passed.
Got two more PM interview calls
just from the content I shared.
Your program gave way more value. ❤️`,
      linkedin: "https://www.linkedin.com/in/kevinthomasjoseph/",
    },
    {
      name: "Pallavi Dhamapurkar",
      title: "Cohort 3",
      image: "/images/job-offer-",
      description: `Just wanted to share with you promoted to senior product manager position from PM in firstcry 😅`,
      linkedin: "https://www.linkedin.com/in/pallavi-dhamapurkar-165384122/",
    },
  ];

  const [play, setPlay] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setPlay(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".slider--testim");
    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <section className="testimonials-slider-section w-full text-white py-20 px-4 md:px-8 lg:px-16 overflow-hidden">
      <div className="">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 0.7,
            }}
          >
            <h2 className="m-auto text-center">
              What Students Think <span className="block">about us?</span>
            </h2>

            <div className="buttons text-center">
              <button
                className={Comments === true ? "active" : ""}
                onClick={() => setComments(true)}
              >
                Jobs Cracked{" "}
                {Comments === true && (
                  <img src="/images/white-arrow.png" alt="job" />
                )}
              </button>

              <button
                className={Comments === false ? "active" : ""}
                onClick={() => setComments(false)}
              >
                Lovely Comments{" "}
                {Comments === false && (
                  <img src="/images/white-arrow.png" alt="job" />
                )}
              </button>
            </div>
          </motion.div>
        </div>

        <div className="slider--testim mt-10">
          {/* <div className="text-end pr-10 mb-5"> */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 0.7,
            }}
            className="text-end pr-10 mb-5"
          >
            {Comments && (
              <a
                href="https://drive.google.com/drive/folders/1bcPqmxKI5VywUSyen3Bw9tFjs47gttT_"
                target="_blank"
                className="flex items-center gap-2 justify-end"
              >
                View All Offers{" "}
                <img src="/images/light-arrow.png" alt="arrow" />
              </a>
            )}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 0.7,
            }}
          >
            <Marquee
              speed={100}
              delay={3}
              play={play}
              autoFill
              pauseOnHover
              className=""
            >
              {(!Comments ? TestimonialData : TestimonialData2)?.map(
                (item, index) => {
                  return (
                    <div className="item" key={index}>
                      <div className="card">
                        <div className="card-body">
                          <p className="">{item?.description}</p>

                          <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center gap-2">
                              <img
                                src={item?.image + (index + 1) + ".png"}
                                alt={item?.name}
                                title={item?.name}
                                className="rounded-full"
                                width="46px"
                                height="46px"
                                loading="lazy"
                              />
                              <div>
                                {/* <p className="user-post text-sm">{item?.title}</p> */}
                                <p className="user-name text-sm">
                                  {item?.name}
                                </p>
                              </div>
                            </div>
                            <div className="position-relative">
                              <a
                                href={item?.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <img
                                  src="/images/linkedin.png"
                                  alt={item?.name}
                                  title={item?.name}
                                  className="rounded-circle"
                                  width="26px"
                                  height="26px"
                                  loading="lazy"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
              )}
            </Marquee>
          </motion.div>
        </div>
      </div>
    </section >
  );
}
