import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SocialLogin = () => {
  const { googleLogin, gitHubLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleLogin = (media) => {
    media()
      .then(() => {
        toast.success("User created successfully");
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const handleGitHub = (media) => {
    media()
      .then(() => {
        toast.success("User created successfully");
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <>
      <div className="divider">continue with</div>
      <div className=" flex justify-between gap-5">
        <button
          onClick={() => handleGoogleLogin(googleLogin)}
          className="btn btn-neutral btn-sm "
        >
          Google login
        </button>

        <button
          onClick={() => handleGitHub(gitHubLogin)}
          className="btn btn-neutral btn-sm "
        >
          Github login
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
