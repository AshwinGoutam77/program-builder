// 'use client'
// import React, { useEffect, useState } from 'react'
// import { detailedData } from './projectData';

// export default function ProjectOverview() {
//     const [isVisible, setIsVisible] = useState([false, false, false, false, false])
//     const [showModal, setShowModal] = useState(false);
//     const [selectedWeek, setSelectedWeek] = useState(null);
//     const [animateModal, setAnimateModal] = useState(false);

//     const openModal = (week) => {
//         setSelectedWeek(week);
//         setShowModal(true);
//         setTimeout(() => setAnimateModal(true), 10); // Slight delay to trigger transition
//     };

//     const closeModal = () => {
//         setAnimateModal(false);
//         setTimeout(() => {
//             setShowModal(false);
//             setSelectedWeek(null);
//         }, 300); // Match this to animation duration
//     };

//     useEffect(() => {
//         if (showModal) {
//             document.body.classList.add('overflow-hidden');
//         } else {
//             document.body.classList.remove('overflow-hidden');
//         }

//         // Cleanup when component unmounts
//         return () => {
//             document.body.classList.remove('overflow-hidden');
//         };
//     }, [showModal]);




//     useEffect(() => {
//         const onScroll = () => {
//             const scrollY = window.scrollY
//             // You can make this more dynamic based on actual scroll positions or ref checks
//             if (scrollY > 200) {
//                 const updatedVisibility = [...isVisible]
//                 updatedVisibility[4] = true
//                 setIsVisible(updatedVisibility)
//             }
//         }

//         window.addEventListener('scroll', onScroll)
//         return () => window.removeEventListener('scroll', onScroll)
//     }, [isVisible])

//     return (
//         <>
//             {showModal && selectedWeek && (
//                 <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
//                     <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 w-full max-w-3xl relative">
//                         <button
//                             onClick={() => setShowModal(false)}
//                             className="absolute top-3 right-4 text-gray-400 hover:text-white text-xl cursor-pointer"
//                         >
//                             &times;
//                         </button>

//                         <h3 className="text-xl font-bold mb-4 text-white">Week {selectedWeek} Details</h3>

//                         {detailedData[`week${selectedWeek}`] && (
//                             <div
//                                 className={`mt-8 transition-all duration-1000 delay-400 transform'}`}
//                             >
//                                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

//                                     {/* Session A */}
//                                     <div className="bg-gray-800 rounded-lg p-4 transition-all duration-300 hover:bg-gray-800/80 hover:shadow-lg hover:shadow-violet-500/10 transform hover:-translate-y-1">
//                                         <div className="text-violet-400 text-sm font-medium mb-2">
//                                             {detailedData[`week${selectedWeek}`].A.tag}
//                                         </div>
//                                         <h4 className="font-bold text-white mb-2">
//                                             {detailedData[`week${selectedWeek}`].A.title}
//                                         </h4>
//                                         {detailedData[`week${selectedWeek}`].A.when && (
//                                             <p className="text-sm text-gray-300 mb-4">
//                                                 {detailedData[`week${selectedWeek}`].A.when}
//                                             </p>
//                                         )}
//                                         <p className="text-sm text-gray-300 mb-4">
//                                             {detailedData[`week${selectedWeek}`].A.desc}
//                                         </p>
//                                         <div className="bg-gray-900/50 p-3 rounded animate-pulse-soft">
//                                             <p className="text-xs italic text-gray-300">
//                                                 Enterprising Insight: {detailedData[`week${selectedWeek}`].A.insight}
//                                             </p>
//                                         </div>
//                                     </div>

//                                     {/* Session B */}
//                                     <div className="bg-gray-800 rounded-lg p-4 transition-all duration-300 hover:bg-gray-800/80 hover:shadow-lg hover:shadow-teal-500/10 transform hover:-translate-y-1">
//                                         <div className="text-teal-400 text-sm font-medium mb-2">
//                                             {detailedData[`week${selectedWeek}`].B.tag}
//                                         </div>
//                                         <h4 className="font-bold text-white mb-2">
//                                             {detailedData[`week${selectedWeek}`].B.title}
//                                         </h4>
//                                         {detailedData[`week${selectedWeek}`].B.when && (
//                                             <p className="text-sm text-gray-300 mb-4">
//                                                 {detailedData[`week${selectedWeek}`].B.when}
//                                             </p>
//                                         )}
//                                         <p className="text-sm text-gray-300 mb-4">
//                                             {detailedData[`week${selectedWeek}`].B.desc}
//                                         </p>
//                                         <div className="bg-gray-900/50 p-3 rounded animate-pulse-soft animate-delay-200">
//                                             <p className="text-xs italic text-gray-300">
//                                                 Enterprising Insight: {detailedData[`week${selectedWeek}`].B.insight}
//                                             </p>
//                                         </div>
//                                     </div>

//                                     {/* Tools */}
//                                     <div className="bg-gray-800 rounded-lg p-4 transition-all duration-300 hover:bg-gray-800/80 hover:shadow-lg hover:shadow-violet-500/10 transform hover:-translate-y-1">
//                                         <h4 className="font-bold text-white mb-2">Tools Covered</h4>
//                                         <ul className="space-y-2 mb-4">
//                                             {detailedData[`week${selectedWeek}`].C.tools
//                                                 ?.split(";")
//                                                 .map((tool, idx) => (
//                                                     <li key={idx} className="flex items-center">
//                                                         {/* <div className="h-8 w-8 rounded-full bg-gray-700 mr-2"></div> */}
//                                                         <span className='text-white text-sm'>{tool.trim()}</span>
//                                                     </li>
//                                                 ))}
//                                         </ul>
//                                         <div className="bg-gray-900/50 p-3 rounded animate-pulse-soft animate-delay-300">
//                                             <p className="text-xs italic text-gray-300">
//                                                 Enterprising Insight: {detailedData[`week${selectedWeek}`].C.insight}
//                                             </p>
//                                         </div>
//                                     </div>

//                                 </div>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             )}


//             <section className="py-20 bg-[#0f0f1a] animate-on-scroll">
//                 <div className="container mx-auto">
//                     <div className="max-w-4xl mx-auto">
//                         <div className={`transition-all duration-1000 ${isVisible[4] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//                             <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white text-center text-glow">
//                                 Interactive Program Structure
//                             </h2>
//                         </div>

//                         {/* Schedule Table */}
//                         <div className={`bg-gray-900 rounded-xl border border-gray-800 overflow-hidden transition-all duration-1000 delay-200 transform hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-500/10 ${isVisible[4] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
//                             <div className="overflow-x-auto">
//                                 <table className="w-full">
//                                     <thead className="bg-gray-800">
//                                         <tr>
//                                             <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Week</th>
//                                             <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Day & Date</th>
//                                             <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Session Types</th>
//                                             <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Details</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody className="divide-y divide-gray-800">
//                                         {[...Array(10)].map((_, i) => {
//                                             const days = [
//                                                 { day: "Sat, 14th June", type: "Live Theory, Live Lab" },
//                                                 { day: "Sun, 15th June", type: "Live Theory" },
//                                                 { day: "Mon, 23rd June", type: "Recorded Theory" },
//                                                 { day: "Sat, 5th July", type: "Live Theory, Live Lab" },
//                                                 { day: "Mon, 7th & Sat, 12th Jul", type: "Recorded; Live Theory & Lab" },
//                                                 { day: "Wed,16th & Sat,19th", type: "Guest; Live Theory & Lab" },
//                                                 { day: "Wed,23rd & Sat,27th", type: "Guest; Live Theory & Lab" },
//                                                 { day: "Sat,2nd & Sun,3rd Aug", type: "Live Theory & Lab" },
//                                                 { day: "Mon, 4th Aug", type: "Productathon Kickoff" },
//                                                 { day: "Wed, 14th Aug", type: "Live Demo" },
//                                             ]
//                                             return (
//                                                 <tr key={i} className="hover:bg-gray-800/50 cursor-pointer transition-colors duration-300">
//                                                     <td className="px-4 py-3 text-sm text-white">{i + 1}</td>
//                                                     <td className="px-4 py-3 text-sm text-white">{days[i].day}</td>
//                                                     <td className="px-4 py-3 text-sm text-white">{days[i].type}</td>
//                                                     <td className="px-4 py-3 text-sm text-white transition-colors duration-300" onClick={() => openModal(i + 1)}>
//                                                         View Details
//                                                     </td>
//                                                 </tr>
//                                             )
//                                         })}
//                                     </tbody>
//                                 </table>
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }


'use client';

import { useState } from 'react';
import TabNavigation from './TabNavigation';
import LiveWithShravan from './LiveWithShravan';
import './page.css'
import CaseStudy from '../case-study/page';

const ProgramOverview = () => {
    const [activeTab, setActiveTab] = useState('Theory Sessions');

    const tabs = [
        'Theory Sessions',
        'AI Building Lab Sessions',
        'Group Discussion Sessions',
        'Recorded Sessions',
        'Master Sessions',
    ];

    return (
        <section className="project-overview-section">
            <div className="container mx-auto">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">Program Overview</h2>
                </div>

                <TabNavigation tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />

                <div className="mt-12">
                    {activeTab === 'Theory Sessions' && <LiveWithShravan />}
                    {activeTab === 'AI Building Lab Sessions' && (
                        <div className="text-center py-12 text-gray-300">AI Building Lab Sessions content coming soon</div>
                    )}
                    {activeTab === 'Group Discussion Sessions' && (
                        <div className="text-center py-12 text-gray-300">Group Discussion Sessions content coming soon</div>
                    )}
                    {activeTab === 'Recorded Sessions' && (
                        <div className="text-center py-12 text-gray-300">Recorded Sessions content coming soon</div>
                    )}
                    {activeTab === 'Master Sessions' && (
                        <div className="text-center py-12 text-gray-300">Master Sessions content coming soon</div>
                    )}
                </div>


                <div className="case-study-section">
                    <CaseStudy />
                </div>


                <div className="important-section grid grid-cols-2 items-center gap-10">
                    <div className="">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                {
                                    value: <>28<sup>th</sup> June</>,
                                    label: 'Program Start date',
                                },
                                {
                                    value: '80',
                                    label: 'Seats only for this program',
                                },
                                {
                                    value: <>20<sup>th</sup> June</>,
                                    label: 'Last date to apply for this program',
                                },
                                {
                                    value: '74,999/-',
                                    label: 'Price Of The Program',
                                },
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white rounded-xl px-6 py-8 shadow-md"
                                >
                                    <h3 className="text-4xl font-bold text-indigo-600 mb-2">{item.value}</h3>
                                    <p className="text-sm text-black">{item.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h2>Important</h2>

                        <ul>
                            <li>This isn’t for people looking to just watch and learn. You’ll be expected to show up and build.</li>
                            <li>There will be moments of doubt, overwhelm, and discomfort — that’s how real growth feels.</li>
                            <li>You might not get it right the first time. That’s okay — we’re here to try, reflect, and try again.</li>
                            <li>You’ll need to manage your time, stay accountable, and lean into the discomfort of doing hard things.</li>
                            <li>But you won’t be alone. You’ll be surrounded by people who care just as deeply and try just as hard :)</li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ProgramOverview;