import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, textVariant } from "../utils/motions";

const HomeScreen = () => {
  return (
    <section className="flex justify-center items-center border sm:py-[20%] py-40 xs:py-8  sm:pl-16 pl-6">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="flex flex-col justify-between items-center"
      >
        <div className="flex justify-center items-center ">
          <motion.h1
            variants={textVariant(1.1)}
            className="font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white"
          >
            Welcome
          </motion.h1>
        </div>
      </motion.div>
    </section>
  );
};

export default HomeScreen;
