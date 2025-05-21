import { ChevronRightIcon } from "@heroicons/react/24/outline";
import './page.css'

export default function Banner() {
    return (
        <>
            <div className="w-full text-white px-4 md:px-8 lg:px-16 overflow-hidden">
                <div className="banner-section container mx-auto">
                    <div className="grid grid-cols-1 gap-y-12 gap-x-8 lg:grid-cols-[60%_40%] z-20 relative">
                        <div className="flex flex-col justify-center gap-5">
                            <h1>Mastering <span className="block">Product Management 2.0</span></h1>
                            <p className="font-bold">Become a successful product manager & builder in the Age of AI</p>
                            <p className="w-[80%]">
                                Step into the next generation of product leadership. In a world where AI is transforming how products are built, this program equips you with clarity of thought, first-principle frameworks, and hands-on AI execution skills. Learn to ship winning products faster, think like a founder, and future-proof your career. 
                            </p>
                            <div className="flex gap-5">
                                <button className="primary-btn">Try For Free <ChevronRightIcon /></button>
                                <button className="secondary-btn">View Program Curriculum</button>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="overlap-div-1 backdrop-blur-lg">
                                <h4>10K</h4>
                                <p> Learners  <span className="block"> Impacted</span></p>
                            </div>
                            <img src="../../images/sarvan's-image.png" alt="" />
                            <div className="overlap-div-2 backdrop-blur-lg">
                                <h4>500+</h4>
                                <p>PM Offers</p>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="py-10 sm:py-16 lg:py-24">
                    <div className="container mx-auto">
                        <div className="max-w-2xl mx-auto text-center">
                            <h2 className="text-md gradient">Our alumni are building world class products at</h2>
                        </div>

                        <div className="flex align-center justify-center mt-2 space-x-3 gap-10">
                            <div>
                                <img className="object-contain w-full h-24 mx-auto" src="https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-white.svg" alt="" />
                            </div>

                            <div>
                                <img className="object-contain w-full h-24 mx-auto" src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-white.svg" alt="" />
                            </div>

                            <div>
                                <img className="object-contain w-full h-24 mx-auto" src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-white.svg" alt="" />
                            </div>

                            <div>
                                <img className="object-contain w-full mx-auto h-24" src="https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-white.svg" alt="" />
                            </div>
                            <div>
                                <img className="object-contain w-full mx-auto h-24" src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-white.svg" alt="" />
                            </div>
                            <div>
                                <img className="object-contain w-full mx-auto h-24" src="https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-white.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
