import React from "react";

function Content() {
  return (
    <section className="theme-default font-theme-text py-32 pb-10 px-5 bg-tertiary-color text-tertiary-color swiper-backface-hidden">
      <div className="max-w-4xl mx-auto px-4 lg:px-5 ">
        <div>
          <div className="ww-content-5">
            <h1>
              <strong>A Legacy of Craftsmanship and Quality</strong>
            </h1>
            <p>
              At <span className="font-bold text-marked">Päk Ussa</span>, we
              combine years of hands-on expertise with a deep commitment to
              precision, delivering exceptional welding and metalwork services.
              Founded with a passion for creating durable and aesthetically
              pleasing iron structures, we have earned a reputation for
              craftsmanship that meets the highest industry standards.
            </p>
            <p className="mb-8">
              Our journey began with a simple goal: to bring high-quality,
              custom metal products to residential and commercial clients across
              the region. Today, we are proud to offer a wide range of
              metalworking services, from traditional designs like the tapchan
              to modern iron gates, wrought iron carports, and custom dining
              sets. Whether you're looking for functional pieces, decorative
              elements, or a blend of both, our skilled team has the experience
              and vision to make your project a reality.
            </p>
            <h1 className="mb-5">
              <strong>Why Choose Päk Ussa?</strong>
            </h1>

            <ul className="flex list-disc flex-col gap-5">
              <li>
                <p>
                  <span className="font-bold">Expert Craftsmanship:</span> Our
                  team is comprised of highly skilled welders and metalworkers
                  who bring attention to detail and artistry to every project.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-bold">Custom Solutions: </span> No two
                  projects are the same. We work closely with you to ensure your
                  vision is realized, tailoring designs and materials to meet
                  your exact needs.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-bold">Durability & Quality: </span>
                  Every piece we create is built to last, combining strength
                  with beauty. From outdoor structures to interior furniture,
                  you can trust in the longevity and quality of our work.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-bold">Client Satisfaction: </span>
                  Your satisfaction is our priority. We believe in transparent
                  communication, timely service, and delivering results that
                  exceed expectations.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-bold">Safety First: </span>
                  We follow strict safety protocols to ensure that every project
                  is not only built to last but also safe for its intended use.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Content;
