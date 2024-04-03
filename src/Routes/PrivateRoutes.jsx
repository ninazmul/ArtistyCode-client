import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";
import { ThreeCircles } from "react-loader-spinner";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center item-center my-52">
        <ThreeCircles
          visible={true}
          height="100"
          width="100"
          color="#8e00fb"
          ariaLabel="three-circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }
  if (user) {
    return children;
  }

  return <Navigate to="/signIn" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoutes;
