import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { ChevronRightIcon } from '@heroicons/react/24/outline'

const features = [
    {
        name: 'Push to deploy.',
        description:
            'From Spotify to Duolingo, visionary founders are demanding an AI-first mindset.    ',
        icon: '/images/right-click.png',
    },
    {
        name: 'SSL certificates.',
        description: 'AI is not our competitor—it’s our greatest enabler. — Spotify Founder',
        icon: '/images/right-click.png',
    },
    {
        name: 'Database backups.',
        description: 'Every PM must be fluent in AI or risk becoming obsolete.— Duolingo Founder',
        icon: '/images/right-click.png',
    },
]

export default function ProductManagement() {
    return (
        <section>
            <div className="container mx-auto">
                <div className="mx-auto grid items-center max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pt-4 lg:pr-8">
                        <div className="lg:max-w-lg">
                            <h2>Product management is changing in the age of AI</h2>
                            <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                                {features.map((feature) => (
                                    <div key={feature.name} className="p-0 m-0">
                                        <p className='text-white flex items-start gap-2'><img src={feature?.icon} alt="icon" className='mt-2' /> {feature.description}</p>
                                    </div>
                                ))}
                            </dl>
                            <a href='#' className='text-base/7 mt-10 font-semibold text-[#C9C2FF] flex gap-2 items-center'>Find more about the Structure of program  <img src="../../images/light-arrow.png" alt="" /></a>
                        </div>
                    </div>
                    <img
                        alt="Product screenshot"
                        src="../../images/project-management.png"
                        className="w-[100%]"
                    />
                </div>
            </div>
        </section>
    )
}
