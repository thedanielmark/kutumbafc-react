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
              <p className="mb-0 mb-lg-3">
                Subscribe to one of our monthly plans to support us and receive
                exclusive merch every month delivered to your doorstep.
              </p>
            </div>
          </div>
          <div className="container">
            <section className="py-5 mb-5">
              {/* Nav tabs */}
              <ul
                className="nav nav-pills pricing-nav-pills mb-5 d-flex justify-content-center"
                id="pricingTabTwo"
                role="tablist"
              >
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="pricing-two-mnthly-tab"
                    data-toggle="tab"
                    href="#pricing-two-mnthly"
                    role="tab"
                    aria-controls="pricing-two-mnthly"
                    aria-selected="true"
                  >
                    Monthly Plan
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="pricing-two-yearly-tab"
                    data-toggle="tab"
                    href="#pricing-two-yearly"
                    role="tab"
                    aria-controls="pricing-two-yearly"
                    aria-selected="false"
                  >
                    Annual Plan
                  </a>
                </li>
              </ul>
              {/* Tab panes */}
              <div className="tab-content">
                <div
                  className="tab-pane active"
                  id="pricing-two-mnthly"
                  role="tabpanel"
                  aria-labelledby="pricing-two-mnthly-tab"
                >
                  <div className="row d-flex justify-content-center">
                    <div className="col-md-6 col-lg-4 mb-4">
                      <div className="card border-0 card-shadow h-100">
                        <div className="card-body p-4 p-xl-5">
                          <h4 className="mb-3">Regular</h4>
                          <div className="d-flex align-items-center">
                            <h3 className="mb-0 mr-auto font-weight-bold">
                              &#8377;69.99
                            </h3>
                            <del className="text-muted font-weight-normal">
                              &#8377;99.99
                            </del>
                          </div>
                          <h6 className="mb-4">Monthly</h6>
                          <button className="btn btn-warning btn-block mb-4">
                            Sign up for a Free Trial
                          </button>
                          <ul className="list-unstyled font-weight-semi-bold">
                            <li>
                              <i className="fas fa-check text-warning mr-3"></i>
                              Workout T-shirt
                            </li>
                            <li>
                              <i className="fas fa-check text-warning mr-3"></i>
                              KuTumba FC Badge
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-4">
                      <div className="card border-0 card-shadow h-100">
                        <div className="card-body p-4 p-xl-5">
                          <h4 className="mb-3">Popular</h4>
                          <div className="d-flex align-items-center">
                            <h3 className="mb-0 mr-auto font-weight-bold">
                              &#8377;125
                            </h3>
                            <del className="text-muted font-weight-normal">
                              &#8377;150.99
                            </del>
                          </div>
                          <h6 className="mb-4">Monthly</h6>
                          <button className="btn btn-warning btn-block mb-4">
                            Sign up for a Free Trial
                          </button>
                          <ul className="list-unstyled font-weight-semi-bold">
                            <li>
                              <i className="fas fa-check text-warning mr-3"></i>
                              Polo Shirt
                            </li>
                            <li>
                              <i className="fas fa-check text-warning mr-3"></i>
                              Scarf
                            </li>
                            <li>
                              <i className="fas fa-check text-warning mr-3"></i>
                              Mug
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-4">
                      <div className="card border-0 card-shadow h-100">
                        <div className="card-body p-4 p-xl-5">
                          <h4 className="mb-3">Enterprise</h4>
                          <div className="d-flex align-items-center">
                            <h3 className="mb-0 mr-auto font-weight-bold">
                              &#8377;125.99
                            </h3>
                            <del className="text-muted font-weight-normal">
                              &#8377;150.99
                            </del>
                          </div>
                          <h6 className="mb-4">Monthly</h6>
                          <button className="btn btn-warning btn-block mb-4">
                            Sign up for a Free Trial
                          </button>
                          <ul className="list-unstyled font-weight-semi-bold">
                            <li>
                              <i className="fas fa-check text-warning mr-3"></i>
                              Hoodie
                            </li>
                            <li>
                              <i className="fas fa-check text-warning mr-3"></i>
                              Tracksuit
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-4">
                      <div className="card border-0 card-shadow h-100">
                        <div className="card-body p-4 p-xl-5">
                          <h4 className="mb-3">Popular</h4>
                          <div className="d-flex align-items-center">
                            <h3 className="mb-0 mr-auto font-weight-bold">
                              &#8377;44.99
                            </h3>
                            <del className="text-muted font-weight-normal">
                              &#8377;99.99
                            </del>
                          </div>
                          <h6 className="mb-4">Monthly</h6>
                          <button className="btn btn-warning btn-block mb-4">
                            Sign up for a Free Trial
                          </button>
                          <ul className="list-unstyled font-weight-semi-bold">
                            <li>
                              <i className="fas fa-check text-warning mr-3"></i>
                              Polo Shirt
                            </li>
                            <li>
                              <i className="fas fa-check text-warning mr-3"></i>
                              Wallet
                            </li>
                            <li>
                              <i className="fas fa-check text-warning mr-3"></i>
                              Tracksuit
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-4">
                      <div className="card border-0 card-shadow h-100">
                        <div className="card-body p-4 p-xl-5">
                          <h4 className="mb-3">Enterprise</h4>
                          <div className="d-flex align-items-center">
                            <h3 className="mb-0 mr-auto font-weight-bold">
                              &#8377;125.99
                            </h3>
                            <del className="text-muted font-weight-normal">
                              &#8377;150.99
                            </del>
                          </div>
                          <h6 className="mb-4">Monthly</h6>
                          <button className="btn btn-warning btn-block mb-4">
                            Sign up for a Free Trial
                          </button>
                          <ul className="list-unstyled font-weight-semi-bold">
                            <li>
                              <i className="fas fa-check text-warning mr-3"></i>
                              Polo Shirt
                            </li>
                            <li>
                              <i className="fas fa-check text-warning mr-3"></i>
                              Wallet
                            </li>
                            <li>
                              <i className="fas fa-check text-warning mr-3"></i>
                              Tracksuit
                            </li>
                            <li>
                              <i className="fas fa-check text-warning mr-3"></i>
                              Sipper
                            </li>
                            <li>
                              <i className="fas fa-check text-warning mr-3"></i>
                              Keychain
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane"
                  id="pricing-two-yearly"
                  role="tabpanel"
                  aria-labelledby="pricing-two-yearly-tab"
                >
                  <div className="row d-flex justify-content-center">
                    <div className="col-lg-4 mb-4">
                      <div className="card border-0 card-shadow h-100">
                        <div className="card-body p-4 p-xl-5">
                          <h4 className="mb-3">Regular</h4>
                          <div className="d-flex align-items-center">
                            <h3 className="mb-0 mr-auto font-weight-bold">
                              &#8377;250.99
                            </h3>
                            <del className="text-muted font-weight-normal">
                              &#8377;500.99
                            </del>
                          </div>
                          <h6 className="mb-4">Yearly</h6>
                          <button className="btn btn-warning btn-block mb-4">
                            Sign up for a Free Trial
                          </button>
                          <ul className="list-unstyled font-weight-semi-bold">
                            <li>
                              <i className="fas fa-check text-warning mr-3"></i>
                              Workout T-shirt
                            </li>
                            <li>
                              <i className="fas fa-check text-warning mr-3"></i>
                              KuTumba FC Badge
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                      <div className="card border-0 card-shadow h-100">
                        <div className="card-body p-4 p-xl-5">
                          <h4 className="mb-3">Popular</h4>
                          <div className="d-flex align-items-center">
                            <h3 className="mb-0 mr-auto font-weight-bold">
                              &#8377;440.99
                            </h3>
                            <del className="text-muted font-weight-normal">
                              &#8377;990.99
                            </del>
                          </div>
                          <h6 className="mb-4">Yearly</h6>
                          <button className="btn btn-warning btn-block mb-4">
                            Sign up for a Free Trial
                          </button>
                          <ul className="list-unstyled font-weight-semi-bold">
                            <li>
                              <i className="fas fa-check text-warning mr-3"></i>
                              Polo Shirt
                            </li>
                            <li>
                              <i className="fas fa-check text-warning mr-3"></i>
                              Scarf
                            </li>
                            <li>
                              <i className="fas fa-check text-warning mr-3"></i>
                              Mug
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                      <div className="card border-0 card-shadow h-100">
                        <div className="card-body p-4 p-xl-5">
                          <h4 className="mb-3">Enterprise</h4>
                          <div className="d-flex align-items-center">
                            <h3 className="mb-0 mr-auto font-weight-bold">
                              &#8377;1250.99
                            </h3>
                            <del className="text-muted font-weight-normal">
                              &#8377;1500.99
                            </del>
                          </div>
                          <h6 className="mb-4">Yearly</h6>
                          <button className="btn btn-warning btn-block mb-4">
                            Sign up for a Free Trial
                          </button>
                          <ul className="list-unstyled font-weight-semi-bold">
                            <li>
                              <i className="fas fa-check text-warning mr-3"></i>
                              Hoodie
                            </li>
                            <li>
                              <i className="fas fa-check text-warning mr-3"></i>
                              Tracksuit
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                      <div className="card border-0 card-shadow h-100">
                        <div className="card-body p-4 p-xl-5">
                          <h4 className="mb-3">Popular</h4>
                          <div className="d-flex align-items-center">
                            <h3 className="mb-0 mr-auto font-weight-bold">
                              &#8377;440.99
                            </h3>
                            <del className="text-muted font-weight-normal">
                              &#8377;990.99
                            </del>
                          </div>
                          <h6 className="mb-4">Yearly</h6>
                          <button className="btn btn-warning btn-block mb-4">
                            Sign up for a Free Trial
                          </button>
                          <ul className="list-unstyled font-weight-semi-bold">
                            <li>
                              <i className="fas fa-check text-warning mr-3"></i>
                              Polo Shirt
                            </li>
                            <li>
                              <i className="fas fa-check text-warning mr-3"></i>
                              Wallet
                            </li>
                            <li>
                              <i className="fas fa-check text-warning mr-3"></i>
                              Tracksuit
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                      <div className="card border-0 card-shadow h-100">
                        <div className="card-body p-4 p-xl-5">
                          <h4 className="mb-3">Enterprise</h4>
                          <div className="d-flex align-items-center">
                            <h3 className="mb-0 mr-auto font-weight-bold">
                              &#8377;1250.99
                            </h3>
                            <del className="text-muted font-weight-normal">
                              &#8377;1500.99
                            </del>
                          </div>
                          <h6 className="mb-4">Yearly</h6>
                          <button className="btn btn-warning btn-block mb-4">
                            Sign up for a Free Trial
                          </button>
                          <ul className="list-unstyled font-weight-semi-bold">
                            <li>
                              <i className="fas fa-check text-warning mr-3"></i>
                              Polo Shirt
                            </li>
                            <li>
                              <i className="fas fa-check text-warning mr-3"></i>
                              Wallet
                            </li>
                            <li>
                              <i className="fas fa-check text-warning mr-3"></i>
                              Tracksuit
                            </li>
                            <li>
                              <i className="fas fa-check text-warning mr-3"></i>
                              Sipper
                            </li>
                            <li>
                              <i className="fas fa-check text-warning mr-3"></i>
                              Keychain
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
