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

const products = [
    { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
    { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
    { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
    { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
    { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

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

            // Traverse up if a child element is clicked inside an <a> tag
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
            className={`${Scroll && 'header-scrolled '} header-section w-full text-white px-4 md:px-8 lg:px-16 overflow-hidden`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <header className="container mx-auto">
                <nav aria-label="Global" className="flex items-center justify-between py-6">
                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                            <p className='logo'>Rethink Systems</p>
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="size-6" />
                        </button>
                    </div>

                    <div className='header-menus flex gap-10'>
                        <a href="#about-us" className="text-sm/6 font-semibold text-white">
                            About Us
                        </a>
                        <a href="#project-overview" className="text-sm/6 font-semibold text-white">
                            Program Overview
                        </a>
                        <a href="#" className="text-sm/6 font-semibold text-white">
                            Our Alumni
                        </a>
                        <a href="#sarvan-teaching" className="text-sm/6 font-semibold text-white">
                            Shravan Teaches
                        </a>
                    </div>

                    <div className="hidden lg:flex items-center lg:flex-1 lg:justify-end gap-5">
                        <a href="#" className="primary-btn">
                            Contact Us
                        </a>
                    </div>
                </nav>
                <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                    <div className="fixed inset-0 z-10" />
                    <DialogPanel className="sidebar fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img
                                    alt=""
                                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                                    className="h-8 w-auto"
                                />
                            </a>
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon aria-hidden="true" className="size-6" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    <a href=""></a>
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                    >
                                        Features
                                    </a>
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                    >
                                        Marketplace
                                    </a>
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                    >
                                        Company
                                    </a>
                                </div>
                                <div className="py-6">
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                    >
                                        Log in
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
