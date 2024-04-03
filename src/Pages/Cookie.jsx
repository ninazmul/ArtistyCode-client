const Cookie = () => {
  return (
    <div>
      <div className="flex justify-center py-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-normal text-center border-b-4 rounded-lg gradient-text uppercase px-4 border-purple-700">
          Cookie Policy
        </h1>
      </div>

      <p className="text-justify gradient-text">
        At ArtistryCode Studio, we use cookies to enhance your browsing
        experience and provide personalized content. This Cookie Policy explains
        what cookies are, how we use them, and your choices regarding their use.
      </p>
      <div className="join join-vertical w-full py-2">
        <div className="collapse collapse-arrow join-item glass service_glow">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title gradient-text font-semibold">
            1. What are Cookies:
          </div>
          <div className="collapse-content">
            <p className="gradient-text">
              Cookies are small text files that are stored on your device
              (computer, smartphone, tablet) when you visit a website. They
              contain information about your browsing activity and preferences.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item glass service_glow">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title gradient-text font-semibold">
            2. How We Use Cookies:
          </div>
          <div className="collapse-content">
            <h2 className="gradient-text font-semibold">Essential Cookies:</h2>
            <p className="gradient-text">
              These cookies are necessary for the proper functioning of our
              website. They enable basic functions like page navigation and
              access to secure areas of the website. You cannot opt-out of
              essential cookies.
            </p>
            <h2 className="gradient-text font-semibold">
              Analytical/Performance Cookies:
            </h2>
            <p className="gradient-text">
              We use these cookies to collect information about how visitors use
              our website, such as which pages are visited most frequently and
              if any errors occur. This helps us improve the performance and
              usability of our website.
            </p>
            <h2 className="gradient-text font-semibold">
              Functionality Cookies:
            </h2>
            <p className="gradient-text">
              These cookies allow our website to remember choices you make (such
              as language or region preferences) and provide enhanced features.
              They may also be used to provide you with personalized content.
            </p>
            <h2 className="gradient-text font-semibold">
              Advertising/Targeting Cookies:
            </h2>
            <p className="gradient-text">
              We may use these cookies to deliver targeted advertisements to you
              based on your interests and browsing history. These cookies may
              track your browsing activity across different websites.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item glass service_glow">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title gradient-text font-semibold">
            3. Your Choices:
          </div>
          <div className="collapse-content">
            <p className="gradient-text">
              You have the option to accept or decline cookies through your
              browser settings. Most web browsers automatically accept cookies,
              but you can usually modify your browser settings to decline
              cookies if you prefer. Please note that disabling cookies may
              affect the functionality of our website.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item glass service_glow">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title gradient-text font-semibold">
            4. Third-Party Cookies:
          </div>
          <div className="collapse-content">
            <p className="gradient-text">
              Some cookies may be placed on your device by third-party service
              providers that we use to analyze website traffic, provide
              advertising services, or enhance website functionality. These
              third-party cookies are subject to the respective privacy policies
              of the providers.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item glass service_glow">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title gradient-text font-semibold">
            5. Updates to Cookie Policy:
          </div>
          <div className="collapse-content">
            <p className="gradient-text">
              We reserve the right to update or modify this Cookie Policy at any
              time without prior notice. Any changes will be effective
              immediately upon posting on our website.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item glass service_glow">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title gradient-text font-semibold">
            6. Contact Us:
          </div>
          <div className="collapse-content">
            <p className="gradient-text">
              If you have any questions or concerns about our Cookie Policy or
              the use of cookies on our website, please contact us.
            </p>
          </div>
        </div>
      </div>
      <div className="py-4">
        <p className="gradient-text">
          Thank you for taking the time to review our Cookie Policy. By
          continuing to use our website, you consent to the use of cookies as
          described herein.
        </p>
      </div>
    </div>
  );
};

export default Cookie;
