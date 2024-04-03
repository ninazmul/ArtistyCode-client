import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useJobs = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: jobs = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["job"],
    queryFn: async () => {
      const res = await axiosPublic.get("/jobs");
      return res.data;
    },
  });

  return [jobs, refetch, loading];
};

export default useJobs;
