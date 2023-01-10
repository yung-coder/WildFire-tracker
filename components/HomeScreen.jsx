import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, textVariant, fadeIn } from "../utils/motions";
import { TypingText } from "./TypingText";

const HomeScreen = () => {
  return (
    <>
      <section className="backdrop-blur-[2px] relative z-10 flex justify-center items-center sm:py-[15%] py-40 xs:py-8  sm:pl-16 pl-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="flex flex-col mx-auto justify-between items-center"
        >
          <div className="flex flex-col justify-center items-center ">
            <motion.h1
              variants={textVariant(0.1)}
              className="font-bold lg:text-[70px] md:text-[80px] sm:text-[30px] text-[40px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white"
            >
              Welcome
            </motion.h1>
            <TypingText title="WILD FIRE TRACKER" />
            <div className="mt-24">
              <motion.img
                variants={fadeIn("up", "tween", 0.3, 1)}
                src="/arrow-down.svg"
                alt="arrow down"
                className="w-[148px] h-[28px] object-contain mt-[28px]"
              />
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default HomeScreen;
