import React from "react";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Link } from "react-router-dom";

// Import page specific stuff
import logo from "../../../images/logo-full.png";

export default function MainContent() {
  const easing = [0.6, -0.05, 0.01, 0.99];
  const fade1 = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: easing,
      },
    },
  };

  const fade2 = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 2,
        ease: easing,
      },
    },
  };

  const fade3 = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 3,
        ease: easing,
      },
    },
  };

  const fade4 = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 4,
        ease: easing,
      },
    },
  };

  return (
    <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
      <motion.div variants={fade1}>
        <div
          className="d-flex align-items-center index-section-1"
          style={{ padding: "300px 0px" }}
        >
          <div className="container d-flex justify-content-center justify-content-around-lg">
            <div className="col-7">
              <h1 className="text-white text-uppercase font-weight-bold">
                Taste the victory
              </h1>
              <h4 className="text-white display-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorem, ipsum reprehenderit?
              </h4>
              <div className="mt-5 d-flex jutify-content-center justify-content-start">
                <button type="button" className="btn btn-secondary btn-lg mr-lg-3">
                  Primary
                </button>
                <button type="button" className="btn btn-outline-primary btn-lg">
                  Primary
                </button>
              </div>
            </div>
            <div className="col-5"></div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
