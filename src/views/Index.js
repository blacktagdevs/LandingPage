import React from "react";

// core components
import IndexHeader from "../components/IndexHeader.js";
import Footer from "../components/Footer.js";

import Teams from "views/SectionsSections/Teams.js";
import ContactUs from "./SectionsSections/ContactUs.js";
import Features from "./SectionsSections/Features.js";

export default function Index() {
  const wrapper = React.useRef(null);
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    wrapper.current.scrollTop = 0;
    document.body.classList.add("index-page");
    return function cleanup() {
      document.body.classList.remove("index-page");
    };
  }, []);
  return (
    <>
      <div className="wrapper" ref={wrapper}>
        <IndexHeader />
        <div className="main">
          <Teams />
          <Features />
          <ContactUs />
        </div>
        <Footer />
      </div>
    </>
  );
}
