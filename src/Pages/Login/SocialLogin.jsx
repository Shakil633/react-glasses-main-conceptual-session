import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const SocialLogin = () => {
  const { googleLogin, gitHubLogin } = useContext(AuthContext);

  const handleGoogleLogin = (media) => {
    media()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const handleGitHub = (media) => {
    media()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <>
      <div className="divider">continue with</div>
      <div className=" flex justify-between">
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
