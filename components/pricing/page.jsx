import { CheckIcon } from '@heroicons/react/20/solid'
import { CheckCircleIcon } from '@heroicons/react/24/outline'

const tiers = [
    {
        name: 'Core Program',
        id: 'tier-hobby1',
        href: '#',
        priceMonthly: '₹74,999',
        usd: "$999",
        description: "The perfect plan if you're just getting started with our product.",
        features: ['Full 10-week curriculum, live sessions'],
        featured: false,
    },
    {
        name: 'Plus Retreat',
        id: 'tier-enterprise',
        href: '#',
        priceMonthly: '₹94,999',
        usd: "$1,299",
        description: 'Dedicated support and infrastructure for your company.',
        features: [
            'Core Program + Graduation Retreat (excl. flights)'
        ],
        featured: true,
    },
    {
        name: 'Premium (All‑Inclusive)',
        id: 'tier-hobby2',
        href: '#',
        priceMonthly: '₹1,14,999',
        usd: "$1,599",
        description: "The perfect plan if you're just getting started with our product.",
        features: ['Plus Retreat + AI Tool Licenses & Resources'],
        featured: false,
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Pricing() {
    return (
        <section className="py-20 bg-[#0f0f1a]">
            <div className="container mx-auto">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Choose Your Path</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
                        <div className="bg-gray-800 py-4 text-center">
                            <h3 className="text-xl font-bold text-white">Core Program</h3>
                        </div>
                        <div className="p-6">
                            <div className="text-center mb-6">
                                <p className="text-3xl font-bold mb-1 text-white">₹74,999</p>
                                <p className="text-gray-300">$999 (approx.)</p>
                                <p className="text-gray-400 text-sm mt-2">Includes GST</p>
                            </div>

                            <ul className="space-y-3 mb-8">
                                <li className="flex items-start">
                                    <CheckCircleIcon className="h-5 w-5 text-violet-400 mr-2 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-200">Full 10-week curriculum</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircleIcon className="h-5 w-5 text-violet-400 mr-2 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-200">Live sessions</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircleIcon className="h-5 w-5 text-violet-400 mr-2 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-200">Community access</span>
                                </li>
                            </ul>

                            <button className="primary-btn m-auto">
                                Enroll in Core Program
                            </button>

                            <p className="text-center text-gray-400 text-sm mt-4">EMI options available</p>
                        </div>
                    </div>

                    <div className="bg-gray-900 rounded-xl border-2 border-violet-500 overflow-hidden relative">
                        <div className="absolute top-0 right-0 bg-violet-500 text-white text-xs font-bold px-3 py-1 rounded-bl">
                            RECOMMENDED
                        </div>
                        <div className="bg-violet-900/30 py-4 pt-8 text-center">
                            <h3 className="text-xl font-bold text-white">Plus Retreat</h3>
                        </div>
                        <div className="p-6">
                            <div className="text-center mb-6">
                                <p className="text-3xl font-bold mb-1 text-white">₹94,999</p>
                                <p className="text-gray-300">$1,299 (approx.)</p>
                                <p className="text-gray-400 text-sm mt-2">Includes GST</p>
                            </div>

                            <ul className="space-y-3 mb-8">
                                <li className="flex items-start">
                                    <CheckCircleIcon className="h-5 w-5 text-violet-400 mr-2 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-200">Core Program</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircleIcon className="h-5 w-5 text-violet-400 mr-2 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-200">Graduation Retreat</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircleIcon className="h-5 w-5 text-violet-400 mr-2 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-200 text-sm">(excludes flights)</span>
                                </li>
                            </ul>

                            <button className="primary-btn m-auto">
                                Enroll with Retreat
                            </button>

                            <p className="text-center text-gray-400 text-sm mt-4">EMI options available</p>
                        </div>
                    </div>

                    <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
                        <div className="bg-gray-800 py-4 text-center">
                            <h3 className="text-xl font-bold text-white">Premium (All-Inclusive)</h3>
                        </div>
                        <div className="p-6">
                            <div className="text-center mb-6">
                                <p className="text-3xl font-bold mb-1 text-white">₹1,14,999</p>
                                <p className="text-gray-300">$1,599 (approx.)</p>
                                <p className="text-gray-400 text-sm mt-2">Includes GST</p>
                            </div>

                            <ul className="space-y-3 mb-8">
                                <li className="flex items-start">
                                    <CheckCircleIcon className="h-5 w-5 text-teal-400 mr-2 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-200">Plus Retreat</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircleIcon className="h-5 w-5 text-teal-400 mr-2 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-200">AI Tool Licenses</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircleIcon className="h-5 w-5 text-teal-400 mr-2 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-200">Premium Resources</span>
                                </li>
                            </ul>

                            <button className="primary-btn m-auto">
                                Enroll Premium
                            </button>

                            <p className="text-center text-gray-400 text-sm mt-4">EMI options available</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
