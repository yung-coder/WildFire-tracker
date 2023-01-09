import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "../utils/motions";
import { TypingText } from "./TypingText";

const HomeScreen = () => {
  return (
    <>
      <section className=" flex justify-center items-center sm:py-[15%] py-40 xs:py-8  sm:pl-16 pl-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="flex flex-col justify-between items-center"
        >
          <div className="flex flex-col justify-center items-center ">
            <motion.h1
              variants={textVariant(0.1)}
              className="font-bold lg:text-[70px] md:text-[80px] sm:text-[30px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white"
            >
              Welcome
            </motion.h1>
            <TypingText title="WILD FIRE TRACKER" />
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default HomeScreen;
