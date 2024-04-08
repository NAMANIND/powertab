import React from "react";

function Footer() {
  return (
    <div className=" relative bg-[#030F2B] ">
      <div className=" text-black text-center items-center flex flex-col justify-center p-4 h-[100vh] pb-28 w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/967cc3bee4a8f75cecb8db93f708c651683743fc26daea8c3b37e9ed723dd82d?apiKey=5e27b1defd60460eaa6dca842133145f&"
          className="mt-20 max-w-full  w-[10vw] max-md:mt-10  "
        />

        <h1 className="text-white text-9xl leading-[120%] font-bold">
          Power Tab
        </h1>
        <div className=" text-2xl tracking-tighter font-normal  text-white max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          Save, Share & Manage
        </div>
        <a
          href="https://chromewebstore.google.com/detail/power-tab-save-share-mana/mmonhlejcmgecfbihofklieljhphkkan"
          target="_blank"
          className="text-white text-2xl mt-10"
        >
          {" "}
          <div className="flex gap-5 justify-between mt-5 text-2xl tracking-tighter text-center whitespace-nowrap max-md:mt-10">
            <div
              className="   justify-center px-12 py-2 font-normal text-white rounded-3xl border-2  max-md:pr-5 max-md:pl-6"
              style={{
                border: "2px solid transparent",

                background:
                  " linear-gradient(#030F2B, #030F2B) padding-box, linear-gradient(to left, #175bea  50%,  #00c5fb 100%);",
                backgroundSize: "200% auto",
                backgroundPositionX: "10%",
              }}
            >
              <span> Download Now</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Footer;
