'use client';

const TabNavigation = ({ tabs, activeTab, setActiveTab }) => {
    return (
        <div className="overview-tabs-section flex flex-wrap justify-center items-center gap-2 md:gap-4">
            {tabs.map((tab) => (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={(
                        activeTab === tab
                            ? "active"
                            : ""
                    )}
                >
                    {tab}
                    {/* {activeTab === tab && (
                        <span className="absolute bottom-0 left-0 h-0.5 bg-white w-full transform transition-transform duration-300" />
                    )} */}
                </button>
            ))}
        </div>
    );
};

export default TabNavigation;