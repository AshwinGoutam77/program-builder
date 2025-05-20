"use client"

import { useState } from "react"
import Image from "next/image"
import { CursorArrowRaysIcon } from "@heroicons/react/20/solid"
import { CloseButton } from "@headlessui/react"

export default function PhotoGallery() {
    const [selectedImage, setSelectedImage] = useState(null)

    const images = [
        {
            src: "/images/gallery-1.png",
            alt: "Gallery of nature and architecture photos",
            width: 1200,
            height: 800,
        },
        {
            src: "/images/gallery-2.png",
            alt: "Green matcha drink",
            width: 300,
            height: 400,
        },
        {
            src: "/images/gallery-3.png",
            alt: "Cacti with flowers",
            width: 400,
            height: 300,
        },
        {
            src: "/images/gallery-4.png",
            alt: "Flowers on light background",
            width: 400,
            height: 300,
        },
        {
            src: "/images/gallery-5.png",
            alt: "Misty ocean view",
            width: 300,
            height: 400,
        },
        {
            src: "/images/gallery-6.png",
            alt: "Circular architecture",
            width: 300,
            height: 400,
        },
        {
            src: "/images/gallery-7.png",
            alt: "Footprints in sand",
            width: 400,
            height: 300,
        },
        {
            src: "/images/gallery-1.png",
            alt: "Wood stove in cabin",
            width: 300,
            height: 400,
        },
        {
            src: "/images/gallery-2.png",
            alt: "Geometric building pattern",
            width: 400,
            height: 300,
        },
        {
            src: "/images/gallery-3.png",
            alt: "Motion blur of traffic",
            width: 400,
            height: 300,
        },
        {
            src: "/images/gallery-4.png",

            alt: "Red flower",
            width: 300,
            height: 300,
        },
    ]

    const openModal = (image) => {
        setSelectedImage(image)
        document.body.style.overflow = "hidden"
    }

    const closeModal = () => {
        setSelectedImage(null)
        document.body.style.overflow = "auto"
    }

    return (
        <div className="w-full text-white py-20 px-4 md:px-8 lg:px-16 overflow-hidden bg-gray-950">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`overflow-hidden rounded-lg cursor-pointer transition-transform hover:scale-[1.02] ${index === 0 ? "sm:col-span-2 sm:row-span-2" : index % 5 === 0 ? "sm:col-span-2" : ""
                                }`}
                        // onClick={() => openModal(image)}
                        >
                            <img
                                src={image.src || "/placeholder.svg"}
                                alt={image.alt}
                                width={image.width}
                                height={image.height}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div></div>

            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
                    onClick={closeModal}
                >
                    <div className="relative max-w-4xl max-h-[90vh] w-full">
                        <button
                            className="absolute top-4 right-4"
                            onClick={(e) => {
                                e.stopPropagation()
                                closeModal()
                            }}
                        >
                            <CloseButton className='w-20 text-white' />
                        </button>
                        <img
                            src={selectedImage.src || "/placeholder.svg"}
                            alt={selectedImage.alt}
                            width={selectedImage.width}
                            height={selectedImage.height}
                            className="w-full h-auto max-h-[90vh] object-contain"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                </div>
            )}
        </div>
    )
}
