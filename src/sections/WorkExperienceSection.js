import React from "react";

import "sections/WorkExperienceSection.scss";

export const WorkExperienceSection = () => {
  return (
    <>
      <div id="experience-section" className="section-background section-outer">
        <HeadingH2>Work Experience</HeadingH2>
        <div className="container mx-auto">
          {pageData.map((data, idx) => (
            <Card key={idx} {...data} />
          ))}
        </div>
      </div>
    </>
  );
};

const Card = (props) => {
  const { jobTitle, company, cssClasses, paragraphs, companyUrl } = props;
  return (
    <div className="card-container my-10 lg:my-24 flex flex-col">
      <div className="flex w-full lg:w-3/5">
        <div className="flex flex-col">
          <h3 className="text-xl lg:text-2xl">
            {jobTitle} <span style={{ color: "gray" }}>@</span>{" "}
            <a href={companyUrl}>
              <span className={cssClasses}>{company}</span>
            </a>
          </h3>
          <BulletDropDowns paragraphs={paragraphs} />
        </div>
      </div>
    </div>
  );
};

const BulletDropDowns = ({ paragraphs }) => {
  if (!paragraphs || !Array.isArray(paragraphs)) {
    return null;
  }
  return (
    <>
      {paragraphs.map((data, idx) => (
        <JobBulletNonResponsive key={idx} index={idx} {...data} />
      ))}
    </>
  );
};

const JobBulletNonResponsive = ({ short, medium, long, index }) => {
  return (
    <div>
      <p className="py-2 lg:pl-4">
        <span className="font-bold">{`${short} - `} </span>
        <span className="font-small">{`${long}`}</span>{" "}
      </p>
    </div>
  );
};

const HeadingH2 = ({ children }) => {
  return <h2 className="text-center text-2xl font-bold">{children}</h2>;
};

const pageData = [
  {
    jobTitle: "Frontend Engineer",
    company: "Skupos",
    cssClasses: "company-card company-1",
    companyColor: "#19bf82",
    companyUrl: "https://skupos.com",
    paragraphs: [
      {
        short: "Mobile responsive and backwards compatible",
        medium:
          "developed for backwards compatibility browsers and email clients",
        long:
          "Created mobile responsive landing pages and marketing emails that were backwards compatible with pre IE11 browsers, outlook and gmail clients (checked via BrowserStack and Litmus)",
      },
      {
        short: "Faster, better SEO",
        medium: "Led redesign for improved SEO, accessibility, page speed",
        long:
          "Led efforts to completely redesign our website by adding in stronger SEO, accessibility, updated UI, improved page speed, built reusable sections/components and a live preview mode for our copy editor.",
      },
      {
        short: "Test and error monitoring",
        medium: "Added e2e testing, error logging, and form submission",
        long:
          "Added e2e testing, error logging, and form submission error handler to improve site reliability.",
      },
    ],
  },
  {
    jobTitle: "Frontend Engineer",
    company: "nimasensor",
    cssClasses: "company-card company-2",
    companyColor: "#ffc00e",
    companyUrl: "https://nimasensor.com",
    paragraphs: [
      {
        short: "Design API",
        medium:
          "Architected a rewards system engine that automatically updates customer",
        long:
          "Architected a rewards system engine that automatically updates customer points based on database stream functions when users perform specific actions.",
      },
      {
        short: "Ad Tech integration",
        medium:
          "Integrated marketing and analytics tools for seamless communication across",
        long:
          "Integrated marketing and analytics tools for seamless communication across different platforms like Segment.io, Google Analytics, Facebook Pixel, Iterable, Criteo, AdRoll, Talkable and others.",
      },
      {
        short: "Integrate payment/checkout",
        medium: "Added pay with Paypal and Affirm options to the checkout page",
        long:
          "Added pay with Paypal and Affirm options to the checkout page, improving customer experience.",
      },
    ],
  },
  {
    jobTitle: "Software Engineer",
    company: "Zymergen",
    cssClasses: "company-card company-3",
    companyColor: "#FFCA18",
    companyUrl: "https://zymergen.com",
    paragraphs: [
      {
        short: "Rebuilding application",
        medium: "converted a Ruby on Rails tempting codebase into AngularJS.",
        long:
          "Partnered with leadership to work on a dashboard for scientific researchers, converting a Ruby on Rails tempting codebase into AngularJS.",
      },
      {
        short: "Completed work on time",
        medium:
          "Completed the task within the time frame of the 6 month contract period.",
        long:
          "Completed the task within the time frame of the 6 month contract period.",
      },
    ],
  },
];
