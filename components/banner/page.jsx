'use client'
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import './page.css';
import { motion } from "framer-motion";

export default function Banner() {
    return (
        <>
            <motion.div
                className="w-full text-white   md:px-8 lg:px-16 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="banner-section container mx-auto">
                    <div className="grid grid-cols-1 gap-y-12 gap-x-8 lg:grid-cols-[60%_40%] z-20 relative">
                        <div className="flex flex-col justify-center gap-5">
                            <div>
                                <span className="gradient">PROGRAM 6TH </span>
                                <motion.h1
                                    initial={{ opacity: 0, y: -50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                                    className="text-4xl font-bold"
                                >
                                    Mastering <span className="block">Product Management 2.0</span>
                                </motion.h1>
                            </div>

                            <p className="font-bold">
                                Become a successful product manager & builder in the Age of AI
                            </p>

                            <p className="md-w-[80%] italic">
                                Step into the next generation of product leadership. In a world
                                where AI is transforming how products are built, this program
                                equips you with clarity of thought, first-principle frameworks,
                                and hands-on AI execution skills. Learn to ship winning products
                                faster, think like a founder, and future-proof your career.
                            </p>

                            <div className="flex flex-wrap gap-5">
                                <button className="primary-btn">
                                    Apply Now <img src="/images/arrow.png" alt="" />
                                </button>
                                <button className="secondary-btn">View Program Curriculum</button>
                            </div>
                        </div>

                        <div className="relative w-fit mx-auto">
                            <div className="overlap-div-1 backdrop-blur-lg">
                                <h4>10K</h4>
                                <p>
                                    Learners <span className="block">Impacted</span>
                                </p>
                            </div>
                            <img src="../../images/sarvan's-image.png" alt="banner-1" className="banner-img" />
                            <div className="overlap-div-2 backdrop-blur-lg">
                                <h4>500+</h4>
                                <p>PM Offers</p>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="logos-cloud-section ">
                    <div className="container mx-auto">
                        <div className="max-w-2xl mx-auto text-center">
                            <span className="gradient">
                                Our alumni are building world class products at
                            </span>
                        </div>

                        <motion.div
                            className="flex align-center justify-center mt-2 space-x-3 gap-10"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1 }}
                        >
                            <div>
                                <img
                                    className="object-contain w-full h-24 mx-auto"
                                    src="/images/logo-1.png"
                                    alt="Logo 1"
                                />
                            </div>
                            <div>
                                <img
                                    className="object-contain w-full h-24 mx-auto"
                                    src="/images/logo-2.png"
                                    alt="Logo 2"
                                />
                            </div>
                            <div className="m-auto">
                                <img
                                    className="object-contain w-full h-10 mx-auto"
                                    src="/images/logo-3.png"
                                    alt="Logo 3"
                                />
                            </div>
                            <div className="m-auto pt-4">
                                <img
                                    className="object-contain w-full mx-auto h-10"
                                    src="/images/logo-4.png"
                                    alt="Logo 4"
                                />
                            </div>
                            <div>
                                <img
                                    className="object-contain w-full mx-auto h-24"
                                    src="/images/logo-5.png"
                                    alt="Logo 5"
                                />
                            </div>
                            <div>
                                <img
                                    className="object-contain w-full mx-auto h-24"
                                    src="/images/logo-6.png"
                                    alt="Logo 6"
                                />
                            </div>
                        </motion.div>
                    </div>
                </section>
            </motion.div>
        </>
    );
}
