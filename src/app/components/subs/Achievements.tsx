'use client'
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { JSX } from "react/jsx-runtime";

interface Props {
    title: string;
    amount: number;
    children: JSX.Element;
}

const Achievements = (props: Props) => {
    const { title, amount, children } = props;
    const number = useMotionValue(0);
    const rounded = useTransform(number, (val) => Math.round(val));

    const count = () => {
        animate(number, amount, { duration: 2, ease: "easeOut" });
    };

    return (
        <div className="flex items-end gap-x-3">
            <span className="text-4xl lg:text-2xl text-gray-300">{children}</span>
            <h1 className="flex flex-col gap-y-2">
                <span className="text-2xl lg:text-xl font-light text-yellow-500 flex">
                    <motion.span onViewportEnter={count} viewport={{ once: true }}>
                        {rounded}
                    </motion.span>
                    +
                </span>
                <span className="text-sm tracking-wide text-gray-500">{title}</span>
            </h1>
        </div>
    );
};

export default Achievements;