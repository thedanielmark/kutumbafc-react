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
                            src="soccer-dark/soccer-dark/soccer-dark/soccer-dark/assets/images/samples/avatar-1.jpg"
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
                            src="soccer-dark/soccer-dark/soccer-dark/soccer-dark/assets/images/samples/avatar-1.jpg"
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
        <div className="spacer py-md-5"></div>
        <div className="container">
          <div className="card-columns">
            <div className="posts__item posts__item--card posts__item--category-1 card">
              <figure className="posts__thumb">
                <div className="posts__cat">
                  <span className="label posts__cat-label">The Team</span>
                </div>
                <a href="#">
                  <img src="soccer-dark/assets/images/samples/team.jpeg" />
                </a>
              </figure>
              <div className="posts__inner card__content">
                <Link to={"/gallery"} className="posts__cta" />
                <time dateTime="2016-08-23" className="posts__date">
                  August 23rd, 2018
                </time>
                <h6 className="posts__title">
                  <a href="">Check out our lineup</a>
                </h6>
              </div>
              <footer className="posts__footer card__footer">
                <div className="post-author">
                  <div className="post-author__info">
                    <Link to={"/gallery"}>
                      <h4 className="post-author__name text-white">
                        Go to gallery
                      </h4>
                    </Link>
                  </div>
                </div>
              </footer>
            </div>
            <div className="posts__item posts__item--card posts__item--category-1 card">
              <figure className="posts__thumb">
                <div className="posts__cat">
                  <span className="label posts__cat-label">The Team</span>
                </div>
                <a href="#">
                  <img src="soccer-dark/assets/images/samples/post-img3.jpg" />
                </a>
              </figure>
              <div className="posts__inner card__content">
                <a href="#" className="posts__cta" />{" "}
                <time dateTime="2016-08-23" className="posts__date">
                  August 23rd, 2018
                </time>
                <h6 className="posts__title">
                  <a href="#">
                    The new eco friendly stadium won a Leafy Award in 2016
                  </a>
                </h6>
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
                    <h4 className="post-author__name">Jessica Hoops</h4>
                  </div>
                </div>
                <ul className="post__meta meta">
                  <li className="meta__item meta__item--views">2369</li>
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
            <div className="posts__item posts__item--card posts__item--category-1 card">
              <figure className="posts__thumb">
                <div className="posts__cat">
                  <span className="label posts__cat-label">The Team</span>
                </div>
                <a href="#">
                  <img src="soccer-dark/assets/images/samples/post-img5.jpg" />
                </a>
              </figure>
              <div className="posts__inner card__content">
                <a href="#" className="posts__cta" />{" "}
                <time dateTime="2016-08-23" className="posts__date">
                  August 23rd, 2018
                </time>
                <h6 className="posts__title">
                  <a href="#">
                    The Alchemists team is appearing in L.A. Beach for charity
                  </a>
                </h6>
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
                    <h4 className="post-author__name">James Spiegel</h4>
                  </div>
                </div>
                <ul className="post__meta meta">
                  <li className="meta__item meta__item--views">2369</li>
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
            <div className="posts__item posts__item--card posts__item--category-2 card">
              <figure className="posts__thumb">
                <div className="posts__cat">
                  <span className="label posts__cat-label">Injuries</span>
                </div>
                <a href="#">
                  <img src="soccer-dark/assets/images/samples/youtube.jpg" />
                </a>
              </figure>
              <div className="posts__inner card__content">
                <a
                  href="https://www.youtube.com/channel/UCrEK3tcWn52yhJ1w9LaEBFg"
                  className="posts__cta"
                />{" "}
                <time dateTime="2016-08-23" className="posts__date">
                  August 23rd, 2018
                </time>
                <h6 className="posts__title">
                  <a href="#">Get access to behind-the-scenes footage</a>
                </h6>
              </div>
              <footer className="posts__footer card__footer">
                <div className="post-author">
                  <div className="post-author__info">
                    <h4 className="post-author__name text-white">
                      Go to YouTube
                    </h4>
                  </div>
                </div>
                <ul className="post__meta meta">
                  <li className="meta__item meta__item--views">2369</li>
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
            <div className="posts__item posts__item--card posts__item--quote card">
              <div className="card__content">
                <blockquote className="blockquote blockquote--card">
                  <p className="blockquote__content">
                    The most{" "}
                    <span className="blockquote-stress">important</span> thing
                    about soccer is{" "}
                    <span className="blockquote-stress">the passion</span> you
                    feel
                  </p>
                  <footer className="blockquote__footer">
                    <cite className="blockquote__cite">
                      <span className="blockquote__author-name">
                        Johann Ratnaiya
                      </span>{" "}
                      <span className="blockquote__author-info">
                        KuTumba FC Coach
                      </span>
                    </cite>
                  </footer>
                </blockquote>
              </div>
            </div>
            <div className="posts__item posts__item--card posts__item--category-1 card">
              <div className="posts__inner card__content">
                <div className="posts__cat posts__cat--flow">
                  <span className="label posts__cat-label">The Team</span>
                </div>
                <h6 className="posts__title">
                  <a href="#">
                    The team will attend a charity event in Malibu this Saturday
                  </a>
                </h6>
                <time dateTime="2016-08-23" className="posts__date">
                  August 23rd, 2018
                </time>
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
                    <h4 className="post-author__name">James Spiegel</h4>
                  </div>
                </div>
                <ul className="post__meta meta">
                  <li className="meta__item meta__item--views">2369</li>
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
            <div className="posts__item posts__item--card posts__item--category-1 card">
              <figure className="posts__thumb">
                <div className="posts__cat">
                  <span className="label posts__cat-label">The Team</span>
                </div>
                <a href="#">
                  <img src="soccer-dark/assets/images/samples/sponsors.jpg" />
                </a>
              </figure>
              <div className="posts__inner card__content">
                <a href="#" className="posts__cta" />{" "}
                <time dateTime="2016-08-23" className="posts__date">
                  August 23rd, 2018
                </time>
                <h6 className="posts__title">
                  <a href="#">Learn more about our sponsors</a>
                </h6>
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
                    <h4 className="post-author__name">Jessica Hoops</h4>
                  </div>
                </div>
                <ul className="post__meta meta">
                  <li className="meta__item meta__item--views">2369</li>
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
            <a
              href="https://facebook.com/kutumbafc"
              className="btn-social-counter btn-social-counter--card btn-social-counter--fb card"
              target="top"
            >
              <div className="btn-social-counter__logo">
                <img
                  src="soccer-dark/assets/images/social-logo-facebook.png"
                  alt="Facebook"
                />
              </div>
              <footer className="btn-social-counter__footer">
                <h6 className="btn-social-counter__title">
                  Like Our Facebook Page
                </h6>
                <span className="btn-social-counter__count">83600 Likes</span>
                <span className="btn-social-counter__add-icon" />
              </footer>
            </a>
            <div className="posts__item posts__item--card posts__item--category-1 card">
              <figure className="posts__thumb">
                <div className="posts__cat">
                  <span className="label posts__cat-label">The Team</span>
                </div>
                <a href="#">
                  <img src="soccer-dark/assets/images/samples/careers.jpg" />
                </a>
              </figure>
              <div className="posts__inner card__content">
                <a href="#" className="posts__cta" />{" "}
                <time dateTime="2016-08-23" className="posts__date">
                  August 23rd, 2018
                </time>
                <h6 className="posts__title">
                  <a href="#">Apply for a career at KuTumba FC</a>
                </h6>
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
                    <h4 className="post-author__name">Jessica Hoops</h4>
                  </div>
                </div>
                <ul className="post__meta meta">
                  <li className="meta__item meta__item--views">2369</li>
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
            <a
              href="https://twitter.com/kutumbafc"
              className="btn-social-counter btn-social-counter--card btn-social-counter--twitter card"
              target="top"
            >
              <div className="btn-social-counter__logo">
                <img
                  src="soccer-dark/assets/images/social-logo-twitter.png"
                  alt="Twitter"
                />
              </div>
              <footer className="btn-social-counter__footer">
                <h6 className="btn-social-counter__title">
                  Follow Us on Twitter
                </h6>
                <span className="btn-social-counter__count">580 Followers</span>{" "}
                <span className="btn-social-counter__add-icon" />
              </footer>
            </a>
            <div className="posts__item posts__item--card posts__item--category-1 card">
              <figure className="posts__thumb">
                <div className="posts__cat">
                  <span className="label posts__cat-label">The Team</span>
                </div>
                <a href="#">
                  <img src="soccer-dark/assets/images/samples/blog.jpg" />
                </a>
              </figure>
              <div className="posts__inner card__content">
                <a href="#" className="posts__cta" />{" "}
                <time dateTime="2016-08-23" className="posts__date">
                  August 23rd, 2018
                </time>
                <h6 className="posts__title">
                  <a href="#">Read our blog to stay updated</a>
                </h6>
              </div>
              <footer className="posts__footer card__footer">
                <div className="post-author">
                  <div className="post-author__info">
                    <a href="https://kutumbafc.medium.com">
                      <h4 className="post-author__name text-white">
                        Go to blog
                      </h4>
                    </a>
                  </div>
                </div>
                <ul className="post__meta meta">
                  <li className="meta__item meta__item--views">2369</li>
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
            <div className="posts__item posts__item--card posts__item--category-2 card">
              <div className="posts__inner card__content">
                <div className="posts__cat posts__cat--flow">
                  <span className="label posts__cat-label">Injuries</span>
                </div>
                <h6 className="posts__title">
                  <a href="#">
                    Thomas Durry has a hand injury and will come back in
                    September
                  </a>
                </h6>
                <time dateTime="2016-08-23" className="posts__date">
                  August 23rd, 2018
                </time>
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
                    <h4 className="post-author__name">James Spiegel</h4>
                  </div>
                </div>
                <ul className="post__meta meta">
                  <li className="meta__item meta__item--views">2369</li>
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
            <a
              href="https://instagram.com/kutumbafc"
              className="btn-social-counter btn-social-counter--card btn-social-counter--instagram card"
              target="top"
            >
              <div className="btn-social-counter__logo">
                <img
                  src="soccer-dark/assets/images/social-logo-instagram.png"
                  alt="Google+"
                />
              </div>
              <footer className="btn-social-counter__footer">
                <h6 className="btn-social-counter__title">
                  Follow us on Instagram
                </h6>
                <span className="btn-social-counter__count">
                  10250 Followers
                </span>
                <span className="btn-social-counter__add-icon" />
              </footer>
            </a>
            {/* <div className="posts__item posts__item--card posts__item--category-1 card">
              <a
                className="twitter-timeline"
                href="https://twitter.com/TWITTER-ACCOUNT-ID"
                data-tweet-limit="NUMBER OF TWEETS"
                data-width="399"
              ></a>
              <script
                async
                src="http://platform.twitter.com/widgets.js"
                charset="utf-8"
              ></script>
            </div> */}
            <div className="posts__item posts__item--card posts__item--category-2 card">
              <div className="posts__inner card__content">
                <div className="posts__cat posts__cat--flow">
                  <span className="label posts__cat-label">Injuries</span>
                </div>
                <h6 className="posts__title">
                  <a href="#">
                    Jessica Valentine has a sprained ankle and won't be in the
                    Final
                  </a>
                </h6>
                <time dateTime="2016-08-23" className="posts__date">
                  August 23rd, 2018
                </time>
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
                    <h4 className="post-author__name">James Spiegel</h4>
                  </div>
                </div>
                <ul className="post__meta meta">
                  <li className="meta__item meta__item--views">2369</li>
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
          {/* Card columns end */}
        </div>
        {/* Container end */}
        <div className="spacer py-md-5"></div>
      </motion.div>
    </motion.div>
  );
}
