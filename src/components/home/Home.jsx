"use client";
import { useRef, useState, useEffect } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

function Home() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const opacity2 = useTransform(
    scrollYProgress,
    [0.12, 0.18, 0.42, 0.45],
    [0, 1, 1, 0]
  );

  const displaygo = useTransform(
    scrollYProgress,
    [0.12, 0.18, 0.45, 0.46],
    ["none", "block", "block", "none"]
  );
  const opacity3 = useTransform(
    scrollYProgress,
    [0.12, 0.18, 0.42, 0.45, 0.65, 0.68],
    [0, 0, 0, 1, 1, 0]
  );

  const opacity4 = useTransform(scrollYProgress, [0, 0.65, 0.68], [0, 0, 1]);

  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.35, 1],
    [1.2, 1.2, 1.5, 1.5]
  );

  const display = useTransform(
    scrollYProgress,
    [0, 0.3, 0.35, 1],
    ["block", "block", "none", "none"]
  );
  const x = useTransform(
    scrollYProgress,
    [0.1, 0.3, 0.35, 0.6, 1],
    ["0vw", "0vw", "20vw", "20vw", "20vw"]
  );
  const ximg = useTransform(
    scrollYProgress,
    [0, 0.29, 0.3, 0.45, 1],
    ["30vw", "35vw", "40vw", "40vw", "40vw"]
  );

  const opacityimg = useTransform(scrollYProgress, [0, 0.28, 0.3], [0, 0, 1]);

  const y = useTransform(scrollYProgress, [0, 0.2], ["0%", "-200%"]);

  const yimg = useTransform(scrollYProgress, [0, 0.2], ["0%", "-100%"]);
  const textposition = useTransform(
    scrollYProgress,
    [0, 0.28, 0.31, 1],
    ["center", "center", "flex-start", "flex-start"]
  );

  const position = useTransform(scrollYProgress, (pos) =>
    pos >= 1 ? "relative" : "fixed"
  );

  const heading = useTransform(
    scrollYProgress,
    [0, 0.2],
    [
      "https://cdn.builder.io/api/v1/image/assets/TEMP/967cc3bee4a8f75cecb8db93f708c651683743fc26daea8c3b37e9ed723dd82d?apiKey=5e27b1defd60460eaa6dca842133145f&",
      "https://cdn.builder.io/api/v1/image/assets/TEMP/016aece747732557fa903726e03e1ecbae02c56834ed6674c32fd190eb2e35c2?apiKey=5e27b1defd60460eaa6dca842133145f&",
    ]
  );

  const isVisible = useTransform(scrollYProgress, [0.15, 0.31], [0, 4]);

  const [isVisibleState, setIsVisibleState] = useState(0);

  useEffect(() => {
    const onChangeHandler = (value) => {
      setIsVisibleState(value);
    };

    const unsubscribe = isVisible.onChange(onChangeHandler);

    return () => {
      unsubscribe();
    };
  }, [isVisible]);

  const isVisible2 = useTransform(scrollYProgress, [0.45, 0.65], [0, 3]);

  const [isVisibleState2, setIsVisibleState2] = useState(0);

  useEffect(() => {
    const onChangeHandler = (value) => {
      setIsVisibleState2(value);
    };

    const unsubscribe = isVisible2.onChange(onChangeHandler);

    return () => {
      unsubscribe();
    };
  }, [isVisible2]);

  const isVisible3 = useTransform(scrollYProgress, [0.68, 0.85], [0, 3]);

  const [isVisibleState3, setIsVisibleState3] = useState(0);

  useEffect(() => {
    const onChangeHandler = (value) => {
      setIsVisibleState3(value);
    };

    const unsubscribe = isVisible3.onChange(onChangeHandler);

    return () => {
      unsubscribe();
    };
  }, [isVisible3]);

  const display1 = useTransform(
    scrollYProgress,
    [0, 0.27, 0.3],
    ["none", "none", "block"]
  );

  return (
    <div
      className="flex flex-col items-center h-[800vh]  pb-20 font-bold max-md:px-5"
      style={{
        background:
          "linear-gradient(285.44deg, rgba(1, 194, 251, 0.64) -45.69%, rgba(255, 255, 255, 0.64) 39.38%, rgba(255, 255, 255, 0.64) 62.12%, rgba(23, 91, 234, 0.64) 165.16%);",
      }}
      ref={targetRef}
    >
      <div className="  border-blue-500 border-opacity-35   border-b py-2 px-4  flex gap-5 justify-between self-stretch text-lg tracking-tighter text-center text-white whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
        <div className="box-border mx-auto w-[1100px] max-2xl:w-[1200px] max-xl:w-[920px] max-lg:w-[680px] max-md:w-[440px] max-sm:w-[370px]">
          <div className="flex flex-row gap-4 justify-between relative z-50 align-middle">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/967cc3bee4a8f75cecb8db93f708c651683743fc26daea8c3b37e9ed723dd82d?apiKey=5e27b1defd60460eaa6dca842133145f&"
              className="shrink-0 self-start aspect-[1.19] w-[43px]"
            />
            <a
              href="https://chromewebstore.google.com/detail/power-tab-save-share-mana/mmonhlejcmgecfbihofklieljhphkkan"
              target="_blank"
            >
              <div
                className="   justify-center px-6 py-1 font-normal text-white rounded-3xl max-md:px-5"
                style={{
                  background:
                    "linear-gradient(45deg, #00c5fb 1.76%, #175bea 72.92%)",
                }}
              >
                Download
              </div>
            </a>
          </div>
        </div>
      </div>
      <motion.div
        style={{ position }}
        className="box-border mx-auto  w-[1100px] max-2xl:w-[1200px] max-xl:w-[920px] max-lg:w-[680px] max-md:w-[440px] max-sm:w-[370px]"
      >
        <div className="flex flex-col  gap-5 justify-center items-center">
          <motion.div
            style={{ opacity }}
            className="flex flex-col  gap-5 justify-center items-center"
          >
            <div className="mt-36 text text-8xl px-5 uppercase tracking-tighter bg-clip-text max-md:mt-10 max-md:text-4xl">
              Power Tab
            </div>
            <div className=" text-2xl tracking-tighter font-normal  text-slate-900 max-md:mt-10 max-md:max-w-full sm:text-4xl">
              Save, Share & Manage
            </div>
            <div className="flex relative z-50 gap-5 justify-between mt-5 text-2xl tracking-tighter text-center whitespace-nowrap max-md:mt-10">
              <a
                href="https://chromewebstore.google.com/detail/power-tab-save-share-mana/mmonhlejcmgecfbihofklieljhphkkan"
                target="_blank"
              >
                <div
                  className="   justify-center px-12 py-2 font-normal text-white rounded-3xl max-md:px-5"
                  style={{
                    background:
                      "linear-gradient(45deg, #00c5fb 1.76%, #175bea 72.92%)",
                  }}
                >
                  Download
                </div>
              </a>
              <a
                onClick={() => {
                  //    scroll 500px down
                  window.scrollTo({
                    top: 1000,
                    behavior: "smooth",
                  });
                }}
              >
                <div
                  className="   justify-center px-12 py-2 font-normal text-black rounded-3xl border-2  max-md:pr-5 max-md:pl-6"
                  style={{
                    border: "2px solid transparent",

                    background:
                      " linear-gradient(#fff, #fff) padding-box, linear-gradient(to left, #175bea  50%,  #00c5fb 100%);",
                    backgroundSize: "200% auto",
                    backgroundPositionX: "10%",
                  }}
                >
                  <span> Explore</span>
                </div>
              </a>
            </div>
          </motion.div>
          <motion.div
            className="flex  h-screen top-0  items-center mx-auto  w-[1100px] max-2xl:w-[1200px] max-xl:w-[920px] max-lg:w-[680px] max-md:w-[440px] max-sm:w-[370px] fixed "
            style={{ justifyContent: textposition }}
            transition={{ duration: 0.1, delay: 0.1 }}
          >
            <motion.div
              className="w-1/2 absolute"
              style={{ opacity: opacity2 }}
            >
              <motion.h1 className="text-6xl text-left font-bold text-[#030F2B] max-md:text-2xl">
                {words.map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{
                      opacity: isVisibleState > index ? 1 : 0,
                      x: isVisibleState > index ? 0 : 20,
                    }}
                    transition={{ duration: 0.1, delay: 0.1 }}
                    style={{ display: "inline-block", marginRight: "8px" }}
                  >
                    {word}{" "}
                  </motion.span>
                ))}
              </motion.h1>

              <motion.img
                style={{
                  display: display1,
                  x: ximg,
                  y: "-130%",
                  opacity: opacityimg,
                }}
                loading="lazy"
                src="/pt1.png"
                className="mt-20 max-w-full object-cover object-top w-[595px] max-md:mt-10 absolute top-[100%] transform "
              />
            </motion.div>

            <motion.div
              className="w-1/2 absolute"
              style={{ opacity: opacity3 }}
            >
              <motion.h1 className="text-6xl text-left font-bold   text-[#030F2B] max-md:text-2xl">
                {words2.map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{
                      opacity: isVisibleState2 > index ? 1 : 0,
                      x: isVisibleState2 > index ? 0 : 20,
                    }}
                    transition={{ duration: 0.1, delay: 0.1 }}
                    style={{ display: "inline-block", marginRight: "8px" }}
                  >
                    {word}{" "}
                  </motion.span>
                ))}
              </motion.h1>

              <motion.img
                style={{
                  display: display1,
                  x: ximg,
                  y: yimg,
                  opacity: opacityimg,
                }}
                loading="lazy"
                src="/pt2.png"
                className="mt-20 max-w-full object-cover object-top w-[595px] max-md:mt-10 absolute top-[100%] transform "
              />
            </motion.div>

            <motion.div
              className="w-1/2 absolute"
              style={{ opacity: opacity4 }}
            >
              <motion.h1 className="text-6xl text-left font-bold   text-[#030F2B] max-md:text-2xl">
                {words3.map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{
                      opacity: isVisibleState3 > index ? 1 : 0,
                      x: isVisibleState3 > index ? 0 : 20,
                    }}
                    transition={{ duration: 0.1, delay: 0.1 }}
                    style={{ display: "inline-block", marginRight: "8px" }}
                  >
                    {word}{" "}
                  </motion.span>
                ))}
              </motion.h1>

              <motion.img
                style={{
                  display: display1,
                  x: ximg,
                  y: "-85%",
                  opacity: opacityimg,
                }}
                loading="lazy"
                src="/pt3.png"
                className="mt-20 max-w-full object-contain object-top w-[595px] max-md:mt-10 absolute top-[100%] transform "
              />
            </motion.div>
          </motion.div>
          <motion.img
            style={{ scale, x, y, display }}
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/967cc3bee4a8f75cecb8db93f708c651683743fc26daea8c3b37e9ed723dd82d?apiKey=5e27b1defd60460eaa6dca842133145f&"
            className="mt-20 max-w-full aspect-[1.14] w-[595px] max-md:mt-10 absolute top-[100%] transform "
          />
        </div>
      </motion.div>
    </div>
  );
}

const words = [
  <span key="1">Fear</span>,
  <span key="2">forgetting</span>,
  <span key="3" className="">
    <span className="text font-semibold  leading-[140%] ">Ctrl+Shift+T?</span>
    😅
  </span>,

  <motion.p
    key="4"
    className="text-4xl text-left leading-[140%] font-semibold text-[#030F2B] "
  >
    <span className="text font-semibold ">Power Tab </span>has your back,
    <br /> save and restore your
    <br /> last tabs with
    <br /> easeeeeee!
  </motion.p>,
];

const words2 = [
  <span key="1" className="text font-semibold">
    Streamlined
  </span>,
  <span key="2" className="text font-semibold  leading-[140%] ">
    Management
  </span>,

  <motion.p
    key="3"
    className="text-4xl text-left font-semibold leading-[140%] text-[#030F2B] "
  >
    Arrange tabs into folders
    <br />
    for your projects or any
    <br />
    topic. Simplify and stay
    <br />
    focusedddd!
  </motion.p>,
];

const words3 = [
  <span key="1" className="text font-semibold   ">
    Effortless
  </span>,
  <span key="2" className="text font-semibold  leading-[140%] ">
    Collaboration
  </span>,

  <motion.p
    key="3"
    className="text-4xl text-left font-semibold leading-[140%] text-[#030F2B] "
  >
    Share your tabs folder
    <br />
    effortlessly with Power
    <br />
    Tab: Copy, Execute, and
    <br />
    Collaborateeee!
  </motion.p>,
];

export default Home;
