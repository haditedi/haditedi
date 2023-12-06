"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main>
      <section className="relative">
        <Image
          src="/web-background.jpg"
          width={1000}
          height={100}
          alt="web looking picture"
          style={{
            width: "100%",
            height: "300px",
            objectFit: "cover",
            opacity: "50%",
          }}
        />
        <motion.div
          initial={{ opacity: 0, x: "-10%" }}
          animate={{ opacity: 1, x: "0" }}
          transition={{ duration: 1 }}
          className="absolute w-full mt-10 pt-10 top-10 left-3 text-white text-center text-5xl md:text-7xl font-black"
        >
          HADI TEDI
        </motion.div>
      </section>

      <section>
        <motion.h1
          initial={{ opacity: 0, x: "10%" }}
          animate={{ opacity: 1, x: "0" }}
          transition={{ duration: 1 }}
          className="m-10 p-5 text-center text-white text-center text-5xl md:text-7xl font-black"
        >
          PORTFOLIO
        </motion.h1>
        <div className="flex flex-wrap bg-slate-700 justify-center">
          <motion.div
            initial={{ opacity: 0, y: "10%" }}
            whileInView={{ opacity: 1, y: "0" }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center items-center m-3"
          >
            <h1 className="text-center text-white text-center text-3xl md:text-5xl m-2 p-2">
              Project Pony Bot
            </h1>
            <p className="w-[350px] m-2 text-lg md:text-xl text-center">
              Upload a pdf file or a website address. The AI will then use this
              information to answer questions.
            </p>

            <motion.div whileHover={{ scale: 1.1 }}>
              <Link href="https://talktopdf.vercel.app" target="_blank">
                <Image
                  className="block w-full rounded m-3"
                  src="/talktopdf.jpg"
                  height={300}
                  width={300}
                  alt="picture of project talk to pdf"
                  style={{
                    width: "250px",
                    height: "175px",
                    objectFit: "cover",
                  }}
                />
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: "10%" }}
            whileInView={{ opacity: 1, y: "0" }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center items-center m-3"
          >
            <h1 className="text-center text-white text-center text-3xl md:text-5xl m-2 p-2">
              Project Sarcastic Bot
            </h1>
            <p className="w-[350px] m-2 text-lg md:text-xl text-center">
              The bot reluctantly answer questions in a sarcastic way.
            </p>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link href="https://tedi-ai.vercel.app" target="_blank">
                <Image
                  className="block rounded m-3"
                  src="/chat.jpg"
                  height={300}
                  width={300}
                  alt="picture of project talk to pdf"
                />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <motion.section
        initial={{ opacity: 0, y: "20%" }}
        whileInView={{ opacity: 1, y: "0" }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h1 className="m-10 p-5 mb-2 text-center text-white text-center text-5xl md:text-7xl font-black">
          Contact Me
        </h1>
        <p className="block m-2 pb-8 text-center text-white text-lg md:text-xl">
          Whatsapp / call at +44 (0) 7825 372243
        </p>
      </motion.section>
    </main>
  );
}
