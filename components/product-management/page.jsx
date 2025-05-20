import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { ChevronRightIcon } from '@heroicons/react/24/outline'

const features = [
    {
        name: 'Push to deploy.',
        description:
            'Est et in pharetra magna adipiscing ornare aliquam.',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'SSL certificates.',
        description: 'Tellus arcu sed consequat ac velit ut eu blandit.',
        icon: LockClosedIcon,
    },
    {
        name: 'Database backups.',
        description: 'Ullamcorper ornare in et egestas dolor orci.',
        icon: ServerIcon,
    },
]

export default function ProductManagement() {
    return (
        <div className="overflow-hidden py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid items-center max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pt-4 lg:pr-8">
                        <div className="lg:max-w-lg">
                            <h2 className="gradient">Context & Credibility</h2>
                            <p className="mt-2 text-2xl font-semibold tracking-tight text-pretty text-white sm:text-4xl">
                                Product management is changing in the age of AI
                            </p>
                            <p className="mt-6 text-lg/7 text-white">
                                Product management is no longer about execution — it’s about clarity of thought, first principle thinking, and AI-enabled execution. More and more operators hire only if AI can’t automate the work.
                            </p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                                {features.map((feature) => (
                                    <div key={feature.name} className="relative pl-9">
                                        <dt className="inline font-semibold text-white">
                                            <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5" />
                                            {/* {feature.name} */}
                                        </dt>{' '}
                                        <dd className="inline text-white">{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                            <a href='#' className='text-base/7 mt-10 font-semibold text-white flex'>Find more about the Structure of program <ChevronRightIcon className='w-[5%]'/></a>
                        </div>
                    </div>
                    <img
                        alt="Product screenshot"
                        src="../../images/project-management.png"
                        className="w-[100%]"
                    />
                </div>
            </div>
        </div>
    )
}
