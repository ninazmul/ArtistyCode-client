import { useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../Pages/Hooks/useAxiosSecure";
import useAuth from "../Pages/Hooks/useAuth";

const Jobs = () => {
  const initialState = {
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    resume: "",
  };

  const { user } = useAuth(); // Get user data using the useAuth hook
  const [formData, setFormData] = useState({
    ...initialState,
    email: user.email, // Set the email field to the user's email
  });
  const [error, setError] = useState("");
  const axiosSecure = useAxiosSecure(); // Initialize the hook to get the axios instance

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");

      const response = await axiosSecure.post("/jobs", formData);

      if (response.data) {
        Swal.fire({
          icon: "success",
          title: "Job application submitted successfully!",
          showConfirmButton: false,
          timer: 1500,
        });

        // Reset the form to its initial state
        e.target.reset();
        setFormData(initialState);
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to submit job application!",
        });
      }
    } catch (error) {
      console.error("Error submitting job application:", error);
      setError(
        "An error occurred while submitting the job application. Please try again."
      );
    }
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-2xl md:text-4xl font-bold text-center">
            Join Our Team at{" "}
            <span className="text-purple-700 gradient-text">Your Company</span>!
          </h1>
          <p className="py-6">
            Fill in the details below to submit your job application to{" "}
            <span className="text-purple-700 gradient-text">Your Company</span>.
          </p>
        </div>
        <div className="card md:w-96 flex-shrink-0 shadow-2xl border-2 p-1 border-purple-700 card_glow text-white">
          <form className="card-body" onSubmit={handleSubmit}>
            {/* Name input */}
            <div className="form-control">
              <label className="label">
                <span>Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                className="input input-bordered glass border-purple-700 border-2 input_glow"
                onChange={handleChange}
                value={formData.name}
                required
              />
            </div>
            {/* Email input */}
            <div className="form-control">
              <label className="label">
                <span>Email Address</span>
              </label>
              <input
                type="email"
                placeholder="Your Email Address"
                name="email"
                className="input input-bordered glass border-purple-700 border-2 input_glow"
                onChange={handleChange}
                value={formData.email}
                readOnly // Make email field read-only as it's set from user data
              />
            </div>
            {/* Phone input */}
            <div className="form-control">
              <label className="label">
                <span>Phone Number</span>
              </label>
              <input
                type="tel"
                placeholder="Your Phone Number"
                name="phone"
                className="input input-bordered glass border-purple-700 border-2 input_glow"
                onChange={handleChange}
                value={formData.phone}
                required
              />
            </div>
            {/* LinkedIn input */}
            <div className="form-control">
              <label className="label">
                <span>LinkedIn Profile (Optional)</span>
              </label>
              <input
                type="url"
                placeholder="Your LinkedIn Profile Link"
                name="linkedin"
                className="input input-bordered glass border-purple-700 border-2 input_glow"
                onChange={handleChange}
                value={formData.linkedin}
              />
            </div>
            {/* GitHub input */}
            <div className="form-control">
              <label className="label">
                <span>GitHub Profile (Optional)</span>
              </label>
              <input
                type="url"
                placeholder="Your GitHub Profile Link"
                name="github"
                className="input input-bordered glass border-purple-700 border-2 input_glow"
                onChange={handleChange}
                value={formData.github}
              />
            </div>
            {/* Resume input */}
            <div className="form-control">
              <label className="label">
                <span>Portfolio/Resume/CV (Optional)</span>
              </label>
              <input
                type="url"
                placeholder="Link to your Portfolio/Resume/CV"
                name="resume"
                className="input input-bordered glass border-purple-700 border-2 input_glow"
                onChange={handleChange}
                value={formData.resume}
              />
            </div>
            {error && <div className="text-red-500 mt-2">{error}</div>}
            <div className="form-control mt-6">
              <button
                className="neno-button font-bold shadow-xl hover:shadow-purple-800/50 border-2 hover:bg-purple-700 border-purple-700 rounded-lg py-4 px-8 uppercase relative overflow-hidden text-center"
                type="submit"
              >
                Submit Job Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
