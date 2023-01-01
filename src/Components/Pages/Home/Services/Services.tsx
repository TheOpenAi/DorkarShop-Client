/* eslint-disable jsx-a11y/alt-text */

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import "./Services.css";

import ScrollAnimationWrapper from "../../../Layout/ScrollAnimationWrapper";
import getScrollAnimation from "../../../Layout/getScrollAnimation";


const features = [
    "100% gunine product",
    " support and service",
    "support and service",
    "support and service",

]

const Services = () => {
    const scrollAnimation = useMemo(() => getScrollAnimation(), []);

    return (
        <div
            className="md:w-3/4 mx-auto mt-8 mb-6 sm:mt-14 sm:mb-14 lg:mt-20 lg:mb-20 px-6 sm:px-8 lg:px-16  m-5 bg-gray-100"
            id="feature"   >
            <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12 items-center justify-center">
                <ScrollAnimationWrapper className="flex w-full justify-end">
                    <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
                        <img src="https://i.ibb.co/0c4dZXZ/Illustration2.png" />
                    </motion.div>
                </ScrollAnimationWrapper>
                <ScrollAnimationWrapper>

                    <motion.div className="flex flex-col items-end justify-center ml-auto w-full lg:w-9/12" variants={scrollAnimation}>
                        <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-accent md:text-left">
                            We Provide Many Features You Can Use
                        </h3>
                        <p className="my-2 text-gray-500 md:text-left">
                            You can explore the features that we provide with fun and have their
                            own functions each feature.
                        </p>
                        <ul className="text-gray-500 self-start list-inside ml-8 w-[50%] mx-auto">
                            {features.map((feature, index) => (
                                <motion.li
                                    className="relative circle-check custom-list text-xl"
                                    custom={{ duration: 2 + index }}
                                    variants={scrollAnimation}
                                    key={index}
                                    whileHover={{
                                        scale: 1.1,
                                        transition: {
                                            duration: .2
                                        }
                                    }}>
                                    {feature}
                                </motion.li>
                            )
                            )}
                        </ul>
                    </motion.div>
                </ScrollAnimationWrapper>
            </div>
        </div>
    );
};

export default Services;