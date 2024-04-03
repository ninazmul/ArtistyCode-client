const Privacy = () => {
  return (
    <div>
      <div className="flex justify-center py-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-normal text-center border-b-4 rounded-lg gradient-text uppercase px-4 border-purple-700">
          Privacy Policy
        </h1>
      </div>

      <p className="text-justify gradient-text">
        At ArtistryCode Studio, we are committed to protecting your privacy and
        ensuring the security of your personal information. This Privacy Policy
        outlines how we collect, use, and safeguard your data when you visit our
        website or engage with our services.
      </p>
      <div className="join join-vertical w-full py-2">
        <div className="collapse collapse-arrow join-item glass service_glow">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title gradient-text font-semibold">
            1. Information We Collect:
          </div>
          <div className="collapse-content">
            <h2 className="gradient-text font-semibold">
              Personal Information:
            </h2>
            <p className="gradient-text">
              When you engage with our services, we may collect personal
              information such as your name, email address, phone number, and
              other contact details.
            </p>
            <h2 className="gradient-text font-semibold">Website Usage Data:</h2>
            <p className="gradient-text">
              We may also collect non-personal information about your
              interactions with our website, including IP address, browser type,
              and pages visited.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item glass service_glow">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title gradient-text font-semibold">
            2. How We Use Your Information:
          </div>
          <div className="collapse-content">
            <p className="gradient-text">
              We use the information collected to provide and improve our
              services, communicate with you, and personalize your experience.{" "}
              <br />
              Your personal information may also be used for administrative
              purposes, such as billing and account management.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item glass service_glow">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title gradient-text font-semibold">
            3. Data Security:
          </div>
          <div className="collapse-content">
            <p className="gradient-text">
              We employ industry-standard security measures to protect your
              personal information from unauthorized access, disclosure,
              alteration, or destruction. <br></br>
              However, please be aware that no method of transmission over the
              internet or electronic storage is 100% secure, and we cannot
              guarantee absolute security.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item glass service_glow">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title gradient-text font-semibold">
            4. Sharing of Information:
          </div>
          <div className="collapse-content">
            <p className="gradient-text">
              We do not sell, trade, or otherwise transfer your personal
              information to third parties without your consent, except as
              required by law or as necessary to fulfill our contractual
              obligations. <br></br>
              Your information may be shared with trusted third-party service
              providers who assist us in operating our website, conducting our
              business, or servicing you.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item glass service_glow">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title gradient-text font-semibold">
            5. Cookies:
          </div>
          <div className="collapse-content">
            <p className="gradient-text">
              Our website may use cookies to enhance your browsing experience
              and provide personalized content. You have the option to accept or
              decline cookies through your browser settings.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item glass service_glow">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title gradient-text font-semibold">
            6. Links to Third-Party Websites:
          </div>
          <div className="collapse-content">
            <p className="gradient-text">
              Our website may contain links to third-party websites for your
              convenience. Please note that we do not endorse or have control
              over these websites, and this Privacy Policy does not apply to
              them.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item glass service_glow">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title gradient-text font-semibold">
            7. Your Rights:
          </div>
          <div className="collapse-content">
            <p className="gradient-text">
              You have the right to access, update, or delete your personal
              information held by us. You may also opt-out of receiving
              marketing communications from us at any time. <br></br>
              If you have any questions or concerns about our Privacy Policy or
              the handling of your data, please contact us using the information
              provided below.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item glass service_glow">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title gradient-text font-semibold">
            8. Changes to Privacy Policy:
          </div>
          <div className="collapse-content">
            <p className="gradient-text">
              We reserve the right to update or modify this Privacy Policy at
              any time without prior notice. Any changes will be effective
              immediately upon posting on our website.
            </p>
          </div>
        </div>
      </div>
      <div className="py-4">
        <p className="gradient-text">
          If you have any questions or concerns about our Privacy Policy or the
          handling of your data, please contact us.
        </p>
      </div>
    </div>
  );
};

export default Privacy;
