const Terms = () => {
  return (
    <div>
      <div className="flex justify-center py-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-normal text-center border-b-4 rounded-lg gradient-text uppercase px-4 border-purple-700">
          TERMS & CONDITIONS
        </h1>
      </div>

      <p className="text-justify gradient-text">
        Welcome to ArtistryCode Studio! These terms and conditions outline the
        rules and regulations for the use of our website and services provided
        by ArtistryCode Studio, hereafter referred to as "we", "us", or "our".
        <br />
        By accessing this website and using our services, you accept these terms
        and conditions. Do not continue to use our website or services if you do
        not agree with all the terms and conditions stated on this page.
      </p>
      <div className="join join-vertical w-full py-2">
        <div className="collapse collapse-arrow join-item glass service_glow">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title gradient-text font-semibold">1. Website Content</div>
          <div className="collapse-content">
            <p className="gradient-text">
              The content of the pages of this website is for your general
              information and use only. It is subject to change without notice.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item glass service_glow">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title gradient-text font-semibold">
            2. Use of Our Services
          </div>
          <div className="collapse-content">
            <p className="gradient-text">
              Your use of any information or materials on this website is
              entirely at your own risk, for which we shall not be liable. It
              shall be your own responsibility to ensure that any products,
              services, or information available through this website meet your
              specific requirements.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item glass service_glow">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title gradient-text font-semibold">3. Logo Placement</div>
          <div className="collapse-content">
            <p className="gradient-text">
              By engaging ArtistryCode Studio for website development services,
              you agree to include the ArtistryCode Studio logo in the footer
              section of the created website. The logo should be displayed with
              a link back to the ArtistryCode Studio website and must be clearly
              visible.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item glass service_glow">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title gradient-text font-semibold">
            4. Intellectual Property
          </div>
          <div className="collapse-content">
            <p className="gradient-text">
              All intellectual property rights in the website and material on
              the website are owned by ArtistryCode Studio unless otherwise
              stated. You must not reproduce, duplicate, copy, sell, resell, or
              exploit any portion of the website or its content without express
              written permission from us.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item glass service_glow">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title gradient-text font-semibold">
            5. Limitation of Liability
          </div>
          <div className="collapse-content">
            <p className="gradient-text">
              We shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages, including but not limited to
              loss of profits, revenue, data, or use incurred by you or any
              third party, whether in an action in contract, tort, or otherwise,
              even if we have been advised of the possibility of such damages.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item glass service_glow">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title gradient-text font-semibold">6. Governing Law</div>
          <div className="collapse-content">
            <p className="gradient-text">
              These terms and conditions are governed by and construed in
              accordance with the laws of your country, and any disputes
              relating to these terms and conditions will be subject to the
              exclusive jurisdiction of the courts of your country.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item glass service_glow">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title gradient-text font-semibold">7. Changes to Terms</div>
          <div className="collapse-content">
            <p className="gradient-text">
              We reserve the right to revise these terms and conditions at any
              time without notice. By using this website and our services, you
              are agreeing to be bound by the then-current version of these
              terms and conditions.
            </p>
          </div>
        </div>
      </div>
      <div className="py-4">
        <p className="gradient-text">
          If you have any questions or concerns about these terms and
          conditions, please contact us.
        </p>
      </div>
    </div>
  );
};

export default Terms;
