import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function MainContent() {
  function subscribe(plan) {
    console.log("called subscribe");
    window.location.replace(
      localStorage.accounts + "register?subscribe=" + plan
    );
  }

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
        <div className="page-heading">
          <div className="container">
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <h1 className="page-heading__title">
                  <span className="highlight">Subscribe</span>
                </h1>
                <ol className="page-heading__breadcrumb breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="_soccer_index.html">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Subscribe
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="site-content">
          <div className="container">
            <div className="callout callout-primary p-4">
              <h4>Become a part of KuTumba FC</h4>
              Subscribe to one of our monthly plans to support us and receive
              exclusive merch every month delivered to your doorstep.
            </div>
          </div>
          <div className="container">
            <div className="row">
              {/* Purple Table */}
              <div className="col-md-6 col-xl-4 my-2">
                <div className="pricing-table purple h-100 d-flex justify-content-between flex-column">
                  <div>
                    {/* Table Head 
                    <div className="badge badge-primary pricing-label">
                      Lite
                    </div> */}
                    <h2 className="text-white font-weight-bold">Lite Plan</h2>
                    {/* <h5 className="text-white font-weight-bold">Lite Plan</h5> */}
                    {/* Features */}
                    <div className="pricing-features">
                      <div className="feature">
                        Workout T-shirt<span>x1</span>
                      </div>
                      <div className="feature">
                        KuTumba FC Badge<span>x1</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    {/* Price */}
                    <div className="price-tag text-danger">
                      <span className="symbol">&#8377;</span>
                      <span className="amount">149</span>
                      <span className="after">/month</span>
                    </div>
                    {/* Button */}
                    <button
                      className="btn btn-block btn-danger mt-4"
                      onClick={() => subscribe(149)}
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
              {/* Turquoise Table */}
              <div className="col-md-6 col-xl-4 my-2">
                <div className="pricing-table turquoise h-100 d-flex justify-content-between flex-column">
                  <div>
                    {/* Table Head */}
                    {/* <div className="pricing-label">Fixed Price</div> */}
                    <h2 className="text-white font-weight-bold">Basic Plan</h2>
                    {/* <h5>Made for experienced users</h5> */}
                    {/* Features */}
                    <div className="pricing-features">
                      <div className="feature">
                        Polo Shirt<span>x1</span>
                      </div>
                      <div className="feature">
                        Scarf<span>x1</span>
                      </div>
                      <div className="feature">
                        Mug<span>x1</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    {/* Price */}
                    <div className="price-tag text-warning">
                      <span className="symbol">&#8377;</span>
                      <span className="amount">199</span>
                      <span className="after">/month</span>
                    </div>
                    {/* Button */}
                    <button
                      className="btn btn-block btn-warning mt-4"
                      onClick={() => subscribe(199)}
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
              {/* Red Table */}
              <div className="col-md-6 col-xl-4 my-2">
                <div className="pricing-table red h-100 d-flex justify-content-between flex-column">
                  <div>
                    {/* Table Head */}
                    {/* <div className="pricing-label">Fixed Price</div> */}
                    <h2 className="text-white font-weight-bold">
                      Standard Plan
                    </h2>
                    {/* <h5>Made for professionals/agencies</h5> */}
                    {/* Features */}
                    <div className="pricing-features">
                      <div className="feature">
                        Hoodie<span>x1</span>
                      </div>
                      <div className="feature">
                        Tracksuit<span>x1</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    {/* Price */}
                    <div className="price-tag text-success">
                      <span className="symbol">&#8377;</span>
                      <span className="amount">249</span>
                      <span className="after">/month</span>
                    </div>
                    {/* Button */}
                    <button
                      className="btn btn-block btn-success mt-4"
                      onClick={() => subscribe(249)}
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
              {/* Purple Table */}
              <div className="col-md-6 col-xl-4 my-2">
                <div className="pricing-table purple h-100 d-flex justify-content-between flex-column">
                  <div>
                    {/* Table Head */}
                    {/* <div className="pricing-label">Fixed Price</div> */}
                    <h2 className="text-white font-weight-bold">
                      Premium Plan
                    </h2>
                    {/* <h5>Made for starters</h5> */}
                    {/* Features */}
                    <div className="pricing-features">
                      <div className="feature">
                        Polo Shirt<span>x1</span>
                      </div>
                      <div className="feature">
                        Wallet<span>x1</span>
                      </div>
                      <div className="feature">
                        Tracksuit<span>x1</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    {/* Price */}
                    <div className="price-tag text-info">
                      <span className="symbol">&#8377;</span>
                      <span className="amount">299</span>
                      <span className="after">/month</span>
                    </div>
                    {/* Button */}
                    <button
                      className="btn btn-block btn-info mt-4"
                      onClick={() => subscribe(299)}
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
              {/* Turquoise Table */}
              <div className="col-md-6 col-xl-4 my-2">
                <div className="pricing-table turquoise h-100 d-flex justify-content-between flex-column">
                  <div>
                    {/* Table Head */}
                    {/* <div className="pricing-label">Fixed Price</div> */}
                    <h2 className="text-white font-weight-bold">
                      Elite Plan
                    </h2>
                    {/* <h5>Made for experienced users</h5> */}
                    {/* Features */}
                    <div className="pricing-features">
                    <div className="feature">
                        Polo Shirt<span>x1</span>
                      </div>
                      <div className="feature">
                        Wallet<span>x1</span>
                      </div>
                      <div className="feature">
                        Tracksuit<span>x1</span>
                      </div>
                      <div className="feature">
                        Sipper<span>x1</span>
                      </div>
                      <div className="feature">
                        Wallet<span>x1</span>
                      </div>
                      <div className="feature">
                        Keychain<span>x2</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    {/* Price */}
                    <div className="price-tag text-primary">
                      <span className="symbol">&#8377;</span>
                      <span className="amount">399</span>
                      <span className="after">/month</span>
                    </div>
                    {/* Button */}
                    <button
                      className="btn btn-block btn-primary-inverse mt-4"
                      onClick={() => subscribe(399)}
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
