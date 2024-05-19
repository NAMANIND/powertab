import Footer from "@/components/footer/Footer";
import Home from "@/components/home/Home";
import Mobile from "@/components/mobile/Mobile";
import React from "react";

function page() {
  return (
    <div>
      <div className="hidden sm:block">
        <Home />
      </div>
      <div className="sm:hidden block">
        <Mobile />
      </div>

      <Footer />
    </div>
  );
}

export default page;
