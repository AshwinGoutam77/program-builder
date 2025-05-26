'use client'

import { useEffect, useState } from 'react'
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from '@headlessui/react'
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { motion } from 'framer-motion';
import './page.css'

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [Scroll, setScroll] = useState(false);

    if (typeof window !== "undefined") {
        window.addEventListener("scroll", function () {
            scroll = window.pageYOffset || document.body.scrollTop;
            if (scroll > 1) {
                setScroll(true);
            } else if (scroll <= 1) {
                setScroll(false);
            }
        });
    }

    useEffect(() => {
        if (typeof window !== "undefined") {
            setScroll((window.pageYOffset || document.body.scrollTop) ? true : false);
        }
    }, []);

    useEffect(() => {
        const handleAnchorClick = (e) => {
            const target = e.target;

            const anchor = target.closest("a");

            if (anchor && anchor.getAttribute("href")?.startsWith("#")) {
                const href = anchor.getAttribute("href");
                const id = href.substring(1);
                const el = document.getElementById(id);
                if (el) {
                    e.preventDefault();
                    const y = el.getBoundingClientRect().top + window.scrollY - 80;
                    window.scrollTo({ top: y, behavior: "smooth" });
                }
            }
        };

        document.addEventListener("click", handleAnchorClick);
        return () => {
            document.removeEventListener("click", handleAnchorClick);
        };
    }, []);

    return (
        <motion.div
            className={`${Scroll && 'header-scrolled '} header-section w-full text-white overflow-hidden`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <header className="w-full px-10 mx-auto">
                <nav aria-label="Global" className="flex items-center justify-between py-6">
                    <div className="flex">
                        <a href="#" className="">
                            <img src="/images/header-logo.png" alt="logo" />
                        </a>
                    </div>
                    <div className="flex xl:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="size-6" />
                        </button>
                    </div>

                    <div className="hidden xl:flex items-center xl:flex-1 xl:justify-end gap-5">
                        <a href="#" className="text-sm/6 font-semibold text-white">
                            Home
                        </a>
                        <a href="#" className="text-sm/6 font-semibold text-white">
                            For You?
                        </a>
                        <a href="#project-overview" className="text-sm/6 font-semibold text-white">
                            Program overview
                        </a>
                        <a href="#curriculam" className="text-sm/6 font-semibold text-white">
                            Curriculum
                        </a>
                        <a href="#testimonials" className="text-sm/6 font-semibold text-white">
                            Testimonials
                        </a>
                        <a href="#master-speaker-section" className="text-sm/6 font-semibold text-white">
                            Guest speakers
                        </a>
                        <a href="#sarvan-teaching" className="text-sm/6 font-semibold text-white">
                            Products
                        </a>
                        <a href="#sarvan-teaching" className="text-sm/6 font-semibold text-white">
                            Pricing
                        </a>
                        <a href="#sarvan-teaching" className="text-sm/6 font-semibold text-white">
                            Contact
                        </a>
                        <a href="#" className="primary-btn">
                            Apply Now
                        </a>
                    </div>
                </nav>
                <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                    <div className="fixed inset-0 z-10" />
                    <DialogPanel className="sidebar fixed text-white inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#171717] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <img src="/images/header-logo.png" alt="logo" />
                            </a>
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="-m-2.5 rounded-md p-2.5 text-white"
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon aria-hidden="true" className="size-6" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="flex flex-col gap-5 py-6">
                                    <a href="#" className="text-white">
                                        Home
                                    </a>
                                    <a href="#" className="text-white">
                                        For You?
                                    </a>
                                    <a href="#project-overview" className="text-white">
                                        Program overview
                                    </a>
                                    <a href="#curriculam" className="text-white">
                                        Curriculum
                                    </a>
                                    <a href="#testimonials" className="text-white">
                                        Testimonials
                                    </a>
                                    <a href="#master-speaker-section" className="text-white">
                                        Guest speakers
                                    </a>
                                    <a href="#sarvan-teaching" className="text-white">
                                        Products
                                    </a>
                                    <a href="#sarvan-teaching" className="text-white">
                                        Pricing
                                    </a>
                                    <a href="#sarvan-teaching" className="text-white">
                                        Contact
                                    </a>
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </header>
        </motion.div>
    )
}
