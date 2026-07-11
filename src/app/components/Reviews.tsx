'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

import { arrowIcons, reviewsData, starIcons } from '../assets'
import Heading from './subs/Heading'

const ReviewsPage = () => {
    const [index, setIndex] = useState(0)

    const prevReview = () => {
        setIndex((prev) =>
            prev === 0 ? reviewsData.length - 1 : prev - 1
        )
    }

    const nextReview = () => {
        setIndex((prev) =>
            prev === reviewsData.length - 1 ? 0 : prev + 1
        )
    }

    const review = reviewsData[index]

    return (
        <div id='reviews'
            className="my-20 px-80">
            <Heading text="Reviews" />

            <div className="flex flex-col items-center justify-center px-5">
                <div className="w-full max-w-4xl overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{
                                opacity: 0,
                                x: 100,
                                scale: 0.95,
                            }}
                            animate={{
                                opacity: 1,
                                x: 0,
                                scale: 1,
                            }}
                            exit={{
                                opacity: 0,
                                x: -100,
                                scale: 0.95,
                            }}
                            transition={{
                                duration: 0.35,
                                ease: 'easeInOut',
                            }}
                            className="
                                flex flex-col items-center
                                gap-y-5
                                rounded-xl
                                border border-yellow-500
                                bg-zinc-50
                                px-8 py-12
                                min-h-[420px]
                                justify-center
                            "
                        >

                            <div
                                className="flex h-20 w-20 items-center justify-center rounded-full border border-yellow-400 bg-white
                                text-2xl font-semibold text-zinc-700"
                            >
                                {review.avatar}
                            </div>


                            <h2 className="text-center text-2xl font-semibold tracking-normal text-yellow-600">
                                {review.name}
                            </h2>

                            <p className="text-center text-sm tracking-wide text-zinc-500">
                                {review.role}
                            </p>


                            <div className="flex gap-1 text-2xl text-yellow-500">
                                {review.stars.map((star, i) => (
                                    <span key={i}>
                                        {star === 1
                                            ? starIcons[0]
                                            : starIcons[1]}
                                    </span>
                                ))}
                            </div>


                            <blockquote
                                className="
                                    max-w-3xl
                                    text-center
                                    text-lg
                                    leading-8
                                    text-zinc-600
                                    italic
                                "
                            >
                                {review.comment}
                            </blockquote>
                        </motion.div>
                    </AnimatePresence>
                </div>


                <div className="mt-8 flex items-center gap-6 text-3xl text-yellow-500">
                    <button
                        onClick={prevReview}
                        className="transition hover:scale-110"
                    >
                        {arrowIcons[0]}
                    </button>

                    <button
                        onClick={nextReview}
                        className="transition hover:scale-110"
                    >
                        {arrowIcons[1]}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ReviewsPage