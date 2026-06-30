'use client'
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { ReactNode } from "react";

interface Props {
    title: string;
    amount: number;
    children: ReactNode;
}

const Achievements = (props: Props) => {
    const { title, amount, children } = props;
    const number = useMotionValue(0);
    const rounded = useTransform(number, (val) => Math.round(val));

    const count = () => {
        animate(number, amount, { duration: 2, ease: "easeOut" });
    };

    return (
        <div className="flex flex-col gap-y-2">
            <span className="text-2xl lg:text-xl font-light text-amber-500">
                <motion.span onViewportEnter={count} viewport={{ once: true }}>
                    {rounded}
                </motion.span>
            </span>

            <div className="flex items-center gap-x-2 text-gray-500 dark:text-white transition-colors">
                <span className="text-lg">{children}</span>
                <span className="text-sm tracking-wide">{title}</span>
            </div>
        </div>
    );
};

export default Achievements;