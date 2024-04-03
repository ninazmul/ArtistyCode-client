import useAuth from "../../Pages/Hooks/useAuth";
import useJobs from "../../Pages/Hooks/useJobs";
import { Link } from "react-router-dom";
import { FaTrashCan } from "react-icons/fa6";
import { RxExternalLink } from "react-icons/rx";
import useAxiosSecure from "../../Pages/Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const UserHome = () => {
  const [jobs, refetch] = useJobs();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const userJobs = jobs.filter((job) => job.email === user?.email);

  const handleOnDelete = async (jobId) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/jobs/${jobId}`);
        if (res.data.deletedCount > 0) {
          await refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your item has been deleted.",
            icon: "success",
          });
        } else {
          throw new Error("Failed to delete item");
        }
      }
    } catch (error) {
      console.error("Error deleting item:", error);
      Swal.fire({
        title: "Error",
        text: "An error occurred while deleting the item.",
        icon: "error",
      });
    }
  };

  return (
    <div>
      <h1 className="text-center text-4xl pt-4 text-purple-700 gradient-text font-extrabold uppercase">
        Welcome to <span className="text-white">User</span> Home
      </h1>
      <div>
        {user && userJobs.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th className="gradient-text text-lg">Name</th>
                  <th className="gradient-text text-lg">Email</th>
                  <th className="gradient-text text-lg">Phone</th>
                  <th className="gradient-text text-lg">Portfolio</th>
                  <th className="gradient-text text-lg">LinkedIn</th>
                  <th className="gradient-text text-lg">GitHub</th>
                  <th className="gradient-text text-lg">Remove</th>
                </tr>
              </thead>
              <tbody>
                {userJobs.map((job, index) => (
                  <tr key={job._id}>
                    <th className="gradient-text text-lg">{index + 1}</th>
                    <td className="gradient-text font-semibold">{job.name}</td>
                    <td className="gradient-text">{job.email}</td>
                    <td className="gradient-text">{job.phone}</td>
                    <td className="gradient-text">
                      <Link
                        to={job.resume}
                        target="_blank"
                        className="btn btn-outline btn-sm text-purple-700 w-32"
                      >
                        Portfolio
                        <RxExternalLink />
                      </Link>
                    </td>
                    <td>
                      <Link
                        to={job.linkedin}
                        target="_blank"
                        className="btn btn-outline btn-sm text-purple-700 w-32"
                      >
                        LinkedIn
                        <RxExternalLink />
                      </Link>
                    </td>
                    <td>
                      <Link
                        to={job.github}
                        target="_blank"
                        className="btn btn-outline btn-sm text-purple-700 w-32"
                      >
                        GitHub
                        <RxExternalLink />
                      </Link>
                    </td>
                    <td>
                      <button onClick={() => handleOnDelete(job._id)}>
                        <FaTrashCan className="text-red-700"></FaTrashCan>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p>No dev data found</p>
        )}
      </div>
    </div>
  );
};

export default UserHome;
