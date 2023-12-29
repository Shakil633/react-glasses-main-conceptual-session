import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const { authEmailPassword, updateUserprofile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    //get field values
    const name = e.target.name.value;
    const email = e.target.email.value;
    const img = e.target.image.value;
    const password = e.target.password.value;
    console.log(name, img);

    //validation
    if (password.length < 6) {
      toast.error("Password must be al least 6 characters");
      return;
    }

    //creating a new user
    authEmailPassword(email, password)
      .then(() => {
        updateUserprofile(name, img).then(() => {
          toast.success("User created successfully");
          navigate("/");
        });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col py-10">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Full name"
                  name="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image Url</span>
                </label>
                <input
                  type="text"
                  placeholder="image url"
                  name="image"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6 p-0">
                <button className="btn btn-neutral" type="submit">
                  Register
                </button>
              </div>
              <label className="label">
                Have an account?{" "}
                <Link to="/login" className="label-text-alt link link-hover">
                  Please Login
                </Link>
              </label>
              <SocialLogin />
            </form>
          </div>
        </div>
        <ToastContainer position="top-center" />
      </div>
    </>
  );
};

export default Register;
