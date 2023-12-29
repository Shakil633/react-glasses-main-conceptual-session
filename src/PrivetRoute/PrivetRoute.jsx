import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  console.log(loading);

  //we'hv to wait here
  if (loading) {
    return <h1 className=" text-5xl"> Loading</h1>;
  }

  //
  if (!user?.email) {
    return <Navigate to={"/login"}></Navigate>;
  }

  return children;
};

export default PrivetRoute;
