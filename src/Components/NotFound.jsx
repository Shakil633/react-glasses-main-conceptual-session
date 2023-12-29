import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className='text-center'>
        <img className="w-full h-screen" src="https://webartdevelopers.com/blog/wp-content/uploads/2021/05/404-error-page-svg-animation.gif" alt="" />

       <Link to={'/'}><button className=" btn text-white absolute top-3/4 btn-outline border-b border-orange-400">Go Home</button></Link>
        </div>
    );
};

export default NotFound;