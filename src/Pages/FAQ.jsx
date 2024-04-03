const FAQ = () => {
  return (
    <div>
      <div className="flex justify-center py-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-normal text-center border-b-4 rounded-lg gradient-text uppercase px-4 border-purple-700">
          Frequently Asked Questions (FAQ)
        </h1>
      </div>
      <div className="join join-vertical w-full py-2">
        <div className="collapse collapse-arrow join-item glass service_glow">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title gradient-text font-semibold">
            1. What services does ArtistryCode Studio provide?
          </div>
          <div className="collapse-content">
            <p className="gradient-text">
              ArtistryCode Studio offers a range of digital design and
              development services, including website design, graphic design,
              content writing, and mobile app development.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item glass service_glow">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title gradient-text font-semibold">
            2. How do I get started with ArtistryCode Studio?
          </div>
          <div className="collapse-content">
            <p className="gradient-text">
              Getting started with ArtistryCode Studio is easy! Simply reach out
              to us through our contact form or email, and one of our
              representatives will be in touch to discuss your project
              requirements and provide a quote.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item glass service_glow">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title gradient-text font-semibold">
            3. What is the process for website development with ArtistryCode
            Studio?
          </div>
          <div className="collapse-content">
            <p className="gradient-text">
              Our website development process typically involves initial
              consultation, design mockups, development, testing, and
              deployment. We work closely with our clients throughout each stage
              to ensure their vision is brought to life.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item glass service_glow">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title gradient-text font-semibold">
            4. Can I see examples of websites created by ArtistryCode Studio?
          </div>
          <div className="collapse-content">
            <p className="gradient-text">
              Yes, we have a portfolio showcasing some of our past projects. You
              can view our portfolio on our website or request specific examples
              relevant to your project requirements.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item glass service_glow">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title gradient-text font-semibold">
            5. Do you offer custom website design services?
          </div>
          <div className="collapse-content">
            <p className="gradient-text">
              Absolutely! We specialize in custom website design tailored to
              meet the unique needs and branding of each client. Our team will
              work closely with you to create a website that reflects your
              vision and goals.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item glass service_glow">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title gradient-text font-semibold">
            6. What is the turnaround time for website development projects?
          </div>
          <div className="collapse-content">
            <p className="gradient-text">
              The turnaround time for website development projects varies
              depending on the complexity and scope of the project. We will
              provide you with a timeline estimate during the initial
              consultation phase.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item glass service_glow">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title gradient-text font-semibold">
            7. Do I own the rights to the website created by ArtistryCode
            Studio?
          </div>
          <div className="collapse-content">
            <p className="gradient-text">
              Yes, upon completion and full payment of the project, you will own
              the rights to the website created by ArtistryCode Studio. We
              provide all necessary files and documentation for you to maintain
              and manage your website.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item glass service_glow">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title gradient-text font-semibold">
            8. What if I need updates or maintenance for my website after it's
            launched?
          </div>
          <div className="collapse-content">
            <p className="gradient-text">
              We offer ongoing support and maintenance services to ensure your
              website remains up-to-date and secure. You can contact us anytime
              for updates, changes, or technical assistance.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item glass service_glow">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title gradient-text font-semibold">
            9. How can I contact ArtistryCode Studio for support or inquiries?
          </div>
          <div className="collapse-content">
            <p className="gradient-text">
              You can reach out to us through our contact form on our website or
              send us an email at artistycodestudio@gmail.com. We're here to
              assist you with any questions or concerns you may have.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item glass service_glow">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title gradient-text font-semibold">
            10. Do you offer discounts for bundled services or repeat clients?
          </div>
          <div className="collapse-content">
            <p className="gradient-text">
              Yes, we often have special promotions and discounts available for
              bundled services or repeat clients. Feel free to inquire about our
              current offers when discussing your project with us.
            </p>
          </div>
        </div>
      </div>
      <div className="py-4">
        <p className="gradient-text">
          If you have any additional questions or need further clarification,
          don't hesitate to contact us. We're here to help!
        </p>
      </div>
    </div>
  );
};

export default FAQ;
