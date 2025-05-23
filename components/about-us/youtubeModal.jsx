import { useEffect, useRef } from "react"

const YouTubeModal = ({ show, onClose, VideoLink }) => {
    const modalRef = useRef(null)

    const handleClickOutside = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            onClose()
        }
    }

    useEffect(() => {
        if (show) {
            document.addEventListener("mousedown", handleClickOutside)
        } else {
            document.removeEventListener("mousedown", handleClickOutside)
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [show])

    if (!show) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
            <div
                ref={modalRef}
                className="rounded-lg max-w-2xl w-full relative shadow-lg"
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-[-10px] right-[-10px] cursor-pointer z-[9999] bg-white text-black w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold"
                    aria-label="Close"
                >
                    &times;
                </button>

                {/* YouTube iframe */}
                <div className="relative w-full rounded-lg" style={{ paddingTop: "56.25%" }}>
                    <iframe
                        className="absolute top-0 left-0 w-full h-full rounded-lg"
                        src={VideoLink}
                        title="How does Shravan teach?"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    )
}
export default YouTubeModal;