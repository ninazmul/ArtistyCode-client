import { useState } from "react";
import Swal from "sweetalert2";
import useAuth from "./Hooks/useAuth";
import useAxiosSecure from "./Hooks/useAxiosSecure";
import useJobs from "./Hooks/useJobs";

const Jobs = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [jobs, refetchJobs] = useJobs();

  const [formData, setFormData] = useState({
    name: user?.displayName || "",
    email: user?.email || "",
    phone: "",
    linkedin: "",
    github: "",
    resume: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axiosSecure.post("/jobs", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.data) {
        setFormData({
          name: "",
          email: "",
          phone: "",
          linkedin: "",
          github: "",
          resume: "",
        });
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Your job application has been submitted successfully!",
          confirmButtonColor: "#4CAF50",
        });
        refetchJobs(); // Refresh jobs after successful submission
      }
    } catch (error) {
      console.error("Error submitting job application:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong! Please try again later.",
        confirmButtonColor: "#F44336",
      });
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <div className="flex justify-center py-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-normal text-center border-b-4 rounded-lg gradient-text uppercase px-4 border-purple-700">
          Join Our Team
        </h1>
      </div>
      <div className="p-4 gradient-text text-justify">
        <p className="py-1">
          Are you a developer seeking opportunities to showcase your skills and
          collaborate on exciting projects? We're always on the lookout for
          talented individuals to join our team. If you're passionate about
          technology and eager to contribute to innovative solutions, we want to
          hear from you!
        </p>
        <p className="py-1">
          Please submit your information through the form below on our Jobs
          page. If your expertise aligns with our current needs, we'll reach out
          to you to discuss potential opportunities further.
        </p>
        <p className="font-semibold">
          Let's create together and build something amazing!
        </p>
      </div>
      <div className="flex justify-center p-4">
        {user && !jobs.find((job) => job.email === user.email) ? (
          <>
            <div className="w-full flex justify-center mb-20">
              <form
                onSubmit={handleSubmit}
                className="p-4 glass w-full md:w-3/4 rounded-lg service_glow"
              >
                {/* Input fields */}
                {/* Name */}
                <div className="mb-4">
                  <label
                    className="block gradient-text text-sm font-bold mb-2"
                    htmlFor="name"
                  >
                    Name:
                  </label>
                  <input
                    className="border border-purple-700 rounded w-full py-2 px-3 gradient-text"
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    required
                  />
                </div>
                {/* Email */}
                <div className="mb-4">
                  <label
                    className="block gradient-text text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Email Address:
                  </label>
                  <input
                    className="border border-purple-700 rounded w-full py-2 px-3 gradient-text"
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email Address"
                    required
                  />
                </div>
                {/* Phone Number */}
                <div className="mb-4">
                  <label
                    className="block gradient-text text-sm font-bold mb-2"
                    htmlFor="phone"
                  >
                    Phone Number:
                  </label>
                  <input
                    className="border border-purple-700 rounded w-full py-2 px-3 gradient-text"
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Your Phone Number"
                    required
                  />
                </div>
                {/* LinkedIn Profile */}
                <div className="mb-4">
                  <label
                    className="block gradient-text text-sm font-bold mb-2"
                    htmlFor="linkedin"
                  >
                    LinkedIn Profile:
                  </label>
                  <input
                    className="border border-purple-700 rounded w-full py-2 px-3 gradient-text"
                    id="linkedin"
                    type="url"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleInputChange}
                    placeholder="Your LinkedIn Profile Link"
                  />
                </div>
                {/* GitHub Profile */}
                <div className="mb-4">
                  <label
                    className="block gradient-text text-sm font-bold mb-2"
                    htmlFor="github"
                  >
                    GitHub Profile:
                  </label>
                  <input
                    className="border border-purple-700 rounded w-full py-2 px-3 gradient-text"
                    id="github"
                    type="url"
                    name="github"
                    value={formData.github}
                    onChange={handleInputChange}
                    placeholder="Your GitHub Profile Link"
                  />
                </div>
                {/* Resume/CV */}
                <div className="mb-4">
                  <label
                    className="block gradient-text text-sm font-bold mb-2"
                    htmlFor="resume"
                  >
                    Portfolio:
                  </label>
                  <input
                    className="border border-purple-700 rounded w-full py-2 px-3 gradient-text"
                    id="resume"
                    type="url"
                    name="resume"
                    value={formData.resume}
                    onChange={handleInputChange}
                    placeholder="Link to your Portfolio/Resume/CV"
                  />
                </div>
                {/* Submit button */}
                <div className="flex items-center justify-between">
                  <button
                    className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </>
        ) : (
          <>
            <div>
              <p className="text-3xl font-bold gradient-text text-center">
                Thank you for submitting your form!
              </p>
              <p className="gradient-text">
                We will be in touch if your skills align with our requirements
                and if we require further information.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Jobs;
