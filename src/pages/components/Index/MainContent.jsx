import React from "react";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Link } from "react-router-dom";

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
        {/* Hero Slider */}
        <div className="hero-slider-wrapper">
          <div className="hero-slider">
            {/* Slide #0 */}
            <div className="hero-slider__item hero-slider__item--img1">
              <div className="container hero-slider__item-container">
                <div className="row">
                  <div className="col-md-8 offset-md-2">
                    {/* Post Meta - Top */}
                    <div className="post__meta-block post__meta-block--top">
                      {/* Post Category */}
                      <div className="post__category">
                        <span className="label posts__cat-label">The Team</span>
                      </div>
                      {/* Post Category / End */}
                      {/* Post Title */}
                      <h1 className="page-heading__title">
                        <a href="index.html">
                          Kutumba FC
                          <span className="highlight">won the last game</span>
                          2-0 against Clovers
                        </a>
                      </h1>
                      {/* Post Title / End */}
                      {/* Post Meta Info */}
                      <ul className="post__meta meta">
                        <li className="meta__item meta__item--date">
                          <time dateTime="2017-08-23">August 28th, 2018</time>
                        </li>
                        <li className="meta__item meta__item--views">2369</li>
                        <li className="meta__item meta__item--likes">
                          <a href="#">
                            <i className="meta-like meta-like--active icon-heart" />
                            530
                          </a>
                        </li>
                        <li className="meta__item meta__item--comments">
                          <a href="#">18</a>
                        </li>
                      </ul>
                      {/* Post Meta Info / End */}
                      {/* Post Author */}
                      <div className="post-author">
                        <figure className="post-author__avatar">
                          <img
                            src="soccer-dark/assets/images/samples/avatar-1.jpg"
                            alt="Post Author Avatar"
                          />
                        </figure>
                        <div className="post-author__info">
                          <h4 className="post-author__name">James Spiegel</h4>
                          <span className="post-author__slogan">
                            Kutumba Ninja
                          </span>
                        </div>
                      </div>
                      {/* Post Author / End */}
                    </div>
                    {/* Post Meta - Top / End */}
                  </div>
                </div>
              </div>
            </div>
            {/* Slide #0 / End */}
            {/* Slide #1 */}
            <div className="hero-slider__item hero-slider__item--img2">
              <div className="container hero-slider__item-container">
                <div className="row">
                  <div className="col-md-8 offset-md-2">
                    {/* Post Meta - Top */}
                    <div className="post__meta-block post__meta-block--top">
                      {/* Post Category */}
                      <div className="post__category">
                        <span className="label posts__cat-label">Injuries</span>
                      </div>
                      {/* Post Category / End */}
                      {/* Post Title */}
                      <h1 className="page-heading__title">
                        <a href="index.html">
                          Franklin Stevens has{" "}
                          <span className="highlight">a knee fracture</span> and
                          is gona be out
                        </a>
                      </h1>
                      {/* Post Title / End */}
                      {/* Post Meta Info */}
                      <ul className="post__meta meta">
                        <li className="meta__item meta__item--date">
                          <time dateTime="2017-08-23">August 28th, 2018</time>
                        </li>
                        <li className="meta__item meta__item--views">2369</li>
                        <li className="meta__item meta__item--likes">
                          <a href="#">
                            <i className="meta-like meta-like--active icon-heart" />
                            530
                          </a>
                        </li>
                        <li className="meta__item meta__item--comments">
                          <a href="#">18</a>
                        </li>
                      </ul>
                      {/* Post Meta Info / End */}
                      {/* Post Author */}
                      <div className="post-author">
                        <figure className="post-author__avatar">
                          <img
                            src="soccer-dark/assets/images/samples/avatar-1.jpg"
                            alt="Post Author Avatar"
                          />
                        </figure>
                        <div className="post-author__info">
                          <h4 className="post-author__name">James Spiegel</h4>
                          <span className="post-author__slogan">
                            Kutumba Ninja
                          </span>
                        </div>
                      </div>
                      {/* Post Author / End */}
                    </div>
                    {/* Post Meta - Top / End */}
                  </div>
                </div>
              </div>
            </div>
            {/* Slide #1 / End */}
            {/* Slide #2 */}
            <div className="hero-slider__item hero-slider__item--img3">
              <div className="container hero-slider__item-container">
                <div className="row">
                  <div className="col-md-8 offset-md-2">
                    {/* Post Meta - Top */}
                    <div className="post__meta-block post__meta-block--top">
                      {/* Post Category */}
                      <div className="post__category">
                        <span className="label posts__cat-label">The Team</span>
                      </div>
                      {/* Post Category / End */}
                      {/* Post Title */}
                      <h1 className="page-heading__title">
                        <a href="index.html">
                          The New
                          <span className="highlight">
                            Eco Friendly Stadium
                          </span>
                          won a leafy award in 2016
                        </a>
                      </h1>
                      {/* Post Title / End */}
                      {/* Post Meta Info */}
                      <ul className="post__meta meta">
                        <li className="meta__item meta__item--date">
                          <time dateTime="2017-08-23">August 28th, 2018</time>
                        </li>
                        <li className="meta__item meta__item--views">2369</li>
                        <li className="meta__item meta__item--likes">
                          <a href="#">
                            <i className="meta-like meta-like--active icon-heart" />
                            530
                          </a>
                        </li>
                        <li className="meta__item meta__item--comments">
                          <a href="#">18</a>
                        </li>
                      </ul>
                      {/* Post Meta Info / End */}
                      {/* Post Author */}
                      <div className="post-author">
                        <figure className="post-author__avatar">
                          <img
                            src="soccer-dark/assets/images/samples/avatar-1.jpg"
                            alt="Post Author Avatar"
                          />
                        </figure>
                        <div className="post-author__info">
                          <h4 className="post-author__name">James Spiegel</h4>
                          <span className="post-author__slogan">
                            Kutumba Ninja
                          </span>
                        </div>
                      </div>
                      {/* Post Author / End */}
                    </div>
                    {/* Post Meta - Top / End */}
                  </div>
                </div>
              </div>
            </div>
            {/* Slide #2 / End */}
          </div>
          <div className="hero-slider-thumbs-wrapper">
            <div className="container">
              <div className="hero-slider-thumbs posts posts--simple-list">
                <div className="hero-slider-thumbs__item">
                  <div className="posts__item posts__item--category-1">
                    <div className="posts__inner">
                      <div className="posts__cat">
                        <span className="label posts__cat-label">The Team</span>
                      </div>
                      <h6 className="posts__title">
                        Kutumba FC won the last game 2-0 against Clovers
                      </h6>
                      <time dateTime="2017-12-12" className="posts__date">
                        August 28th, 2018
                      </time>
                    </div>
                  </div>
                </div>
                <div className="hero-slider-thumbs__item">
                  <div className="posts__item posts__item--category-2">
                    <div className="posts__inner">
                      <div className="posts__cat">
                        <span className="label posts__cat-label">Injuries</span>
                      </div>
                      <h6 className="posts__title">
                        Franklin Stevens has a knee fracture and is gona be out
                      </h6>
                      <time dateTime="2017-12-12" className="posts__date">
                        August 28th, 2018
                      </time>
                    </div>
                  </div>
                </div>
                <div className="hero-slider-thumbs__item">
                  <div className="posts__item posts__item--category-1">
                    <div className="posts__inner">
                      <div className="posts__cat">
                        <span className="label posts__cat-label">The Team</span>
                      </div>
                      <h6 className="posts__title">
                        The New Eco Friendly Stadium won a leafy award in 2016
                      </h6>
                      <time dateTime="2017-12-12" className="posts__date">
                        August 28th, 2018
                      </time>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Content
		================================================== */}
        {/* <div className="site-content">
          <div className="container">
            <div className="row d-flex justify-content-center">
              Content
              <div className="content col-lg-10">
                <div>
                  {/* Main News Banner
                  <div className="main-news-banner main-news-banner--soccer-ball">
                    <div className="main-news-banner__inner">
                      <div className="posts posts--simple-list posts--simple-list--xlg">
                        <div className="posts__item posts__item--category-1">
                          <div className="posts__inner">
                            <div className="posts__cat">
                              <span className="label posts__cat-label">
                                The Team
                              </span>
                            </div>
                            <h6 className="posts__title">
                              <a href="#">
                                Today was unveiled the
                                <span className="main-news-banner__highlight">
                                  New Football
                                </span>
                                for the league
                              </a>
                            </h6>
                            <time dateTime="2016-08-23" className="posts__date">
                              August 23rd, 2016
                            </time>
                            <div className="posts__excerpt">
                              Lorem ipsum dolor sit amet, consectetur adipisi
                              nel elit, sed do eiusmod tempor incididunt ut
                              labore et dolore.
                            </div>
                            <div className="posts__more">
                              <a
                                href="#"
                                className="btn btn-inverse btn-sm btn-outline btn-icon-right btn-condensed"
                              >
                                Read More
                                <i className="fas fa-plus text-primary" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Main News Banner / End */}
        {/* Latest Blog Posts
                  <div className="card card--clean">
                    <header className="card__header card__header--has-filter">
                      <h4>Latest Blog Posts</h4>
                    </header>
                  </div>
                  Latest Blog Posts / End */}
        {/* Post Area 1 
                  <div
                    id="blog-posts-container"
                    className="posts posts--cards post-grid row"
                  >
                    {/*
                    <div className="post-grid__item col-sm-6">
                      <div className="posts__item posts__item--card posts__item--category-1 card">
                        <figure className="posts__thumb">
                          <div className="posts__cat">
                            <span className="label posts__cat-label">
                              The Team
                            </span>
                          </div>
                          <a href="#">
                            <img src="soccer-dark/assets/images/soccer/samples/_soccer_post-img3.jpg" />
                          </a>
                        </figure>
                        <div className="posts__inner card__content">
                          <a href="#" className="posts__cta" />{" "}
                          <time dateTime="2016-08-23" className="posts__date">
                            August 28th, 2018
                          </time>
                          <h6 className="posts__title">
                            <a href="#">
                              Brian Kingster saw the red card after a kick
                              against Jason T.
                            </a>
                          </h6>
                          <div className="posts__excerpt">
                            Lorem ipsum dolor sit amet, consectetur adipisi nel
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad mini veniam, quis
                            nostrud en derum sum laborem.
                          </div>
                        </div>
                        <footer className="posts__footer card__footer">
                          <div className="post-author">
                            <figure className="post-author__avatar">
                              <img
                                src="soccer-dark/assets/images/samples/avatar-1.jpg"
                                alt="Post Author Avatar"
                              />
                            </figure>
                            <div className="post-author__info">
                              <h4 className="post-author__name">
                                James Spiegel
                              </h4>
                            </div>
                          </div>
                          <ul className="post__meta meta">
                            <li className="meta__item meta__item--views">
                              2369
                            </li>
                            <li className="meta__item meta__item--likes">
                              <a href="#">
                                <i className="meta-like icon-heart" /> 530
                              </a>
                            </li>
                            <li className="meta__item meta__item--comments">
                              <a href="#">18</a>
                            </li>
                          </ul>
                        </footer>
                      </div>
                    </div>
                    <div className="post-grid__item col-sm-6">
                      <div className="posts__item posts__item--card posts__item--category-1 card">
                        <figure className="posts__thumb">
                          <div className="posts__cat">
                            <span className="label posts__cat-label">
                              The Team
                            </span>
                          </div>
                          <a href="#">
                            <img src="soccer-dark/assets/images/soccer/samples/_soccer_post-img1.jpg" />
                          </a>
                        </figure>
                        <div className="posts__inner card__content">
                          <a href="#" className="posts__cta" />
                          <time dateTime="2016-08-23" className="posts__date">
                            August 28th, 2018
                          </time>
                          <h6 className="posts__title">
                            <a href="#">
                              The new eco friendly stadium won a Leafy Award in
                              2016
                            </a>
                          </h6>
                          <div className="posts__excerpt">
                            Lorem ipsum dolor sit amet, consectetur adipisi nel
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad mini veniam, quis
                            nostrud en derum sum laborem.
                          </div>
                        </div>
                        <footer className="posts__footer card__footer">
                          <div className="post-author">
                            <figure className="post-author__avatar">
                              <img
                                src="soccer-dark/assets/images/samples/avatar-2.jpg"
                                alt="Post Author Avatar"
                              />
                            </figure>
                            <div className="post-author__info">
                              <h4 className="post-author__name">
                                Jessica Hoops
                              </h4>
                            </div>
                          </div>
                          <ul className="post__meta meta">
                            <li className="meta__item meta__item--views">
                              2369
                            </li>
                            <li className="meta__item meta__item--likes">
                              <a href="#">
                                <i className="meta-like icon-heart" /> 530
                              </a>
                            </li>
                            <li className="meta__item meta__item--comments">
                              <a href="#">18</a>
                            </li>
                          </ul>
                        </footer>
                      </div>
                    </div>
                    <div className="post-grid__item col-sm-6">
                      <div className="posts__item posts__item--card posts__item--category-1 card">
                        <figure className="posts__thumb">
                          <div className="posts__cat">
                            <span className="label posts__cat-label">
                              The Team
                            </span>
                          </div>
                          <a href="#">
                            <img src="soccer-dark/assets/images/samples/post-img3.jpg" />
                          </a>
                        </figure>
                        <div className="posts__inner card__content">
                          <a href="#" className="posts__cta" />
                          <time dateTime="2016-08-23" className="posts__date">
                            August 28th, 2018
                          </time>
                          <h6 className="posts__title">
                            <a href="#">
                              The team is taking a summer vacation on Woody
                              Valley
                            </a>
                          </h6>
                          <div className="posts__excerpt">
                            Lorem ipsum dolor sit amet, consectetur adipisi nel
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad mini veniam, quis
                            nostrud en derum sum laborem.
                          </div>
                        </div>
                        <footer className="posts__footer card__footer">
                          <div className="post-author">
                            <figure className="post-author__avatar">
                              <img
                                src="soccer-dark/assets/images/samples/avatar-2.jpg"
                                alt="Post Author Avatar"
                              />
                            </figure>
                            <div className="post-author__info">
                              <h4 className="post-author__name">
                                Jessica Hoops
                              </h4>
                            </div>
                          </div>
                          <ul className="post__meta meta">
                            <li className="meta__item meta__item--views">
                              2369
                            </li>
                            <li className="meta__item meta__item--likes">
                              <a href="#">
                                <i className="meta-like icon-heart" /> 530
                              </a>
                            </li>
                            <li className="meta__item meta__item--comments">
                              <a href="#">18</a>
                            </li>
                          </ul>
                        </footer>
                      </div>
                    </div>
                    <div className="post-grid__item col-sm-6">
                      <div className="posts__item posts__item--card posts__item--category-1 card">
                        <figure className="posts__thumb">
                          <div className="posts__cat">
                            <span className="label posts__cat-label">
                              The Team
                            </span>
                          </div>
                          <a href="#">
                            <img src="soccer-dark/assets/images/samples/post-img5.jpg" />
                          </a>
                        </figure>
                        <div className="posts__inner card__content">
                          <a href="#" className="posts__cta" />
                          <time dateTime="2016-08-23" className="posts__date">
                            August 28th, 2018
                          </time>
                          <h6 className="posts__title">
                            <a href="#">
                              Kutumba FC team is appearing in L.A. beach for
                              chartiy
                            </a>
                          </h6>
                          <div className="posts__excerpt">
                            Lorem ipsum dolor sit amet, consectetur adipisi nel
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad mini veniam, quis
                            nostrud en derum sum laborem.
                          </div>
                        </div>
                        <footer className="posts__footer card__footer">
                          <div className="post-author">
                            <figure className="post-author__avatar">
                              <img
                                src="soccer-dark/assets/images/samples/avatar-1.jpg"
                                alt="Post Author Avatar"
                              />
                            </figure>
                            <div className="post-author__info">
                              <h4 className="post-author__name">
                                James Spiegel
                              </h4>
                            </div>
                          </div>
                          <ul className="post__meta meta">
                            <li className="meta__item meta__item--views">
                              2369
                            </li>
                            <li className="meta__item meta__item--likes">
                              <a href="#">
                                <i className="meta-like icon-heart" /> 530
                              </a>
                            </li>
                            <li className="meta__item meta__item--comments">
                              <a href="#">18</a>
                            </li>
                          </ul>
                        </footer>
                      </div>
                    </div>
                  </div>
                  {/* Post Area 1 / End
                  {/* Post Pagination
                  <nav className="post-pagination" aria-label="Blog navigation">
                    <ul className="pagination pagination--condensed pagination--lg justify-content-center">
                      <li className="page-item active">
                        <a className="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <span className="page-link">...</span>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          16
                        </a>
                      </li>
                    </ul>
                  </nav> */}
        {/* Post Pagination / End
                </div>
              </div>
              Content / End
            </div>
          </div>
        </div>
        Content / End */}
      </motion.div>
    </motion.div>
  );
}
