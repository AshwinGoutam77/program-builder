"use client"
import { useEffect, useState } from "react"
import './page.css'
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const students = [
    {
        name: 'Jitin Nagpal',
        img: '/images/alumni-',
        position: 'Founder @Liftbro',
        linkedin: 'https://www.linkedin.com/in/nagpaljitin/',
    },
    {
        name: 'Sanjeev Chadha',
        img: '/images/alumni-',
        position: 'SPM @Madison Logic',
        linkedin: 'https://www.linkedin.com/in/sanjeev-chadha-76714b21/',
    },
    {
        name: 'Sanchit Hegde',
        img: '/images/alumni-',
        position: 'SWE 2 at sap',
        linkedin: 'https://www.linkedin.com/in/sanchithegde/',
    },
    {
        name: 'Saif Sadiq',
        img: '/images/alumni-',
        position: 'Head of Product Growth @Apptile',
        linkedin: 'https://www.linkedin.com/in/saif-sadiq/',
    },
    {
        name: 'Yogish Gowda',
        img: '/images/alumni-',
        position: 'Senior Staff Product Owner @ Solarwinds',
        linkedin: 'https://www.linkedin.com/in/yogishgowda/',
    },
    {
        name: 'Gnanesh L',
        img: '/images/alumni-',
        position: 'Founder @ Tradebeat Innovations',
        linkedin: 'https://www.linkedin.com/in/gnanesh5/',
    },
    {
        name: 'Kaushik Samant',
        img: '/images/alumni-',
        position: 'Data Product Owner @ Nielsen IQ',
        linkedin: 'https://www.linkedin.com/in/kaushik-samant/',
    },
    {
        name: 'Satya Pandey',
        img: '/images/alumni-',
        position: 'Associate Product Owner @ Bank of America',
        linkedin: 'https://www.linkedin.com/in/satya-pandey-b8448577/',
    },
    {
        name: 'Deepshika Sharma',
        img: '/images/alumni-',
        position: 'Associate Product Manager @ IZotoo',
        linkedin: 'https://www.linkedin.com/in/deepshikha-sharma-ba22a3169/',
    },
    {
        name: 'Maanas Mohan',
        img: '/images/alumni-',
        position: 'Program Manager @ High Radius',
        linkedin: 'https://www.linkedin.com/in/maanasmohan/',
    },
    {
        name: 'Rahul Verma',
        img: '/images/alumni-',
        position: 'Program Manager @ Amazon',
        linkedin: 'https://www.linkedin.com/in/rahulverma11/',
    },
    {
        name: 'Rahul Verma',
        img: '/images/alumni-',
        position: 'Senior Product Manager @ Publicis Sapient',
        linkedin: 'https://www.linkedin.com/in/rahulverma20/',
    },
    {
        name: 'Tusshar Gupta',
        img: '/images/alumni-',
        position: 'Product Manager @Tata 1MG',
        linkedin: 'https://www.linkedin.com/in/tusshar-gupta/',
    },
    {
        name: 'Isha Singal',
        img: '/images/alumni-',
        position: 'Senior Program Manager @ Amazon',
        linkedin: 'https://www.linkedin.com/in/isha-singal-6077b248/',
    },
    {
        name: 'Dileep KS',
        img: '/images/alumni-',
        position: 'Product Manager @ FIS Global',
        linkedin: 'https://www.linkedin.com/in/dileep-ks/',
    },
    {
        name: 'Ridham Trivedi',
        img: '/images/alumni-',
        position: 'Associate UX Designer @ Jio',
        linkedin: 'https://www.linkedin.com/in/ridham-trivedi-/',
    },
    {
        name: 'Kiran Bandreddy',
        img: '/images/alumni-',
        position: 'Founder @ AIonDemand',
        linkedin: 'https://www.linkedin.com/in/kiran-sai-bandreddy/',
    },
    {
        name: 'Akash Raj',
        img: '/images/alumni-',
        position: 'Product Manager @ Flipkart',
        linkedin: 'https://www.linkedin.com/in/akashraj4562/',
    },
    {
        name: 'Arbaaz Shaikh',
        img: '/images/alumni-',
        position: 'Product Manager @ Bombay Design Centre',
        linkedin: 'https://www.linkedin.com/in/arbaazshaikhh/',
    },
    {
        name: 'Puneet Mandil',
        img: '/images/alumni-',
        position: 'Associate Consultant @ Mastercard',
        linkedin: 'https://www.linkedin.com/in/puneet-mandil/',
    },
    {
        name: 'Varun Khanna',
        img: '/images/alumni-',
        position: 'Global Product Lead @ Google',
        linkedin: 'https://www.linkedin.com/in/khannavarun/',
    },

    {
        name: 'Dev Yadav',
        img: '/images/alumni-',
        position: 'Product Lead @ Agthia Group',
        linkedin: 'https://www.linkedin.com/in/devender-yadav/',
    },
]

export default function Alumni() {

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
        <section className="alumni-section w-full text-white" id='our-alumni'>
            <motion.div className="container mx-auto text-center"   initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",  
                    }}>
                <h2 className="mb-2">Our Alumni</h2>
                <p>A network of builders- they continue to shape others’ paths by becoming 1% better everyday. Scroll <span className="block"> through, reach out, get inspired.</span></p>
            </motion.div>

            <div className="mt-10">
                <Marquee speed={50} delay={0} play={play} autoFill pauseOnHover direction="right">
                    {students.slice(0, 12).map((student, index) => (
                        <div className="card" key={index}>
                            <img src={student.img + (index + 1) + '.png'} alt="student" />
                            <div className="flex items-center justify-between mt-3">
                                <h4>{student.name}</h4>
                                <a href={student?.linkedin} target="_blank"><img src="/images/linkedin.png" alt="linkedin" className="linkedin-img" /></a>
                            </div>
                            <p className="text-sm w-[80%] user-position">{student?.position}</p>
                        </div>
                    ))}
                </Marquee>
            </div>

            <div className="mt-10">
                <Marquee speed={50} delay={0} play={play} autoFill pauseOnHover>
                    {students.slice(12, 24).map((student, index) => (
                        <div className="card" key={index}>
                            <img src={student.img + (12 + index + 1) + '.png'} alt="student" />
                            <div className="flex items-center justify-between mt-3">
                                <h4>{student.name}</h4>
                                <a href={student?.linkedin} target="_blank"><img src="/images/linkedin.png" alt="linkedin" className="linkedin-img" /></a>
                            </div>
                            <p className="text-sm w-[80%] user-position">{student?.position}</p>
                        </div>
                    ))}
                </Marquee>
            </div>

        </section>
    )
}
