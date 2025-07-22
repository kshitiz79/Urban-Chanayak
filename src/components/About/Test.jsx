import React from "react";
import Head from "next/head"; // Use next/head instead of react-helmet
import "../About/testCss.css";

const Test = () => {
  return (
    <>
      <Head>
        <script
          src="https://use.typekit.net/wsz6tqr.js"
          type="text/javascript"
        ></script>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-KK5E34RPF7"
        ></script>
        <style>{`
          html.lenis { height: auto; }
          .lenis.lenis-smooth { scroll-behavior: auto; }
          .lenis.lenis-smooth [data-lenis-prevent] { overscroll-behavior: contain; }
          .lenis.lenis-stopped { overflow: hidden; }
          ::-webkit-scrollbar { display: none; }
          html { scrollbar-width: none; }
          body { -ms-overflow-style: none; }
        `}</style>
      </Head>

      <div className="main">
        <div
          data-w-id="6fc562a8-1463-624d-8501-4981ef41167e"
          className="about-hero-trigger"
        ></div>
        <section className="section is-team">
          <div
            data-w-id="3fa72671-3909-816b-aba5-d93388bd15d8"
            className="section-padding is-meet"
          >
            <div className="container is-center">
              <h2 className="display-h font">Our Success Stories</h2>
            </div>
          </div>

          <div className="team-wrap w-dyn-list">
            <div role="list" className="team-list w-dyn-items">
              {[
                "/png.png",
                "/png4.png",
                "/png3.png",
                "/png5.png",
                "/png1.png",
                "/png6.png",
              ].map((src, index) => (
                <div
                  key={index}
                  data-w-id={`925ac21b-de09-60ea-4acb-fbfe0f2daa23-${index}`}
                  role="listitem"
                  className="team-item w-dyn-item"
                >
                  <div className="panel">
                    <div className="panel-content-wrap is-team">
                      <div className="panel-content is-team">
                        <div className="headshot-frame">
                          <img
                            src={src}
                            loading="lazy"
                            alt="Team Member"
                            sizes="100vw"
                            className={`w ${index === 0 ? "z-1" : ""}`}
                            onError={(e) => console.error(`Failed to load image: ${src}`)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div
          data-w-id="a44517a5-55c4-1eee-f815-5c7e6ce07319"
          className="about-drop-trigger"
        ></div>
        <section className="section is-bg-color-white">
          <div className="section-padding">
            <div className="container is-about-sticky">
              <div className="we-are-h-div">
                <h2 className="display-h">
                  <img
                    src="/ghoda.png"
                    alt="Core Competency"
                    onError={(e) => console.error("Failed to load ghoda.png")}
                  />
                </h2>
              </div>
            </div>
            <div className="container is-we-are-2nd">
              <div className="d50 is-pad-only"></div>
              <div className="d50 is-max-40">
                <div className="pad-top">
                  <p className="h-large is-indent">
                    Our Core Competencies Concept to Campaign. First Thought to
                    Final Impact
                  </p>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="we-wrap w-dyn-list">
                <div role="list" className="we-list w-dyn-items">
                  {[
                    "Impact Creation – We Make the Trend, Others Follow",
                    "Innovation – Using Intelligence to Create the Impact",
                    "Crisis Management – Clarity in Chaos, Creativity in Crisis",
                    "Public Relations – Shaping Perception, Building Trust",
                    "Strategic Messaging – Making Every Word Count",
                  ].map((text, index) => (
                    <div
                      key={index}
                      data-w-id={`6041c1fe-6446-95c9-1e1d-4f89fc9fda0e-${index}`}
                      role="listitem"
                      className="we-item w-dyn-item"
                      style={{
                        WebkitTransform:
                          "translate3d(0, 6rem, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        MozTransform:
                          "translate3d(0, 6rem, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        msTransform:
                          "translate3d(0, 6rem, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        transform:
                          "translate3d(0, 6rem, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        opacity: 0,
                      }}
                    >
                      <a
                        data-w-id={`8c82ef21-69c0-299f-7efd-0474779d087d-${index}`}
                        href="#"
                        className="we-link w-inline-block"
                      >
                        <div
                          className={`we-h-div ${
                            index === 4 ? "text-black bg-orange-600" : "clr"
                          }`}
                          style={{
                            WebkitTransform:
                              "translate3d(0, 0, 0) scale3d(1.6, 1.6, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                            MozTransform:
                              "translate3d(0, 0, 0) scale3d(1.6, 1.6, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                            msTransform:
                              "translate3d(0, 0, 0) scale3d(1.6, 1.6, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                            transform:
                              "translate3d(0, 0, 0) scale3d(1.6, 1.6, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                            opacity: 0,
                          }}
                        >
                          <div>{text}</div>
                        </div>
                        <div
                          className="we-def-div"
                          style={{
                            width: "100%",
                            height: "auto",
                            WebkitTransform:
                              "translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                            MozTransform:
                              "translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                            msTransform:
                              "translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                            transform:
                              "translate3d(0, 3rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                            opacity: 0,
                          }}
                        >
                          {/* Optional content for we-def-div */}
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <script
        src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=67b733e6a8c26a5738064832"
        type="text/javascript"
        integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://cdn.prod.website-files.com/67b733e6a8c26a5738064832/js/allies25.schunk.36b8fb49256177c8.js"
        type="text/javascript"
      ></script>
      <script
        src="https://cdn.prod.website-files.com/67b733e6a8c26a5738064832/js/allies25.schunk.5406365c422a6c1f.js"
        type="text/javascript"
      ></script>
      <script
        src="https://cdn.prod.website-files.com/67b733e6a8c26a5738064832/js/allies25.99674f39.b06921ab3bdbcaca.js"
        type="text/javascript"
      ></script>
      <script src="https://cdn.jsdelivr.net/gh/studio-freight/lenis@1/bundled/lenis.min.js"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener("DOMContentLoaded", function () {
              function playAnimation() {
                if (performance.navigation.type === 1 || !document.referrer.includes(window.location.hostname)) {
                  window.Webflow && window.Webflow.require("ix2").init();
                  document.querySelector('[data-initial-load]')?.click();
                } else {
                  document.querySelector('[data-default-load]')?.click();
                }
              }
              playAnimation();
              let lastBreakpoint = getBreakpoint();
              window.addEventListener("resize", function () {
                let currentBreakpoint = getBreakpoint();
                if (lastBreakpoint !== currentBreakpoint) {
                  window.Webflow && window.Webflow.require("ix2").init();
                  document.querySelector('[data-default-load]')?.click();
                }
                lastBreakpoint = currentBreakpoint;
              });
              function getBreakpoint() {
                let width = window.innerWidth;
                if (width < 768) return "mobile";
                if (width < 992) return "tablet";
                return "desktop";
              }
            });

            $('.brand-link,.footer-brand-link,.navlink,.button,.cta-link-card,.slider-img-link,.work-link,.footer-navlink,.credit-link').click(function (e) {
              e.preventDefault();
              var goTo = this.getAttribute("href");
              setTimeout(function () {
                window.location = goTo;
              }, 335);
            });

            if (Webflow.env("editor") === undefined) {
              const lenis = new Lenis({
                lerp: 0.1,
                wheelMultiplier: 0.7,
                infinite: false,
                gestureOrientation: "vertical",
                normalizeWheel: false,
                smoothTouch: false
              });
              function raf(time) {
                lenis.raf(time);
                requestAnimationFrame(raf);
              }
              requestAnimationFrame(raf);
              $("[data-lenis-start]").on("click", function () {
                lenis.start();
              });
              $("[data-lenis-stop]").on("click", function () {
                lenis.stop();
              });
              $("[data-lenis-toggle]").on("click", function () {
                $(this).toggleClass("stop-scroll");
                if ($(this).hasClass("stop-scroll")) {
                  lenis.stop();
                } else {
                  lenis.start();
                }
              });
              function connectToScrollTrigger() {
                lenis.on("scroll", ScrollTrigger.update);
                gsap.ticker.add((time) => {
                  lenis.raf(time * 1000);
                });
              }
            }

            document.addEventListener("DOMContentLoaded", () => {
              const currentYear = new Date().getFullYear();
              const currentYearElements = document.querySelectorAll('[data-current-year]');
              currentYearElements.forEach(currentYearElement => {
                currentYearElement.textContent = currentYear;
              });
            });
          `,
        }}
      />
    </>
  );
};

export default Test;